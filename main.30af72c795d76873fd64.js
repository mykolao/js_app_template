(()=>{"use strict";var t={801:(t,e,r)=>{t.exports=r.p+"images/wplogo..png"}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t=r(801);function e(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=new(function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.element.src=r,this.size=151,this.vel=1,this.rotation=0,this.draw()}var r,i;return r=t,(i=[{key:"animate",value:function(){200!=this.size&&150!=this.size||(this.vel*=-1),this.size+=this.vel,this.rotation+=.9}},{key:"draw",value:function(){this.element.style.width="".concat(this.size,"px"),this.element.style.transform="rotate(".concat(this.rotation,"deg)")}}])&&e(r.prototype,i),t}())((".wp-logo",document.querySelector(".wp-logo")),t);!function t(){i.animate(),i.draw(),requestAnimationFrame(t)}()})()})();
//# sourceMappingURL=main.30af72c795d76873fd64.js.map