
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
  !function(i){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return i[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=i,e.c=t,e.d=function(i,t,n){e.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:n})},e.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},e.t=function(i,t){if(1&t&&(i=e(i)),8&t)return i;if(4&t&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var o in i)e.d(n,o,function(t){return i[t]}.bind(null,o));return n},e.n=function(i){var t=i&&i.__esModule?function(){return i.default}:function(){return i};return e.d(t,"a",t),t},e.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},e.p="",e(e.s=0)}([function(i,t,e){i.exports=e(1)},function(i,t){(void 0===window.QSI.FeedbackLink||window.QTest)&&(QSI.FeedbackLink=QSI.util.Creative({initialize:function(i){this.link=null,this.globalInitialize(i),this.options=i,this.id=this.options.id,this.interceptDisplayOptions=i.interceptDisplayOptions||{},this.displayOptions=i.displayOptions||{},this.shouldShow()&&(this.resetStyles(),this.insertLink())},insertLink:function(){this.img=this.buildImage(),this.link=this.buildLink(),document.body.appendChild(this.link),this.impress(),this.displayed.resolve()},buildLink:function(){var i,t,e=this.displayOptions.verticalPosition,n=QSI.util.getPageSize().height,o=this.img.height||100;"middle"===e?(i=n/2-o/2+"px",t="auto"):"setfromtop"===e?(i=this.displayOptions.posFromTop+"px",t="auto"):"setfrombottom"===e&&(t=this.displayOptions.posFromBottom+"px",i="auto");var s=QSI.util.build("div",{className:"QSIFeedBackLink "+this.id+"_FeedBackLinkContainer",style:{fontSize:"0px",cursor:"pointer",position:"fixed",top:i,bottom:t,display:"block",backgroundColor:"transparent",border:"none",zIndex:QSI.global.currentZIndex++},tabindex:"0"},[this.img]);QSI.util.observe(s,"keydown",QSI.util.clickOnKeyDown),new QSI.Target(s,this.getTargetHelper(),this.actionOptions,this);var r=this.displayOptions.position;return s.style[r]=0,QSI.util.isFixed()||QSI.util.positionFixed(s,i,t),s},buildImage:function(){var i="";return i="UserDefined"===this.displayOptions.image?QSI.global.graphicPath+this.displayOptions.gid:QSI.global.imagePath+"/siteintercept/"+this.displayOptions.image+"-"+this.displayOptions.position+".png",QSI.util.build("img",{src:i,style:{border:"none",textDecoration:"none",padding:"0px",margin:"0px"},alt:"Feedback Link"})},remove:function(){this.link&&QSI.util.remove(this.link)}}))}]);
} catch(e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}