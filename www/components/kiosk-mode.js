!function(){"use strict";var t,e=function(){return e=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},e.apply(this,arguments)};function i(t,e,i,o){return new(i||(i=Promise))((function(n,s){function a(t){try{E(o.next(t))}catch(t){s(t)}}function c(t){try{E(o.throw(t))}catch(t){s(t)}}function E(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,c)}E((o=o.apply(t,e||[])).next())}))}function o(t,e){var i,o,n,s,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(c){return function(E){return function(c){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(a=0)),a;)try{if(i=1,o&&(n=2&c[0]?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){a.label=c[1];break}if(6===c[0]&&a.label<n[1]){a.label=n[1],n=c;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(c);break}n[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(t){c=[6,t],o=0}finally{i=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,E])}}}var n,s,a="kiosk_mode";!function(t){t.HEADER="kmHeader",t.SIDEBAR="kmSidebar",t.OVERFLOW="kmOverflow",t.MENU_BUTTON="kmMenuButton",t.ACCOUNT="kmAccount",t.SEARCH="kmSearch",t.ASSISTANT="kmAssistant",t.REFRESH="kmRefresh",t.UNUSED_ENTITIES="kmUnusedEntities",t.RELOAD_RESOURCES="kmReloadResources",t.EDIT_DASHBOARD="kmEditDashboard",t.MOUSE="kmMouse"}(n||(n={})),function(t){t.KIOSK="kiosk",t.CACHE="cache",t.CLEAR_CACHE="clear_km_cache",t.DISABLE_KIOSK_MODE="disable_km",t.HIDE_SIDEBAR="hide_sidebar",t.HIDE_HEADER="hide_header",t.HIDE_OVERFLOW="hide_overflow",t.HIDE_MENU_BUTTON="hide_menubutton",t.HIDE_ACCOUNT="hide_account",t.HIDE_SEARCH="hide_search",t.HIDE_ASSISTANT="hide_assistant",t.HIDE_REFRESH="hide_refresh",t.HIDE_UNUSED_ENTITIES="hide_unused_entities",t.HIDE_RELOAD_RESOURCES="hide_reload_resources",t.HIDE_EDIT_DASHBOARD="hide_edit_dashboard",t.BLOCK_MOUSE="block_mouse"}(s||(s={}));var c,E,h="".concat("ui",".common"),r="".concat("ui",".panel"),d="".concat(r,".lovelace"),S="".concat(d,".menu");!function(t){t.SEARCH="SEARCH",t.ASSIST="ASSIST",t.REFRESH="REFRESH",t.UNUSED_ENTITIES="UNUSED_ENTITIES",t.RELOAD_RESOURCES="RELOAD_RESOURCES",t.EDIT_DASHBOARD="EDIT_DASHBOARD"}(c||(c={})),function(t){t.STORAGE="storage",t.YAML="yaml"}(E||(E={}));var u,_=Object.freeze(((t={})[c.SEARCH]="".concat(S,".search"),t[c.ASSIST]="".concat(S,".assist"),t[c.REFRESH]="".concat(h,".refresh"),t[c.UNUSED_ENTITIES]="".concat(d,".unused_entities.title"),t[c.RELOAD_RESOURCES]="".concat(S,".reload_resources"),t[c.EDIT_DASHBOARD]="".concat(S,".configure_ui"),t));!function(t){t.HOME_ASSISTANT="home-assistant",t.HOME_ASSISTANT_MAIN="home-assistant-main",t.HA_PANEL_LOVELACE="ha-panel-lovelace",t.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",t.HUI_ROOT="hui-root",t.HUI_VIEW="hui-view",t.MENU_ITEM="ha-icon-button",t.MENU_ITEM_ICON="mwc-icon-button",t.OVERLAY_MENU="ha-button-menu",t.OVERLAY_MENU_ITEM="mwc-list-item",t.APP_DRAWER_LAYOUT="app-drawer-layout",t.APP_TOOLBAR="app-toolbar",t.APP_DRAWER="app-drawer",t.HA_SIDEBAR="ha-sidebar",t.HA_DRAWER="ha-drawer",t.TOOLBAR=".toolbar",t.ACTION_ITEMS=".action-items"}(u||(u={}));var R="true",l="state_changed",A=function(t){return Array.isArray(t)?t:[t]},O=function(t){return t instanceof ShadowRoot?t.host.localName:t.localName},D=function(t){var e=O(t);return t.querySelector("#".concat(a,"_").concat(e))},T=function(t,e){var i=O(e),o=D(e);o||((o=document.createElement("style")).setAttribute("id","".concat(a,"_").concat(i)),e.appendChild(o)),o.innerHTML=t},I=function(t){A(t).forEach((function(t){var e=O(t);D(t)&&t.querySelector("#".concat(a,"_").concat(e)).remove()}))},U=function(t){return A(t).some((function(t){return window.location.search.includes(t)}))},H=function(t,e){A(t).forEach((function(t){return window.localStorage.setItem(t,e)}))},p=function(t){return A(t).some((function(t){return window.localStorage.getItem(t)===R}))},N=function(t){return Object.entries(t).map((function(t){var e=t[0],i=t[1];return"".concat(e,":").concat(i)})).join(";")+";"},f=function(t){return Object.entries(t).map((function(t){var e=t[0],i=t[1];return"".concat(e,"{").concat(N(i),"}")})).join("")},M=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.map((function(t){return"".concat(t,"{display: none !important;}")})).join("")},b="app-toolbar",L=".toolbar",C=".action-items",w="ha-button-menu",m="mwc-list-item",v={HEADER:f({"#view":{"min-height":"100vh !important","--header-height":"0px"}}),ACCOUNT:M(".profile"),MENU_BUTTON:M(".menu ha-icon-button"),MENU_BUTTON_BURGER:M("ha-menu-button"),MOUSE:f({"body::after":{bottom:"0",content:'""',cursor:"none",display:"block",left:"0",position:"fixed",right:"0",top:"0","z-index":"999999"}})},y={HEADER:f({"app-header":{display:"none"}}),SIDEBAR:f({":host":{"--app-drawer-width":"0 !important"},"#drawer":{display:"none"}}),OVERFLOW_MENU:M("".concat(b," > ").concat(w)),OVERFLOW_MENU_EMPTY_DESKTOP:M("".concat(b," > ").concat(w,"[data-lovelace-mode=").concat(E.STORAGE,'][data-children="1"]'),"".concat(b," > ").concat(w,"[data-lovelace-mode=").concat(E.YAML,'][data-children="4"]')),OVERFLOW_MENU_EMPTY_MOBILE:M("".concat(b," > ").concat(w,"[data-lovelace-mode=").concat(E.STORAGE,'][data-children="3"]'),"".concat(b," > ").concat(w,"[data-lovelace-mode=").concat(E.YAML,'][data-children="6"]')),SEARCH:M("".concat(b,' > ha-icon-button[data-selector="').concat(c.SEARCH,'"]'),"".concat(b," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.SEARCH,'"]')),ASSISTANT:M("".concat(b,' > ha-icon-button[data-selector="').concat(c.ASSIST,'"]'),"".concat(b," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.ASSIST,'"]')),REFRESH:M("".concat(b," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.REFRESH,'"]')),UNUSED_ENTITIES:M("".concat(b," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.UNUSED_ENTITIES,'"]')),RELOAD_RESOURCES:M("".concat(b," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.RELOAD_RESOURCES,'"]')),EDIT_DASHBOARD:M("".concat(b," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.EDIT_DASHBOARD,'"]'))},B={HEADER:f({".header":{display:"none"}}),SIDEBAR:f({":host":{"--mdc-drawer-width":"0 !important"},"partial-panel-resolver":{"--mdc-top-app-bar-width":"100% !important"},"ha-drawer > ha-sidebar":{display:"none"},".header":{width:"100% !important"}}),ASIDE:M(".mdc-drawer"),OVERFLOW_MENU:M("".concat(L," > ").concat(C," > ").concat(w)),OVERFLOW_MENU_EMPTY_DESKTOP:M("".concat(L," > ").concat(C," > ").concat(w,"[data-lovelace-mode=").concat(E.STORAGE,'][data-children="1"]'),"".concat(L," > ").concat(C," > ").concat(w,"[data-lovelace-mode=").concat(E.YAML,'][data-children="4"]')),OVERFLOW_MENU_EMPTY_MOBILE:M("".concat(L," > ").concat(C," > ").concat(w,"[data-lovelace-mode=").concat(E.STORAGE,'][data-children="3"]'),"".concat(L," > ").concat(C," > ").concat(w,"[data-lovelace-mode=").concat(E.YAML,'][data-children="6"]')),SEARCH:M("".concat(L," > ").concat(C,' > ha-icon-button[data-selector="').concat(c.SEARCH,'"]'),"".concat(L," > ").concat(C," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.SEARCH,'"]')),ASSISTANT:M("".concat(L," > ").concat(C,' > ha-icon-button[data-selector="').concat(c.ASSIST,'"]'),"".concat(L," > ").concat(C," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.ASSIST,'"]')),REFRESH:M("".concat(L," > ").concat(C," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.REFRESH,'"]')),UNUSED_ENTITIES:M("".concat(L," > ").concat(C," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.UNUSED_ENTITIES,'"]')),RELOAD_RESOURCES:M("".concat(L," > ").concat(C," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.RELOAD_RESOURCES,'"]')),EDIT_DASHBOARD:M("".concat(L," > ").concat(C," > ").concat(w," > ").concat(m,'[data-selector="').concat(c.EDIT_DASHBOARD,'"]'))},k=function(t){return t?{HEADER:"".concat(v.HEADER).concat(y.HEADER),SIDEBAR:y.SIDEBAR,ASIDE:"",ACCOUNT:v.ACCOUNT,MENU_BUTTON:v.MENU_BUTTON,MENU_BUTTON_BURGER:v.MENU_BUTTON_BURGER,OVERFLOW_MENU:y.OVERFLOW_MENU,OVERFLOW_MENU_EMPTY_DESKTOP:y.OVERFLOW_MENU_EMPTY_DESKTOP,OVERFLOW_MENU_EMPTY_MOBILE:y.OVERFLOW_MENU_EMPTY_MOBILE,SEARCH:y.SEARCH,ASSISTANT:y.ASSISTANT,REFRESH:y.REFRESH,UNUSED_ENTITIES:y.UNUSED_ENTITIES,RELOAD_RESOURCES:y.RELOAD_RESOURCES,EDIT_DASHBOARD:y.EDIT_DASHBOARD,MOUSE:v.MOUSE}:{HEADER:"".concat(v.HEADER).concat(B.HEADER),SIDEBAR:B.SIDEBAR,ASIDE:B.ASIDE,ACCOUNT:v.ACCOUNT,MENU_BUTTON:v.MENU_BUTTON,MENU_BUTTON_BURGER:v.MENU_BUTTON_BURGER,OVERFLOW_MENU:B.OVERFLOW_MENU,OVERFLOW_MENU_EMPTY_DESKTOP:B.OVERFLOW_MENU_EMPTY_DESKTOP,OVERFLOW_MENU_EMPTY_MOBILE:B.OVERFLOW_MENU_EMPTY_MOBILE,SEARCH:B.SEARCH,ASSISTANT:B.ASSISTANT,REFRESH:B.REFRESH,UNUSED_ENTITIES:B.UNUSED_ENTITIES,RELOAD_RESOURCES:B.RELOAD_RESOURCES,EDIT_DASHBOARD:B.EDIT_DASHBOARD,MOUSE:v.MOUSE}},g=function(){function t(){this.lines=[{content:"%c≡ kiosk-mode",color:"white",background:"#03a9f4"},{content:"%cversion ".concat("1.8.3")}]}return t.prototype.log=function(){var t=[],i=[],o=this.lines.length-1,n={display:"inline-block","font-size":"12px","border-style":"solid","border-color":"#424242"};this.lines.forEach((function(s,a){t.push(s.content.padEnd(27)),t.push("%c⋮"),a!==o&&t.push("%c\n");var c="0 0 0 1px",E="0 1px 0 1px";0===o?(c="1px 0 1px 1px",E="1px 1px 1px 0"):0===a?(c="1px 0 0 1px",E="1px 1px 0 0"):a===o&&(c="0 0 1px 1px",E="0 1px 1px 0"),i.push(N(e(e({},n),{background:s.background||"white",color:s.color||"#424242",padding:0===a?"5px 0 5px 5px":"7px 0 7px 10px","border-width":c}))),i.push(N(e(e({},n),{background:s.background||"white",color:s.color||"white",padding:0===a?"5px":"7px 5px 7px 0px","border-width":E}))),a!==o&&i.push("")})),console.info.apply(console,function(t,e,i){if(i||2===arguments.length)for(var o,n=0,s=e.length;n<s;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}([t.join("")],i,!1))},t}(),F=function(){function t(){var t,e,i,o;window.kioskModeEntities={},U(s.CLEAR_CACHE)&&H([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.MOUSE],"false"),this.ha=document.querySelector(u.HOME_ASSISTANT),this.language=this.ha.hass.language,this.menuTranslations=(i=this.ha.hass.resources[this.language],o=Object.entries(_).map((function(t){var e=t[0],o=t[1];return[i[o],e]})),Object.fromEntries(o)),this.main=this.ha.shadowRoot.querySelector(u.HOME_ASSISTANT_MAIN).shadowRoot,this.user=this.ha.hass.user,this.isLegacy=function(t){var e=function(t){var e=t?t.match(/^(\d+)\.(\d+)\.(\w+)$/):null;return e?[+e[1],+e[2],e[3]]:null}(t);return!!t&&e[0]<=2023&&e[1]<=3}(null===(e=null===(t=this.ha.hass)||void 0===t?void 0:t.config)||void 0===e?void 0:e.version),this.llAttempts=0,this.resizeWindowBinded=this.resizeWindow.bind(this),this.run(),this.entityWatch(),new MutationObserver(this.watchDashboards).observe(this.main.querySelector(u.PARTIAL_PANEL_RESOLVER),{childList:!0})}return t.prototype.run=function(t){void 0===t&&(t=this.main.querySelector(u.HA_PANEL_LOVELACE)),!U(s.DISABLE_KIOSK_MODE)&&t&&(this.lovelace=t,this.getConfig())},t.prototype.getConfig=function(){var t=this;this.llAttempts++;try{var e=this.lovelace.lovelace.config.kiosk_mode||{};this.processConfig(e)}catch(e){this.llAttempts<200?setTimeout((function(){return t.getConfig()}),50):(console.log("Lovelace config not found, continuing with default configuration."),console.log(e),this.processConfig({}))}},t.prototype.processConfig=function(t){var e=this,i=this.ha.hass.panelUrl;if(window.kioskModeEntities[i]||(window.kioskModeEntities[i]=[]),this.hideHeader=!1,this.hideSidebar=!1,this.hideOverflow=!1,this.hideMenuButton=!1,this.hideAccount=!1,this.hideSearch=!1,this.hideAssistant=!1,this.hideRefresh=!1,this.hideUnusedEntities=!1,this.hideReloadResources=!1,this.hideEditDashboard=!1,this.blockMouse=!1,this.ignoreEntity=!1,this.ignoreMobile=!1,this.mode=this.lovelace.lovelace.mode,this.huiRoot=this.lovelace.shadowRoot.querySelector(u.HUI_ROOT).shadowRoot,this.isLegacy){this.drawerLayout=this.main.querySelector(u.APP_DRAWER_LAYOUT),this.appToolbar=this.huiRoot.querySelector(u.APP_TOOLBAR);var o=this.drawerLayout.querySelector(u.APP_DRAWER);this.sideBarRoot=o.querySelector(u.HA_SIDEBAR).shadowRoot,this.overlayMenu=this.appToolbar.querySelector(":scope > ".concat(u.OVERLAY_MENU))}else this.drawerLayout=this.main.querySelector(u.HA_DRAWER),this.appToolbar=this.huiRoot.querySelector(u.TOOLBAR),this.sideBarRoot=this.drawerLayout.querySelector(u.HA_SIDEBAR).shadowRoot,this.overlayMenu=this.appToolbar.querySelector(":scope > ".concat(u.ACTION_ITEMS," > ").concat(u.OVERLAY_MENU));var a=p([n.HEADER,n.SIDEBAR,n.OVERFLOW,n.MENU_BUTTON,n.ACCOUNT,n.SEARCH,n.ASSISTANT,n.REFRESH,n.UNUSED_ENTITIES,n.RELOAD_RESOURCES,n.EDIT_DASHBOARD,n.MOUSE])||U([s.KIOSK,s.HIDE_HEADER,s.HIDE_SIDEBAR,s.HIDE_OVERFLOW,s.HIDE_MENU_BUTTON,s.HIDE_ACCOUNT,s.HIDE_SEARCH,s.HIDE_ASSISTANT,s.HIDE_REFRESH,s.HIDE_RELOAD_RESOURCES,s.HIDE_UNUSED_ENTITIES,s.HIDE_EDIT_DASHBOARD,s.BLOCK_MOUSE]);a&&(this.hideHeader=p(n.HEADER)||U([s.KIOSK,s.HIDE_HEADER]),this.hideSidebar=p(n.SIDEBAR)||U([s.KIOSK,s.HIDE_SIDEBAR]),this.hideOverflow=p(n.OVERFLOW)||U([s.KIOSK,s.HIDE_OVERFLOW]),this.hideMenuButton=p(n.MENU_BUTTON)||U([s.KIOSK,s.HIDE_MENU_BUTTON]),this.hideAccount=p(n.ACCOUNT)||U([s.KIOSK,s.HIDE_ACCOUNT]),this.hideSearch=p(n.SEARCH)||U([s.KIOSK,s.HIDE_SEARCH]),this.hideAssistant=p(n.ASSISTANT)||U([s.KIOSK,s.HIDE_ASSISTANT]),this.hideRefresh=p(n.REFRESH)||U([s.KIOSK,s.HIDE_REFRESH]),this.hideUnusedEntities=p(n.UNUSED_ENTITIES)||U([s.KIOSK,s.HIDE_UNUSED_ENTITIES]),this.hideReloadResources=p(n.RELOAD_RESOURCES)||U([s.KIOSK,s.HIDE_RELOAD_RESOURCES]),this.hideEditDashboard=p(n.EDIT_DASHBOARD)||U([s.KIOSK,s.HIDE_EDIT_DASHBOARD]),this.blockMouse=p(n.MOUSE)||U([s.BLOCK_MOUSE])),this.hideHeader=a?this.hideHeader:t.kiosk||t.hide_header,this.hideSidebar=a?this.hideSidebar:t.kiosk||t.hide_sidebar,this.hideOverflow=a?this.hideOverflow:t.kiosk||t.hide_overflow,this.hideMenuButton=a?this.hideMenuButton:t.kiosk||t.hide_menubutton,this.hideAccount=a?this.hideAccount:t.kiosk||t.hide_account,this.hideSearch=a?this.hideSearch:t.kiosk||t.hide_search,this.hideAssistant=a?this.hideAssistant:t.kiosk||t.hide_assistant,this.hideRefresh=a?this.hideRefresh:t.kiosk||t.hide_refresh,this.hideUnusedEntities=a?this.hideUnusedEntities:t.kiosk||t.hide_unused_entities,this.hideReloadResources=a?this.hideReloadResources:t.kiosk||t.hide_reload_resources,this.hideEditDashboard=a?this.hideEditDashboard:t.kiosk||t.hide_edit_dashboard,this.blockMouse=a?this.blockMouse:t.block_mouse;var c=this.user.is_admin?t.admin_settings:t.non_admin_settings;c&&this.setOptions(c),t.user_settings&&A(t.user_settings).forEach((function(t){A(t.users).some((function(t){return t.toLowerCase()===e.user.name.toLowerCase()}))&&e.setOptions(t)}));var E=this.ignoreMobile?null:t.mobile_settings;if(E){var h=E.custom_width?E.custom_width:812;window.innerWidth<=h&&this.setOptions(E)}var r=this.ignoreEntity?null:t.entity_settings;if(r)for(var d=0,S=r;d<S.length;d++){var _=S[d],R=Object.keys(_.entity)[0];window.kioskModeEntities[i].includes(R)||window.kioskModeEntities[i].push(R),this.ha.hass.states[R].state==_.entity[R]&&(s.HIDE_HEADER in _&&(this.hideHeader=_[s.HIDE_HEADER]),s.HIDE_SIDEBAR in _&&(this.hideSidebar=_[s.HIDE_SIDEBAR]),s.HIDE_OVERFLOW in _&&(this.hideOverflow=_[s.HIDE_OVERFLOW]),s.HIDE_MENU_BUTTON in _&&(this.hideMenuButton=_[s.HIDE_MENU_BUTTON]),s.HIDE_ACCOUNT in _&&(this.hideAccount=_[s.HIDE_ACCOUNT]),s.HIDE_SEARCH in _&&(this.hideSearch=_[s.HIDE_SEARCH]),s.HIDE_ASSISTANT in _&&(this.hideAssistant=_[s.HIDE_ASSISTANT]),s.HIDE_REFRESH in _&&(this.hideRefresh=_[s.HIDE_REFRESH]),s.HIDE_UNUSED_ENTITIES in _&&(this.hideUnusedEntities=_[s.HIDE_UNUSED_ENTITIES]),s.HIDE_RELOAD_RESOURCES in _&&(this.hideReloadResources=_[s.HIDE_RELOAD_RESOURCES]),s.HIDE_EDIT_DASHBOARD in _&&(this.hideEditDashboard=_[s.HIDE_EDIT_DASHBOARD]),s.BLOCK_MOUSE in _&&(this.blockMouse=_[s.BLOCK_MOUSE]),s.KIOSK in _&&(this.hideHeader=this.hideSidebar=_[s.KIOSK]))}this.insertStyles()},t.prototype.insertStyles=function(){var t=k(this.isLegacy);if(this.hideHeader?(T(t.HEADER,this.huiRoot),U(s.CACHE)&&H(n.HEADER,R)):I(this.huiRoot),this.hideSidebar?(T(t.SIDEBAR,this.drawerLayout),this.isLegacy||T(t.ASIDE,this.drawerLayout.shadowRoot),U(s.CACHE)&&H(n.SIDEBAR,R)):(I(this.drawerLayout),this.isLegacy||I(this.drawerLayout.shadowRoot)),this.hideAccount||this.hideMenuButton){var e=[this.hideAccount?t.ACCOUNT:"",this.hideMenuButton?t.MENU_BUTTON:""];T(e.join(""),this.sideBarRoot),this.hideAccount&&U(s.CACHE)&&H(n.ACCOUNT,R)}else I(this.sideBarRoot);if(this.hideSearch||this.hideAssistant||this.hideRefresh||this.hideUnusedEntities||this.hideReloadResources||this.hideEditDashboard||this.hideMenuButton||this.hideOverflow||this.hideSidebar){e=[this.hideSearch?t.SEARCH:"",this.hideAssistant?t.ASSISTANT:"",this.hideRefresh?t.REFRESH:"",this.hideUnusedEntities?t.UNUSED_ENTITIES:"",this.hideReloadResources?t.RELOAD_RESOURCES:"",this.hideEditDashboard?t.EDIT_DASHBOARD:"",this.hideOverflow?t.OVERFLOW_MENU:"",this.hideEditDashboard&&(this.mode===E.STORAGE||this.mode===E.YAML&&this.hideRefresh&&this.hideUnusedEntities&&this.hideReloadResources)?t.OVERFLOW_MENU_EMPTY_DESKTOP:"",this.hideSearch&&this.hideAssistant&&this.hideEditDashboard&&(this.mode===E.STORAGE||this.mode===E.YAML&&this.hideRefresh&&this.hideUnusedEntities&&this.hideReloadResources)?t.OVERFLOW_MENU_EMPTY_MOBILE:"",this.hideMenuButton||this.hideSidebar?t.MENU_BUTTON_BURGER:""];T(e.join(""),this.appToolbar),U(s.CACHE)&&(this.hideSearch&&H(n.SEARCH,R),this.hideAssistant&&H(n.ASSISTANT,R),this.hideRefresh&&H(n.REFRESH,R),this.hideUnusedEntities&&H(n.UNUSED_ENTITIES,R),this.hideReloadResources&&H(n.RELOAD_RESOURCES,R),this.hideEditDashboard&&H(n.EDIT_DASHBOARD,R),this.hideOverflow&&H(n.OVERFLOW,R),this.hideMenuButton&&H(n.MENU_BUTTON,R))}else I(this.appToolbar);this.blockMouse?(T(t.MOUSE,document.body),U(s.CACHE)&&H(n.MOUSE,R)):I(document.body),window.removeEventListener("resize",this.resizeWindowBinded),window.addEventListener("resize",this.resizeWindowBinded),window.dispatchEvent(new Event("resize")),this.llAttempts=0},t.prototype.resizeWindow=function(){var t=this;window.clearTimeout(this.resizeDelay),this.resizeDelay=window.setTimeout((function(){t.updateMenuItemsLabels()}),250)},t.prototype.watchDashboards=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===u.HA_PANEL_LOVELACE&&window.KioskMode.run(t)}))}))},t.prototype.updateMenuItemsLabels=function(){var t=this,e=this.isLegacy?this.appToolbar.querySelectorAll(":scope > ".concat(u.MENU_ITEM)):this.appToolbar.querySelectorAll(":scope > ".concat(u.ACTION_ITEMS," > ").concat(u.MENU_ITEM)),i=this.appToolbar.querySelectorAll(u.OVERLAY_MENU_ITEM);e.forEach((function(e){if(!e.dataset.selector){var i=e.shadowRoot.querySelector(u.MENU_ITEM_ICON);e.dataset.selector=t.menuTranslations[i.title]}})),i.forEach((function(e){if(!e.dataset.selector){var i=e.textContent.trim();e.dataset.selector=t.menuTranslations[i]}})),this.overlayMenu.dataset.children="".concat(i.length),this.overlayMenu.dataset.lovelaceMode||(this.overlayMenu.dataset.lovelaceMode=this.mode)},t.prototype.entityWatch=function(){return i(this,void 0,void 0,(function(){var t=this;return o(this,(function(e){switch(e.label){case 0:return[4,window.hassConnection];case 1:return e.sent().conn.subscribeMessage((function(e){return t.entityWatchCallback(e)}),{type:"subscribe_events",event_type:l}),[2]}}))}))},t.prototype.entityWatchCallback=function(t){var e=window.kioskModeEntities[this.ha.hass.panelUrl]||[];!e.length||t.event_type!==l||!e.includes(t.data.entity_id)||t.data.old_state&&t.data.new_state.state===t.data.old_state.state||this.run()},t.prototype.setOptions=function(t){this.hideHeader=t.kiosk||t.hide_header,this.hideSidebar=t.kiosk||t.hide_sidebar,this.hideOverflow=t.kiosk||t.hide_overflow,this.hideMenuButton=t.kiosk||t.hide_menubutton,this.hideAccount=t.kiosk||t.hide_account,this.hideSearch=t.kiosk||t.hide_search,this.hideAssistant=t.kiosk||t.hide_assistant,this.hideRefresh=t.kiosk||t.hide_refresh,this.hideUnusedEntities=t.kiosk||t.hide_unused_entities,this.hideReloadResources=t.kiosk||t.hide_reload_resources,this.hideEditDashboard=t.kiosk||t.hide_edit_dashboard,this.blockMouse=t.block_mouse,this.ignoreEntity=t.ignore_entity_settings,this.ignoreMobile=t.ignore_mobile_settings},t}();(new g).log(),Promise.resolve(customElements.whenDefined(u.HUI_VIEW)).then((function(){window.KioskMode=new F}))}();