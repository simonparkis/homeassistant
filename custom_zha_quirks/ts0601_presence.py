import math
from typing import Dict, Optional, Tuple, Union
from zigpy.profiles import zha
from zigpy.quirks import CustomDevice
import zigpy.types as t
from zigpy.zcl import foundation
from zigpy.zcl.clusters.general import (
    AnalogInput,
    AnalogOutput,
    Basic,
    GreenPowerProxy,
    Groups,
    Identify,
    Ota,
    Scenes,
    Time,
)
from zigpy.zcl.clusters.measurement import (
    IlluminanceMeasurement,
    OccupancySensing
)
from zigpy.zcl.clusters.security import IasZone

from zhaquirks import Bus, LocalDataCluster, MotionOnEvent
from zhaquirks.const import (
    DEVICE_TYPE,
    ENDPOINTS,
    INPUT_CLUSTERS,
    MODELS_INFO,
    MOTION_EVENT,
    OUTPUT_CLUSTERS,
    PROFILE_ID,
)

from zhaquirks.tuya import (
    NoManufacturerCluster,
    TuyaLocalCluster,
    TuyaNewManufCluster,
)
from zhaquirks.tuya.mcu import (
    # TuyaDPType,
    DPToAttributeMapping,
    TuyaAttributesCluster,
    TuyaMCUCluster,
)

class TuyaMmwRadarSelfTest(t.enum8):
    """Mmw radar self test values."""
    TESTING = 0
    TEST_SUCCESS = 1
    TEST_FAILURE = 2
    OTHER = 3
    COMM_FAULT = 4
    RADAR_FAULT = 5

class TuyaOccupancySensing(OccupancySensing, TuyaLocalCluster):
    """Tuya local OccupancySensing cluster."""

class TuyaIlluminanceMeasurement(IlluminanceMeasurement, TuyaLocalCluster):
    """Tuya local IlluminanceMeasurement cluster."""

class TuyaMmwRadarSensitivity(TuyaAttributesCluster, AnalogOutput):
    """AnalogOutput cluster for sensitivity."""

    def __init__(self, *args, **kwargs):
        """Init."""
        super().__init__(*args, **kwargs)
        self._update_attribute(
            self.attributes_by_name["description"].id, "sensitivity"
        )
        self._update_attribute(self.attributes_by_name["min_present_value"].id, 1)
        self._update_attribute(self.attributes_by_name["max_present_value"].id, 9)
        self._update_attribute(self.attributes_by_name["resolution"].id, 1)

class TuyaMmwRadarMinRange(TuyaAttributesCluster, AnalogOutput):
    """AnalogOutput cluster for min range."""

    def __init__(self, *args, **kwargs):
        """Init."""
        super().__init__(*args, **kwargs)
        self._update_attribute(
            self.attributes_by_name["description"].id, "min_range"
        )
        self._update_attribute(self.attributes_by_name["min_present_value"].id, 0)
        self._update_attribute(self.attributes_by_name["max_present_value"].id, 950)
        self._update_attribute(self.attributes_by_name["resolution"].id, 10)
        self._update_attribute(
            self.attributes_by_name["engineering_units"].id, 118
        )  # 31: meters

class TuyaMmwRadarMaxRange(TuyaAttributesCluster, AnalogOutput):
    """AnalogOutput cluster for max range."""

    def __init__(self, *args, **kwargs):
        """Init."""
        super().__init__(*args, **kwargs)
        self._update_attribute(
            self.attributes_by_name["description"].id, "max_range"
        )
        self._update_attribute(self.attributes_by_name["min_present_value"].id, 10)
        self._update_attribute(self.attributes_by_name["max_present_value"].id, 950)
        self._update_attribute(self.attributes_by_name["resolution"].id, 10)
        self._update_attribute(
            self.attributes_by_name["engineering_units"].id, 118
        )  # 31: meters

class TuyaMmwRadarDetectionDelay(TuyaAttributesCluster, AnalogOutput):
    """AnalogOutput cluster for detection delay."""

    def __init__(self, *args, **kwargs):
        """Init."""
        super().__init__(*args, **kwargs)
        self._update_attribute(
            self.attributes_by_name["description"].id, "detection_delay"
        )
        self._update_attribute(self.attributes_by_name["min_present_value"].id, 000)
        self._update_attribute(self.attributes_by_name["max_present_value"].id, 20000)
        self._update_attribute(self.attributes_by_name["resolution"].id, 100)
        self._update_attribute(
            self.attributes_by_name["engineering_units"].id, 159
        )  # 73: seconds

class TuyaMmwRadarFadingTime(TuyaAttributesCluster, AnalogOutput):
    """AnalogOutput cluster for fading time."""

    def __init__(self, *args, **kwargs):
        """Init."""
        super().__init__(*args, **kwargs)
        self._update_attribute(
            self.attributes_by_name["description"].id, "fading_time"
        )
        self._update_attribute(self.attributes_by_name["min_present_value"].id, 2000)
        self._update_attribute(self.attributes_by_name["max_present_value"].id, 200000)
        self._update_attribute(self.attributes_by_name["resolution"].id, 1000)
        self._update_attribute(
            self.attributes_by_name["engineering_units"].id, 159
        )  # 73: seconds

class TuyaMmwRadarTargetDistance(TuyaAttributesCluster, AnalogInput):
    """AnalogInput cluster for target distance."""

    def __init__(self, *args, **kwargs):
        """Init."""
        super().__init__(*args, **kwargs)
        self._update_attribute(
            self.attributes_by_name["description"].id, "target_distance"
        )
        self._update_attribute(
            self.attributes_by_name["engineering_units"].id, 31
        )  # 31: meters

