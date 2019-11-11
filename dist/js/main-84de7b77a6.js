!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function a(t,a,e){return a&&n(t.prototype,a),e&&n(t,e),t}var e=function(){function n(){t(this,n),this.formClass=".js-ajax-form",this.form=!1}return a(n,[{key:"init",value:function(){var t=this;$("body").on("submit",t.formClass,(function(n){n.preventDefault(),t.form=$(this),t.submit()})),t.maybeSubmitOnLoad()}},{key:"submit",value:function(){this.loadingState();var t=this;$.ajax({type:"POST",url:this.form.attr("action"),data:{action:this.form.find('input[name="_action"]').val(),data:this.form.serialize()},success:function(n){t.success(n)},error:function(t){console.log("error"),console.log(t)}})}},{key:"success",value:function(t){var n=this.form.attr("data-refresh");void 0!==this.form.attr("data-refresh")&&$(n).html(t)}},{key:"loadingState",value:function(){var t=this.form.attr("data-refresh");void 0!==this.form.attr("data-refresh")&&$(t).html('<div class="loading"><i class="fas fa-sync fa-spin"></i></div>')}},{key:"maybeSubmitOnLoad",value:function(){$.each($(this.formClass),(function(){void 0!==$(this).attr("data-submit-on-load")&&$(this).submit()}))}}]),n}(),i=function(){function n(){t(this,n)}return a(n,[{key:"init",value:function(){$(".scrollToId").click((function(t){t.preventDefault();var n=$(this).attr("href");$("html, body").animate({scrollTop:$(n).offset().top},1e3)}))}}]),n}(),r=function(){function n(){t(this,n)}return a(n,[{key:"init",value:function(){$(document).ready((function(){if("0"!=$(".gform_validation_error").length){var t=$(".validation_message").first(),n=$(t).parent().find(".gfield_label");$("html, body").animate({scrollTop:$(n).offset().top-50},1e3)}}))}}]),n}(),o=function(){function n(){t(this,n)}return a(n,[{key:"init",value:function(){$(".nav-control").click((function(){$("#menu-primary-navigation").toggleClass("nav-open"),$(".nav-control").toggleClass("x close")}))}}]),n}();require("magnific-popup");var s=function(){function n(){t(this,n)}return a(n,[{key:"init",value:function(){$(".js-popup").magnificPopup({type:"inline"}),$(".js-popup-video").magnificPopup({type:"iframe"})}}]),n}();require("slick-carousel");var u=function(){function n(){t(this,n)}return a(n,[{key:"init",value:function(){var t=this;$(".js-slider").each((function(){var n=$(this);$(this).slick({arrows:t.arrows(n),dots:t.dots(n),autoplay:t.autoplay(n),autoplaySpeed:t.speed(n),pauseOnHover:t.pauseOnHover(n),nextArrow:t.nextArrow(n),prevArrow:t.prevArrow(n)})}))}},{key:"autoplay",value:function(t){return"false"!=$(t).attr("data-autoplay")}},{key:"speed",value:function(t){return $(t).attr("data-speed")?$(t).attr("data-speed"):5e3}},{key:"arrows",value:function(t){return"true"==$(t).attr("data-has-arrows")}},{key:"dots",value:function(t){return"true"==$(t).attr("data-has-dots")}},{key:"pauseOnHover",value:function(t){return"false"!=$(t).attr("data-pause-on-hover")}},{key:"nextArrow",value:function(t){return $(t).attr("data-next-arrow")?$(t).attr("data-next-arrow"):'<div class="slick-next"><i class="fas fa-arrow-right"></i></div>'}},{key:"prevArrow",value:function(t){return $(t).attr("data-prev-arrow")?$(t).attr("data-prev-arrow"):'<div class="slick-prev"><i class="fas fa-arrow-left"></i></div>'}}]),n}();window.$=window.jQuery;var f={common:{init:function(){(new e).init(),(new i).init(),(new r).init(),(new o).init(),(new s).init(),(new u).init()}},home:{init:function(){}},about_us:{init:function(){}}},c={fire:function(t,n,a){var e=f;n=void 0===n?"init":n,""!==t&&e[t]&&"function"==typeof e[t][n]&&e[t][n](a)},loadEvents:function(){c.fire("common"),$.each(document.body.className.replace(/-/g,"_").split(/\s+/),(function(t,n){c.fire(n)}))}};$(document).ready(c.loadEvents())}();
