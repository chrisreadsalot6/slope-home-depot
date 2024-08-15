
/*@preserve
***Version 2.11.0***
*/

/*@license
 *                       Copyright 2002 - 2018 Qualtrics, LLC.
 *                                All rights reserved.
 *
 * Notice: All code, text, concepts, and other information herein (collectively, the
 * "Materials") are the sole property of Qualtrics, LLC, except to the extent
 * otherwise indicated. The Materials are proprietary to Qualtrics and are protected
 * under all applicable laws, including copyright, patent (as applicable), trade
 * secret, and contract law. Disclosure or reproduction of any Materials is strictly
 * prohibited without the express prior written consent of an authorized signatory
 * of Qualtrics. For disclosure requests, please contact notice@qualtrics.com.
 */

try {
  !function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e){(void 0===window.QSI.PopOver||window.QTest)&&(QSI.PopOver=QSI.util.Creative(QSI.BuildElementModule,{initialize:function(t){if(this.globalInitialize(t),this.minTop=t.elements.MinTop,this.minLeft=t.elements.MinLeft,this.elements=t.elements.Elements||[],this.imageQueue=0,this.loaded=!1,this.timeout=!1,this.removed=!1,this.hasCreativeEmbeddedTarget=t.hasCreativeEmbeddedTarget,this.shouldShow()&&(this.addMessageListener(),QSI.util.processLocators(this.elements,this.options.displayOptions),this.container=this.build(),document.body.appendChild(this.container),this.display(),this.firstTabbableElement)){this.originalOutlineStyling=this.firstTabbableElement.style.outline,this.firstTabbableElement.style.outline="none",this.firstTabbableElement.focus();var e=this;this.addFocusHighlighting=function(t){try{9===t.which&&(e.firstTabbableElement.style.outline=e.originalOutlineStyling,QSI.util.stopObserving(e.firstTabbableElement,"keydown",e.addFocusHighlighting))}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}},QSI.util.observe(this.firstTabbableElement,"keydown",this.addFocusHighlighting)}},addMessageListener:function(){var t=this;this.displayOptions.autoClose&&QSI.util.observe(window,"message",(function(e){try{if(QSI.Orchestrator&&QSI.Orchestrator.isMessageEventOriginAllowed&&!QSI.Orchestrator.isMessageEventOriginAllowed(e.origin))return;"closeQSIWindow"===e.data&&t.close()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}}))},display:function(){var t=this;this.displayOptions.prebuild&&!this.displayOptions.auto?this.initializeIframes():!this.displayOptions.prebuild&&this.displayOptions.auto?QSI.util.when(QSI.util.getTimeout(this.displayOptions.delay)).done((function(){t.removed||(t.popup(),t.poppedUp=!0)})):this.displayOptions.prebuild&&this.displayOptions.auto&&(this.initializeIframes(),QSI.util.when(this.container.loadingDeferred,QSI.util.getTimeout(this.displayOptions.delay)).done((function(){t.removed||(t.popup(),t.poppedUp=!0)})))},close:function(){try{this.removed=!0,this.refocus(),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.displayOptions.shadowBox&&this.shadowBox&&this.shadowBox.parentNode&&(this.shadowBox.parentNode.removeChild(this.shadowBox),QSI.util.startScrolling()),QSI.util.stopObserving(window,"resize",this.resizeHandler),QSI.callbacks&&QSI.callbacks[this.id]&&QSI.callbacks[this.id].onClose&&QSI.callbacks[this.id].onClose()}catch(t){}},refocus:function(){try{if(this.hasIframe&&QSI.util.isIE8()){var t=document.body.scrollTop,e=document.body.scrollLeft,i=QSI.util.build("input",{type:"text"});document.body.appendChild(i),i.focus(),document.body.removeChild(i),window.scrollTo(e,t)}}catch(t){}},popup:function(){try{this.resetStyles();var t=1e3*this.displayOptions.close,e=this;if(0!==t&&this.displayed.done((function(){window.setTimeout((function(){try{e.close()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}}),t)})),this.impress(),!this.displayOptions.prebuild){this.initializeIframes();var i=this.container.getElementsByClassName("scrollable")[0];if(i&&this.hasCreativeEmbeddedTarget){var s=parseInt(i.style.height,10),o=parseInt(i.style.width,10),n=s/2-37.5,a=o/2-37.5,l=new QSI.LoadingAnimationElement,r=l.buildAnimation(75,n,a);i.appendChild(r),l.startAnimation(100),QSI.util.when(this.container.loadingDeferred).done((function(){l.stopAnimation()}))}}this.displayOptions.shadowBox&&(this.shadowBox=this.buildShadowBox(),QSI.util.stopScrolling(),document.body.appendChild(this.shadowBox),this.displayOptions.shadowBoxFade&&QSI.Animation.animateStyle(this.shadowBox,{from:{opacity:0},to:{opacity:this.displayOptions.shadowBoxOpacity}},500,"linear")),this.container.style.zIndex=QSI.global.currentZIndex++;var d=this.getFinalPosition();if(this.displayOptions.animate){var h=this.getStartPosition();QSI.Animation.animateStyle(this.container,{from:{top:h.y,left:h.x},to:{top:d.y,left:d.x}},this.displayOptions.duration,this.displayOptions.transition).done((function(){e.target={x:d.x,y:d.y},e.finish()}))}else this.target={x:d.x,y:d.y},this.finish();this.resizeHandler=function(){try{e.resize()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}},QSI.util.observe(window,"resize",this.resizeHandler)}catch(t){QSI.dbg.e(t)}},getYPosition:function(t){return t.top-this.minTop},getXPosition:function(t){return t.left-this.minLeft},getElementStyle:function(t,e){return{top:this.getYPosition(e)+"px",left:this.getXPosition(e)+"px",position:"absolute",zIndex:t.zIndex,width:t.width+"px",height:t.height+"px",backgroundColor:t.backgroundColor,borderWidth:t.borderWidth+"px",borderColor:t.borderColor,borderStyle:"solid",borderRadius:t.borderRadius+"px",display:t.display}},buildShadowBox:function(){var t=this.displayOptions.shadowBoxOpacity,e=this.displayOptions.shadowBoxColor,i=QSI.util.getPageSize(),s=i.width,o=i.height,n=QSI.util.getScrollOffsets();return QSI.util.build("div",{className:"QSIPopOverShadowBox",style:{position:"absolute",backgroundColor:e,left:n.left+"px",top:n.top+"px",width:s+"px",height:o+"px",opacity:t,zIndex:QSI.global.currentZIndex++,filter:"alpha(opacity="+100*t+")"}})},updateShadowBox:function(){if(this.shadowBox){var t=QSI.util.getPageSize(),e=t.width,i=t.height;this.shadowBox.style.width=e+"px",this.shadowBox.style.height=i+"px"}},build:function(){for(var t=[],e=0,i=0,s=0,o=[],n=0,a=this.elements.length;n<a;n++){var l=this.buildElement(this.elements[n]);l&&(l.style&&l.style.borderWidth&&(s=2*parseInt(l.style.borderWidth,10)),l.bc&&l.bc.x+s>e&&(e=l.bc.x+s),l.bc&&l.bc.y+s>i&&(i=l.bc.y+s),t.push(l),o.push(l.loadingDeferred))}this.width=e,this.height=i;var r=Math.floor(1.2*this.width),d=Math.floor(1.2*this.height),h="fixed";QSI.util.isFixed()||(h="absolute");var u=QSI.util.build("div",{className:"QSIPopOver "+this.id+"_PopOverContainer",style:{position:h,top:-d+"px",left:-r+"px"}},t);u.loadingDeferred=QSI.util.when.apply(this,o);var c=u.querySelectorAll("[tabindex]");if(c&&c.length>0){this.firstTabbableElement=c[0],this.lastTabbableElement=c[c.length-1],this.lastTabbableElementIsIframe=this.lastTabbableElement.querySelectorAll("iframe").length>0,this.lastTabbableElementIsIframe&&(this.hidden=QSI.util.build("div",{tabindex:"0"}),QSI.util.observe(this.hidden,"focus",(function(){try{p.firstTabbableElement.focus()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}})),u.appendChild(this.hidden));var p=this;QSI.util.observe(u,"keydown",(function(t){try{9===t.which&&(t.target!==p.lastTabbableElement||t.shiftKey?t.target===p.firstTabbableElement&&t.shiftKey&&(t.preventDefault(),p.lastTabbableElement.focus()):p.lastTabbableElementIsIframe||(t.preventDefault(),p.firstTabbableElement.focus()))}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}}))}return u},getFinalPosition:function(){var t=this.width,e=this.height,i=QSI.util.getScrollOffsets(),s=QSI.util.getPageSize(),o=s.width,n=s.height;t>o&&(t=o),e>n&&(e=n);var a=(o-t)/2,l=(n-e)/2;switch(this.displayOptions.targetPosition){default:case"MC":a=(o-t)/2,l=(n-e)/2;break;case"ML":a=20,l=(n-e)/2;break;case"TL":a=20,l=20;break;case"BL":a=20,l=n-e-20;break;case"TC":a=(o-t)/2,l=20;break;case"TR":a=o-t-20,l=20;break;case"MR":a=o-t-20,l=(n-e)/2;break;case"BR":a=o-t-20,l=n-e-20;break;case"BC":a=(o-t)/2,l=n-e-20}return QSI.util.isFixed()||(a+=i.left,l+=i.top),{x:a,y:l}},getStartPosition:function(){var t=this.width,e=this.height,i=QSI.util.getPageSize(),s=QSI.util.getScrollOffsets(),o=i.width,n=i.height,a=-t,l=(n-e)/2;switch(this.displayOptions.startPosition){default:case"OML":a=-t,l=(n-e)/2;break;case"OTL":a=-t,l=-e;break;case"OTLL":a=-t,l=20;break;case"OTLT":a=20,l=-e;break;case"OBL":a=-t,l=n;break;case"OBLL":a=-t,l=n-e-20;break;case"OBLB":a=20,l=n;break;case"OTC":a=(o-t)/2,l=-e;break;case"OTR":a=o,l=-e;break;case"OTRR":a=o,l=20;break;case"OTRT":a=o-t-20,l=-e;break;case"OMR":a=o,l=(n-e)/2;break;case"OBR":a=o,l=n;break;case"OBRR":a=o,l=n-e-20;break;case"OBRB":a=o-t-20,l=n;break;case"OBC":a=(o-t)/2,l=n}return QSI.util.isFixed()||(a+=s.left,l+=s.top),{x:a,y:l}},finish:function(){if(!this.finished){this.displayed.resolve();try{this.container.style.left=this.target.x+"px",this.container.style.top=this.target.y+"px",this.finished=!0,QSI.callbacks&&QSI.callbacks[this.id].onPopup&&QSI.callbacks[this.id].onPopup(),QSI.util.isFixed()||QSI.util.positionFixed(this.container,this.container.style.top,"auto")}catch(t){QSI.dbg.e(t)}}},reposition:function(){var t=this.getFinalPosition();this.container.style.left=t.x+"px",this.container.style.top=t.y+"px"},resize:function(){this.reposition(),this.updateShadowBox()}}))}]);
} catch(e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}