"use strict";var e=require("react");function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=t.length)return!1;for(u=c;0!=u--;)if(!i(e[u],t[u]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],t.get(u.value[0])))return!1;return!0}if(a&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((c=e.length)!=t.length)return!1;for(u=c;0!=u--;)if(e[u]!==t[u])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof t.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof t.toString)return e.toString()===t.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(t,l[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],t[l[u]]))return!1;return!0}return e!=e&&t!=t}var c,u,l=t((function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}));!function(e){e.primary="primary",e.ghost="ghost",e.secondary="secondary"}(c||(c={})),function(e){e.large="large",e.medium="medium",e.small="small"}(u||(u={}));var s=e.memo((function(t){var r=t.label,n=t.onClick,a=void 0===n?function(){}:n,o=t.variant,i=void 0===o?"primary":o,l=t.size,s=void 0===l?"medium":l,f=t.disable,p=void 0!==f&&f;return e.createElement("button",{onClick:p?void 0:a,className:function(){var e="btn";switch(s){case u.large:e="".concat(e," btn-large");break;case u.medium:e="".concat(e," btn-medium");break;case u.small:e="".concat(e," btn-small")}switch(i){case c.primary:e="".concat(e," btn-primary");break;case c.ghost:e="".concat(e," btn-ghost");break;case c.secondary:e="".concat(e," btn-secondary")}return e="".concat(e).concat(t.disable?"__disable":"")}(),disabled:p},r)}),l),f=e.memo((function(t){var r,n=t.type,a=t.placeholder,o=t.onChange,i=void 0===o?function(){}:o,c=t.onKeyUp,u=void 0===c?function(){}:c,l=t.onKeyDown,s=void 0===l?function(){}:l,f=t.disable,p=t.value,d=t.withIcon,m=void 0!==d&&d,y=t.withLabel,v=void 0!==y&&y,b=t.textLabel,h=t.hasRequired,g=void 0!==h&&h;return e.createElement("div",{className:"input input-relative"},v?e.createElement("label",{className:"with-label"},b," ",g?e.createElement("span",{className:""},"(*)"):null):null,e.createElement("input",{type:n,className:(r="",r=t.error?"".concat(r," input-error"):r,r=t.disable?"".concat(r," input-disable"):r,(r=t.withIcon?"".concat(r," with-icon"):r).trim()),placeholder:a,onChange:i,onKeyDown:s,onKeyUp:u,disabled:f,defaultValue:p}),m?e.createElement("div",{className:"icon-absolute"},e.createElement("img",{src:"/search.png",className:"pr-2",width:20})):null)}),l);exports.Button=s,exports.Input=f;
//# sourceMappingURL=index.js.map
