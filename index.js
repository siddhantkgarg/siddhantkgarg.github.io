!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(a,i){for(var r,s,u=0,c=[];u<a.length;u++)s=a[u],o[s]&&c.push.apply(c,o[s]),o[s]=0;for(r in i)e[r]=i[r];for(n&&n(a,i);c.length;)c.shift().call(null,t)};var a={},o={0:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+({1:"template6",2:"template4",3:"template3",4:"template2",5:"template1",6:"templateol",7:"template5"}[e]||e)+".js",a.appendChild(i)}},t.m=e,t.c=a,t.p="http://teja2.kuikr.com/public/mon/qapqdfp/dist/2.0.1/",t(0)}([function(e,t,n){"use strict";var a=n(16),o=n(19),i=n(8),r=n(5),s=window.gmon||{cityname:"",catname:"",subcatname:""};window.qdfp_vp=window.qdfp_vp||{id:"enl_vap",ptargeting:[{key:"City",value:s.cityname},{key:"Category",value:s.catname},{key:"SubCat",value:s.subcatname}]};var u=a.pages.filter(function(e){return e.id===qdfp_vp.id?e:!1}),c=(0,i.getCookieVal)(r.A_BLOCK_KEY);if("t"===c){var l=n(35),d=(0,i.getQapSlots)(u[0]);l.showNativeAdsInSlots(d)}else o.Page.init(a.config,u[0])},,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkId="81214979",t.IS_DEV=!1,t.A_BLOCK_KEY="br_imblk"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],t.gtag=window.googletag,t.cmd=window.googletag.cmd},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearPageTargeting=t.pageTargeting=t.clearSlotTargeting=t.slotTargeting=void 0,n(6),t.slotTargeting=function(e,t){t.forEach(function(t){var n=t.key,a=t.value;e.setTargeting(n,a)})},t.clearSlotTargeting=function(e){e.clearTargeting()},t.pageTargeting=function(e){var t=googletag.pubads();e.forEach(function(e){var n=e.key,a=e.value;t.setTargeting(n,a)})},t.clearPageTargeting=function(){var e=googletag.pubads();e.clearTargeting()}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listen=function(e,t,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):console.log("listen is not supported!")},t.objectHasKey=function(e,t){return e.hasOwnProperty("key")},t.objectHasKeys=function(e,t){return t.reduce(function(t,n){return e.hasOwnProperty(n)},!0)},t.getCookieVal=function(e){var t=null,n=null,a=document.cookie.split(";");return a.forEach(function(a){t=a.split("=");var o=t[0].trim();o===e&&(n=t[1])}),n},t.getQapSlots=function(e){var t=e.ads.map(function(e){return{slot:e.slot,adcode:e.adcode}});return t}},,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config={name:"Horizontal",desc:"default",id:"horizontal",preload:!0},t.pages=[{name:"snb",id:"1",ptargeting:[],ads:[{top:!0,slot:"mon_snb_mh",adcode:"Desktop_SnB_Top_735X125(728X90)",sizes:[[735,125],[728,90],[970,90],[970,250]],targeting:[]},{top:!1,slot:"mon_snb_skyscpr",adcode:"Desktop_SnB_160X600",sizes:[[160,600],[180,150]],targeting:[]},{top:!1,slot:"mon-snb-sticky-left",adcode:"Desktop_SnB_Sticky_Left_160X600",sizes:[[160,600]],targeting:[]},{top:!1,slot:"mon-snb-sticky-right",adcode:"Desktop_SnB_Sticky_Right_160X600",sizes:[[160,600]],targeting:[]}],dynads:[{adcode:"Desktop_SnB_mid_735X125(728X90)",sizes:[[735,125],[728,90]],targeting:[]}]}]},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.displaySlot=t.defineSlot=void 0;var o=n(5),i=(n(7),n(6)),r=(t.defineSlot=function(e){var t=s(e);return function(){i.gtag.defineSlot.apply(i.gtag,a(t)).addService(i.gtag.pubads())}},function(e){return"/"+o.NetworkId+"/"+e}),s=function(e){var t=e.adcode,n=e.sizes,a=e.slot,o=r(t);return[o,n,a]};t.displaySlot=function(e){return function(){i.gtag.display(e)}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadGpt=function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript";var t="https:"==document.location.protocol;e.src=(t?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=(n(6),n(8)),s=n(18),u=n(20),c=a(u),l=n(17),d=n(5),g=n(7);t.Page=function(){function e(t,n){o(this,e),this.adSlots=[],this.pdata=n,this.config=t,this.pageTarget=this.getTargeting(),this.addListeners(),d.IS_DEV&&this.dev()}return i(e,null,[{key:"init",value:function(t,n){return new e(t,n)}}]),i(e,[{key:"dev",value:function(){var e=this,t=document.getElementById("btn-1");t&&t.addEventListener("click",function(t){e.configurePostload()})}},{key:"getTargeting",value:function(){return window.qdfp_vp.hasOwnProperty("ptargeting")?window.qdfp_vp.ptargeting:[]}},{key:"addListeners",value:function(){(0,r.listen)("DOMContentLoaded",window,this.onDomLoadedHandler.bind(this)),(0,r.listen)("load",window,this.onLoadHandler.bind(this))}},{key:"onDomLoadedHandler",value:function(){this.config.preload&&(this.configurePreload(),(0,s.loadGpt)())}},{key:"onLoadHandler",value:function(){this.configurePostload(),this.config.preload||(0,s.loadGpt)()}},{key:"configurePreload",value:function(){var e=this.pdata.ads;this.lineUpAds(e),this.disableInitialLoad(),this.showPreloadAds()}},{key:"configurePostload",value:function(){this.config.preload?this.showPostloadAds():((0,s.loadGpt)(),this.sendAdRequest(),this.enableSingleRequest(),this.displayAdUnits())}},{key:"disableInitialLoad",value:function(){var e=this,t=function(){(0,g.pageTargeting)(e.pageTarget),googletag.pubads().disableInitialLoad(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()};this.enqueue(t)}},{key:"enableSingleRequest",value:function(){var e=this,t=function(){(0,g.pageTargeting)(e.pageTarget),googletag.pubads().enableSingleRequest(),googletag.pubads().collapseEmptyDivs(),googletag.enableServices()};this.enqueue(t)}},{key:"getAds",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],n=e.filter(function(e){return e.top===t});return n}},{key:"lineUpAds",value:function(e){var t,n=this,a=e.map(function(e){return t=new c["default"](e),n.adSlots.push(t),t.defineSlot()});this.multiEnqueue(a)}},{key:"showPreloadAds",value:function(){var e=this.getAds(this.pdata.ads,!0),t=e.length-1,n=e.map(function(e,n){return function(){googletag.display(e.slot),n===t&&googletag.pubads().refresh()}});this.multiEnqueue(n)}},{key:"showPostloadAds",value:function(){var e=[],t=this.adSlots.filter(function(t){return t.ad.top||e.push(t.getSpSlot()),t.ad.top===!1}),n=t.length-1,a=t.map(function(t,a){var o=t.ad;return function(){googletag.display(o.slot),a===n&&googletag.pubads().refresh(e)}});this.multiEnqueue(a)}},{key:"showDynamic",value:function(e){var t=this,n=this.pdata.dynads;n.forEach(function(n){n.slot=e;var a=(0,l.defineSlot)(n);t.enqueue(a),t.enableSingleRequest();var o=(0,l.displaySlot)(e);t.enqueue(o)})}},{key:"sendAdRequest",value:function(){var e=this,t=this.pdata.ads;t.forEach(function(t){var n=(0,l.defineSlot)(t);e.enqueue(n)})}},{key:"multiEnqueue",value:function(e){var t=this;e.forEach(function(e){t.enqueue(e)})}},{key:"enqueue",value:function(e){googletag.cmd.push(e)}},{key:"displayAdUnits",value:function(){var e=this,t=this.pdata.ads;t.forEach(function(t){var n=(0,l.displaySlot)(t.slot);e.enqueue(n)})}}]),e}()},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(5),s=n(7),u=(n(6),function(){function e(t){o(this,e),this.ad=t,this.gptSlot="",this.slotTarget=this.getTargeting()}return i(e,[{key:"getTargeting",value:function(){var e=this.ad.adcode;return window.qdfp_vp.hasOwnProperty("stargeting")&&window.qdfp_vp.stargeting.hasOwnProperty(e)?window.qdfp_vp.stargeting[e]:[]}},{key:"getSpSlot",value:function(){return this.gptSlot}},{key:"defineSlot",value:function(){var e=this,t=this.getSlotParams();return function(){var n,o=(n=googletag).defineSlot.apply(n,a(t)).addService(googletag.pubads());(0,s.slotTargeting)(o,e.slotTarget),e.gptSlot=o}}},{key:"getAdUnitPath",value:function(e){return"/"+r.NetworkId+"/"+e}},{key:"getSlotParams",value:function(){var e=this.ad,t=e.adcode,n=e.sizes,a=e.slot,o=this.getAdUnitPath(t);return[o,n,a]}}]),e}());t["default"]=u},,,,,,,,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Constants={domain:"http://"+document.location.host+"/",sessionCap:3,nativeAdApi:"getNativeAdForOverlay",cookieName:"native_overlay_session_count",imageHost:"http://teja2.kuikr.com/"}},function(e,t,n){"use strict";function a(e){var t={city:"ALL"};t=r.Targeting.getDataLayerParams(t),t=r.Targeting.getGmonParams(t);var n={adCodes:JSON.stringify(e),city:t.city};o.Util.ajax({method:"POST",url:i.Constants.domain+"getNativeAdsForSlots",data:n,onSuccess:function(e){try{var t=JSON.parse(e.responseText);Object.keys(t).forEach(function(e){l(e,t[e])})}catch(n){console.log(n)}}})}var o=n(38),i=n(34),r=n(37),s=n(36),u=n(39),c=function(){var e=0;if("undefined"!=typeof Storage){try{var t=sessionStorage.getItem(i.Constants.cookieName)}catch(n){}void 0!==t&&(e=t)}if(e++,e<=i.Constants.sessionCap){var a={city:"",cat:"",sub:""},a=r.Targeting.getDataLayerParams(a);if(o.Util.ajax({method:"GET",url:i.Constants.domain+i.Constants.nativeAdApi,data:a,onSuccess:function(e){try{var t=JSON.parse(e.responseText),n=new s.NativeAdOverlay;u.create(n.container.id,t.templateType,t)}catch(a){void 0!==n.container&&n.container.remove(),console.log(a)}}}),"undefined"!=typeof Storage)try{sessionStorage.setItem(i.Constants.cookieName,e)}catch(n){}}},l=function(e,t){try{document.getElementById(e).innerHTML="",u.create(e,t.templateType,t)}catch(n){console.log(n)}},d=function(){try{var e=new s.NativeAdOverlay;u.create(e.container.id,"onlineleads","")}catch(t){console.log(t)}};e.exports={showNativeAdInDiv:l,showNativeAdsInSlots:a,showNativeAdInOverlay:c,showStaticNativeAdInOverlay:d}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.NativeAdOverlay=function(){function e(){n(this,e),this.createContainer()}return a(e,[{key:"createContainer",value:function(){var e=document.createElement("div");e.id="ad-overlay-div",document.body.appendChild(e),this.container=e,window.addEventListener("overlay-close",function(){e.remove()})}},{key:"remove",value:function(){this.container.remove()}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.Targeting=function(){function e(){n(this,e)}return a(e,null,[{key:"getDataLayerParams",value:function(e){var t=e||{};if(void 0!==window.dataLayer&&void 0!==window.dataLayer[0]){var n=window.dataLayer[0];void 0!==n.USER_CITY_NAME&&(t.city=n.USER_CITY_NAME),void 0!==n.Category_Name&&(t.cat=n.Category_Name),void 0!==n.SubCategory_Name&&(t.sub=n.SubCategory_Name)}return t}},{key:"getGmonParams",value:function(e){var t=e||{},n=window.gmon||{};return void 0!==n.cityname&&(t.city=n.cityname),t}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.Util=function(){function e(){n(this,e)}return a(e,null,[{key:"ajax",value:function(e){var t=new XMLHttpRequest;if(e.data)var n=Object.keys(e.data).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e.data[t])}).join("&");"GET"===e.method?(t.open("GET",e.url+"?"+n,!0),t.send()):"POST"===e.method&&(t.open("POST",e.url,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send(n)),t.onreadystatechange=function(){4===t.readyState&&(200===t.status?e.onSuccess(t):(e.onFailure&&e.onFailure(t),console.log("Error: "+t.statusText)))}}},{key:"getCookie",value:function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}}]),e}()},function(e,t,n){function a(e,t,n,a){var o=document.getElementById(e);o.innerHTML=t.html,t.init(e,n,a)}function o(e){return e.map(function(e){return e.img="http://teja2.kuikr.com"+e.img,e.landing=decodeURIComponent(e.landing),e.title=decodeURIComponent(e.title),e.desc=decodeURIComponent(e.desc),void 0!==e.alt&&""!==e.alt||(e.alt="Read More"),e})}e.exports={create:function(e,t,i){var r=i.creatives;switch(void 0!==r&&(r=o(r)),t){case 1:n.e(5,function(t){var o=n(9);a(e,o,r,i.campaignName)});break;case 2:n.e(4,function(t){var o=n(10);a(e,o,r,i.campaignName)});break;case 3:n.e(3,function(t){var o=n(11);a(e,o,r,i.campaignName)});break;case 4:n.e(2,function(t){var o=n(12);a(e,o,r,i.campaignName)});break;case 5:n.e(7,function(t){var o=n(13);a(e,o,r,i.campaignName)});break;case 6:n.e(1,function(t){var o=n(14);a(e,o,r,i.campaignName)});break;case"onlineleads":n.e(6,function(t){var o=n(15);a(e,o,r)})}}}}]);