class TuyaMmwRadarCluster(NoManufacturerCluster, TuyaMCUCluster):
    """Mmw radar cluster."""
    attributes = TuyaMCUCluster.attributes.copy()
    attributes.update(
        {
            # ramdom attribute IDs
            0xEF01: ("occupancy", t.uint32_t, True),
            0xEF02: ("sensitivity", t.uint32_t, True),
            0xEF03: ("min_range", t.uint32_t, True),
            0xEF04: ("max_range", t.uint32_t, True),
            0xEF06: ("self_test", TuyaMmwRadarSelfTest, True),
            0xEF09: ("target_distance", t.uint32_t, True),
            0xEF65: ("detection_delay", t.uint32_t, True),
            0xEF66: ("fading_time", t.uint32_t, True),
            0xEF67: ("cli", t.CharacterString, True),
            0xEF68: ("illuminance", t.uint32_t, True),
        }
    )

    dp_to_attribute: Dict[int, DPToAttributeMapping] = {
        103: DPToAttributeMapping(
            TuyaMCUCluster.ep_attribute,
            "cli",
            # dp_type=TuyaDPType.STRING,
        ),
        104: DPToAttributeMapping(
            TuyaIlluminanceMeasurement.ep_attribute,
            "measured_value",
            # dp_type=TuyaDPType.VALUE,
            converter=lambda x: int(math.log10(x) * 10000 + 1) if x > 0 else int(0),
        ),
        105: DPToAttributeMapping(
            TuyaOccupancySensing.ep_attribute,
            "occupancy",
            # dp_type=TuyaDPType.BOOL,
        ),
        106: DPToAttributeMapping(
            TuyaMmwRadarSensitivity.ep_attribute,
            "present_value",
            # dp_type=TuyaDPType.VALUE,
        ),
        107: DPToAttributeMapping(
            TuyaMmwRadarMaxRange.ep_attribute,
            "present_value",
            # dp_type=TuyaDPType.VALUE,
            endpoint_id=3,
            #converter=lambda x: x / 100,
            #dp_converter=lambda x: x * 100,
        ),
        108: DPToAttributeMapping(
            TuyaMmwRadarMinRange.ep_attribute,
            "present_value",
            # dp_type=TuyaDPType.VALUE,
            endpoint_id=2,
            #converter=lambda x: x / 100,
            #dp_converter=lambda x: x * 100,
        ),
        109: DPToAttributeMapping(
            TuyaMmwRadarTargetDistance.ep_attribute,
            "present_value",
            #converter=lambda x: x / 100,
            # dp_type=TuyaDPType.VALUE,
        ),
        110: DPToAttributeMapping(
            TuyaMmwRadarFadingTime.ep_attribute,
            "present_value",
            # dp_type=TuyaDPType.VALUE,
            converter=lambda x: x * 100,
            dp_converter=lambda x: x // 100,
            endpoint_id=5,
        ),
        111: DPToAttributeMapping(
            TuyaMmwRadarDetectionDelay.ep_attribute,
            "present_value",
            # dp_type=TuyaDPType.VALUE,
            converter=lambda x: x * 100,
            dp_converter=lambda x: x // 100,
            endpoint_id=4,
        ),
    }

    data_point_handlers = {
        103: "_dp_2_attr_update",
        104: "_dp_2_attr_update",
        105: "_dp_2_attr_update",
        106: "_dp_2_attr_update",
        108: "_dp_2_attr_update",
        107: "_dp_2_attr_update",
        108: "_dp_2_attr_update",
        109: "_dp_2_attr_update",
        110: "_dp_2_attr_update",
        111: "_dp_2_attr_update",
    }

class TuyaMmwRadarOccupancy(CustomDevice):
    """Millimeter wave occupancy sensor."""
    signature = {
        #  endpoint=1, profile=260, device_type=81, device_version=1,
        #  input_clusters=[0, 4, 5, 61184], output_clusters=[25, 10]
        MODELS_INFO: [
            ("_TZE204_sxm7l9xa", "TS0601"),
        ],
        ENDPOINTS: {
            1: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.SMART_PLUG,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    TuyaNewManufCluster.cluster_id,
                ],
                OUTPUT_CLUSTERS: [Time.cluster_id, Ota.cluster_id],
            },
            242: {
                # <SimpleDescriptor endpoint=242 profile=41440 device_type=97
                # input_clusters=[]
                # output_clusters=[33]
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        },
    }

    replacement = {
        ENDPOINTS: {
            1: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.OCCUPANCY_SENSOR,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    TuyaMmwRadarCluster,
                    TuyaIlluminanceMeasurement,
                    TuyaOccupancySensing,
                    TuyaMmwRadarTargetDistance,
                    TuyaMmwRadarSensitivity,
                ],
                OUTPUT_CLUSTERS: [Time.cluster_id, Ota.cluster_id],
            },
            2: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.COMBINED_INTERFACE,
                INPUT_CLUSTERS: [
                    TuyaMmwRadarMinRange,
                ],
                OUTPUT_CLUSTERS: [],
            },
            3: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.COMBINED_INTERFACE,
                INPUT_CLUSTERS: [
                    TuyaMmwRadarMaxRange,
                ],
                OUTPUT_CLUSTERS: [],
            },
            4: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.COMBINED_INTERFACE,
                INPUT_CLUSTERS: [
                    TuyaMmwRadarDetectionDelay,
                ],
                OUTPUT_CLUSTERS: [],
            },
            5: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.COMBINED_INTERFACE,
                INPUT_CLUSTERS: [
                    TuyaMmwRadarFadingTime,
                ],
                OUTPUT_CLUSTERS: [],
            },
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        }
    }