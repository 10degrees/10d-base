!function(){"use strict";function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}for(var n=require("./es6.array.iterator"),l=require("./_object-keys"),i=require("./_redefine"),c=require("./_global"),s=require("./_hide"),a=require("./_iterators"),u=require("./_wks"),b=u("iterator"),p=u("toStringTag"),k=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=l(d),y=0;y<g.length;y++){var m,f=g[y],w=d[f],h=c[f],B=h&&h.prototype;if(B&&(B[b]||s(B,b,k),B[p]||s(B,p,f),a[f]=k,w))for(m in n)B[m]||i(B,m,n[m],!0)}var T=require("./_add-to-unscopables"),v=require("./_iter-step"),S=require("./_iterators"),_=require("./_to-iobject");module.exports=require("./_iter-define")(Array,"Array",(function(e,t){this._t=_(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,v(1)):v(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])}),"values"),S.Arguments=S.Array,T("keys"),T("values"),T("entries");var L=require("./_classof"),C={};C[require("./_wks")("toStringTag")]="z",C+""!="[object z]"&&require("./_redefine")(Object.prototype,"toString",(function(){return"[object "+L(this)+"]"}),!0);var q=require("./_string-at")(!0);require("./_iter-define")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=q(t,r),this._i+=e.length,{value:e,done:!1})}));var x=require("./_collection-strong"),O=require("./_validate-collection");module.exports=require("./_collection")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return x.def(O(this,"Set"),e=0===e?0:e,e)}},x);var A=wp.i18n.__,j=wp.element.createElement,D="custom-blocks/link-button",P=j("svg",{width:24,height:24},j("path",{d:"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"})),R={title:A("Link Button","@textdomain"),description:A("Add a customizable link button.","@textdomain"),icon:P,category:"custom-blocks",keywords:[A("button","@textdomain"),A("link","@textdomain")]},N=wp.blocks,M=N.registerBlockType,z=N.registerBlockStyle,V=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o(new Set([].concat(t).filter((function(e){return"string"==typeof e})))).join(" ")},E=wp.editor,G=E.AlignmentToolbar,H=E.BlockControls,I=E.RichText,U=E.URLInput,F=E.InspectorControls,W=E.PanelColorSettings,J=E.getColorClassName,K=E.withColors,Q=wp.components,X=(Q.IconButton,Q.Dashicon,Q.PanelBody),Y=Q.PanelRow,Z=Q.ToggleControl,ee=Q.TextControl,te=Q.BaseControl;M(D,function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},R,{attributes:{buttonText:{type:"string"},buttonUrl:{type:"string",source:"attribute",selector:"a",attribute:"href"},buttonTarget:{type:"boolean",default:!1},buttonRel:{type:"string",default:null},buttonAlignment:{type:"string",default:"left"},buttonColor:{type:"string"}},edit:K("buttonColor")((function(e){var t=e.attributes,r=e.setAttributes,o=e.isSelected,n=e.setButtonColor,l=e.buttonColor,i=t.buttonText,c=t.buttonUrl,s=t.buttonAlignment,a=t.buttonTarget,u=t.buttonRel,b=t.className;return[j(F,{},j(W,{title:A("Button colours","@textdomain"),colorSettings:[{value:l.color,onChange:n,label:A("Choose a colour","@textdomain")}]}),j(X,{title:A("Link settings","@textdomain")},j(Y,{},j(Z,{label:A("Open in new tab","@textdomain"),checked:a,onChange:function(e){var o="noreferrer noopener";r({buttonTarget:e}),e?t.buttonRel||r({buttonRel:o}):t.buttonRel==o&&r({buttonRel:""})}})),j(Y,{},j(ee,{label:A("Link rel","@textdomain"),value:u,onChange:function(e){return r({buttonRel:e})}})))),j(H,{},j(G,{value:s,onChange:function(e){return r({buttonAlignment:e})}})),j("div",{className:"has-text-align-".concat(s)},j(I,{tagName:"span",placeholder:A("Button text...","@textdomain"),value:i,formattingControls:[],className:V("link-button",l.class,b),onChange:function(e){return r({buttonText:e})}})),o&&j(te,{label:A("Link","@textdomain"),id:"link-button-1",className:"wp-block-button__inline-link"},j(U,{id:"link-button-1",className:"wp-block-button__inline-link-input is-full-width has-border",value:c,onChange:function(e){return r({buttonUrl:e})}}))]})),save:function(e){var t=e.attributes,r=t.buttonText,o=t.buttonUrl,n=t.buttonTarget,l=t.buttonRel,i=t.buttonAlignment,c=t.buttonColor,s=t.className,a=J("button-color",c)||"";return j("div",{className:i?"has-text-align-".concat(i):""},j("a",{href:o,target:n?"_blank":null,rel:l,className:V("link-button",a,s)},j(I.Content,{value:r})))}})),z(D,{name:"full",label:"Full Width"}),z(D,{name:"outline",label:"Outline"});var re=require("./_export"),oe=require("./_array-methods")(5),ne=!0;"find"in[]&&Array(1).find((function(){ne=!1})),re(re.P+re.F*ne,"Array",{find:function(e){return oe(this,e,arguments.length>1?arguments[1]:void 0)}}),require("./_add-to-unscopables")("find"),new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=this;$(document).ready((function(){$(".accordion").each((function(){e.initializeBlock($(this))}))})),window.acf&&window.acf.addAction("render_block_preview/type=accordion",e.initializeBlock)}var r,o,n;return r=t,(o=[{key:"initializeBlock",value:function(e){e.find(".toggle").click((function(){var e=$(this).parents(".accordion");$(e).toggleClass("-open"),$(e).find(".content").slideToggle(),"true"===$(this).attr("aria-expanded")?$(this).attr("aria-expanded","false"):$(this).attr("aria-expanded","true")}))}}])&&e(r.prototype,o),n&&e(r,n),t}()),wp.domReady((function(){wp.blocks.unregisterBlockStyle("core/button","default"),wp.blocks.unregisterBlockStyle("core/button","squared"),wp.blocks.unregisterBlockStyle("core/button","fill"),wp.blocks.unregisterBlockStyle("core/separator","default"),wp.blocks.unregisterBlockStyle("core/separator","wide"),wp.blocks.unregisterBlockStyle("core/separator","dots"),wp.blocks.unregisterBlockStyle("core/quote","default"),wp.blocks.unregisterBlockStyle("core/quote","large"),wp.blocks.registerBlockStyle("core/button",{name:"regular",label:"Regular",isDefault:!0}),wp.blocks.registerBlockStyle("core/button",{name:"full",label:"Full Width"}),wp.blocks.registerBlockStyle("core/heading",{name:"default",label:"Default",isDefault:!0}),wp.blocks.registerBlockStyle("core/heading",{name:"underline",label:"Underline"}),wp.blocks.registerBlockStyle("core/separator",{name:"line",label:"Line",isDefault:!0}),wp.blocks.registerBlockStyle("core/separator",{name:"block",label:"Block"}),wp.blocks.registerBlockStyle("core/separator",{name:"dots",label:"Dots"}),wp.blocks.registerBlockStyle("core/quote",{name:"default",label:"Default",isDefault:!0}),wp.blocks.registerBlockStyle("core/quote",{name:"line",label:"Line"}),wp.blocks.registerBlockStyle("core/list",{name:"default",label:"Default",isDefault:!0}),wp.blocks.registerBlockStyle("core/list",{name:"icon",label:"Icon"}),wp.blocks.unregisterBlockType("core/pullquote"),wp.blocks.unregisterBlockType("core/verse"),wp.blocks.unregisterBlockType("core/button"),wp.blocks.unregisterBlockType("core/archives"),wp.blocks.unregisterBlockType("core/latest-posts"),wp.blocks.unregisterBlockType("core/latest-comments"),wp.blocks.unregisterBlockType("core/calendar"),wp.blocks.unregisterBlockType("core/rss"),wp.blocks.unregisterBlockType("core/search"),wp.blocks.unregisterBlockType("core/tag-cloud"),wp.blocks.unregisterBlockType("core-embed/soundcloud"),wp.blocks.unregisterBlockType("core-embed/spotify"),wp.blocks.unregisterBlockType("core-embed/flickr"),wp.blocks.unregisterBlockType("core-embed/vimeo"),wp.blocks.unregisterBlockType("core-embed/animoto"),wp.blocks.unregisterBlockType("core-embed/cloudup"),wp.blocks.unregisterBlockType("core-embed/collegehumor"),wp.blocks.unregisterBlockType("core-embed/dailymotion"),wp.blocks.unregisterBlockType("core-embed/funnyordie"),wp.blocks.unregisterBlockType("core-embed/hulu"),wp.blocks.unregisterBlockType("core-embed/imgur"),wp.blocks.unregisterBlockType("core-embed/issuu"),wp.blocks.unregisterBlockType("core-embed/kickstarter"),wp.blocks.unregisterBlockType("core-embed/meetup-com"),wp.blocks.unregisterBlockType("core-embed/mixcloud"),wp.blocks.unregisterBlockType("core-embed/photobucket"),wp.blocks.unregisterBlockType("core-embed/polldaddy"),wp.blocks.unregisterBlockType("core-embed/reddit"),wp.blocks.unregisterBlockType("core-embed/reverbnation"),wp.blocks.unregisterBlockType("core-embed/screencast"),wp.blocks.unregisterBlockType("core-embed/scribd"),wp.blocks.unregisterBlockType("core-embed/slideshare"),wp.blocks.unregisterBlockType("core-embed/smugmug"),wp.blocks.unregisterBlockType("core-embed/speaker"),wp.blocks.unregisterBlockType("core-embed/ted"),wp.blocks.unregisterBlockType("core-embed/tumblr"),wp.blocks.unregisterBlockType("core-embed/videopress"),wp.blocks.unregisterBlockType("core-embed/wordpress-tv"),wp.blocks.unregisterBlockType("core-embed/crowdsignal"),wp.blocks.unregisterBlockType("core-embed/speaker-deck"),wp.blocks.unregisterBlockType("core-embed/amazon-kindle"),wp.blocks.unregisterBlockType("yoast/how-to-block"),wp.blocks.unregisterBlockType("yoast/faq-block")}))}();
