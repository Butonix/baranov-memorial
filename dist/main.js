!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(e,t,r){e.exports=r(3)},function(e,t,r){r(2),e.exports=r(4)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);!self.document||"insertAdjacentHTML"in document.createElementNS("http://www.w3.org/1999/xhtml","_")||(HTMLElement.prototype.insertAdjacentHTML=function(e,t){var r,n,o,a=this.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml","_"),i=this.parentNode;switch(a.innerHTML=t,e.toLowerCase()){case"beforebegin":for(;r=a.firstChild;)i.insertBefore(r,this);break;case"afterbegin":for(n=this.firstChild;r=a.lastChild;)n=this.insertBefore(r,n);break;case"beforeend":for(;r=a.firstChild;)this.appendChild(r);break;case"afterend":for(o=this.nextSibling;r=a.lastChild;)o=i.insertBefore(r,o)}}),document.addEventListener("DOMContentLoaded",(function(){var e,t=o.a.mark(v),r={igromania:"igromania.svg",dtf:"dtf.png",stopgame:"stopgame.png",kanobu:"kanobu.png",lki:"lki.png",bestgamer:"bestgamerICON.png",zog:"zog.png",vch:"vch.png"},n={igromania:"Игромания",dtf:"DTF",stopgame:"StopGame.ru",kanobu:"Канобу",lki:"ЛКИ",bestgamer:"BestGamer.ru",zog:"Zone of Games",vch:"Вечерние Челны"},a=[],i=[],c=new CustomEvent("records.loaded",{bubbles:!0});var l='\n        <div class="col-xs-12 col-md-4 col-xl-3 pb-4 memorial-card-column">\n            <div class="card memorial-card {nourl}" data-year="{year}" data-what="{where}">\n                {logo}\n                {img}\n                <div class="card-body d-flex flex-column justify-content-between">\n                    <div>\n                        <h5 class="card-title">{title}</h5>\n                        <p class="card-text">{teaser_text}</p>\n                    </div>\n                </div>\n                    <div class="card-footer text-muted">\n                        {url} <span class="float-right date-span">{date}</span>\n                    </div>\n            </div>\n        </div>',u='<img class="logo" src="{logo}" alt="logo">',s='<img src="{img}" class="card-img-top" alt="card image" loading="lazy">',f='<a href="{url}" target="_blank" class="btn btn-primary btn-sm">Перейти к материалу</a>',d='<a href="https://discord.gg/zDxKb44" target="_blank" class="btn btn-danger btn-sm">Нужна помощь в поиске!</a>',h=document.querySelector("#records_container"),p="./logo/placeholder.jpg",g=document.getElementById("placeholder"),m=10;function y(e){var t,n,o=l.replace("{title}",e.title).replace("{teaser_text}",e.teaser_text).replace("{date}",(t=e.date,n=t.day+"","0"===n?n="":1===n.length?n="0"+n+".":n+=".",n=1===(t.month+"").length?n+"0"+t.month+".":n+t.month+".",n+=t.year)).replace("{year}",e.date.year.toString()).replace("{where}",e.where);o=e.url?o.replace("{url}",f.replace("{url}",e.url)).replace("{nourl}",""):o.replace("{url}",d).replace("{nourl}","border-danger"),o=e.img?o.replace("{img}",s.replace("{img}","//images.weserv.nl/?url="+e.img+"&q=60&w=480&l=5&il")):o.replace("{img}",s.replace("{img}",p)),o=r[e.where]?o.replace("{logo}",u.replace("{logo}","./res/image/"+r[e.where])):o.replace("{logo}",""),h.insertAdjacentHTML("beforeend",o)}function v(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=o.a.keys(e);case 1:if((t.t1=t.t0()).done){t.next=8;break}if(r=t.t1.value,!e.hasOwnProperty(r)){t.next=6;break}return t.next=6,e[r];case 6:t.next=1;break;case 8:case"end":return t.stop()}}),t)}function w(t){void 0===t?t=i:i=t,t=function(e){var t=E,r=Math.ceil(e.length/L);console.group("Pagination details"),console.log("Total pages:",r),console.log("Current page:",E),console.log("Visible pages:",k),console.log("Pages before and after:",j),console.groupEnd(),x.innerHTML="",_.innerHTML="";var n=1,o=r;r>=k&&(o=k,t>j+1&&(n=t-j,o=t+j),t>=r-j&&(n=r-k+1,o=r));console.groupCollapsed("Pagination drawing");var a="";r>2&&(a+=b.replace(/{num}/,"1").replace(/{num}/,"&laquo; <em>1</em>").replace(/{state}/,1===t?"active":""),console.log("<<"));for(var i=n;i<=o;++i){if(r>2){if(t<=k&&1===i)continue;if(t>=r-k+1&&i===r)continue}a+=b.replace(/{num}/g,i).replace(/{state}/,i===t?"active":""),console.log("Page",i)}r>2&&(a+=b.replace(/{num}/,r.toString()).replace(/{num}/,"<em>".concat(r,"</em> &raquo;")).replace(/{state}/,t===r?"active":""));console.log(">>"),console.groupEnd(),x.insertAdjacentHTML("beforeend",a),_.insertAdjacentHTML("beforeend",a),document.querySelectorAll(".paginator-button").forEach((function(e){e.addEventListener("click",(function(){S(),E=Number(e.dataset.page),console.log("Drawing page",E),w(),O()}))}));var c=(t-1)*L;return e.slice(c,c+L)}(t),"foreach"===localStorage.getItem("draw_mode")?function(e){console.log("drawing with foreach"),e.forEach((function(e){y(e)}))}(t):function(t){console.log("drawing with generator");var r=v(t);e&&clearInterval(e);e=setInterval((function(){var t=r.next();t.done?clearInterval(e):y(t.value)}),m)}(t),setTimeout((function(){document.getElementById("records_container").style.height="",g.classList.remove("d-block"),g.classList.add("d-none")}),m)}var b='<li class="page-item {state}"><button class="page-link paginator-button" data-page="{num}">{num}</button></li>',x=document.querySelector("#pagination_container_top"),_=document.querySelector("#pagination_container_bottom"),E=1,L=localStorage.getItem("per_page")||24,k=localStorage.getItem("visible_pages")||6,j=Math.floor(k/2)-1;function S(){document.getElementById("records_container").style.height="1080px",Array.from(document.querySelectorAll(".memorial-card-column")).forEach((function(e){return e.remove()}))}function T(e){var t,r;return void 0!==e.year&&(t=e.year),void 0!==e.where&&(r=e.where),a.filter((function(e){return void 0!==t&&void 0!==r?e.date.year===Number(t)&&e.where===r:void 0!==t?e.date.year===Number(t):void 0===r||e.where===r}))}function O(){setTimeout((function(){document.getElementById("start").scrollIntoView({behavior:"smooth",block:"start"})}),m)}document.addEventListener("records.loaded",(function(){a=a.sort((function(e,t){var r,n,o,a;return e=e.date,t=t.date,r=1===(e.month+"").length?"0"+e.month:e.month,n=1===(t.month+"").length?"0"+t.month:t.month,o=1===(e.day+"").length?"0"+e.day:e.day,a=1===(t.day+"").length?"0"+t.day:t.day,Number(e.year+""+r+o)>Number(t.year+""+n+a)?-1:Number(e.year+""+r+o)<Number(t.year+""+n+a)?1:0})),document.getElementById("filter_name").innerText="Все записи (".concat(a.length,")"),document.getElementById("records_count").innerText="На текущий момент их ".concat(a.length,"."),w(a);var e={},t={};for(var r in a)if(a.hasOwnProperty(r)){var o=a[r];e[o.date.year]||(e[o.date.year]=0),++e[o.date.year],t[o.where]||(t[o.where]=0),++t[o.where]}var i='<a class="dropdown-item filter-link" data-where="{where}" data-year="{year}" href="javascript:void(0)">{text}</a>',c="";Object.keys(e).reverse().forEach((function(t){c+=i.replace(/{filter}/,"year").replace(/data-where="{where}"/,"").replace(/{year}/,t).replace(/{text}/,"".concat(t," (").concat(e[t],")"))})),document.querySelector("#filters_year").insertAdjacentHTML("afterbegin",c);var l="";Object.keys(t).sort((function(e,r){return t[e]>t[r]?-1:t[e]<t[r]?1:0})).forEach((function(e){l+=i.replace(/{filter}/,"source").replace(/data-year="{year}"/,"").replace(/{where}/,e).replace(/{text}/,"".concat(n[e]," (").concat(t[e],")"))})),document.querySelector("#filters_where").insertAdjacentHTML("afterbegin",l),document.querySelectorAll(".filter-link").forEach((function(e){e.addEventListener("click",(function(){E=1,S(),"where"in e.dataset&&w(T({where:e.dataset.where})),"year"in e.dataset&&w(T({year:e.dataset.year})),document.getElementById("filter_name").innerText=e.textContent,O()}))}))})),function(){var e=["dtf_main","igromania_main","igromania_forum","stopgame_main","stopgame_stream","stopgame_infact","kanobu","lki","bestgamer","zog","vch"],t=e.length,r=0;for(var n in e)fetch("./data/"+e[n]+".json").then((function(e){return e.json()})).then((function(e){a=a.concat(e),++r===t&&document.dispatchEvent(c)}))}(),Array.from(["#unfilter_year","#unfilter_where"]).forEach((function(e){document.querySelector(e).onclick=function(){E=1,S(),document.getElementById("filter_name").innerText="Все материалы (".concat(a.length,")"),w(a),O()}})),document.querySelector("#draw_nourl").onclick=function(){E=1,S();var e=a.filter((function(e){return!e.url}));document.getElementById("filter_name").innerText="Материалы без ссылок (".concat(e.length,")"),w(e),O()}}))},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n=s;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?h:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s="suspendedStart",f="suspendedYield",d="executing",h="completed",p={};function g(){}function m(){}function y(){}var v={};v[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==r&&n.call(b,a)&&(v=b);var x=y.prototype=g.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){var t;this._invoke=function(r,o){function a(){return new Promise((function(t,a){!function t(r,o,a,i){var c=u(e[r],e,o);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return t("throw",e,a,i)}))}i(c.arg)}(r,o,t,a)}))}return t=t?t.then(a,a):a()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function T(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(E.prototype),E.prototype[i]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o){var a=new E(l(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){}]);