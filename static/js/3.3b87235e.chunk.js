(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{426:function(t,e,n){"use strict";n.r(e),n.d(e,"LiskButton",function(){return f}),n.d(e,"LiskButtonSend",function(){return v}),n.d(e,"LiskButtonSign",function(){return g}),n.d(e,"LiskButtonVote",function(){return h});var r=n(109),o=function(t,e,n){function r(){e&&e()}function o(){n&&n()}if(navigator.msLaunchUri)!function(t,e,n){navigator.msLaunchUri(t,n,e)}(t,e,n);else{var c=function(){var t=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;return{isOpera:t,isFirefox:"undefined"!=typeof InstallTrigger,isSafari:/^((?!chrome|android).)*safari/i.test(navigator.userAgent),isChrome:!!window.chrome&&!t,isIE:!!document.documentMode,isIOS:/iPad|iPhone|iPod/.test(navigator.platform)}}();c.isFirefox?function(t,e,n){var r=document.querySelector("#hiddenIframeUriHandler");r||(r=s(document.body,"about:blank"));try{r.contentWindow.location.href=t,n()}catch(t){"NS_ERROR_UNKNOWN_PROTOCOL"===t.name&&e()}}(t,r,o):c.isChrome||c.isIOS?function(t,e,n){for(var r=setTimeout(function(){e(),s.remove()},1e3),o=window;o!==o.parent;)o=o.parent;var s=i(o,"blur",function(){clearTimeout(r),s.remove(),n()});window.location=t}(t,r,o):c.isSafari?u(t,e,n):c.isIE?function(t,e,n){10===a()?function(t,e,n){var r=setTimeout(e,1e3);window.addEventListener("blur",function(){clearTimeout(r),n()});var o=document.querySelector("#hiddenIframeUriHandler");o||(o=s(document.body,"about:blank"));try{o.contentWindow.location.href=t}catch(t){e(),clearTimeout(r)}}(t,e,n):9===a()||11===a()?u(t,e,n):function(t,e,n){var r=window.open("","","width=0,height=0");r.document.write("<iframe src='"+t+"'></iframe>"),setTimeout(function(){try{r.setTimeout("window.close()",1e3),n()}catch(t){r.close(),e()}},1e3)}(t,e,n)}(t,r,o):r()}};function i(t,e,n){return t.addEventListener?(t.addEventListener(e,n),{remove:function(){t.removeEventListener(e,n)}}):(t.attachEvent(e,n),{remove:function(){t.detachEvent(e,n)}})}function s(t,e){var n=document.createElement("iframe");return n.src=e,n.id="hiddenIframeUriHandler",n.style.display="none",t.appendChild(n),n}function u(t,e,n){var r=setTimeout(function(){e(),u.remove()},1e3),o=document.querySelector("#hiddenIframeUriHandler");o||(o=s(document.body,"about:blank"));var u=i(window,"blur",function(){clearTimeout(r),u.remove(),n()});o.contentWindow.location.href=t}function a(){var t,e=-1;return"Microsoft Internet Explorer"===navigator.appName?(t=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t)&&(e=parseFloat(RegExp.$1)),e):("Netscape"===navigator.appName&&(t=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(t)&&(e=parseFloat(RegExp.$1))),e)}var c=function(t){switch(t.kind){case"send":return"lisk://main/transactions/send?recipient="+t.recipient+"&amount="+t.amount;case"vote":return"lisk://main/voting/vote?"+(t.unvotes?"unvotes="+t.unvotes:"")+"&"+(t.votes?"votes="+t.votes:"");case"sign-nano":return"lisk://main/transactions/sign-message";case"sign-hub":return"lisk://sign-message?"+(t.message?"message="+t.message:"")}},l=function(t,e,n){return o(t,e,n)},d={isIOS:/iPhone|iPad|iPod/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent)},p={desktop:"https://www.lisk.io/hub"},f=function(){function t(){var t=this;this.urls=p,this.onError=function(){var e=t.urls.desktop;d.isAndroid&&t.urls.android&&(e=t.urls.android),d.isIOS&&t.urls.ios&&(e=t.urls.ios),window.location.href=e}}return t.prototype.openUrl=function(t){l(t,this.onError,this.onSuccess)},t.prototype.onSuccess=function(){},t.prototype.hostData=function(t){var e;return void 0===t&&(t=""),{class:(e={},e[t]=!0,e)}},Object.defineProperty(t,"is",{get:function(){return"lisk-button"},enumerable:!0,configurable:!0}),t}(),v=function(){function t(){var t=this;this.urls=p,this.onError=function(){var e=t.urls.desktop;d.isAndroid&&t.urls.android&&(e=t.urls.android),d.isIOS&&t.urls.ios&&(e=t.urls.ios),window.location.href=e},this.classNames="lisk-btn-send-wrapper",this.open=function(){var e=c({amount:t.amount,recipient:t.recipient,kind:"send"});t.openUrl(e)},this.getTitle=function(){return t.buttonTitle||"Send "+t.amount+" LSK to "+t.recipient}}return t.prototype.openUrl=function(t){l(t,this.onError,this.onSuccess)},t.prototype.onSuccess=function(){},t.prototype.hostData=function(t){var e;return void 0===t&&(t=""),{class:(e={},e[t]=!0,e)}},t.prototype.render=function(){return Object(r.b)("button",{onClick:this.open},this.getTitle())},Object.defineProperty(t,"is",{get:function(){return"lisk-button-send"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{amount:{type:Number,attr:"amount"},buttonTitle:{type:String,attr:"button-title"},classNames:{type:String,attr:"class-names"},recipient:{type:String,attr:"recipient"}}},enumerable:!0,configurable:!0}),t}(),g=function(){function t(){var t=this;this.urls=p,this.onError=function(){var e=t.urls.desktop;d.isAndroid&&t.urls.android&&(e=t.urls.android),d.isIOS&&t.urls.ios&&(e=t.urls.ios),window.location.href=e},this.sourceId="",this.classNames="lisk-btn-sign-wrapper",this.open=function(){var e=t.type,n=t.message,r=t.sourceId?t.getValue():n,o=c({message:r,kind:"nano"===e?"sign-nano":"sign-hub"});t.openUrl(o)},this.getTitle=function(){return t.buttonTitle||"Use "+("nano"===t.type?"Lisk Nano":"Lisk Hub")+" to sign the message"}}return t.prototype.openUrl=function(t){l(t,this.onError,this.onSuccess)},t.prototype.onSuccess=function(){},t.prototype.hostData=function(t){var e;return void 0===t&&(t=""),{class:(e={},e[t]=!0,e)}},t.prototype.getValue=function(){return document.querySelector("#"+this.sourceId).value},t.prototype.render=function(){return Object(r.b)("button",{onClick:this.open},this.getTitle())},Object.defineProperty(t,"is",{get:function(){return"lisk-button-sign"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonTitle:{type:String,attr:"button-title"},classNames:{type:String,attr:"class-names"},message:{type:String,attr:"message"},sourceId:{type:String,attr:"source-id"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),t}(),h=function(){function t(){var t=this;this.urls=p,this.onError=function(){var e=t.urls.desktop;d.isAndroid&&t.urls.android&&(e=t.urls.android),d.isIOS&&t.urls.ios&&(e=t.urls.ios),window.location.href=e},this.classNames="lisk-btn-vote-wrapper",this.open=function(){var e=c({votes:t.votes,unvotes:t.unvotes,kind:"vote"});t.openUrl(e)},this.getTitle=function(){return t.buttonTitle||t.getDefaultTitle()},this.getDefaultTitle=function(){if(t.votes){var e=t.votes.split(",");return"Vote for "+e[0]+((n=e.slice(1)).length?" and "+n.length+" others...":"")}if(t.unvotes){var n,r=t.unvotes.split(",");return"Unvote "+r[0]+((n=r.slice(1)).length?" and "+n.length+" others...":"")}}}return t.prototype.openUrl=function(t){l(t,this.onError,this.onSuccess)},t.prototype.onSuccess=function(){},t.prototype.hostData=function(t){var e;return void 0===t&&(t=""),{class:(e={},e[t]=!0,e)}},t.prototype.render=function(){return Object(r.b)("button",{onClick:this.open},this.getTitle())},Object.defineProperty(t,"is",{get:function(){return"lisk-button-vote"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonTitle:{type:String,attr:"button-title"},classNames:{type:String,attr:"class-names"},unvotes:{type:String,attr:"unvotes"},votes:{type:String,attr:"votes"}}},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=3.3b87235e.chunk.js.map