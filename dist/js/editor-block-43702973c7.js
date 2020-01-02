!function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function o(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=wp.i18n.__,n=wp.element.createElement,c="custom-blocks/link-button",i=n("svg",{width:24,height:24},n("path",{d:"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"})),s={title:l("Link Button","@textdomain"),description:l("Add a customizable link button.","@textdomain"),icon:i,category:"custom-blocks",keywords:[l("button","@textdomain"),l("link","@textdomain")]},a=wp.blocks,u=a.registerBlockType,b=a.registerBlockStyle,p=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return r(new Set([].concat(t).filter((function(e){return"string"==typeof e})))).join(" ")},k=wp.editor,g=k.AlignmentToolbar,d=k.BlockControls,y=k.RichText,m=k.URLInput,w=k.InspectorControls,f=k.PanelColorSettings,B=k.getColorClassName,T=k.withColors,h=wp.components,v=(h.IconButton,h.Dashicon,h.PanelBody),S=h.PanelRow,C=h.ToggleControl,x=h.TextControl,O=h.BaseControl;u(c,function(e){for(var r=1;r<arguments.length;r++){var l=null!=arguments[r]?arguments[r]:{};r%2?o(Object(l),!0).forEach((function(o){t(e,o,l[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},s,{attributes:{buttonText:{type:"string"},buttonUrl:{type:"string",source:"attribute",selector:"a",attribute:"href"},buttonTarget:{type:"boolean",default:!1},buttonRel:{type:"string",default:null},buttonAlignment:{type:"string",default:"left"},buttonColor:{type:"string"}},edit:T("buttonColor")((function(e){var t=e.attributes,o=e.setAttributes,r=e.isSelected,c=e.setButtonColor,i=e.buttonColor,s=t.buttonText,a=t.buttonUrl,u=t.buttonAlignment,b=t.buttonTarget,k=t.buttonRel,B=t.className;return[n(w,{},n(f,{title:l("Button colours","@textdomain"),colorSettings:[{value:i.color,onChange:c,label:l("Choose a colour","@textdomain")}]}),n(v,{title:l("Link settings","@textdomain")},n(S,{},n(C,{label:l("Open in new tab","@textdomain"),checked:b,onChange:function(e){var r="noreferrer noopener";o({buttonTarget:e}),e?t.buttonRel||o({buttonRel:r}):t.buttonRel==r&&o({buttonRel:""})}})),n(S,{},n(x,{label:l("Link rel","@textdomain"),value:k,onChange:function(e){return o({buttonRel:e})}})))),n(d,{},n(g,{value:u,onChange:function(e){return o({buttonAlignment:e})}})),n("div",{className:"has-text-align-".concat(u)},n(y,{tagName:"span",placeholder:l("Button text...","@textdomain"),value:s,formattingControls:[],className:p("link-button",i.class,B),onChange:function(e){return o({buttonText:e})}})),r&&n(O,{label:l("Link","@textdomain"),id:"link-button-1",className:"wp-block-button__inline-link"},n(m,{id:"link-button-1",className:"wp-block-button__inline-link-input is-full-width has-border",value:a,onChange:function(e){return o({buttonUrl:e})}}))]})),save:function(e){var t=e.attributes,o=t.buttonText,r=t.buttonUrl,l=t.buttonTarget,c=t.buttonRel,i=t.buttonAlignment,s=t.buttonColor,a=t.className,u=B("button-color",s)||"";return n("div",{className:i?"has-text-align-".concat(i):""},n("a",{href:r,target:l?"_blank":null,rel:c,className:p("link-button",u,a)},n(y.Content,{value:o})))}})),b(c,{name:"full",label:"Full Width"}),b(c,{name:"outline",label:"Outline"}),new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=this;$(document).ready((function(){$(".accordion").each((function(){e.initializeBlock($(this))}))})),window.acf&&window.acf.addAction("render_block_preview/type=accordion",e.initializeBlock)}var o,r,l;return o=t,(r=[{key:"initializeBlock",value:function(e){e.find(".toggle").click((function(){var e=$(this).parents(".accordion");$(e).toggleClass("-open"),$(e).find(".content").slideToggle(),"true"===$(this).attr("aria-expanded")?$(this).attr("aria-expanded","false"):$(this).attr("aria-expanded","true")}))}}])&&e(o.prototype,r),l&&e(o,l),t}()),wp.domReady((function(){wp.blocks.unregisterBlockStyle("core/button","default"),wp.blocks.unregisterBlockStyle("core/button","squared"),wp.blocks.unregisterBlockStyle("core/button","fill"),wp.blocks.unregisterBlockStyle("core/separator","default"),wp.blocks.unregisterBlockStyle("core/separator","wide"),wp.blocks.unregisterBlockStyle("core/separator","dots"),wp.blocks.unregisterBlockStyle("core/quote","default"),wp.blocks.unregisterBlockStyle("core/quote","large"),wp.blocks.registerBlockStyle("core/button",{name:"regular",label:"Regular",isDefault:!0}),wp.blocks.registerBlockStyle("core/button",{name:"full",label:"Full Width"}),wp.blocks.registerBlockStyle("core/heading",{name:"default",label:"Default",isDefault:!0}),wp.blocks.registerBlockStyle("core/heading",{name:"underline",label:"Underline"}),wp.blocks.registerBlockStyle("core/separator",{name:"line",label:"Line",isDefault:!0}),wp.blocks.registerBlockStyle("core/separator",{name:"block",label:"Block"}),wp.blocks.registerBlockStyle("core/separator",{name:"dots",label:"Dots"}),wp.blocks.registerBlockStyle("core/quote",{name:"default",label:"Default",isDefault:!0}),wp.blocks.registerBlockStyle("core/quote",{name:"line",label:"Line"}),wp.blocks.registerBlockStyle("core/list",{name:"default",label:"Default",isDefault:!0}),wp.blocks.registerBlockStyle("core/list",{name:"icon",label:"Icon"}),wp.blocks.unregisterBlockType("core/pullquote"),wp.blocks.unregisterBlockType("core/verse"),wp.blocks.unregisterBlockType("core/archives"),wp.blocks.unregisterBlockType("core/latest-posts"),wp.blocks.unregisterBlockType("core/latest-comments"),wp.blocks.unregisterBlockType("core/calendar"),wp.blocks.unregisterBlockType("core/rss"),wp.blocks.unregisterBlockType("core/search"),wp.blocks.unregisterBlockType("core/tag-cloud"),wp.blocks.unregisterBlockType("core-embed/soundcloud"),wp.blocks.unregisterBlockType("core-embed/spotify"),wp.blocks.unregisterBlockType("core-embed/flickr"),wp.blocks.unregisterBlockType("core-embed/vimeo"),wp.blocks.unregisterBlockType("core-embed/animoto"),wp.blocks.unregisterBlockType("core-embed/cloudup"),wp.blocks.unregisterBlockType("core-embed/collegehumor"),wp.blocks.unregisterBlockType("core-embed/dailymotion"),wp.blocks.unregisterBlockType("core-embed/funnyordie"),wp.blocks.unregisterBlockType("core-embed/hulu"),wp.blocks.unregisterBlockType("core-embed/imgur"),wp.blocks.unregisterBlockType("core-embed/issuu"),wp.blocks.unregisterBlockType("core-embed/kickstarter"),wp.blocks.unregisterBlockType("core-embed/meetup-com"),wp.blocks.unregisterBlockType("core-embed/mixcloud"),wp.blocks.unregisterBlockType("core-embed/photobucket"),wp.blocks.unregisterBlockType("core-embed/polldaddy"),wp.blocks.unregisterBlockType("core-embed/reddit"),wp.blocks.unregisterBlockType("core-embed/reverbnation"),wp.blocks.unregisterBlockType("core-embed/screencast"),wp.blocks.unregisterBlockType("core-embed/scribd"),wp.blocks.unregisterBlockType("core-embed/slideshare"),wp.blocks.unregisterBlockType("core-embed/smugmug"),wp.blocks.unregisterBlockType("core-embed/speaker"),wp.blocks.unregisterBlockType("core-embed/ted"),wp.blocks.unregisterBlockType("core-embed/tumblr"),wp.blocks.unregisterBlockType("core-embed/videopress"),wp.blocks.unregisterBlockType("core-embed/wordpress-tv"),wp.blocks.unregisterBlockType("core-embed/crowdsignal"),wp.blocks.unregisterBlockType("core-embed/speaker-deck"),wp.blocks.unregisterBlockType("core-embed/amazon-kindle"),wp.blocks.unregisterBlockType("yoast/how-to-block"),wp.blocks.unregisterBlockType("yoast/faq-block")}))}();
