import { selectTree } from "../helpers/selecttree";
import { applyToElement } from "../helpers";

customElements.whenDefined("ha-sidebar").then(() => {
  const HaSidebar = customElements.get("ha-sidebar");
  if (HaSidebar.prototype.cardmod_patched) return;
  HaSidebar.prototype.cardmod_patched = true;

  const _firstUpdated = HaSidebar.prototype.firstUpdated;
  HaSidebar.prototype.firstUpdated = async function (...args) {
    _firstUpdated?.bind(this)(...args);

    applyToElement(this, "sidebar");
  };

  selectTree(
    document,
    "home-assistant$home-assistant-main$ ha-sidebar",
    false
  ).then((root) => {
    root?.firstUpdated();
  });
});
