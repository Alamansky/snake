!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=7)}([function(t,r){t.exports={logErr(t=null,r){console.group("%c Attention:","color: red; font-weight: bold;"),console.error(r),console.error(t),t.name&&console.log(t.name),t.message&&console.log(t.message),t.stack&&console.log(t.stack),console.groupEnd()},logVar(t){console.log(`variable '${Object.keys(t)}' is equal to: ${Object.values(t)}`)}}},function(t,r,e){var n=e(2);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(n,o);n.locals&&(t.exports=n.locals)},function(t,r,e){(t.exports=e(3)(!0)).push([t.i,"/** @format */\r\n\r\n:root {\r\n\t--light: rgba(255, 255, 255, 0.9);\r\n\t--lighter: rgba(255, 255, 255, 0.1);\r\n\t--dark: rgba(0, 0, 0, 1);\r\n}\r\n\r\nhtml {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit;\r\n}\r\n\r\nbody {\r\n\tmargin: 0%;\r\n\tpadding: 0%;\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(0, 0, 0, 1),\r\n\t\trgba(24, 22, 22, 1),\r\n\t\trgba(40, 37, 35, 1),\r\n\t\trgba(55, 54, 50, 1),\r\n\t\trgba(69, 72, 66, 1)\r\n\t);\r\n}\r\n\r\n#app {\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(89, 115, 91, 1),\r\n\t\trgba(89, 121, 83, 1),\r\n\t\trgba(92, 127, 73, 1),\r\n\t\trgba(99, 132, 61, 1),\r\n\t\trgba(108, 137, 45, 1)\r\n\t);\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\theight: 100vh;\r\n\twidth: 100vh;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n#screen {\r\n\theight: 100vh;\r\n\twidth: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n#screen > * {\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.title,\r\n.subtitle,\r\n.btn,\r\n.scores {\r\n\tfont-family: 'VT323', monospace;\r\n}\r\n\r\n.title,\r\n.subtitle,\r\n.scores {\r\n\tcolor: var(--light);\r\n\ttext-shadow: 1px 1px 2px var(--dark);\r\n}\r\n\r\n.title {\r\n\tfont-size: 124px;\r\n}\r\n\r\n.subtitle {\r\n\tfont-size: 36px;\r\n\ttext-align: center;\r\n}\r\n\r\n.scores {\r\n\tcolor: var(--light);\r\n\tfont-size: 24px;\r\n\tpadding: 20px 40px 1px 40px;\r\n\tborder: 1px solid var(--lighter);\r\n\ttext-align: center;\r\n}\r\n\r\n.btn {\r\n\tcolor: var(--dark);\r\n\tfont-size: 20px;\r\n\tpadding: 16px;\r\n}\r\n\r\n.link {\r\n\tfont-family: serif;\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n}\r\n\r\n[data-coords] {\r\n\theight: 4vh;\r\n\twidth: 4vh;\r\n\tborder: 1px solid var(--lighter);\r\n}\r\n\r\n.snake {\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(255, 255, 255, 1),\r\n\t\trgba(239, 239, 239, 1),\r\n\t\trgba(223, 223, 223, 1),\r\n\t\trgba(207, 207, 207, 1),\r\n\t\trgba(192, 192, 192, 1)\r\n\t);\r\n}\r\n\r\n.apple {\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(153, 0, 0, 1),\r\n\t\trgba(143, 0, 1, 1),\r\n\t\trgba(133, 0, 1, 1),\r\n\t\trgba(123, 0, 1, 1),\r\n\t\trgba(113, 0, 0, 1)\r\n\t);\r\n}\r\n","",{version:3,sources:["C:/projects/snake/src/style.css"],names:[],mappings:"AAAA,aAAa;;AAEb;CACC,iCAAiC;CACjC,mCAAmC;CACnC,wBAAwB;AACzB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;;;CAGC,mBAAmB;AACpB;;AAEA;CACC,UAAU;CACV,WAAW;CACX;;;;;;;EAOC;AACF;;AAEA;CACC;;;;;;;EAOC;CACD,aAAa;CACb,mBAAmB;CACnB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,cAAc;AACf;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;;;;CAIC,+BAA+B;AAChC;;AAEA;;;CAGC,mBAAmB;CACnB,oCAAoC;AACrC;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,eAAe;CACf,2BAA2B;CAC3B,gCAAgC;CAChC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,WAAW;CACX,UAAU;CACV,gCAAgC;AACjC;;AAEA;CACC;;;;;;;EAOC;AACF;;AAEA;CACC;;;;;;;EAOC;AACF",file:"style.css",sourcesContent:["/** @format */\r\n\r\n:root {\r\n\t--light: rgba(255, 255, 255, 0.9);\r\n\t--lighter: rgba(255, 255, 255, 0.1);\r\n\t--dark: rgba(0, 0, 0, 1);\r\n}\r\n\r\nhtml {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit;\r\n}\r\n\r\nbody {\r\n\tmargin: 0%;\r\n\tpadding: 0%;\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(0, 0, 0, 1),\r\n\t\trgba(24, 22, 22, 1),\r\n\t\trgba(40, 37, 35, 1),\r\n\t\trgba(55, 54, 50, 1),\r\n\t\trgba(69, 72, 66, 1)\r\n\t);\r\n}\r\n\r\n#app {\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(89, 115, 91, 1),\r\n\t\trgba(89, 121, 83, 1),\r\n\t\trgba(92, 127, 73, 1),\r\n\t\trgba(99, 132, 61, 1),\r\n\t\trgba(108, 137, 45, 1)\r\n\t);\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: wrap;\r\n\theight: 100vh;\r\n\twidth: 100vh;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n#screen {\r\n\theight: 100vh;\r\n\twidth: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n#screen > * {\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.title,\r\n.subtitle,\r\n.btn,\r\n.scores {\r\n\tfont-family: 'VT323', monospace;\r\n}\r\n\r\n.title,\r\n.subtitle,\r\n.scores {\r\n\tcolor: var(--light);\r\n\ttext-shadow: 1px 1px 2px var(--dark);\r\n}\r\n\r\n.title {\r\n\tfont-size: 124px;\r\n}\r\n\r\n.subtitle {\r\n\tfont-size: 36px;\r\n\ttext-align: center;\r\n}\r\n\r\n.scores {\r\n\tcolor: var(--light);\r\n\tfont-size: 24px;\r\n\tpadding: 20px 40px 1px 40px;\r\n\tborder: 1px solid var(--lighter);\r\n\ttext-align: center;\r\n}\r\n\r\n.btn {\r\n\tcolor: var(--dark);\r\n\tfont-size: 20px;\r\n\tpadding: 16px;\r\n}\r\n\r\n.link {\r\n\tfont-family: serif;\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n}\r\n\r\n[data-coords] {\r\n\theight: 4vh;\r\n\twidth: 4vh;\r\n\tborder: 1px solid var(--lighter);\r\n}\r\n\r\n.snake {\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(255, 255, 255, 1),\r\n\t\trgba(239, 239, 239, 1),\r\n\t\trgba(223, 223, 223, 1),\r\n\t\trgba(207, 207, 207, 1),\r\n\t\trgba(192, 192, 192, 1)\r\n\t);\r\n}\r\n\r\n.apple {\r\n\tbackground-image: radial-gradient(\r\n\t\tcircle,\r\n\t\trgba(153, 0, 0, 1),\r\n\t\trgba(143, 0, 1, 1),\r\n\t\trgba(133, 0, 1, 1),\r\n\t\trgba(123, 0, 1, 1),\r\n\t\trgba(113, 0, 0, 1)\r\n\t);\r\n}\r\n"],sourceRoot:""}])},function(t,r,e){"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map(function(r){var e=function(t,r){var e=t[1]||"",n=t[3];if(!n)return e;if(r&&"function"==typeof btoa){var o=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[e].concat(a).concat([o]).join("\n")}var i;return[e].join("\n")}(r,t);return r[2]?"@media "+r[2]+"{"+e+"}":e}).join("")},r.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&n[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),r.push(i))}},r}},function(t,r,e){var n,o,a={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(t){var r={};return function(t,e){if("function"==typeof t)return t();if(void 0===r[t]){var n=function(t,r){return r?r.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}r[t]=n}return r[t]}}(),c=null,l=0,u=[],d=e(5);function p(t,r){for(var e=0;e<t.length;e++){var n=t[e],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(m(n.parts[i],r))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(m(n.parts[i],r));a[n.id]={id:n.id,refs:1,parts:s}}}}function f(t,r){for(var e=[],n={},o=0;o<t.length;o++){var a=t[o],i=r.base?a[0]+r.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):e.push(n[i]={id:i,parts:[s]})}return e}function A(t,r){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(r,n.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),u.push(r);else if("bottom"===t.insertAt)e.appendChild(r);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,e);e.insertBefore(r,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var r=u.indexOf(t);r>=0&&u.splice(r,1)}function b(t){var r=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return e.nc}();n&&(t.attrs.nonce=n)}return h(r,t.attrs),A(t,r),r}function h(t,r){Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])})}function m(t,r){var e,n,o,a;if(r.transform&&t.css){if(!(a="function"==typeof r.transform?r.transform(t.css):r.transform.default(t.css)))return function(){};t.css=a}if(r.singleton){var i=l++;e=c||(c=b(r)),n=v.bind(null,e,i,!1),o=v.bind(null,e,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var r=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(r,t.attrs),A(t,r),r}(r),n=function(t,r,e){var n=e.css,o=e.sourceMap,a=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||a)&&(n=d(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,e,r),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(r),n=function(t,r){var e=r.css,n=r.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){g(e)});return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else o()}}t.exports=function(t,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=i()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var e=f(t,r);return p(e,r),function(t){for(var n=[],o=0;o<e.length;o++){var i=e[o];(s=a[i.id]).refs--,n.push(s)}t&&p(f(t,r),r);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var C,y=(C=[],function(t,r){return C[t]=r,C.filter(Boolean).join("\n")});function v(t,r,e,n){var o=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(r,o);else{var a=document.createTextNode(o),i=t.childNodes;i[r]&&t.removeChild(i[r]),i.length?t.insertBefore(a,i[r]):t.appendChild(a)}}},function(t,r){t.exports=function(t){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=r.protocol+"//"+r.host,n=e+r.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,r){var o,a=r.trim().replace(/^"(.*)"$/,function(t,r){return r}).replace(/^'(.*)'$/,function(t,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?e+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,r,e){const n=e(0);t.exports={openDatabase:(t,r,e)=>"indexedDB"in window?new Promise((n,o)=>{document.addEventListener("DOMContentLoaded",function(){var a=indexedDB.open(t,r);a.onupgradeneeded=function(t){var r=t.target.result;!r.objectStoreNames.contains(e)&&r.createObjectStore(e)},a.onsuccess=function(t){n(t.target.result)},a.onerror=function(t){o(t.target.error.message)}})}):n.logErr(Error("IndexedDB is not supported in this browser")),readEntry:(t,r,e)=>new Promise((o,a)=>{let i=t.transaction([r],"readonly").objectStore(r).get(e);i.onsuccess=function(t){o(t.target.result)},i.onerror=function(t){a(n.logErr(t.target.error.message,Error("Function readEntry could not read from database.")))}}),writeEntry(t,r,e,o){t.transaction([r],"readwrite").objectStore(r).add(o,e).onerror=(t=>{n.logErr(t.target.error.message,Error("Function writeEntry could not write to database."))})},replaceEntry(t,r,e,o){t.transaction([r],"readwrite").objectStore(r).put(o,e).onerror=(t=>{n.logErr(t.target.error.message,Error("Function replaceEntry could not write to database."))})},updateObjEntry(r,e,o,a){t.exports.readEntry(r,e,o).then(t=>{"object"!=typeof t&&(t={});let i=Object.defineProperty(t,a,{value:a,enumerable:!0});r.transaction([e],"readwrite").objectStore(e).put(i,o).onerror=(t=>{n.logErr(t.target.error.message,Error("Function updateObjEntry could not write to database."))})})},pushArrEntry(r,e,o,a){t.exports.readEntry(r,e,o).then(t=>{!Array.isArray(t)&&(t=[]);let i=t.concat(a);r.transaction([e],"readwrite").objectStore(e).put(i,o).onerror=(t=>{n.logErr(t.target.error.message,Error("Function pushArrEntry could not write to database."))})})}}},function(t,r,e){"use strict";e.r(r);let n={updateState(t,r=!0){let e=t;for(var n in this.state)for(var o in e)n==o&&(this.state[n]=e[o]);return r&&this.render(),this}};e(1);const o={randomInt:t=>Math.floor(Math.random()*Math.floor(t)),equalObjects:(t,r)=>JSON.stringify(t)==JSON.stringify(r),reduceObjects(t,r){let e={};for(var n in t)for(var o in r)n==o&&(e[n]=t[n]+r[o]);return e},async getJSON(t,r){r(await fetch(t).then(t=>t.json()))},getValue:t=>document.querySelector(t).value,arrDupes:t=>t.length==new Set(t).size,removeDupes:t=>Array.from(new Set(t)),logErr(t=null,r){console.group("%c Attention:","color: red; font-weight: bold;"),console.error(r),console.error(t),t.name&&console.log(t.name),t.message&&console.log(t.message),t.stack&&console.log(t.stack),console.groupEnd()},logVar(t){console.log(`variable '${Object.keys(t)}' is equal to: ${Object.values(t)}`)}};var a=e(6);e(0);const i=document.getElementById("app");let s={instance:null,createDatabase(){a.openDatabase("snake",1,"high_scores").then(t=>{s.instance=t})},updateDatabase(t){a.readEntry(s.instance,"high_scores","top_ten").then(r=>{!Array.isArray(r)&&(r=[]),r.push([c.state.playerName,t]),r.sort((t,r)=>r[1]-t[1]),r.length>5&&(r.length=5),a.replaceEntry(s.instance,"high_scores","top_ten",r),document.querySelector(".scores").innerHTML=`High Scores: ${r.map(t=>`<h4>${t.join(":  ")}</h4>`).join("")}`})}};s.createDatabase();let c=Object.create(n);c.state={playerName:null};let l=Object.create(n);l.state={width:25,height:25,appleCoords:{x:0,y:0},test:5},l.init=function(){for(var t=0;t<l.state.width;++t)for(var r=0;r<l.state.height;++r)i.appendChild(document.createElement("div")).setAttribute("data-coords",[r,t]);return this},l.newApple=function(){l.updateState({appleCoords:{x:o.randomInt(l.state.width),y:o.randomInt(l.state.height)}})},l.render=function(){document.querySelector(".apple")&&document.querySelector(".apple").classList.remove("apple"),document.querySelector(`[data-coords="${l.state.appleCoords.x},${l.state.appleCoords.y}"]`).classList.add("apple")};let u={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},d=Object.create(n);d.state={head:null,currentPosition:null,nextPosition:[],direction:u.ArrowDown,snakeLength:1,timer:null,clear:!0},d.init=function(){return window.addEventListener("keydown",function(t){let r=t.keyCode;u[t.key].y!=-1*d.state.direction.y&&u[t.key].x!=-1*d.state.direction.x&&(37==r||38==r||39==r||40==r)&&d.state.clear&&d.updateState({direction:u[t.key],clear:!1})}),this},d.checkHead=function(){let t=!0;return d.state.currentPosition.some(t=>o.equalObjects(t,d.state.head))&&(t=!1),(d.state.head.x>=l.state.width||d.state.head.x<0||d.state.head.y>=l.state.height||d.state.head.y<0)&&(t=!1),t||(s.updateDatabase(d.state.snakeLength),p.reset().render(p.state.outro)),o.equalObjects(d.state.head,l.state.appleCoords)&&d.eatApple(),this},d.moveSnake=function(){d.updateState({snakeLength:1}),d.timer=window.setInterval(function(){d.updateState({head:o.reduceObjects(d.state.currentPosition[0],d.state.direction)}).checkHead().updateState({nextPosition:[d.state.head].concat(d.state.currentPosition).slice(0,d.state.snakeLength)}).updateState({currentPosition:d.state.nextPosition,clear:!0})},100)},d.eatApple=function(){d.updateState({snakeLength:d.state.snakeLength+=1}),l.newApple()},d.render=function(){try{d.state.currentPosition.forEach(t=>document.querySelector(`[data-coords="${t.x},${t.y}"]`).classList.remove("snake")),d.state.nextPosition.forEach(t=>document.querySelector(`[data-coords="${t.x},${t.y}"]`).classList.add("snake"))}catch(t){return null}};let p=Object.create(n);p.state={intro:{title:"Welcome to snake!",subtitle:"A recreation of a timeless classic, powered by pure JS",button:"Let's go"},outro:{title:"Your score is ",subtitle:"Thanks for stopping by!",button:"Play again"},link:"https://github.com/Alamansky/snake"},p.reset=function(){for(clearInterval(d.timer);i.firstChild;)i.removeChild(i.firstChild);return d.updateState({currentPosition:[{x:12,y:0}],nextPosition:[],direction:u.ArrowDown},!1),this},p.start=function(){l.init().newApple(),d.init().moveSnake()},p.test=function(){c.updateState({playerName:""==o.getValue('[name="username"]')?"Unknown Player":o.getValue('[name="username"]')},!1),p.reset().start()},p.render=function(t){i.appendChild(document.createElement("div")).setAttribute("id","screen"),document.querySelector("#screen").innerHTML=`<h1 class="title">${t.title}${t==p.state.outro?d.state.snakeLength:""}</h1>\n\t\t\t\t   <h2 class="subtitle">${t.subtitle}</h2>\n\t\t\t\t   <div class="scores"></div>\n\t\t\t\t   <h2 class="subtitle">Player Name:</h2>\n\t\t\t\t   <input type="text" name="username" id="username" value="Riki-Tiki-Tavi" autocomplete = "off" required="true" spellcheck="false"></input>\n\t\t\t\t   <button class="btn">${t.button}</button>\n\t\t\t\t   <a href='${p.state.link}' target="_new" class="link">Github Repo</a>`,document.querySelector("button").addEventListener("click",p.test)},p.render(p.state.intro)}]);