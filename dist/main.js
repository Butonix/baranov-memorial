!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(e,t,r){e.exports=r(3)},function(e,t,r){r(2),e.exports=r(4)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}!self.document||"insertAdjacentHTML"in document.createElementNS("http://www.w3.org/1999/xhtml","_")||(HTMLElement.prototype.insertAdjacentHTML=function(e,t){var r,n,o,a=this.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml","_"),i=this.parentNode;switch(a.innerHTML=t,e.toLowerCase()){case"beforebegin":for(;r=a.firstChild;)i.insertBefore(r,this);break;case"afterbegin":for(n=this.firstChild;r=a.lastChild;)n=this.insertBefore(r,n);break;case"beforeend":for(;r=a.firstChild;)this.appendChild(r);break;case"afterend":for(o=this.nextSibling;r=a.lastChild;)o=i.insertBefore(r,o)}});var l={per_page:24,image_quality:80,draw_mode:"standard"},u={per_page:Number(localStorage.getItem("per_page")||l.per_page),image_quality:Number(localStorage.getItem("image_quality")||l.image_quality),draw_mode:localStorage.getItem("draw_mode")in["standard","generator"]?localStorage.getItem("draw_mode"):l.draw_mode};document.addEventListener("DOMContentLoaded",(function(){fetch("./data/manifest.json").then((function(e){return e.json()})).then((function(e){console.log("Manifest",e),function(e){var t=o.a.mark(I),r={},n={},s=[];Object.keys(e).forEach((function(t){r[t]=e[t].name,n[t]=e[t].icon,s.push.apply(s,c(e[t].files))}));var f,d=[],g=[],h=new CustomEvent("records.loaded",{bubbles:!0});var m='<button class="dropdown-item filter-link" {data-tags}>{text}</button>',p='<div class="col-xs-12 col-md-4 col-xl-3 pb-4 memorial-card-column">\n            <div class="card memorial-card {nourl}" data-year="{year}" data-what="{where}">\n                {icon}\n                {img}\n                <div class="card-body d-flex flex-column">\n                    <h5 class="card-title">{title}</h5>\n                    <p class="card-text">{teaser_text}</p>\n                    <ul class="card-tags list-inline">{tags}</ul>\n                </div>\n                    <div class="card-footer text-muted">\n                        {url} <span class="float-right date-span">{date}</span>\n                    </div>\n            </div>\n        </div>',y='<img src="{icon}" class="icon" alt="Иконка издания">',v='<img src="{img}" class="card-img-top" alt="Превью материала" onerror="this.onerror=null;this.src=\'logo/placeholder.jpg\';">',b='<a href="{url}" target="_blank" class="btn btn-primary btn-sm">Перейти к материалу</a>',w='<a class="badge badge-primary badge-tag" onclick="filter_by_tag(\'{tag}\')">{tag}</a>',_='<a href="https://discord.gg/zDxKb44" target="_blank" class="btn btn-danger btn-sm">Нужна помощь в поиске!</a>',E=document.getElementById("records_container"),x="./logo/placeholder.jpg",j=document.getElementById("placeholder"),L=10;function O(e){var t,r,o=p.replace("{title}",e.title).replace("{teaser_text}",e.teaser_text).replace("{date}",(t=e.date,r=t.day+"","0"===r?r="":1===r.length?r="0"+r+".":r+=".",r=1===(t.month+"").length?r+"0"+t.month+".":r+t.month+".",r+=t.year)).replace("{year}",e.date.year.toString()).replace("{where}",e.where);if(o="url"in e&&""!==e.url?o.replace("{url}",b.replace("{url}",e.url)).replace("{nourl}",""):o.replace("{url}",_).replace("{nourl}","border-danger"),"where"in e&&""!==e.where&&(o=o.replace("{icon}",y.replace("{icon}","./res/image/"+n[e.where]))),o="img"in e&&""!==e.img?o.replace("{img}",v.replace("{img}","https://images.weserv.nl/?url=".concat(e.img,"&q=").concat(u.image_quality,"&w=480&il&output=jpg"))):o.replace("{img}",v.replace("{img}",x)),"tags"in e&&0!==e.tags.length){var a="";e.tags.forEach((function(e){a+=w.replace(/{tag}/g,e)})),o=o.replace("{tags}",a)}E.insertAdjacentHTML("beforeend",o)}function I(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=o.a.keys(e);case 1:if((t.t1=t.t0()).done){t.next=8;break}if(r=t.t1.value,!e.hasOwnProperty(r)){t.next=6;break}return t.next=6,e[r];case 6:t.next=1;break;case 8:case"end":return t.stop()}}),t)}function k(e){void 0===e?e=g:g=e,e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number(u.per_page),r=N,n=Math.ceil(e.length/t);t>=e.length&&(t=e.length);console.group("Pagination details"),console.log("Per page:",t),console.log("Total pages:",n),console.log("Current page:",N),console.log("Visible pages:",A),console.log("Pages before and after:",P),console.groupEnd(),B.innerHTML="",S.innerHTML="";var o=1,a=n;n>=A&&(a=A,r>P+1&&(o=r-P,a=r+P),r>=n-P&&(o=n-A+1,a=n));console.groupCollapsed("Pagination drawing");var i="";n>2&&(i+=T.replace(/{num}/,"1").replace(/{num}/,"&laquo; <em>1</em>").replace(/{state}/,1===r?"active":""),console.log("<<"));for(var c=o;c<=a;++c){if(n>2){if(r<=A&&1===c)continue;if(r>=n-A+1&&c===n)continue}i+=T.replace(/{num}/g,String(c)).replace(/{state}/,c===r?"active":""),console.log("Page",c)}n>2&&(i+=T.replace(/{num}/,n.toString()).replace(/{num}/,"<em>".concat(n,"</em> &raquo;")).replace(/{state}/,r===n?"active":""));console.log(">>"),console.groupEnd(),B.insertAdjacentHTML("beforeend",i),S.insertAdjacentHTML("beforeend",i),Array.from(document.getElementsByClassName("paginator-button")).forEach((function(e){Number(e.dataset.page)!==N&&e.addEventListener("click",(function(){H(),N=Number(e.dataset.page),console.log("Drawing page",N),k(),q()}))}));var l=(r-1)*t;return e.slice(l,l+t)}(e),"generator"===u.draw_mode?function(e){console.log("drawing with generator");var t=I(e);f&&clearInterval(f);f=setInterval((function(){var e=t.next();e.done?clearInterval(f):O(e.value)}),L)}(e):function(e){console.log("drawing with foreach"),e.forEach((function(e){O(e)}))}(e),setTimeout((function(){document.getElementById("records_container").style.height="",j.classList.remove("d-block"),j.classList.add("d-none")}),L)}var T='<li class="page-item {state}"><button class="page-link paginator-button" data-page="{num}">{num}</button></li>',B=document.getElementById("pagination_container_top"),S=document.getElementById("pagination_container_bottom"),N=1,A=6,P=Math.floor(A/2)-1;function M(e){var t=e.text,r=i(e,["text"]),n=[];return Object.entries(r).forEach((function(e){var t=a(e,2),r=t[0],o=t[1];n+="data-".concat(r,'="').concat(o,'"')})),m.replace(/{data-tags}/,n).replace(/{text}/,t)}function C(e){switch(e){case"sources":return"Издания";case"years":return"Годы";case"tags":return"Теги"}}function H(){document.getElementById("records_container").style.height="1080px",Array.from(document.getElementsByClassName("memorial-card-column")).forEach((function(e){return e.remove()}))}function q(){setTimeout((function(){document.getElementById("start").scrollIntoView({behavior:"smooth",block:"start"})}),L)}function G(e){u=e,Object.keys(e).forEach((function(t){localStorage.setItem(t,e[t]),"draw_mode"===t?document.getElementById("draw_mode_".concat(e[t])).checked="on":document.getElementById(t+"_setting").value=e[t]}))}document.addEventListener("records.loaded",(function(){d=d.sort((function(e,t){var r,n,o,a;return e=e.date,t=t.date,r=1===(e.month+"").length?"0"+e.month:e.month,n=1===(t.month+"").length?"0"+t.month:t.month,o=1===(e.day+"").length?"0"+e.day:e.day,a=1===(t.day+"").length?"0"+t.day:t.day,Number(e.year+""+r+o)>Number(t.year+""+n+a)?-1:Number(e.year+""+r+o)<Number(t.year+""+n+a)?1:0})),document.getElementById("filter_name").innerText="Все записи (".concat(d.length,")"),document.getElementById("records_count").innerText="На текущий момент их ".concat(d.length,"."),k(d);var e={},t={},n={};for(var o in d)if(d.hasOwnProperty(o)){var a=d[o];e[a.date.year]||(e[a.date.year]=0),++e[a.date.year],t[a.where]||(t[a.where]=0),++t[a.where],a.tags&&a.tags.forEach((function(e){n[e]||(n[e]=0),++n[e]}))}var i=Object.keys(e).reverse().map((function(t){return M({year:t,text:"".concat(t," (").concat(e[t],")")})}));document.getElementById("filters_year").insertAdjacentHTML("afterbegin",i.join(""));var c=Object.keys(t).sort((function(e,r){return t[e]>t[r]?-1:t[e]<t[r]?1:0})).map((function(e){return M({where:e,text:"".concat(r[e]," (").concat(t[e],")")})}));document.getElementById("filters_where").insertAdjacentHTML("afterbegin",c.join(""));var l=Object.keys(n).sort((function(e,t){return n[e]>n[t]?-1:n[e]<n[t]?1:0})).map((function(e){return M({tag:e,text:"".concat(e," (").concat(n[e],")")})}));l.splice(2,0,'<div class="dropdown-divider"></div>'),document.getElementById("filters_tag").insertAdjacentHTML("afterbegin",l.join(""));var u,s=Array.from(document.getElementsByClassName("filter-label"));function f(e,t,r){var n,o,a,i,c,l,s;N=1,H(),k((s=t,(l=e)in(c={})?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,void 0!==(n=c).year&&(o=n.year),void 0!==n.where&&(a=n.where),void 0!==n.tag&&(i=n.tag),d.filter((function(e){var t=!(void 0!==o)||e.date.year===Number(o),r=!(void 0!==a)||e.where===a,n=!(void 0!==i)||e.tags&&e.tags.includes(i);return t&&r&&n})))),u=r}function g(e){s.forEach((function(t){var r=t.dataset,n=r.activated,o=r.labelKey,a="true"===n;o===u?(t.innerText=a?C(u):e,t.dataset.activated=String(!a)):(t.innerText=C(o),t.dataset.activated="false")})),document.getElementById("filter_name").innerText=e}s.forEach((function(e){e.dataset.originalKey=e.innerText.trim()})),window.filter_by_tag=function(e){f("tag",e,"tags"),g(e),q()},Array.from(document.getElementsByClassName("filter-link")).forEach((function(e){e.addEventListener("click",(function(){"where"in e.dataset&&f("where",e.dataset.where,"sources"),"year"in e.dataset&&f("year",e.dataset.year,"years"),"tag"in e.dataset&&f("tag",e.dataset.tag,"tags"),g(e.textContent),q()}))}))})),function(){var e=s.length,t=0;for(var r in s)s.hasOwnProperty(r)&&fetch("./data/"+s[r]+".json").then((function(e){return e.json()})).then((function(r){d=d.concat(r),++t===e&&document.dispatchEvent(h)}))}(),Array.from(["unfilter_year","unfilter_where","unfilter_tag"]).forEach((function(e){document.getElementById(e).onclick=function(){N=1,H(),Array.from(document.getElementsByClassName("filter-label")).forEach((function(e){var t=e.dataset.labelKey;e.innerText=C(t),e.dataset.activated="false"})),document.getElementById("filter_name").innerText="Все материалы (".concat(d.length,")"),k(d),q()}})),document.getElementById("draw_nourl").onclick=function(){N=1,H();var e=d.filter((function(e){return!e.url}));document.getElementById("filter_name").innerText="Материалы без ссылок (".concat(e.length,")"),k(e),q()},document.getElementById("default_settings").onclick=function(){confirm("Данное действие сбросит все настройки. Продолжить?")&&G(l)},document.getElementById("settings_form").oninput=function(){var e={per_page:document.getElementById("per_page_setting").value,image_quality:document.getElementById("image_quality_setting").value,draw_mode:document.querySelector("[name=draw_mode_setting]:checked").value};console.log(e),G(e)},G(u)}(e)}))}))},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new I(n||[]);return a._invoke=function(e,t,r){var n=s;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?g:f,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=g,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s="suspendedStart",f="suspendedYield",d="executing",g="completed",h={};function m(){}function p(){}function y(){}var v={};v[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(k([])));w&&w!==r&&n.call(w,a)&&(v=w);var _=y.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function x(e){var t;this._invoke=function(r,o){function a(){return new Promise((function(t,a){!function t(r,o,a,i){var c=u(e[r],e,o);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return t("throw",e,a,i)}))}i(c.arg)}(r,o,t,a)}))}return t=t?t.then(a,a):a()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return p.prototype=_.constructor=y,y.constructor=p,y[c]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},E(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,o){var a=new x(l(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){}]);