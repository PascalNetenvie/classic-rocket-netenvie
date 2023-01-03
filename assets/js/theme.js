/*! For license information please see theme.js.LICENSE.txt */
/******/!function(e){// webpackBootstrap
/******/ // The module cache
/******/var t={};
/******/
/******/ // The require function
/******/function i(n){
/******/
/******/ // Check if module is in cache
/******/if(t[n])
/******/return t[n].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[n]={
/******/i:n,
/******/l:false,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/e[n].call(o.exports,o,o.exports,i);
/******/
/******/ // Flag the module as loaded
/******/o.l=true;
/******/
/******/ // Return the exports of the module
/******/return o.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/i.m=e;
/******/
/******/ // expose the module cache
/******/i.c=t;
/******/
/******/ // define getter function for harmony exports
/******/i.d=function(e,t,n){
/******/if(!i.o(e,t))
/******/Object.defineProperty(e,t,{enumerable:true,get:n});
/******/
/******/};
/******/
/******/ // define __esModule on exports
/******/i.r=function(e){
/******/if("undefined"!=typeof Symbol&&Symbol.toStringTag)
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});
/******/
/******/Object.defineProperty(e,"__esModule",{value:true});
/******/};
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/i.t=function(e,t){
/******/if(1&t)e=i(e);
/******/if(8&t)return e;
/******/if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
/******/var n=Object.create(null);
/******/i.r(n);
/******/Object.defineProperty(n,"default",{enumerable:true,value:e});
/******/if(2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));
/******/return n;
/******/};
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/i.n=function(e){
/******/var t=e&&e.__esModule?
/******/function t(){return e.default}:
/******/function t(){return e};
/******/i.d(t,"a",t);
/******/return t;
/******/};
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};
/******/
/******/ // __webpack_public_path__
/******/i.p="";
/******/
/******/
/******/ // Load entry module and return exports
/******/i(i.s=0);
/******/}
/************************************************************************/
/******/({
/***/"./css/theme.scss":
/*!************************!*\
  !*** ./css/theme.scss ***!
  \************************/
/*! no static exports found */
/***/function(e,t,i){
// extracted by mini-css-extract-plugin
/***/},
/***/"./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);s.a.cart=s.a.cart||{};s.a.cart.active_inputs=null;var a='input[name="product-quantity-spin"]';var l=false;var c=false;var u="";
/**
 * Attach Bootstrap TouchSpin event handlers
 */function d(){o.a.each(o()(a),(function(e,t){o()(t).TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(o()(t).attr("min"),10),max:1e6})}));f.switchErrorStat()}o()(document).ready((function(){var e=".js-cart-line-product-quantity";var t=[];s.a.on("updateCart",(function(){o()(".quickview").modal("hide");o()(".js-cart__card-body").addClass("is--loading")}));s.a.on("updatedCart",(function(){d();o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));s.a.on("handleError",(function(e){o()(".js-cart__card-body.is--loading").removeClass("is--loading")}));d();var i=o()("body");function n(e){return"on.startupspin"===e||"on.startdownspin"===e}function r(e){return"on.startupspin"===e}function l(t){var i=t.parents(".bootstrap-touchspin").find(e);if(i.is(":focus"))return null;return i}function c(e){var t=e.split("-");var i;var n;var o="";for(i=0;i<t.length;i++){n=t[i];if(0!==i)n=n.substring(0,1).toUpperCase()+n.substring(1);o+=n}return o}function u(e,t){if(!n(t))return{url:e.attr("href"),type:c(e.data("link-action"))};var i=l(e);if(!i)return;var o={};if(r(t))o={url:i.data("up-url"),type:"increaseProductQuantity"};else o={url:i.data("down-url"),type:"decreaseProductQuantity"};return o}var p=function e(){for(;t.length>0;)t.pop().abort()};var h=function e(t){return o()(t.parents(".bootstrap-touchspin").find("input"))};var v=function e(i){i.preventDefault();var n=o()(i.currentTarget);var r=i.currentTarget.dataset;var a=u(n,i.namespace);var l={ajax:"1",action:"update"};if(void 0===a)return;p();o.a.ajax({url:a.url,method:"POST",data:l,dataType:"json",beforeSend:function e(i){t.push(i)}}).then((function(e){f.checkUpdateOpertation(e);h(n).val(e.quantity);
// Refresh cart preview
s.a.emit("updateCart",{reason:r,resp:e})})).fail((function(e){s.a.emit("handleError",{eventType:"updateProductInCart",resp:e,cartAction:a.type})}))};i.on("click",'[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]',v);i.on("touchspin.on.startdownspin",a,v);i.on("touchspin.on.startupspin",a,v);function m(e,i,n){p();return o.a.ajax({url:e,method:"POST",data:i,dataType:"json",beforeSend:function e(i){t.push(i)}}).then((function(e){f.checkUpdateOpertation(e);n.val(e.quantity);var t;if(n&&n.dataset)t=n.dataset;else t=e;
// Refresh cart preview
s.a.emit("updateCart",{reason:t,resp:e})})).fail((function(e){s.a.emit("handleError",{eventType:"updateProductQuantityInCart",resp:e})}))}function g(e){return{ajax:"1",qty:Math.abs(e),action:"update",op:y(e)}}function y(e){return e>0?"up":"down"}function b(e){var t=o()(e.currentTarget);var i=t.data("update-url");var n=t.attr("value");
// There should be a valid product quantity in cart
var r=t.val();if(r!=parseInt(r)||r<0||isNaN(r)){t.val(n);return}
// There should be a new product quantity in cart
var s=r-n;if(0===s)return;t.attr("value",r);m(i,g(s),t)}i.on("focusout keyup",e,(function(e){if("keyup"===e.type){if(13===e.keyCode)b(e);return false}b(e)}));i.on("click",".js-discount .code",(function(e){e.stopPropagation();var t=o()(e.currentTarget);o()("[name=discount_name]").val(t.text());o()("#promo-code").collapse("show");return false}))}));var f={switchErrorStat:function e(){
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
var t=o()(".checkout a");if(o()("#notifications article.alert-danger").length||""!==u&&!l)t.addClass("disabled");if(""!==u){var i=' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'+u+"</li></ul></article>";o()("#notifications.notifications-container").html(i);u="";c=false;if(l)
// if hasError is true, quantity was not updated : allow checkout
t.removeClass("disabled")}else if(!l&&c){l=false;c=false;o()("#notifications.notifications-container").html("");t.removeClass("disabled")}},checkUpdateOpertation:function e(t){
/**
     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
     * when resp.hasError=true, quantity is not updated
     */
l=t.hasOwnProperty("hasError");var i=t.errors||"";
// 1.7.2.x returns errors as string, 1.7.3.x returns array
if(i instanceof Array)u=i.join(" ");else u=i;c=true}};
/***/},
/***/"./js/checkout.js":
/*!************************!*\
  !*** ./js/checkout.js ***!
  \************************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);var a=void 0;
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */function l(){o()(".js-terms a").on("click",(function(e){e.preventDefault();var t=o()(e.target).attr("href");if(t){
// TODO: Handle request if no pretty URL
t+="?content_only=1";o.a.get(t,(function(e){o()("#modal").find(".js-modal-content").html(o()(e).find(".page-content--cms").contents())})).fail((function(e){s.a.emit("handleError",{eventType:"clickTerms",resp:e})}))}o()("#modal").modal("show")}));o()(".js-gift-checkbox").on("click",(function(e){o()("#gift").collapse("toggle")}))}o()(document).ready((function(){if(1===o()("body#checkout").length)l();s.a.on("updatedDeliveryForm",(function(e){if(void 0===e.deliveryOption||0===e.deliveryOption.length)return;
// Hide all carrier extra content ...
o()(".carrier-extra-content").hide();
// and show the one related to the selected carrier
e.deliveryOption.next(".carrier-extra-content").slideDown()}));s.a.on("changedCheckoutStep",(function(e){if(void 0!==e.event.currentTarget)o()(".collapse",e.event.currentTarget).not(".show").not(".collapse .collapse").collapse("show")}))}));o()(document).on("change",".js-input-delivery:checked",(function(e){o()(".js-label-delivery.selected").removeClass("selected");o()("#js-"+o()(a).attr("id")).addClass("selected")}));o()(document).on("click",".js-checkout-step-header",(function(e){var t=o()(e.currentTarget).data("identifier");o()("#"+t).addClass("-current");o()("#content-"+t).collapse("show").scrollTop()}));
/***/},
/***/"./js/components/block-cart.js":
/*!*************************************!*\
  !*** ./js/components/block-cart.js ***!
  \*************************************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! prestashop */"prestashop");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! jquery */"jquery");
/* harmony import */var s=i.n(r);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */o.a.blockcart=o.a.blockcart||{};o.a.blockcart.showModal=function(e){function t(){return s()("#blockcart-modal")}var i=t();if(i.length)i.remove();s()("body").append(e);(i=t()).modal("show").on("hidden.bs.modal",(function(e){o.a.emit("updateProduct",{reason:e.currentTarget.dataset,event:e})}))};
/***/},
/***/"./js/components/form.js":
/*!*******************************!*\
  !*** ./js/components/form.js ***!
  \*******************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony export (binding) */i.d(t,"default",(function(){return d}));
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,c(n.key),n)}}function l(e,t,i){if(t)a(e.prototype,t);if(i)a(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"===r(t)?t:String(t)}function u(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var d=function(){function e(){s(this,e)}l(e,[{key:"init",value:function e(){this.parentFocus();this.togglePasswordVisibility();this.formValidation()}},{key:"parentFocus",value:function e(){o()(".js-child-focus").focus((function(){o()(this).closest(".js-parent-focus").addClass("focus")}));o()(".js-child-focus").focusout((function(){o()(this).closest(".js-parent-focus").removeClass("focus")}))}},{key:"togglePasswordVisibility",value:function e(){o()('button[data-action="show-password"]').on("click",(function(){var e=o()(this).closest(".input-group").children("input.js-visible-password");if("password"===e.attr("type")){e.attr("type","text");o()(this).text(o()(this).data("textHide"))}else{e.attr("type","password");o()(this).text(o()(this).data("textShow"))}}))}},{key:"formValidation",value:function e(){
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var t=document.getElementsByClassName("needs-validation");if(t.length>0){console.log(f());if(!f())return;
// Loop over them and prevent submission
var i=false;Array.prototype.filter.call(t,(function(e){e.addEventListener("submit",(function(t){if(false===e.checkValidity()){t.preventDefault();t.stopPropagation();o()("input:invalid,select:invalid,textarea:invalid",e).each((function(e){var t=o()(this),n=t.parents(".form-group").first();o()(".js-invalid-feedback-browser",n).text(t[0].validationMessage);if(!i)i=n}));o()(this).data("disabled",false);o()('button[type="submit"]',e).removeClass("disabled")}e.classList.add("was-validated");if(i){o()("html, body").animate({scrollTop:i.offset().top},300);i=false}}),false)}))}}}]);return e}();var f=function e(){var t=document.createElement("input");return"validity"in t&&"badInput"in t.validity&&"patternMismatch"in t.validity&&"rangeOverflow"in t.validity&&"rangeUnderflow"in t.validity&&"tooLong"in t.validity&&"tooShort"in t.validity&&"typeMismatch"in t.validity&&"valid"in t.validity&&"valueMissing"in t.validity};
/***/},
/***/"./js/components/slick.js":
/*!********************************!*\
  !*** ./js/components/slick.js ***!
  \********************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony export (binding) */i.d(t,"default",(function(){return d}));
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,c(n.key),n)}}function l(e,t,i){if(t)a(e.prototype,t);if(i)a(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"===r(t)?t:String(t)}function u(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var d=function(){function e(){s(this,e)}l(e,[{key:"init",value:function e(){o()("[data-slick]").not(".slick-initialized").each((function(){var e=o()(this);if(1===e.data("count"))return;e.slick({prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons left">&#xE314;</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons right">&#xE315;</i></button>'})}))}}]);return e}();
/***/},
/***/"./js/components/top-menu.js":
/*!***********************************!*\
  !*** ./js/components/top-menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony export (binding) */i.d(t,"default",(function(){return d}));
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,c(n.key),n)}}function l(e,t,i){if(t)a(e.prototype,t);if(i)a(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"===r(t)?t:String(t)}function u(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var d=function(){function e(t){s(this,e);this.el=t}l(e,[{key:"init",value:function e(){var t=this;t.el.hoverIntent({over:t.toggleClassSubMenu,out:t.toggleClassSubMenu,selector:" > li",timeout:100})}},{key:"toggleClassSubMenu",value:function e(){var t=o()(this);var i=t.attr("aria-expanded");if(void 0!==i){i="true"===i.toLowerCase();t.toggleClass("menu__item--active").attr("aria-expanded",!i);o()(".menu-sub",t).attr("aria-expanded",!i).attr("aria-hidden",i)}}}]);return e}();
/***/},
/***/"./js/customer.js":
/*!************************!*\
  !*** ./js/customer.js ***!
  \************************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */function r(){o()("#order-return-form table thead input[type=checkbox]").on("click",(function(){var e=o()(this).prop("checked");o()("#order-return-form table tbody input[type=checkbox]").each((function(t,i){o()(i).prop("checked",e)}))}))}function s(){if(o()("body#order-detail"))r()}o()(document).ready(s);
/***/},
/***/"./js/lib/jquery.hoverIntent.min.js":
/*!******************************************!*\
  !*** ./js/lib/jquery.hoverIntent.min.js ***!
  \******************************************/
/*! no static exports found */
/***/function(e,t,i){var n,o,r;
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */!function(s){"use strict";o=[i(/*! jquery */"jquery")],void 0!==(r="function"==typeof(n=s)?n.apply(t,o):n)&&(e.exports=r)}((function(e){"use strict";var t,i,n={interval:100,sensitivity:6,timeout:0},o=0,r=function e(n){t=n.pageX,i=n.pageY},s=function e(n,o,s,a){if(Math.sqrt((s.pX-t)*(s.pX-t)+(s.pY-i)*(s.pY-i))<a.sensitivity)return o.off(s.event,r),delete s.timeoutId,s.isActive=!0,n.pageX=t,n.pageY=i,delete s.pX,delete s.pY,a.over.apply(o[0],[n]);s.pX=t,s.pY=i,s.timeoutId=setTimeout((function(){e(n,o,s,a)}),a.interval)},a=function e(t,i,n,o){return delete i.data("hoverIntent")[n.id],o.apply(i[0],[t])};e.fn.hoverIntent=function(t,i,l){var c=o++,u=e.extend({},n);e.isPlainObject(t)?(u=e.extend(u,t),e.isFunction(u.out)||(u.out=u.over)):u=e.isFunction(i)?e.extend(u,{over:t,out:i,selector:l}):e.extend(u,{over:t,out:t,selector:i});var d=function t(i){var n=e.extend({},i),o=e(this),l=o.data("hoverIntent");l||o.data("hoverIntent",l={});var d=l[c];d||(l[c]=d={id:c}),d.timeoutId&&(d.timeoutId=clearTimeout(d.timeoutId));var f=d.event="mousemove.hoverIntent.hoverIntent"+c;if("mouseenter"===i.type){if(d.isActive)return;d.pX=n.pageX,d.pY=n.pageY,o.off(f,r).on(f,r),d.timeoutId=setTimeout((function(){s(n,o,d,u)}),u.interval)}else{if(!d.isActive)return;o.off(f,r),d.timeoutId=setTimeout((function(){a(n,o,d,u.out)}),u.timeout)}};return this.on({"mouseenter.hoverIntent":d,"mouseleave.hoverIntent":d},u.selector)}}));
/***/},
/***/"./js/lib/slick.min.js":
/*!*****************************!*\
  !*** ./js/lib/slick.min.js ***!
  \*****************************/
/*! no static exports found */
/***/function(e,t,i){var n,o,r;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */!function(s){"use strict";o=[i(/*! jquery */"jquery")],void 0!==(r="function"==typeof(n=s)?n.apply(t,o):n)&&(e.exports=r)}((function(e){"use strict";var t=window.Slick||{};(t=function(){function t(t,n){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function t(i,n){return e('<button type="button" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=e(t).data("slick")||{},r.options=e.extend({},r.defaults,n,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,void 0!==document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=i++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}var i=0;return t}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,i,n){var o=this;if("boolean"==typeof i)n=i,i=null;else if(i<0||i>=o.slideCount)return!1;o.unload(),"number"==typeof i?0===i&&0===o.$slides.length?e(t).appendTo(o.$slideTrack):n?e(t).insertBefore(o.$slides.eq(i)):e(t).insertAfter(o.$slides.eq(i)):!0===n?e(t).prependTo(o.$slideTrack):e(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each((function(t,i){e(i).attr("data-slick-index",t)})),o.$slidesCache=o.$slides,o.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,i){var n={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(t=-t),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,i):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,i):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function e(t){t=Math.ceil(t),!1===o.options.vertical?(n[o.animType]="translate("+t+"px, 0px)",o.$slideTrack.css(n)):(n[o.animType]="translate(0px,"+t+"px)",o.$slideTrack.css(n))},complete:function e(){i&&i.call()}})):(o.applyTransition(),t=Math.ceil(t),!1===o.options.vertical?n[o.animType]="translate3d("+t+"px, 0px, 0px)":n[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(n),i&&setTimeout((function(){o.disableTransition(),i.call()}),o.options.speed))},t.prototype.getNavTarget=function(){var t=this,i=t.options.asNavFor;return i&&null!==i&&(i=e(i).not(t.$slider)),i},t.prototype.asNavFor=function(t){var i=this.getNavTarget();null!==i&&"object"==s(i)&&i.each((function(){var i=e(this).slick("getSlick");i.unslicked||i.slideHandler(t,!0)}))},t.prototype.applyTransition=function(e){var t=this,i={};!1===t.options.fade?i[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:i[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){var e=this;e.autoPlayTimer&&clearInterval(e.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,i,n=this;if(!0===n.options.dots&&n.slideCount>n.options.slidesToShow){for(n.$slider.addClass("slick-dotted"),i=e("<ul />").addClass(n.options.dotsClass),t=0;t<=n.getDotCount();t+=1)i.append(e("<li />").append(n.options.customPaging.call(this,n,t)));n.$dots=i.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each((function(t,i){e(i).attr("data-slick-index",t).data("originalStyling",e(i).attr("style")||"")})),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,i,n,o,r,s,a=this;if(n=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>0){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(i=0;i<a.options.slidesPerRow;i++){var u=e*s+(t*a.options.slidesPerRow+i);r.get(u)&&c.appendChild(r.get(u))}l.appendChild(c)}n.appendChild(l)}a.$slider.empty().append(n),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,i){var n,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||e(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){o=null;for(n in s.breakpoints)s.breakpoints.hasOwnProperty(n)&&(!1===s.originalSettings.mobileFirst?r<s.breakpoints[n]&&(o=s.breakpoints[n]):r>s.breakpoints[n]&&(o=s.breakpoints[n]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||i)&&(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=o),t||!1===a||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,i){var n,o,r=this,s=e(t.currentTarget);switch(s.is("a")&&t.preventDefault(),s.is("li")||(s=s.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":o=0===n?r.options.slidesToScroll:r.options.slidesToShow-n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-o,!1,i);break;case"next":o=0===n?r.options.slidesToScroll:n,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+o,!1,i);break;case"index":var a=0===t.data.index?0:t.data.index||s.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,i),s.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,i;if(i=0,e>(t=this.getNavigableIndexes())[t.length-1])e=t[t.length-1];else for(var n in t){if(e<t[n]){e=i;break}i=t[n]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>0&&((e=t.$slides.children().children()).removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var i=this;i.autoPlayClear(),i.touchObject={},i.cleanUpEvents(),e(".slick-cloned",i.$slider).detach(),i.$dots&&i.$dots.remove(),i.$prevArrow&&i.$prevArrow.length&&(i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.prevArrow)&&i.$prevArrow.remove()),i.$nextArrow&&i.$nextArrow.length&&(i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),i.htmlExpr.test(i.options.nextArrow)&&i.$nextArrow.remove()),i.$slides&&(i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){e(this).attr("style",e(this).data("originalStyling"))})),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.detach(),i.$list.detach(),i.$slider.append(i.$slides)),i.cleanUpRows(),i.$slider.removeClass("slick-slider"),i.$slider.removeClass("slick-initialized"),i.$slider.removeClass("slick-dotted"),i.unslicked=!0,t||i.$slider.trigger("destroy",[i])},t.prototype.disableTransition=function(e){var t=this,i={};i[t.transitionType]="",!1===t.options.fade?t.$slideTrack.css(i):t.$slides.eq(e).css(i)},t.prototype.fadeSlide=function(e,t){var i=this;!1===i.cssTransitions?(i.$slides.eq(e).css({zIndex:i.options.zIndex}),i.$slides.eq(e).animate({opacity:1},i.options.speed,i.options.easing,t)):(i.applyTransition(e),i.$slides.eq(e).css({opacity:1,zIndex:i.options.zIndex}),t&&setTimeout((function(){i.disableTransition(e),t.call()}),i.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick","*",(function(i){var n=e(this);setTimeout((function(){t.options.pauseOnFocus&&n.is(":focus")&&(t.focussed=!0,t.autoPlay())}),0)})).on("blur.slick","*",(function(i){e(this);t.options.pauseOnFocus&&(t.focussed=!1,t.autoPlay())}))},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){return this.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,i=0,n=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++n;else for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)n=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++n,t=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else n=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return n-1},t.prototype.getLeft=function(e){var t,i,n,o,r=this,s=0;return r.slideOffset=0,i=r.$slides.first().outerHeight(!0),!0===r.options.infinite?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=-1,!0===r.options.vertical&&!0===r.options.centerMode&&(2===r.options.slidesToShow?o=-1.5:1===r.options.slidesToShow&&(o=-2)),s=i*r.options.slidesToShow*o),r.slideCount%r.options.slidesToScroll!=0&&e+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(e>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(e-r.slideCount))*r.slideWidth*-1,s=(r.options.slidesToShow-(e-r.slideCount))*i*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,s=r.slideCount%r.options.slidesToScroll*i*-1))):e+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(e+r.options.slidesToShow-r.slideCount)*r.slideWidth,s=(e+r.options.slidesToShow-r.slideCount)*i),r.slideCount<=r.options.slidesToShow&&(r.slideOffset=0,s=0),!0===r.options.centerMode&&r.slideCount<=r.options.slidesToShow?r.slideOffset=r.slideWidth*Math.floor(r.options.slidesToShow)/2-r.slideWidth*r.slideCount/2:!0===r.options.centerMode&&!0===r.options.infinite?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:!0===r.options.centerMode&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),t=!1===r.options.vertical?e*r.slideWidth*-1+r.slideOffset:e*i*-1+s,!0===r.options.variableWidth&&(n=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow),t=!0===r.options.rtl?n[0]?-1*(r.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,!0===r.options.centerMode&&(n=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow+1),t=!0===r.options.rtl?n[0]?-1*(r.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,t+=(r.$list.width()-n.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){return this.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,i=0,n=0,o=[];for(!1===t.options.infinite?e=t.slideCount:(i=-1*t.options.slidesToScroll,n=-1*t.options.slidesToScroll,e=2*t.slideCount);i<e;)o.push(i),i=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,i,n,o=this;return n=!0===o.options.centerMode?Math.floor(o.$list.width()/2):0,i=-1*o.swipeLeft+n,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each((function(n,r){var s,a;if(s=e(r).outerWidth(),a=r.offsetLeft,!0!==o.options.centerMode&&(a+=s/2),i<a+s)return t=r,!1})),Math.abs(e(t).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var i=this;e(i.$slider).hasClass("slick-initialized")||(e(i.$slider).addClass("slick-initialized"),i.buildRows(),i.buildOut(),i.setProps(),i.startLoad(),i.loadSlider(),i.initializeEvents(),i.updateArrows(),i.updateDots(),i.checkResponsive(!0),i.focusHandler()),t&&i.$slider.trigger("init",[i]),!0===i.options.accessibility&&i.initADA(),i.options.autoplay&&(i.paused=!1,i.autoPlay())},t.prototype.initADA=function(){var t=this,i=Math.ceil(t.slideCount/t.options.slidesToShow),n=t.getNavigableIndexes().filter((function(e){return e>=0&&e<t.slideCount}));t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(i){var o=n.indexOf(i);if(e(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+i,tabindex:-1}),-1!==o){var r="slick-slide-control"+t.instanceUid+o;e("#"+r).length&&e(this).attr({"aria-describedby":r})}})),t.$dots.attr("role","tablist").find("li").each((function(o){var r=n[o];e(this).attr({role:"presentation"}),e(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+o,"aria-controls":"slick-slide"+t.instanceUid+r,"aria-label":o+1+" of "+i,"aria-selected":null,tabindex:"-1"})})).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var o=t.currentSlide,r=o+t.options.slidesToShow;o<r;o++)t.options.focusOnChange?t.$slides.eq(o).attr({tabindex:"0"}):t.$slides.eq(o).removeAttr("tabindex");t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},t.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&(e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(t.setPosition)},t.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},t.prototype.lazyLoad=function(){function t(t){e("img[data-lazy]",t).each((function(){var t=e(this),i=e(this).attr("data-lazy"),n=e(this).attr("data-srcset"),o=e(this).attr("data-sizes")||r.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){t.animate({opacity:0},100,(function(){n&&(t.attr("srcset",n),o&&t.attr("sizes",o)),t.attr("src",i).animate({opacity:1},200,(function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),r.$slider.trigger("lazyLoaded",[r,t,i])}))},s.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,t,i])},s.src=i}))}var i,n,o,r=this;if(!0===r.options.centerMode?!0===r.options.infinite?o=(n=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),o=r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,o=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(n>0&&n--,o<=r.slideCount&&o++)),i=r.$slider.find(".slick-slide").slice(n,o),"anticipated"===r.options.lazyLoad)for(var s=n-1,a=o,l=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)s<0&&(s=r.slideCount-1),i=(i=i.add(l.eq(s))).add(l.eq(a)),s--,a++;t(i),r.slideCount<=r.options.slidesToShow?t(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?t(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&t(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){var e=this;e.checkResponsive(),e.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){var e=this;e.autoPlayClear(),e.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(t){var i=this;if(!i.unslicked&&(i.$slider.trigger("afterChange",[i,t]),i.animating=!1,i.slideCount>i.options.slidesToShow&&i.setPosition(),i.swipeLeft=null,i.options.autoplay&&i.autoPlay(),!0===i.options.accessibility&&(i.initADA(),i.options.focusOnChange))){e(i.$slides.get(i.currentSlide)).attr("tabindex",0).focus()}},t.prototype.prev=t.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var i,n,o,r,s,a=this,l=e("img[data-lazy]",a.$slider);l.length?(i=l.first(),n=i.attr("data-lazy"),o=i.attr("data-srcset"),r=i.attr("data-sizes")||a.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){o&&(i.attr("srcset",o),r&&i.attr("sizes",r)),i.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,i,n]),a.progressiveLazyLoad()},s.onerror=function(){t<3?setTimeout((function(){a.progressiveLazyLoad(t+1)}),500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,i,n]),a.progressiveLazyLoad())},s.src=n):a.$slider.trigger("allImagesLoaded",[a])},t.prototype.refresh=function(t){var i,n,o=this;n=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>n&&(o.currentSlide=n),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),i=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:i}),o.init(),t||o.changeSlide({data:{message:"index",index:i}},!1)},t.prototype.registerBreakpoints=function(){var t,i,n,o=this,r=o.options.responsive||null;if("array"===e.type(r)&&r.length){o.respondTo=o.options.respondTo||"window";for(t in r)if(n=o.breakpoints.length-1,r.hasOwnProperty(t)){for(i=r[t].breakpoint;n>=0;)o.breakpoints[n]&&o.breakpoints[n]===i&&o.breakpoints.splice(n,1),n--;o.breakpoints.push(i),o.breakpointSettings[i]=r[t].settings}o.breakpoints.sort((function(e,t){return o.options.mobileFirst?e-t:t-e}))}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout((function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()}),50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,i){var n=this;return"boolean"==typeof e?e=!0===(t=e)?0:n.slideCount-1:e=!0===t?--e:e,!(n.slideCount<1||e<0||e>n.slideCount-1)&&(n.unload(),!0===i?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(e).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,void n.reinit())},t.prototype.setCSS=function(e){var t,i,n=this,o={};!0===n.options.rtl&&(e=-e),t="left"==n.positionProp?Math.ceil(e)+"px":"0px",i="top"==n.positionProp?Math.ceil(e)+"px":"0px",o[n.positionProp]=e,!1===n.transformsEnabled?n.$slideTrack.css(o):(o={},!1===n.cssTransitions?(o[n.animType]="translate("+t+", "+i+")",n.$slideTrack.css(o)):(o[n.animType]="translate3d("+t+", "+i+", 0px)",n.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,i=this;i.$slides.each((function(n,o){t=i.slideWidth*n*-1,!0===i.options.rtl?e(o).css({position:"relative",right:t,top:0,zIndex:i.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:i.options.zIndex-2,opacity:0})})),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,i,n,o,r,s=this,a=!1;if("object"===e.type(arguments[0])?(n=arguments[0],a=arguments[1],r="multiple"):"string"===e.type(arguments[0])&&(n=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?r="responsive":void 0!==arguments[1]&&(r="single")),"single"===r)s.options[n]=o;else if("multiple"===r)e.each(n,(function(e,t){s.options[e]=t}));else if("responsive"===r)for(i in o)if("array"!==e.type(s.options.responsive))s.options.responsive=[o[i]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===o[i].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(o[i])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},t.prototype.setSlideClasses=function(e){var t,i,n,o,r=this;if(i=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),!0===r.options.centerMode){var s=r.options.slidesToShow%2==0?1:0;t=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(e>=t&&e<=r.slideCount-1-t?r.$slides.slice(e-t+s,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(n=r.options.slidesToShow+e,i.slice(n-t+1+s,n+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?i.eq(i.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&i.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")}else e>=0&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=r.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,n=!0===r.options.infinite?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?i.slice(n-(r.options.slidesToShow-o),n+o).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},t.prototype.setupInfinite=function(){var t,i,n,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(i=null,o.slideCount>o.options.slidesToShow)){for(n=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-n;t-=1)i=t-1,e(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<n+o.slideCount;t+=1)i=t,e(o.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each((function(){e(this).attr("id","")}))}},t.prototype.interrupt=function(e){var t=this;e||t.autoPlay(),t.interrupted=e},t.prototype.selectHandler=function(t){var i=this,n=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(n.attr("data-slick-index"));return o||(o=0),i.slideCount<=i.options.slidesToShow?void i.slideHandler(o,!1,!0):void i.slideHandler(o)},t.prototype.slideHandler=function(e,t,i){var n,o,r,s,a,l=null,c=this;if(t=t||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===e))return!1===t&&c.asNavFor(e),n=e,l=c.getLeft(n),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(e<0||e>c.getDotCount()*c.options.slidesToScroll)?void(!1===c.options.fade&&(n=c.currentSlide,!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(n)})):c.postSlide(n))):!1===c.options.infinite&&!0===c.options.centerMode&&(e<0||e>c.slideCount-c.options.slidesToScroll)?void(!1===c.options.fade&&(n=c.currentSlide,!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(n)})):c.postSlide(n))):(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=n<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+n:n>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:n-c.slideCount:n,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&((a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide)),c.updateDots(),c.updateArrows(),!0===c.options.fade?(!0!==i?(c.fadeSlideOut(r),c.fadeSlide(o,(function(){c.postSlide(o)}))):c.postSlide(o),void c.animateHeight()):void(!0!==i&&c.slideCount>c.options.slidesToShow?c.animateSlide(l,(function(){c.postSlide(o)})):c.postSlide(o)))},t.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,i,n,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,i=Math.atan2(t,e),(n=Math.round(180*i/Math.PI))<0&&(n=360-Math.abs(n)),n<=45&&n>=0?!1===o.options.rtl?"left":"right":n<=360&&n>=315?!1===o.options.rtl?"left":"right":n>=135&&n<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?n>=35&&n<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,i,n=this;if(n.dragging=!1,n.swiping=!1,n.scrolling)return n.scrolling=!1,!1;if(n.interrupted=!1,n.shouldClick=!(n.touchObject.swipeLength>10),void 0===n.touchObject.curX)return!1;if(!0===n.touchObject.edgeHit&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){switch(i=n.swipeDirection()){case"left":case"down":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.currentDirection=0;break;case"right":case"up":t=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.currentDirection=1}"vertical"!=i&&(n.slideHandler(t),n.touchObject={},n.$slider.trigger("swipe",[n,i]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,i,n,o,r,s,a=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!a.dragging||a.scrolling||r&&1!==r.length)&&(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,a.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&s>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=s),i=a.swipeDirection(),void 0!==e.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,e.preventDefault()),o=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(o=a.touchObject.curY>a.touchObject.startY?1:-1),n=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===i||a.currentSlide>=a.getDotCount()&&"left"===i)&&(n=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=t+n*o:a.swipeLeft=t+n*(a.$list.height()/a.listWidth)*o,!0===a.options.verticalSwiping&&(a.swipeLeft=t+n*o),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},t.prototype.swipeStart=function(e){var t,i=this;return i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow?(i.touchObject={},!1):(void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==t?t.pageX:e.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==t?t.pageY:e.clientY,void(i.dragging=!0))},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,i,n=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),a=n.length;for(e=0;e<a;e++)if("object"==s(o)||void 0===o?n[e].slick=new t(n[e],o):i=n[e].slick[o].apply(n[e].slick,r),void 0!==i)return i;return n}}));
/***/},
/***/"./js/listing.js":
/*!***********************!*\
  !*** ./js/listing.js ***!
  \***********************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
/* harmony import */var a=i(/*! ./components/slick */"./js/components/slick.js");
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */o()(document).ready((function(){s.a.on("clickQuickView",(function(t){var i={action:"quickview",id_product:t.dataset.idProduct,id_product_attribute:t.dataset.idProductAttribute};o.a.post(s.a.urls.pages.product,i,null,"json").then((function(t){o()("body").append(t.quickview_html);var i=o()("#quickview-modal-".concat(t.product.id,"-").concat(t.product.id_product_attribute));i.modal("show");i.on("hidden.bs.modal",(function(){i.remove()}));i.on("shown.bs.modal",(function(){e(i)}))})).fail((function(e){s.a.emit("handleError",{eventType:"clickQuickView",resp:e})}))}));var e=function e(t){(new a.default).init();t.find("#quantity_wanted").TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:1,max:1e6})};var t=function e(t){if(void 0!==t.target.dataset.searchUrl)return t.target.dataset.searchUrl;if(void 0===o()(t.target).parent()[0].dataset.searchUrl)throw new Error("Can not parse search URL");return o()(t.target).parent()[0].dataset.searchUrl};o()("body").on("change","#search_filters input[data-search-url]",(function(e){s.a.emit("updateFacets",t(e))}));o()("body").on("click",".js-search-filters-clear-all",(function(e){s.a.emit("updateFacets",t(e))}));o()("body").on("click",".js-search-link",(function(e){e.preventDefault();s.a.emit("updateFacets",o()(e.target).closest("a").get(0).href)}));o()("body").on("change","#select-sort-order",(function(){var e=o()(this).val();s.a.emit("updateFacets",e)}));o()("body").on("change","#search_filters select",(function(e){var t=o()(this).val();s.a.emit("updateFacets",t)}));s.a.on("updateProductList",(function(e){l(e);window.scrollTo(0,0)}))}));function l(e){o()("#search_filters").replaceWith(e.rendered_facets);o()("#js-active-search-filters").replaceWith(e.rendered_active_filters);o()("#js-product-list-top").replaceWith(e.rendered_products_top);o()("#js-product-list").replaceWith(e.rendered_products);o()("#js-product-list-bottom").replaceWith(e.rendered_products_bottom);if(void 0!==e.rendered_products_header&&e.rendered_products_header)o()("#js-product-list-header").replaceWith(e.rendered_products_header)}
/***/},
/***/"./js/product.js":
/*!***********************!*\
  !*** ./js/product.js ***!
  \***********************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
/* harmony import */i(/*! ./components/slick */"./js/components/slick.js");
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */o()(document).ready((function(){console.log("ready product");i();t();
//let slickSlider = new SlickSlider();
e();if(s.a.responsive.mobile){o()(".btn-zoom").hide();console.log("zoom");o()(".product-img img").parent().zoom()}s.a.on("updatedProduct",(function(i){console.log("updatedProduct");t();if(i&&i.product_minimal_quantity){var n=parseInt(i.product_minimal_quantity,10);var r="#quantity_wanted";
// @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
o()(r).trigger("touchspin.updatesettings",{min:n})}o()(o()(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade");o()(".js-product-images-modal").replaceWith(i.product_images_modal);
// slickSlider.init();
e()}));function e(){console.log("slickSliderProductInit");o()(".product-thumbs").slick({asNavFor:".products-imagescover",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">expand_less</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">expand_more</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:6,slidesToScroll:1,focusOnSelect:true,vertical:true,verticalSwiping:true,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:2,vertical:false,verticalSwiping:false,prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1,vertical:false,verticalSwiping:false,prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'}}]});o()(".products-imagescover").slick({asNavFor:".product-thumbs",prevArrow:'<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',nextArrow:'<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>',dots:false,infinite:true,speed:300,rows:0,slidesToShow:1,slidesToScroll:1,vertical:false,verticalSwiping:false})}function t(){o()(".js-file-input").on("change",(function(e){var t,i;if((t=o()(e.currentTarget)[0])&&(i=t.files[0]))o()(t).prev().text(i.name)}))}function i(){var e=o()("#quantity_wanted");e.TouchSpin({buttondown_class:"btn js-touchspin",buttonup_class:"btn js-touchspin",min:parseInt(e.attr("min"),10),max:1e6});o()("body").on("change keyup","#quantity_wanted",(function(e){o()(e.currentTarget).trigger("touchspin.stopspin");s.a.emit("updateProduct",{eventType:"updatedProductQuantity",event:e})}))}}));o()(document).on("shown.bs.modal","#product-modal",(function(e){o()("#js-slick-product").resize()}));
//add to cart loader
o()(document).on("click",".js-add-to-cart:enabled:not(.is--loading)",(function(){o()(this).addClass("is--loading").attr("disabled",true)}));s.a.on("updateCart",(function(e){a()}));s.a.on("handleError",(function(e){a();o()(".js-add-to-cart").attr("disabled",false)}));function a(){o()(".js-add-to-cart.is--loading").removeClass("is--loading")}
/***/},
/***/"./js/responsive.js":
/*!**************************!*\
  !*** ./js/responsive.js ***!
  \**************************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! prestashop */"prestashop");
/* harmony import */var s=i.n(r);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */s.a.responsive=s.a.responsive||{};s.a.responsive.current_width=window.innerWidth;s.a.responsive.min_width=992;s.a.responsive.mobile=s.a.responsive.current_width<s.a.responsive.min_width;function a(e,t){var i=t.children().detach();t.empty().append(e.children().detach());e.append(i)}function l(){if(s.a.responsive.mobile){o()("*[id^='_desktop_']").each((function(e,t){var i=o()("#"+t.id.replace("_desktop_","_mobile_"));if(i.length)a(o()(t),i)}));o()("[data-collapse-hide-mobile]").collapse("hide")}else{o()("*[id^='_mobile_']").each((function(e,t){var i=o()("#"+t.id.replace("_mobile_","_desktop_"));if(i.length)a(o()(t),i)}));o()("[data-collapse-hide-mobile]").not(".show").collapse("show");o()("[data-modal-hide-mobile].show").modal("hide")}s.a.emit("responsive update",{mobile:s.a.responsive.mobile})}o()(window).on("resize",(function(){var e=s.a.responsive.current_width;var t=s.a.responsive.min_width;var i=window.innerWidth;var n=e>=t&&i<t||e<t&&i>=t;s.a.responsive.current_width=i;s.a.responsive.mobile=s.a.responsive.current_width<s.a.responsive.min_width;if(n)l()}));o()(document).ready((function(){if(s.a.responsive.mobile)l()}));
/***/},
/***/"./js/theme.js":
/*!*********************!*\
  !*** ./js/theme.js ***!
  \*********************/
/*! no exports provided */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */i(/*! bootstrap/js/src/util */"./node_modules/bootstrap/js/src/util.js");
/* harmony import */i(/*! bootstrap/js/src/alert */"./node_modules/bootstrap/js/src/alert.js");
/* harmony import */i(/*! bootstrap/js/src/button */"./node_modules/bootstrap/js/src/button.js");
/* harmony import */i(/*! ../node_modules/bootstrap/js/src/collapse.js */"./node_modules/bootstrap/js/src/collapse.js");
/* harmony import */i(/*! bootstrap/js/src/dropdown */"./node_modules/bootstrap/js/src/dropdown.js");
/* harmony import */i(/*! bootstrap/js/src/modal */"./node_modules/bootstrap/js/src/modal.js");
/* harmony import */i(/*! bootstrap/js/src/popover */"./node_modules/bootstrap/js/src/popover.js");
/* harmony import */i(/*! bootstrap/js/src/tab */"./node_modules/bootstrap/js/src/tab.js");
/* harmony import */i(/*! bootstrap/js/src/toast */"./node_modules/bootstrap/js/src/toast.js");
/* harmony import */i(/*! bootstrap/js/src/tooltip */"./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */i(/*! bootstrap-touchspin */"./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js");
/* harmony import */
/* harmony import */i(/*! ./lib/slick.min */"./js/lib/slick.min.js");
/* harmony import */
/* harmony import */i(/*! ./lib/jquery.hoverIntent.min */"./js/lib/jquery.hoverIntent.min.js");
/* harmony import */
/* harmony import */var n=i(/*! ./components/slick */"./js/components/slick.js");
/* harmony import */i(/*! ../node_modules/jquery-zoom/jquery.zoom.min.js */"./node_modules/jquery-zoom/jquery.zoom.min.js");
/* harmony import */
/* harmony import */i(/*! ./responsive */"./js/responsive.js");
/* harmony import */i(/*! ./checkout */"./js/checkout.js");
/* harmony import */i(/*! ./customer */"./js/customer.js");
/* harmony import */i(/*! ./listing */"./js/listing.js");
/* harmony import */i(/*! ./product */"./js/product.js");
/* harmony import */i(/*! ./cart */"./js/cart.js");
/* harmony import */var o=i(/*! ./components/form */"./js/components/form.js");
/* harmony import */var r=i(/*! ./components/top-menu */"./js/components/top-menu.js");
/* harmony import */var s=i(/*! prestashop */"prestashop");
/* harmony import */var a=i.n(s);
/* harmony import */var l=i(/*! events */"./node_modules/events/events.js");
/* harmony import */var c=i.n(l);
/* harmony import */i(/*! ./components/block-cart */"./js/components/block-cart.js");
/* harmony import */i(/*! lazysizes */"./node_modules/lazysizes/lazysizes.js");
/* harmony import */
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
// "inherit" EventEmitter
for(var u in c.a.prototype)a.a[u]=c.a.prototype[u];$(document).ready((function(){var e=new o.default;var t=new n.default;var i=$("#_desktop_top_menu #top-menu");var s=new r.default(i);e.init();t.init();s.init();
//display input file content in custom file input BS
$(".custom-file-input").on("change",(function(){var e=$(this).val().split("\\").pop();$(this).next(".custom-file-label").addClass("selected").html(e)}))}));document.addEventListener("lazyloaded",(function(e){$(e.target).parent().addClass("rc--lazyload")}));$(document).ready((function(){console.log("ready");e();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname")){t();i()}$(window).resize((function(){e();if("/commande"!=$(location).attr("pathname")&&"/checkout"!=$(location).attr("pathname"))i()}));function e(){$(".fullwidth").each((function(){var e=$(this);var t=$("body").width(),i=t/2;
//console.log(fullwidth);
//console.log(content);
e.css({left:"50%",position:"relative",width:t,"margin-left":-i})}))}function t(){var e=$("#header");var t="sticky";var i="unsticky";var n=$("#header").height();$(window).scroll((function(){if($(this).scrollTop()>n)e.addClass(t).removeClass(i);else if($(this).scrollTop()<n)e.addClass(i).removeClass(t)}))}function i(){$(".modal-dialog__offcanvas #adtm_menu").addClass("adtm_menu_toggle_open");
//$('#adtm_menu').toggleClass('adtm_menu_toggle_open');
//$('#adtm_menu .advtm_menu_toggle').toggleClass('adtm_menu_mobile_mode');
}
// Fonction pour scroller les liens vers ancres
$('a[href*="#"]').not('[href="#"]').not('[href*="#footer"]')
/*
  .not('[href="#0"]')
  .not('[href="#bt_tabs-0"]')
  .not('[href="#bt_tabs-1"]')*/.click((function(e){
// On-page links
if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
// Figure out element to scroll to
if($(this).hasClass("nav-link"))var t=$(this).parent().parent();else{t=(t=$(this.hash)).length?t:$("[name="+this.hash.slice(1)+"]")}console.log("target");console.log(t);console.log(t.offset().top);console.log("header height");console.log($("#header").height());
// Does a scroll target exist?
if(t.length){
// Only prevent default if animation is actually gonna happen
//event.preventDefault();
var i=t.offset().top-$("#header").height()-40;console.log("scrollTop : "+i);$("html, body").animate({scrollTop:i},1e3,(function(){
// Callback after animation
// Must change focus!
var e=$(t);e.focus();if(e.is(":focus"))
// Checking if the target was focused
return false;else{e.attr("tabindex","-1");// Adding tabindex for elements not focusable
e.focus();// Set focus again
}}))}}}))}));
/***/},
/***/"./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/function(e,t,i){var n,o,r;
/*
 *  Bootstrap TouchSpin - v4.3.0
 *  A mobile and touch friendly input spinner component for Bootstrap 3 & 4.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function(s){if(true)o=[i(/*! jquery */"jquery")],void 0!==(r="function"==typeof(n=s)?n.apply(t,o):n)&&(e.exports=r)}((function(e){"use strict";var t=0;e.fn.TouchSpin=function(i){var n={min:0,
// If null, there is no minimum enforced
max:100,
// If null, there is no maximum enforced
initval:"",replacementval:"",firstclickvalueifempty:null,step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",
// none | floor | round | ceil
stepintervaldelay:500,verticalbuttons:false,verticalup:"+",verticaldown:"-",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:true,boostat:10,maxboostedstep:false,mousewheel:true,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"-",buttonup_txt:"+",callback_before_calculation:function e(t){return t},callback_after_calculation:function e(t){return t}};var o={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",firstclickvalueifempty:"first-click-value-if-empty",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each((function(){var r,s,a,l,c,u,d,f,p,h,v=e(this),m=v.data(),g=0,y=false;b();function b(){if(v.data("alreadyinitialized"))return;v.data("alreadyinitialized",true);t+=1;v.data("spinnerid",t);if(!v.is("input")){console.log("Must be an input.");return}k();w();N();j();O();P();A();$()}function w(){if(""!==r.initval&&""===v.val())v.val(r.initval)}function _(e){C(e);N();var t=c.input.val();if(""!==t){t=Number(r.callback_before_calculation(c.input.val()));c.input.val(r.callback_after_calculation(Number(t).toFixed(r.decimals)))}}function k(){r=e.extend({},n,m,T(),i)}function T(){var t={};e.each(o,(function(e,i){var n="bts-"+i;if(v.is("[data-"+n+"]"))t[e]=v.data(n)}));return t}function S(){var t=v.parent();q();v.off(".touchspin");if(t.hasClass("bootstrap-touchspin-injected")){v.siblings().remove();v.unwrap()}else{e(".bootstrap-touchspin-injected",t).remove();t.removeClass("bootstrap-touchspin")}v.data("alreadyinitialized",false)}function C(t){r=e.extend({},r,t);
// Update postfix and prefix texts if those settings were changed.
if(t.postfix){if(0===v.parent().find(".bootstrap-touchspin-postfix").length)a.insertAfter(v);v.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(t.postfix)}if(t.prefix){if(0===v.parent().find(".bootstrap-touchspin-prefix").length)s.insertBefore(v);v.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(t.prefix)}P()}function j(){var e=v.val(),t=v.parent();if(""!==e)e=r.callback_after_calculation(Number(e).toFixed(r.decimals));v.data("initvalue",e).val(e);v.addClass("form-control");if(t.hasClass("input-group"))E(t);else x()}function E(t){t.addClass("bootstrap-touchspin");var i=v.prev(),n=v.next();var o,s,a='<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">'+r.prefix+"</span></span>",c='<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">'+r.postfix+"</span></span>";if(i.hasClass("input-group-btn")||i.hasClass("input-group-prepend")){o='<button class="'+r.buttondown_class+' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">'+r.buttondown_txt+"</button>";i.append(o)}else{o='<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="'+r.buttondown_class+' bootstrap-touchspin-down" type="button">'+r.buttondown_txt+"</button></span>";e(o).insertBefore(v)}if(n.hasClass("input-group-btn")||n.hasClass("input-group-append")){s='<button class="'+r.buttonup_class+' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">'+r.buttonup_txt+"</button>";n.prepend(s)}else{s='<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="'+r.buttonup_class+' bootstrap-touchspin-up" type="button">'+r.buttonup_txt+"</button></span>";e(s).insertAfter(v)}e(a).insertBefore(v);e(c).insertAfter(v);l=t}function x(){var t;var i="";if(v.hasClass("input-sm"))i="input-group-sm";if(v.hasClass("input-lg"))i="input-group-lg";if(r.verticalbuttons)t='<div class="input-group '+i+' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">'+r.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">'+r.postfix+'</span></span><span class="input-group-btn-vertical"><button class="'+r.buttondown_class+" bootstrap-touchspin-up "+r.verticalupclass+'" type="button">'+r.verticalup+'</button><button class="'+r.buttonup_class+" bootstrap-touchspin-down "+r.verticaldownclass+'" type="button">'+r.verticaldown+"</button></span></div>";else t='<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="'+r.buttondown_class+' bootstrap-touchspin-down" type="button">'+r.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">'+r.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">'+r.postfix+'</span></span><span class="input-group-btn input-group-append"><button class="'+r.buttonup_class+' bootstrap-touchspin-up" type="button">'+r.buttonup_txt+"</button></span></div>";l=e(t).insertBefore(v);e(".bootstrap-touchspin-prefix",l).after(v);if(v.hasClass("input-sm"))l.addClass("input-group-sm");else if(v.hasClass("input-lg"))l.addClass("input-group-lg")}function O(){c={down:e(".bootstrap-touchspin-down",l),up:e(".bootstrap-touchspin-up",l),input:e("input",l),prefix:e(".bootstrap-touchspin-prefix",l).addClass(r.prefix_extraclass),postfix:e(".bootstrap-touchspin-postfix",l).addClass(r.postfix_extraclass)}}function P(){if(""===r.prefix)s=c.prefix.detach();if(""===r.postfix)a=c.postfix.detach()}function A(){v.on("keydown.touchspin",(function(e){var t=e.keyCode||e.which;if(38===t){if("up"!==y){z();H()}e.preventDefault()}else if(40===t){if("down"!==y){M();F()}e.preventDefault()}}));v.on("keyup.touchspin",(function(e){var t=e.keyCode||e.which;if(38===t)q();else if(40===t)q()}));v.on("blur.touchspin",(function(){N();v.val(r.callback_after_calculation(v.val()))}));c.down.on("keydown",(function(e){var t=e.keyCode||e.which;if(32===t||13===t){if("down"!==y){M();F()}e.preventDefault()}}));c.down.on("keyup.touchspin",(function(e){var t=e.keyCode||e.which;if(32===t||13===t)q()}));c.up.on("keydown.touchspin",(function(e){var t=e.keyCode||e.which;if(32===t||13===t){if("up"!==y){z();H()}e.preventDefault()}}));c.up.on("keyup.touchspin",(function(e){var t=e.keyCode||e.which;if(32===t||13===t)q()}));c.down.on("mousedown.touchspin",(function(e){c.down.off("touchstart.touchspin");// android 4 workaround
if(v.is(":disabled"))return;M();F();e.preventDefault();e.stopPropagation()}));c.down.on("touchstart.touchspin",(function(e){c.down.off("mousedown.touchspin");// android 4 workaround
if(v.is(":disabled"))return;M();F();e.preventDefault();e.stopPropagation()}));c.up.on("mousedown.touchspin",(function(e){c.up.off("touchstart.touchspin");// android 4 workaround
if(v.is(":disabled"))return;z();H();e.preventDefault();e.stopPropagation()}));c.up.on("touchstart.touchspin",(function(e){c.up.off("mousedown.touchspin");// android 4 workaround
if(v.is(":disabled"))return;z();H();e.preventDefault();e.stopPropagation()}));c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(e){if(!y)return;e.stopPropagation();q()}));c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",(function(e){if(!y)return;e.stopPropagation();q()}));c.down.on("mousemove.touchspin touchmove.touchspin",(function(e){if(!y)return;e.stopPropagation();e.preventDefault()}));c.up.on("mousemove.touchspin touchmove.touchspin",(function(e){if(!y)return;e.stopPropagation();e.preventDefault()}));v.on("mousewheel.touchspin DOMMouseScroll.touchspin",(function(e){if(!r.mousewheel||!v.is(":focus"))return;var t=e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail;e.stopPropagation();e.preventDefault();if(t<0)M();else z()}))}function $(){v.on("touchspin.destroy",(function(){S()}));v.on("touchspin.uponce",(function(){q();z()}));v.on("touchspin.downonce",(function(){q();M()}));v.on("touchspin.startupspin",(function(){H()}));v.on("touchspin.startdownspin",(function(){F()}));v.on("touchspin.stopspin",(function(){q()}));v.on("touchspin.updatesettings",(function(e,t){_(t)}))}function D(e){switch(r.forcestepdivisibility){case"round":return(Math.round(e/r.step)*r.step).toFixed(r.decimals);case"floor":return(Math.floor(e/r.step)*r.step).toFixed(r.decimals);case"ceil":return(Math.ceil(e/r.step)*r.step).toFixed(r.decimals);default:return e.toFixed(r.decimals)}}function N(){var e,t,i;if(""===(e=r.callback_before_calculation(v.val()))){if(""!==r.replacementval){v.val(r.replacementval);v.trigger("change")}return}if(r.decimals>0&&"."===e)return;t=parseFloat(e);if(isNaN(t))if(""!==r.replacementval)t=r.replacementval;else t=0;i=t;if(t.toString()!==e)i=t;if(null!==r.min&&t<r.min)i=r.min;if(null!==r.max&&t>r.max)i=r.max;i=D(i);if(Number(e).toString()!==i.toString()){v.val(i);v.trigger("change")}}function L(){if(!r.booster)return r.step;else{var e=Math.pow(2,Math.floor(g/r.boostat))*r.step;if(r.maxboostedstep)if(e>r.maxboostedstep){e=r.maxboostedstep;u=Math.round(u/e)*e}return Math.max(r.step,e)}}function I(){if("number"==typeof r.firstclickvalueifempty)return r.firstclickvalueifempty;else return(r.min+r.max)/2}function z(){N();var e=u=parseFloat(r.callback_before_calculation(c.input.val()));var t;if(isNaN(u))u=I();else{t=L();u+=t}if(null!==r.max&&u>r.max){u=r.max;v.trigger("touchspin.on.max");q()}c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals)));if(e!==u)v.trigger("change")}function M(){N();var e=u=parseFloat(r.callback_before_calculation(c.input.val()));var t;if(isNaN(u))u=I();else{t=L();u-=t}if(null!==r.min&&u<r.min){u=r.min;v.trigger("touchspin.on.min");q()}c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals)));if(e!==u)v.trigger("change")}function F(){q();g=0;y="down";v.trigger("touchspin.on.startspin");v.trigger("touchspin.on.startdownspin");p=setTimeout((function(){d=setInterval((function(){g++;M()}),r.stepinterval)}),r.stepintervaldelay)}function H(){q();g=0;y="up";v.trigger("touchspin.on.startspin");v.trigger("touchspin.on.startupspin");h=setTimeout((function(){f=setInterval((function(){g++;z()}),r.stepinterval)}),r.stepintervaldelay)}function q(){clearTimeout(p);clearTimeout(h);clearInterval(d);clearInterval(f);switch(y){case"up":v.trigger("touchspin.on.stopupspin");v.trigger("touchspin.on.stopspin");break;case"down":v.trigger("touchspin.on.stopdownspin");v.trigger("touchspin.on.stopspin")}g=0;y=false}}))}}));
/***/},
/***/"./node_modules/bootstrap/js/src/alert.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/alert.js ***!
  \************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,u(n.key),n)}}function c(e,t,i){if(t)l(e.prototype,t);if(i)l(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function u(e){var t=d(e,"string");return"symbol"===s(t)?t:String(t)}function d(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var f="alert";var p="4.6.2";var h="bs.alert";var v=".".concat(h);var m=".data-api";var g=o.a.fn[f];var y="alert";var b="fade";var w="show";var _="close".concat(v);var k="closed".concat(v);var T="click".concat(v).concat(m);var S='[data-dismiss="alert"]';
/**
 * Class definition
 */var C=function(){function e(t){a(this,e);this._element=t}
// Getters
c(e,[{key:"close",value:
// Public
function e(t){var i=this._element;if(t)i=this._getRootElement(t);if(this._triggerCloseEvent(i).isDefaultPrevented())return;this._removeElement(i)}},{key:"dispose",value:function e(){o.a.removeData(this._element,h);this._element=null}
// Private
},{key:"_getRootElement",value:function e(t){var i=r.default.getSelectorFromElement(t);var n=false;if(i)n=document.querySelector(i);if(!n)n=o()(t).closest(".".concat(y))[0];return n}},{key:"_triggerCloseEvent",value:function e(t){var i=o.a.Event(_);o()(t).trigger(i);return i}},{key:"_removeElement",value:function e(t){var i=this;o()(t).removeClass(w);if(!o()(t).hasClass(b)){this._destroyElement(t);return}var n=r.default.getTransitionDurationFromElement(t);o()(t).one(r.default.TRANSITION_END,(function(e){return i._destroyElement(t,e)})).emulateTransitionEnd(n)}},{key:"_destroyElement",value:function e(t){o()(t).detach().trigger(k).remove()}
// Static
}],[{key:"VERSION",get:function e(){return p}},{key:"_jQueryInterface",value:function t(i){return this.each((function(){var t=o()(this);var n=t.data(h);if(!n){n=new e(this);t.data(h,n)}if("close"===i)n[i](this)}))}},{key:"_handleDismiss",value:function e(t){return function(e){if(e)e.preventDefault();t.close(this)}}}]);return e}();
/**
 * Data API implementation
 */o()(document).on(T,S,C._handleDismiss(new C));
/**
 * jQuery
 */o.a.fn[f]=C._jQueryInterface;o.a.fn[f].Constructor=C;o.a.fn[f].noConflict=function(){o.a.fn[f]=g;return C._jQueryInterface};
/* harmony default export */t.default=C;
/***/},
/***/"./node_modules/bootstrap/js/src/button.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/src/button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,c(n.key),n)}}function l(e,t,i){if(t)a(e.prototype,t);if(i)a(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function c(e){var t=u(e,"string");return"symbol"===r(t)?t:String(t)}function u(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var d="button";var f="4.6.2";var p="bs.button";var h=".".concat(p);var v=".data-api";var m=o.a.fn[d];var g="active";var y="btn";var b="focus";var w="click".concat(h).concat(v);var _="focus".concat(h).concat(v," ")+"blur".concat(h).concat(v);var k="load".concat(h).concat(v);var T='[data-toggle^="button"]';var S='[data-toggle="buttons"]';var C='[data-toggle="button"]';var j='[data-toggle="buttons"] .btn';var E='input:not([type="hidden"])';var x=".active";var O=".btn";
/**
 * Class definition
 */var P=function(){function e(t){s(this,e);this._element=t;this.shouldAvoidTriggerChange=false}
// Getters
l(e,[{key:"toggle",value:
// Public
function e(){var t=true;var i=true;var n=o()(this._element).closest(S)[0];if(n){var r=this._element.querySelector(E);if(r){if("radio"===r.type)if(r.checked&&this._element.classList.contains(g))t=false;else{var s=n.querySelector(x);if(s)o()(s).removeClass(g)}if(t){
// if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
if("checkbox"===r.type||"radio"===r.type)r.checked=!this._element.classList.contains(g);if(!this.shouldAvoidTriggerChange)o()(r).trigger("change")}r.focus();i=false}}if(!(this._element.hasAttribute("disabled")||this._element.classList.contains("disabled"))){if(i)this._element.setAttribute("aria-pressed",!this._element.classList.contains(g));if(t)o()(this._element).toggleClass(g)}}},{key:"dispose",value:function e(){o.a.removeData(this._element,p);this._element=null}
// Static
}],[{key:"VERSION",get:function e(){return f}},{key:"_jQueryInterface",value:function t(i,n){return this.each((function(){var t=o()(this);var r=t.data(p);if(!r){r=new e(this);t.data(p,r)}r.shouldAvoidTriggerChange=n;if("toggle"===i)r[i]()}))}}]);return e}();
/**
 * Data API implementation
 */o()(document).on(w,T,(function(e){var t=e.target;var i=t;if(!o()(t).hasClass(y))t=o()(t).closest(O)[0];if(!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();// work around Firefox bug #1540995
else{var n=t.querySelector(E);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled"))){e.preventDefault();// work around Firefox bug #1540995
return}if("INPUT"===i.tagName||"LABEL"!==t.tagName)P._jQueryInterface.call(o()(t),"toggle","INPUT"===i.tagName)}})).on(_,T,(function(e){var t=o()(e.target).closest(O)[0];o()(t).toggleClass(b,/^focus(in)?$/.test(e.type))}));o()(window).on(k,(function(){
// ensure correct active class is set to match the controls' actual values/states
// find all checkboxes/readio buttons inside data-toggle groups
var e=[].slice.call(document.querySelectorAll(j));for(var t=0,i=e.length;t<i;t++){var n=e[t];var o=n.querySelector(E);if(o.checked||o.hasAttribute("checked"))n.classList.add(g);else n.classList.remove(g)}
// find all button toggles
for(var r=0,s=(e=[].slice.call(document.querySelectorAll(C))).length;r<s;r++){var a=e[r];if("true"===a.getAttribute("aria-pressed"))a.classList.add(g);else a.classList.remove(g)}}));
/**
 * jQuery
 */o.a.fn[d]=P._jQueryInterface;o.a.fn[d].Constructor=P;o.a.fn[d].noConflict=function(){o.a.fn[d]=m;return P._jQueryInterface};
/* harmony default export */t.default=P;
/***/},
/***/"./node_modules/bootstrap/js/src/collapse.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/collapse.js ***!
  \***************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){if((t=p(t))in e)Object.defineProperty(e,t,{value:i,enumerable:true,configurable:true,writable:true});else e[t]=i;return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,p(n.key),n)}}function f(e,t,i){if(t)d(e.prototype,t);if(i)d(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function p(e){var t=h(e,"string");return"symbol"===s(t)?t:String(t)}function h(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var v="collapse";var m="4.6.2";var g="bs.collapse";var y=".".concat(g);var b=".data-api";var w=o.a.fn[v];var _="show";var k="collapse";var T="collapsing";var S="collapsed";var C="width";var j="height";var E="show".concat(y);var x="shown".concat(y);var O="hide".concat(y);var P="hidden".concat(y);var A="click".concat(y).concat(b);var $=".show, .collapsing";var D='[data-toggle="collapse"]';var N={toggle:true,parent:""};var L={toggle:"boolean",parent:"(string|element)"};
/**
 * Class definition
 */var I=function(){function e(t,i){u(this,e);this._isTransitioning=false;this._element=t;this._config=this._getConfig(i);this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'.concat(t.id,'"],')+'[data-toggle="collapse"][data-target="#'.concat(t.id,'"]')));var n=[].slice.call(document.querySelectorAll(D));for(var o=0,s=n.length;o<s;o++){var a=n[o];var l=r.default.getSelectorFromElement(a);var c=[].slice.call(document.querySelectorAll(l)).filter((function(e){return e===t}));if(null!==l&&c.length>0){this._selector=l;this._triggerArray.push(a)}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent)this._addAriaAndCollapsedClass(this._element,this._triggerArray);if(this._config.toggle)this.toggle()}
// Getters
f(e,[{key:"toggle",value:
// Public
function e(){if(o()(this._element).hasClass(_))this.hide();else this.show()}},{key:"show",value:function t(){var i=this;if(this._isTransitioning||o()(this._element).hasClass(_))return;var n;var s;if(this._parent)if(0===(n=[].slice.call(this._parent.querySelectorAll($)).filter((function(e){if("string"==typeof i._config.parent)return e.getAttribute("data-parent")===i._config.parent;return e.classList.contains(k)}))).length)n=null;if(n)if((s=o()(n).not(this._selector).data(g))&&s._isTransitioning)return;var a=o.a.Event(E);o()(this._element).trigger(a);if(a.isDefaultPrevented())return;if(n){e._jQueryInterface.call(o()(n).not(this._selector),"hide");if(!s)o()(n).data(g,null)}var l=this._getDimension();o()(this._element).removeClass(k).addClass(T);this._element.style[l]=0;if(this._triggerArray.length)o()(this._triggerArray).removeClass(S).attr("aria-expanded",true);this.setTransitioning(true);var c=function e(){o()(i._element).removeClass(T).addClass("".concat(k," ").concat(_));i._element.style[l]="";i.setTransitioning(false);o()(i._element).trigger(x)};var u=l[0].toUpperCase()+l.slice(1);var d="scroll".concat(u);var f=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,c).emulateTransitionEnd(f);this._element.style[l]="".concat(this._element[d],"px")}},{key:"hide",value:function e(){var t=this;if(this._isTransitioning||!o()(this._element).hasClass(_))return;var i=o.a.Event(O);o()(this._element).trigger(i);if(i.isDefaultPrevented())return;var n=this._getDimension();this._element.style[n]="".concat(this._element.getBoundingClientRect()[n],"px");r.default.reflow(this._element);o()(this._element).addClass(T).removeClass("".concat(k," ").concat(_));var s=this._triggerArray.length;if(s>0)for(var a=0;a<s;a++){var l=this._triggerArray[a];var c=r.default.getSelectorFromElement(l);if(null!==c){if(!o()([].slice.call(document.querySelectorAll(c))).hasClass(_))o()(l).addClass(S).attr("aria-expanded",false)}}this.setTransitioning(true);var u=function e(){t.setTransitioning(false);o()(t._element).removeClass(T).addClass(k).trigger(P)};this._element.style[n]="";var d=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,u).emulateTransitionEnd(d)}},{key:"setTransitioning",value:function e(t){this._isTransitioning=t}},{key:"dispose",value:function e(){o.a.removeData(this._element,g);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null}
// Private
},{key:"_getConfig",value:function e(t){(t=l(l({},N),t)).toggle=Boolean(t.toggle);// Coerce string values
r.default.typeCheckConfig(v,t,L);return t}},{key:"_getDimension",value:function e(){return o()(this._element).hasClass(C)?C:j}},{key:"_getParent",value:function t(){var i=this;var n;if(r.default.isElement(this._config.parent)){n=this._config.parent;
// It's a jQuery object
if(void 0!==this._config.parent.jquery)n=this._config.parent[0]}else n=document.querySelector(this._config.parent);var s='[data-toggle="collapse"][data-parent="'.concat(this._config.parent,'"]');var a=[].slice.call(n.querySelectorAll(s));o()(a).each((function(t,n){i._addAriaAndCollapsedClass(e._getTargetFromElement(n),[n])}));return n}},{key:"_addAriaAndCollapsedClass",value:function e(t,i){var n=o()(t).hasClass(_);if(i.length)o()(i).toggleClass(S,!n).attr("aria-expanded",n)}
// Static
}],[{key:"VERSION",get:function e(){return m}},{key:"Default",get:function e(){return N}},{key:"_getTargetFromElement",value:function e(t){var i=r.default.getSelectorFromElement(t);return i?document.querySelector(i):null}},{key:"_jQueryInterface",value:function t(i){return this.each((function(){var t=o()(this);var n=t.data(g);var r=l(l(l({},N),t.data()),"object"===s(i)&&i?i:{});if(!n&&r.toggle&&"string"==typeof i&&/show|hide/.test(i))r.toggle=false;if(!n){n=new e(this,r);t.data(g,n)}if("string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'.concat(i,'"'));n[i]()}}))}}]);return e}();
/**
 * Data API implementation
 */o()(document).on(A,D,(function(e){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
if("A"===e.currentTarget.tagName)e.preventDefault();var t=o()(this);var i=r.default.getSelectorFromElement(this);var n=[].slice.call(document.querySelectorAll(i));o()(n).each((function(){var e=o()(this);var i=e.data(g)?"toggle":t.data();I._jQueryInterface.call(e,i)}))}));
/**
 * jQuery
 */o.a.fn[v]=I._jQueryInterface;o.a.fn[v].Constructor=I;o.a.fn[v].noConflict=function(){o.a.fn[v]=w;return I._jQueryInterface};
/* harmony default export */t.default=I;
/***/},
/***/"./node_modules/bootstrap/js/src/dropdown.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/dropdown.js ***!
  \***************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var s=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){u(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t,i){if((t=h(t))in e)Object.defineProperty(e,t,{value:i,enumerable:true,configurable:true,writable:true});else e[t]=i;return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,h(n.key),n)}}function p(e,t,i){if(t)f(e.prototype,t);if(i)f(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function h(e){var t=v(e,"string");return"symbol"===a(t)?t:String(t)}function v(e,t){if("object"!==a(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var m="dropdown";var g="4.6.2";var y="bs.dropdown";var b=".".concat(y);var w=".data-api";var _=o.a.fn[m];var k=27;// KeyboardEvent.which value for Escape (Esc) key
var T=32;// KeyboardEvent.which value for space key
var S=9;// KeyboardEvent.which value for tab key
var C=38;// KeyboardEvent.which value for up arrow key
var j=40;// KeyboardEvent.which value for down arrow key
var E=3;// MouseEvent.which value for the right button (assuming a right-handed mouse)
var x=new RegExp("".concat(C,"|").concat(j,"|").concat(k));var O="disabled";var P="show";var A="dropup";var $="dropright";var D="dropleft";var N="dropdown-menu-right";var L="position-static";var I="hide".concat(b);var z="hidden".concat(b);var M="show".concat(b);var F="shown".concat(b);var H="click".concat(b);var q="click".concat(b).concat(w);var R="keydown".concat(b).concat(w);var W="keyup".concat(b).concat(w);var B='[data-toggle="dropdown"]';var U=".dropdown form";var Q=".dropdown-menu";var Y=".navbar-nav";var V=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";var X="top-start";var K="top-end";var G="bottom-start";var Z="bottom-end";var J="right-start";var ee="left-start";var te={offset:0,flip:true,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null};var ie={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"};
/**
 * Class definition
 */var ne=function(){function e(t,i){d(this,e);this._element=t;this._popper=null;this._config=this._getConfig(i);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners()}
// Getters
p(e,[{key:"toggle",value:
// Public
function t(){if(this._element.disabled||o()(this._element).hasClass(O))return;var i=o()(this._menu).hasClass(P);e._clearMenus();if(i)return;this.show(true)}},{key:"show",value:function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:false;if(this._element.disabled||o()(this._element).hasClass(O)||o()(this._menu).hasClass(P))return;var n={relatedTarget:this._element};var a=o.a.Event(M,n);var l=e._getParentFromElement(this._element);o()(l).trigger(a);if(a.isDefaultPrevented())return;
// Totally disable Popper for Dropdowns in Navbar
if(!this._inNavbar&&i){
// Check for Popper dependency
if(void 0===r.default)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var c=this._element;if("parent"===this._config.reference)c=l;else if(s.default.isElement(this._config.reference)){c=this._config.reference;
// Check if it's jQuery element
if(void 0!==this._config.reference.jquery)c=this._config.reference[0]}
// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
if("scrollParent"!==this._config.boundary)o()(l).addClass(L);this._popper=new r.default(c,this._menu,this._getPopperConfig())}
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if("ontouchstart"in document.documentElement&&0===o()(l).closest(Y).length)o()(document.body).children().on("mouseover",null,o.a.noop);this._element.focus();this._element.setAttribute("aria-expanded",true);o()(this._menu).toggleClass(P);o()(l).toggleClass(P).trigger(o.a.Event(F,n))}},{key:"hide",value:function t(){if(this._element.disabled||o()(this._element).hasClass(O)||!o()(this._menu).hasClass(P))return;var i={relatedTarget:this._element};var n=o.a.Event(I,i);var r=e._getParentFromElement(this._element);o()(r).trigger(n);if(n.isDefaultPrevented())return;if(this._popper)this._popper.destroy();o()(this._menu).toggleClass(P);o()(r).toggleClass(P).trigger(o.a.Event(z,i))}},{key:"dispose",value:function e(){o.a.removeData(this._element,y);o()(this._element).off(b);this._element=null;this._menu=null;if(null!==this._popper){this._popper.destroy();this._popper=null}}},{key:"update",value:function e(){this._inNavbar=this._detectNavbar();if(null!==this._popper)this._popper.scheduleUpdate()}
// Private
},{key:"_addEventListeners",value:function e(){var t=this;o()(this._element).on(H,(function(e){e.preventDefault();e.stopPropagation();t.toggle()}))}},{key:"_getConfig",value:function e(t){t=c(c(c({},this.constructor.Default),o()(this._element).data()),t);s.default.typeCheckConfig(m,t,this.constructor.DefaultType);return t}},{key:"_getMenuElement",value:function t(){if(!this._menu){var i=e._getParentFromElement(this._element);if(i)this._menu=i.querySelector(Q)}return this._menu}},{key:"_getPlacement",value:function e(){var t=o()(this._element.parentNode);var i=G;
// Handle dropup
if(t.hasClass(A))i=o()(this._menu).hasClass(N)?K:X;else if(t.hasClass($))i=J;else if(t.hasClass(D))i=ee;else if(o()(this._menu).hasClass(N))i=Z;return i}},{key:"_detectNavbar",value:function e(){return o()(this._element).closest(".navbar").length>0}},{key:"_getOffset",value:function e(){var t=this;var i={};if("function"==typeof this._config.offset)i.fn=function(e){e.offsets=c(c({},e.offsets),t._config.offset(e.offsets,t._element));return e};else i.offset=this._config.offset;return i}},{key:"_getPopperConfig",value:function e(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};
// Disable Popper if we have a static display
if("static"===this._config.display)t.modifiers.applyStyle={enabled:false};return c(c({},t),this._config.popperConfig)}
// Static
}],[{key:"VERSION",get:function e(){return g}},{key:"Default",get:function e(){return te}},{key:"DefaultType",get:function e(){return ie}},{key:"_jQueryInterface",value:function t(i){return this.each((function(){var t=o()(this).data(y);var n="object"===a(i)?i:null;if(!t){t=new e(this,n);o()(this).data(y,t)}if("string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'.concat(i,'"'));t[i]()}}))}},{key:"_clearMenus",value:function t(i){if(i&&(i.which===E||"keyup"===i.type&&i.which!==S))return;var n=[].slice.call(document.querySelectorAll(B));for(var r=0,s=n.length;r<s;r++){var a=e._getParentFromElement(n[r]);var l=o()(n[r]).data(y);var c={relatedTarget:n[r]};if(i&&"click"===i.type)c.clickEvent=i;if(!l)continue;var u=l._menu;if(!o()(a).hasClass(P))continue;if(i&&("click"===i.type&&/input|textarea/i.test(i.target.tagName)||"keyup"===i.type&&i.which===S)&&o.a.contains(a,i.target))continue;var d=o.a.Event(I,c);o()(a).trigger(d);if(d.isDefaultPrevented())continue;
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)o()(document.body).children().off("mouseover",null,o.a.noop);n[r].setAttribute("aria-expanded","false");if(l._popper)l._popper.destroy();o()(u).removeClass(P);o()(a).removeClass(P).trigger(o.a.Event(z,c))}}},{key:"_getParentFromElement",value:function e(t){var i;var n=s.default.getSelectorFromElement(t);if(n)i=document.querySelector(n);return i||t.parentNode}
// eslint-disable-next-line complexity
},{key:"_dataApiKeydownHandler",value:function t(i){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if(/input|textarea/i.test(i.target.tagName)?i.which===T||i.which!==k&&(i.which!==j&&i.which!==C||o()(i.target).closest(Q).length):!x.test(i.which))return;if(this.disabled||o()(this).hasClass(O))return;var n=e._getParentFromElement(this);var r=o()(n).hasClass(P);if(!r&&i.which===k)return;i.preventDefault();i.stopPropagation();if(!r||i.which===k||i.which===T){if(i.which===k)o()(n.querySelector(B)).trigger("focus");o()(this).trigger("click");return}var s=[].slice.call(n.querySelectorAll(V)).filter((function(e){return o()(e).is(":visible")}));if(0===s.length)return;var a=s.indexOf(i.target);if(i.which===C&&a>0)
// Up
a--;if(i.which===j&&a<s.length-1)
// Down
a++;if(a<0)a=0;s[a].focus()}}]);return e}();
/**
 * Data API implementation
 */o()(document).on(R,B,ne._dataApiKeydownHandler).on(R,Q,ne._dataApiKeydownHandler).on("".concat(q," ").concat(W),ne._clearMenus).on(q,B,(function(e){e.preventDefault();e.stopPropagation();ne._jQueryInterface.call(o()(this),"toggle")})).on(q,U,(function(e){e.stopPropagation()}));
/**
 * jQuery
 */o.a.fn[m]=ne._jQueryInterface;o.a.fn[m].Constructor=ne;o.a.fn[m].noConflict=function(){o.a.fn[m]=_;return ne._jQueryInterface};
/* harmony default export */t.default=ne;
/***/},
/***/"./node_modules/bootstrap/js/src/modal.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/modal.js ***!
  \************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){if((t=p(t))in e)Object.defineProperty(e,t,{value:i,enumerable:true,configurable:true,writable:true});else e[t]=i;return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,p(n.key),n)}}function f(e,t,i){if(t)d(e.prototype,t);if(i)d(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function p(e){var t=h(e,"string");return"symbol"===s(t)?t:String(t)}function h(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var v="modal";var m="4.6.2";var g="bs.modal";var y=".".concat(g);var b=".data-api";var w=o.a.fn[v];var _=27;// KeyboardEvent.which value for Escape (Esc) key
var k="modal-dialog-scrollable";var T="modal-scrollbar-measure";var S="modal-backdrop";var C="modal-open";var j="fade";var E="show";var x="modal-static";var O="hide".concat(y);var P="hidePrevented".concat(y);var A="hidden".concat(y);var $="show".concat(y);var D="shown".concat(y);var N="focusin".concat(y);var L="resize".concat(y);var I="click.dismiss".concat(y);var z="keydown.dismiss".concat(y);var M="mouseup.dismiss".concat(y);var F="mousedown.dismiss".concat(y);var H="click".concat(y).concat(b);var q=".modal-dialog";var R=".modal-body";var W='[data-toggle="modal"]';var B='[data-dismiss="modal"]';var U=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";var Q=".sticky-top";var Y={backdrop:true,keyboard:true,focus:true,show:true};var V={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"};
/**
 * Class definition
 */var X=function(){function e(t,i){u(this,e);this._config=this._getConfig(i);this._element=t;this._dialog=t.querySelector(q);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollbarWidth=0}
// Getters
f(e,[{key:"toggle",value:
// Public
function e(t){return this._isShown?this.hide():this.show(t)}},{key:"show",value:function e(t){var i=this;if(this._isShown||this._isTransitioning)return;var n=o.a.Event($,{relatedTarget:t});o()(this._element).trigger(n);if(n.isDefaultPrevented())return;this._isShown=true;if(o()(this._element).hasClass(j))this._isTransitioning=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();o()(this._element).on(I,B,(function(e){return i.hide(e)}));o()(this._dialog).on(F,(function(){o()(i._element).one(M,(function(e){if(o()(e.target).is(i._element))i._ignoreBackdropClick=true}))}));this._showBackdrop((function(){return i._showElement(t)}))}},{key:"hide",value:function e(t){var i=this;if(t)t.preventDefault();if(!this._isShown||this._isTransitioning)return;var n=o.a.Event(O);o()(this._element).trigger(n);if(!this._isShown||n.isDefaultPrevented())return;this._isShown=false;var s=o()(this._element).hasClass(j);if(s)this._isTransitioning=true;this._setEscapeEvent();this._setResizeEvent();o()(document).off(N);o()(this._element).removeClass(E);o()(this._element).off(I);o()(this._dialog).off(F);if(s){var a=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,(function(e){return i._hideModal(e)})).emulateTransitionEnd(a)}else this._hideModal()}},{key:"dispose",value:function e(){[window,this._element,this._dialog].forEach((function(e){return o()(e).off(y)}));
/**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */o()(document).off(N);o.a.removeData(this._element,g);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null}},{key:"handleUpdate",value:function e(){this._adjustDialog()}
// Private
},{key:"_getConfig",value:function e(t){t=l(l({},Y),t);r.default.typeCheckConfig(v,t,V);return t}},{key:"_triggerBackdropTransition",value:function e(){var t=this;var i=o.a.Event(P);o()(this._element).trigger(i);if(i.isDefaultPrevented())return;var n=this._element.scrollHeight>document.documentElement.clientHeight;if(!n)this._element.style.overflowY="hidden";this._element.classList.add(x);var s=r.default.getTransitionDurationFromElement(this._dialog);o()(this._element).off(r.default.TRANSITION_END);o()(this._element).one(r.default.TRANSITION_END,(function(){t._element.classList.remove(x);if(!n)o()(t._element).one(r.default.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,s)})).emulateTransitionEnd(s);this._element.focus()}},{key:"_showElement",value:function e(t){var i=this;var n=o()(this._element).hasClass(j);var s=this._dialog?this._dialog.querySelector(R):null;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)
// Don't move modal's DOM position
document.body.appendChild(this._element);this._element.style.display="block";this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");if(o()(this._dialog).hasClass(k)&&s)s.scrollTop=0;else this._element.scrollTop=0;if(n)r.default.reflow(this._element);o()(this._element).addClass(E);if(this._config.focus)this._enforceFocus();var a=o.a.Event(D,{relatedTarget:t});var l=function e(){if(i._config.focus)i._element.focus();i._isTransitioning=false;o()(i._element).trigger(a)};if(n){var c=r.default.getTransitionDurationFromElement(this._dialog);o()(this._dialog).one(r.default.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},{key:"_enforceFocus",value:function e(){var t=this;o()(document).off(N).on(N,(function(e){if(document!==e.target&&t._element!==e.target&&0===o()(t._element).has(e.target).length)t._element.focus()}))}},{key:"_setEscapeEvent",value:function e(){var t=this;if(this._isShown)o()(this._element).on(z,(function(e){if(t._config.keyboard&&e.which===_){e.preventDefault();t.hide()}else if(!t._config.keyboard&&e.which===_)t._triggerBackdropTransition()}));else if(!this._isShown)o()(this._element).off(z)}},{key:"_setResizeEvent",value:function e(){var t=this;if(this._isShown)o()(window).on(L,(function(e){return t.handleUpdate(e)}));else o()(window).off(L)}},{key:"_hideModal",value:function e(){var t=this;this._element.style.display="none";this._element.setAttribute("aria-hidden",true);this._element.removeAttribute("aria-modal");this._element.removeAttribute("role");this._isTransitioning=false;this._showBackdrop((function(){o()(document.body).removeClass(C);t._resetAdjustments();t._resetScrollbar();o()(t._element).trigger(A)}))}},{key:"_removeBackdrop",value:function e(){if(this._backdrop){o()(this._backdrop).remove();this._backdrop=null}}},{key:"_showBackdrop",value:function e(t){var i=this;var n=o()(this._element).hasClass(j)?j:"";if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement("div");this._backdrop.className=S;if(n)this._backdrop.classList.add(n);o()(this._backdrop).appendTo(document.body);o()(this._element).on(I,(function(e){if(i._ignoreBackdropClick){i._ignoreBackdropClick=false;return}if(e.target!==e.currentTarget)return;if("static"===i._config.backdrop)i._triggerBackdropTransition();else i.hide()}));if(n)r.default.reflow(this._backdrop);o()(this._backdrop).addClass(E);if(!t)return;if(!n){t();return}var s=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,t).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){o()(this._backdrop).removeClass(E);var a=function e(){i._removeBackdrop();if(t)t()};if(o()(this._element).hasClass(j)){var l=r.default.getTransitionDurationFromElement(this._backdrop);o()(this._backdrop).one(r.default.TRANSITION_END,a).emulateTransitionEnd(l)}else a()}else if(t)t()}
// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
},{key:"_adjustDialog",value:function e(){var t=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&t)this._element.style.paddingLeft="".concat(this._scrollbarWidth,"px");if(this._isBodyOverflowing&&!t)this._element.style.paddingRight="".concat(this._scrollbarWidth,"px")}},{key:"_resetAdjustments",value:function e(){this._element.style.paddingLeft="";this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function e(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function e(){var t=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var i=[].slice.call(document.querySelectorAll(U));var n=[].slice.call(document.querySelectorAll(Q));
// Adjust fixed content padding
o()(i).each((function(e,i){var n=i.style.paddingRight;var r=o()(i).css("padding-right");o()(i).data("padding-right",n).css("padding-right","".concat(parseFloat(r)+t._scrollbarWidth,"px"))}));
// Adjust sticky content margin
o()(n).each((function(e,i){var n=i.style.marginRight;var r=o()(i).css("margin-right");o()(i).data("margin-right",n).css("margin-right","".concat(parseFloat(r)-t._scrollbarWidth,"px"))}));
// Adjust body padding
var r=document.body.style.paddingRight;var s=o()(document.body).css("padding-right");o()(document.body).data("padding-right",r).css("padding-right","".concat(parseFloat(s)+this._scrollbarWidth,"px"))}o()(document.body).addClass(C)}},{key:"_resetScrollbar",value:function e(){
// Restore fixed content padding
var t=[].slice.call(document.querySelectorAll(U));o()(t).each((function(e,t){var i=o()(t).data("padding-right");o()(t).removeData("padding-right");t.style.paddingRight=i?i:""}));
// Restore sticky content
var i=[].slice.call(document.querySelectorAll("".concat(Q)));o()(i).each((function(e,t){var i=o()(t).data("margin-right");if(void 0!==i)o()(t).css("margin-right",i).removeData("margin-right")}));
// Restore body padding
var n=o()(document.body).data("padding-right");o()(document.body).removeData("padding-right");document.body.style.paddingRight=n?n:""}},{key:"_getScrollbarWidth",value:function e(){
// thx d.walsh
var t=document.createElement("div");t.className=T;document.body.appendChild(t);var i=t.getBoundingClientRect().width-t.clientWidth;document.body.removeChild(t);return i}
// Static
}],[{key:"VERSION",get:function e(){return m}},{key:"Default",get:function e(){return Y}},{key:"_jQueryInterface",value:function t(i,n){return this.each((function(){var t=o()(this).data(g);var r=l(l(l({},Y),o()(this).data()),"object"===s(i)&&i?i:{});if(!t){t=new e(this,r);o()(this).data(g,t)}if("string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'.concat(i,'"'));t[i](n)}else if(r.show)t.show(n)}))}}]);return e}();
/**
 * Data API implementation
 */o()(document).on(H,W,(function(e){var t=this;var i;var n=r.default.getSelectorFromElement(this);if(n)i=document.querySelector(n);var s=o()(i).data(g)?"toggle":l(l({},o()(i).data()),o()(this).data());if("A"===this.tagName||"AREA"===this.tagName)e.preventDefault();var a=o()(i).one($,(function(e){if(e.isDefaultPrevented())
// Only register focus restorer if modal will actually get shown
return;a.one(A,(function(){if(o()(t).is(":visible"))t.focus()}))}));X._jQueryInterface.call(o()(i),s,this)}));
/**
 * jQuery
 */o.a.fn[v]=X._jQueryInterface;o.a.fn[v].Constructor=X;o.a.fn[v].noConflict=function(){o.a.fn[v]=w;return X._jQueryInterface};
/* harmony default export */t.default=X;
/***/},
/***/"./node_modules/bootstrap/js/src/popover.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/popover.js ***!
  \**************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./tooltip */"./node_modules/bootstrap/js/src/tooltip.js");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,w(n.key),n)}}function c(e,t,i){if(t)l(e.prototype,t);if(i)l(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)d(e,t)}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,i){t.__proto__=i;return t})(e,t)}function f(e){var t=v();return function i(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function p(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;else if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"==typeof Proxy)return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){b(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function b(e,t,i){if((t=w(t))in e)Object.defineProperty(e,t,{value:i,enumerable:true,configurable:true,writable:true});else e[t]=i;return e}function w(e){var t=_(e,"string");return"symbol"===s(t)?t:String(t)}function _(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var k="popover";var T="4.6.2";var S="bs.popover";var C=".".concat(S);var j=o.a.fn[k];var E="bs-popover";var x=new RegExp("(^|\\s)".concat(E,"\\S+"),"g");var O="fade";var P="show";var A=".popover-header";var $=".popover-body";var D=y(y({},r.default.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'});var N=y(y({},r.default.DefaultType),{},{content:"(string|element|function)"});var L={HIDE:"hide".concat(C),HIDDEN:"hidden".concat(C),SHOW:"show".concat(C),SHOWN:"shown".concat(C),INSERTED:"inserted".concat(C),CLICK:"click".concat(C),FOCUSIN:"focusin".concat(C),FOCUSOUT:"focusout".concat(C),MOUSEENTER:"mouseenter".concat(C),MOUSELEAVE:"mouseleave".concat(C)};
/**
 * Class definition
 */var I=function(e){u(i,e);var t=f(i);function i(){a(this,i);return t.apply(this,arguments)}c(i,[{key:"isWithContent",value:
// Overrides
function e(){return this.getTitle()||this._getContent()}},{key:"addAttachmentClass",value:function e(t){o()(this.getTipElement()).addClass("".concat(E,"-").concat(t))}},{key:"getTipElement",value:function e(){this.tip=this.tip||o()(this.config.template)[0];return this.tip}},{key:"setContent",value:function e(){var t=o()(this.getTipElement());
// We use append for html objects to maintain js events
this.setElementContent(t.find(A),this.getTitle());var i=this._getContent();if("function"==typeof i)i=i.call(this.element);this.setElementContent(t.find($),i);t.removeClass("".concat(O," ").concat(P))}
// Private
},{key:"_getContent",value:function e(){return this.element.getAttribute("data-content")||this.config.content}},{key:"_cleanTipClass",value:function e(){var t=o()(this.getTipElement());var i=t.attr("class").match(x);if(null!==i&&i.length>0)t.removeClass(i.join(""))}
// Static
}],[{key:"VERSION",get:
// Getters
function e(){return T}},{key:"Default",get:function e(){return D}},{key:"NAME",get:function e(){return k}},{key:"DATA_KEY",get:function e(){return S}},{key:"Event",get:function e(){return L}},{key:"EVENT_KEY",get:function e(){return C}},{key:"DefaultType",get:function e(){return N}},{key:"_jQueryInterface",value:function e(t){return this.each((function(){var e=o()(this).data(S);var n="object"===s(t)?t:null;if(!e&&/dispose|hide/.test(t))return;if(!e){e=new i(this,n);o()(this).data(S,e)}if("string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'.concat(t,'"'));e[t]()}}))}}]);return i}(r.default);
/**
 * jQuery
 */o.a.fn[k]=I._jQueryInterface;o.a.fn[k].Constructor=I;o.a.fn[k].noConflict=function(){o.a.fn[k]=j;return I._jQueryInterface};
/* harmony default export */t.default=I;
/***/},
/***/"./node_modules/bootstrap/js/src/tab.js":
/*!**********************************************!*\
  !*** ./node_modules/bootstrap/js/src/tab.js ***!
  \**********************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,u(n.key),n)}}function c(e,t,i){if(t)l(e.prototype,t);if(i)l(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function u(e){var t=d(e,"string");return"symbol"===s(t)?t:String(t)}function d(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var f="tab";var p="4.6.2";var h="bs.tab";var v=".".concat(h);var m=".data-api";var g=o.a.fn[f];var y="dropdown-menu";var b="active";var w="disabled";var _="fade";var k="show";var T="hide".concat(v);var S="hidden".concat(v);var C="show".concat(v);var j="shown".concat(v);var E="click".concat(v).concat(m);var x=".dropdown";var O=".nav, .list-group";var P=".active";var A="> li > .active";var $='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';var D=".dropdown-toggle";var N="> .dropdown-menu .active";
/**
 * Class definition
 */var L=function(){function e(t){a(this,e);this._element=t}
// Getters
c(e,[{key:"show",value:
// Public
function e(){var t=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o()(this._element).hasClass(b)||o()(this._element).hasClass(w)||this._element.hasAttribute("disabled"))return;var i;var n;var s=o()(this._element).closest(O)[0];var a=r.default.getSelectorFromElement(this._element);if(s){var l="UL"===s.nodeName||"OL"===s.nodeName?A:P;n=(n=o.a.makeArray(o()(s).find(l)))[n.length-1]}var c=o.a.Event(T,{relatedTarget:this._element});var u=o.a.Event(C,{relatedTarget:n});if(n)o()(n).trigger(c);o()(this._element).trigger(u);if(u.isDefaultPrevented()||c.isDefaultPrevented())return;if(a)i=document.querySelector(a);this._activate(this._element,s);var d=function e(){var i=o.a.Event(S,{relatedTarget:t._element});var r=o.a.Event(j,{relatedTarget:n});o()(n).trigger(i);o()(t._element).trigger(r)};if(i)this._activate(i,i.parentNode,d);else d()}},{key:"dispose",value:function e(){o.a.removeData(this._element,h);this._element=null}
// Private
},{key:"_activate",value:function e(t,i,n){var s=this;var a=(i&&("UL"===i.nodeName||"OL"===i.nodeName)?o()(i).find(A):o()(i).children(P))[0];var l=n&&a&&o()(a).hasClass(_);var c=function e(){return s._transitionComplete(t,a,n)};if(a&&l){var u=r.default.getTransitionDurationFromElement(a);o()(a).removeClass(k).one(r.default.TRANSITION_END,c).emulateTransitionEnd(u)}else c()}},{key:"_transitionComplete",value:function e(t,i,n){if(i){o()(i).removeClass(b);var s=o()(i.parentNode).find(N)[0];if(s)o()(s).removeClass(b);if("tab"===i.getAttribute("role"))i.setAttribute("aria-selected",false)}o()(t).addClass(b);if("tab"===t.getAttribute("role"))t.setAttribute("aria-selected",true);r.default.reflow(t);if(t.classList.contains(_))t.classList.add(k);var a=t.parentNode;if(a&&"LI"===a.nodeName)a=a.parentNode;if(a&&o()(a).hasClass(y)){var l=o()(t).closest(x)[0];if(l){var c=[].slice.call(l.querySelectorAll(D));o()(c).addClass(b)}t.setAttribute("aria-expanded",true)}if(n)n()}
// Static
}],[{key:"VERSION",get:function e(){return p}},{key:"_jQueryInterface",value:function t(i){return this.each((function(){var t=o()(this);var n=t.data(h);if(!n){n=new e(this);t.data(h,n)}if("string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'.concat(i,'"'));n[i]()}}))}}]);return e}();
/**
 * Data API implementation
 */o()(document).on(E,$,(function(e){e.preventDefault();L._jQueryInterface.call(o()(this),"show")}));
/**
 * jQuery
 */o.a.fn[f]=L._jQueryInterface;o.a.fn[f].Constructor=L;o.a.fn[f].noConflict=function(){o.a.fn[f]=g;return L._jQueryInterface};
/* harmony default export */t.default=L;
/***/},
/***/"./node_modules/bootstrap/js/src/toast.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/toast.js ***!
  \************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/* harmony import */var r=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){if((t=p(t))in e)Object.defineProperty(e,t,{value:i,enumerable:true,configurable:true,writable:true});else e[t]=i;return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,p(n.key),n)}}function f(e,t,i){if(t)d(e.prototype,t);if(i)d(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function p(e){var t=h(e,"string");return"symbol"===s(t)?t:String(t)}function h(e,t){if("object"!==s(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var v="toast";var m="4.6.2";var g="bs.toast";var y=".".concat(g);var b=o.a.fn[v];var w="fade";var _="hide";var k="show";var T="showing";var S="click.dismiss".concat(y);var C="hide".concat(y);var j="hidden".concat(y);var E="show".concat(y);var x="shown".concat(y);var O='[data-dismiss="toast"]';var P={animation:true,autohide:true,delay:500};var A={animation:"boolean",autohide:"boolean",delay:"number"};
/**
 * Class definition
 */var $=function(){function e(t,i){u(this,e);this._element=t;this._config=this._getConfig(i);this._timeout=null;this._setListeners()}
// Getters
f(e,[{key:"show",value:
// Public
function e(){var t=this;var i=o.a.Event(E);o()(this._element).trigger(i);if(i.isDefaultPrevented())return;this._clearTimeout();if(this._config.animation)this._element.classList.add(w);var n=function e(){t._element.classList.remove(T);t._element.classList.add(k);o()(t._element).trigger(x);if(t._config.autohide)t._timeout=setTimeout((function(){t.hide()}),t._config.delay)};this._element.classList.remove(_);r.default.reflow(this._element);this._element.classList.add(T);if(this._config.animation){var s=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,n).emulateTransitionEnd(s)}else n()}},{key:"hide",value:function e(){if(!this._element.classList.contains(k))return;var t=o.a.Event(C);o()(this._element).trigger(t);if(t.isDefaultPrevented())return;this._close()}},{key:"dispose",value:function e(){this._clearTimeout();if(this._element.classList.contains(k))this._element.classList.remove(k);o()(this._element).off(S);o.a.removeData(this._element,g);this._element=null;this._config=null}
// Private
},{key:"_getConfig",value:function e(t){t=l(l(l({},P),o()(this._element).data()),"object"===s(t)&&t?t:{});r.default.typeCheckConfig(v,t,this.constructor.DefaultType);return t}},{key:"_setListeners",value:function e(){var t=this;o()(this._element).on(S,O,(function(){return t.hide()}))}},{key:"_close",value:function e(){var t=this;var i=function e(){t._element.classList.add(_);o()(t._element).trigger(j)};this._element.classList.remove(k);if(this._config.animation){var n=r.default.getTransitionDurationFromElement(this._element);o()(this._element).one(r.default.TRANSITION_END,i).emulateTransitionEnd(n)}else i()}},{key:"_clearTimeout",value:function e(){clearTimeout(this._timeout);this._timeout=null}
// Static
}],[{key:"VERSION",get:function e(){return m}},{key:"DefaultType",get:function e(){return A}},{key:"Default",get:function e(){return P}},{key:"_jQueryInterface",value:function t(i){return this.each((function(){var t=o()(this);var n=t.data(g);var r="object"===s(i)&&i;if(!n){n=new e(this,r);t.data(g,n)}if("string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'.concat(i,'"'));n[i](this)}}))}}]);return e}();
/**
 * jQuery
 */o.a.fn[v]=$._jQueryInterface;o.a.fn[v].Constructor=$;o.a.fn[v].noConflict=function(){o.a.fn[v]=b;return $._jQueryInterface};
/* harmony default export */t.default=$;
/***/},
/***/"./node_modules/bootstrap/js/src/tools/sanitizer.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tools/sanitizer.js ***!
  \**********************************************************/
/*! exports provided: DefaultWhitelist, sanitizeHtml */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony export (binding) */i.d(t,"DefaultWhitelist",(function(){return o}));
/* harmony export (binding) */i.d(t,"sanitizeHtml",(function(){return l}));
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tools/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */var n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"];var o={
// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */var r=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */var s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function a(e,t){var i=e.nodeName.toLowerCase();if(-1!==t.indexOf(i)){if(-1!==n.indexOf(i))return Boolean(r.test(e.nodeValue)||s.test(e.nodeValue));return true}var o=t.filter((function(e){return e instanceof RegExp}));
// Check if a regular expression validates the attribute.
for(var a=0,l=o.length;a<l;a++)if(o[a].test(i))return true;return false}function l(e,t,i){if(0===e.length)return e;if(i&&"function"==typeof i)return i(e);var n=(new window.DOMParser).parseFromString(e,"text/html");var o=Object.keys(t);var r=[].slice.call(n.body.querySelectorAll("*"));var s=function e(i,n){var s=r[i];var l=s.nodeName.toLowerCase();if(-1===o.indexOf(s.nodeName.toLowerCase())){s.parentNode.removeChild(s);return"continue"}var c=[].slice.call(s.attributes);
// eslint-disable-next-line unicorn/prefer-spread
var u=[].concat(t["*"]||[],t[l]||[]);c.forEach((function(e){if(!a(e,u))s.removeAttribute(e.nodeName)}))};for(var l=0,c=r.length;l<c;l++){if("continue"===s(l,c))continue}return n.body.innerHTML}
/***/},
/***/"./node_modules/bootstrap/js/src/tooltip.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tooltip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! ./tools/sanitizer */"./node_modules/bootstrap/js/src/tools/sanitizer.js");
/* harmony import */var o=i(/*! jquery */"jquery");
/* harmony import */var r=i.n(o);
/* harmony import */var s=i(/*! popper.js */"./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */var a=i(/*! ./util */"./node_modules/bootstrap/js/src/util.js");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){u(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t,i){if((t=v(t))in e)Object.defineProperty(e,t,{value:i,enumerable:true,configurable:true,writable:true});else e[t]=i;return e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,v(n.key),n)}}function h(e,t,i){if(t)p(e.prototype,t);if(i)p(e,i);Object.defineProperty(e,"prototype",{writable:false});return e}function v(e){var t=m(e,"string");return"symbol"===d(t)?t:String(t)}function m(e,t){if("object"!==d(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */var g="tooltip";var y="4.6.2";var b="bs.tooltip";var w=".".concat(b);var _=r.a.fn[g];var k="bs-tooltip";var T=new RegExp("(^|\\s)".concat(k,"\\S+"),"g");var S=["sanitize","whiteList","sanitizeFn"];var C="fade";var j="show";var E="show";var x="out";var O=".tooltip-inner";var P=".arrow";var A="hover";var $="focus";var D="click";var N="manual";var L={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"};var I={animation:true,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,selector:false,placement:"top",offset:0,container:false,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:true,sanitizeFn:null,whiteList:n.DefaultWhitelist,popperConfig:null};var z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"};var M={HIDE:"hide".concat(w),HIDDEN:"hidden".concat(w),SHOW:"show".concat(w),SHOWN:"shown".concat(w),INSERTED:"inserted".concat(w),CLICK:"click".concat(w),FOCUSIN:"focusin".concat(w),FOCUSOUT:"focusout".concat(w),MOUSEENTER:"mouseenter".concat(w),MOUSELEAVE:"mouseleave".concat(w)};
/**
 * Class definition
 */var F=function(){function e(t,i){f(this,e);if(void 0===s.default)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
// Private
this._isEnabled=true;this._timeout=0;this._hoverState="";this._activeTrigger={};this._popper=null;
// Protected
this.element=t;this.config=this._getConfig(i);this.tip=null;this._setListeners()}
// Getters
h(e,[{key:"enable",value:
// Public
function e(){this._isEnabled=true}},{key:"disable",value:function e(){this._isEnabled=false}},{key:"toggleEnabled",value:function e(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function e(t){if(!this._isEnabled)return;if(t){var i=this.constructor.DATA_KEY;var n=r()(t.currentTarget).data(i);if(!n){n=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(i,n)}n._activeTrigger.click=!n._activeTrigger.click;if(n._isWithActiveTrigger())n._enter(null,n);else n._leave(null,n)}else{if(r()(this.getTipElement()).hasClass(j)){this._leave(null,this);return}this._enter(null,this)}}},{key:"dispose",value:function e(){clearTimeout(this._timeout);r.a.removeData(this.element,this.constructor.DATA_KEY);r()(this.element).off(this.constructor.EVENT_KEY);r()(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler);if(this.tip)r()(this.tip).remove();this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper)this._popper.destroy();this._popper=null;this.element=null;this.config=null;this.tip=null}},{key:"show",value:function e(){var t=this;if("none"===r()(this.element).css("display"))throw new Error("Please use show on visible elements");var i=r.a.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){r()(this.element).trigger(i);var n=a.default.findShadowRoot(this.element);var o=r.a.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!o)return;var l=this.getTipElement();var c=a.default.getUID(this.constructor.NAME);l.setAttribute("id",c);this.element.setAttribute("aria-describedby",c);this.setContent();if(this.config.animation)r()(l).addClass(C);var u="function"==typeof this.config.placement?this.config.placement.call(this,l,this.element):this.config.placement;var d=this._getAttachment(u);this.addAttachmentClass(d);var f=this._getContainer();r()(l).data(this.constructor.DATA_KEY,this);if(!r.a.contains(this.element.ownerDocument.documentElement,this.tip))r()(l).appendTo(f);r()(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new s.default(this.element,l,this._getPopperConfig(d));r()(l).addClass(j);r()(l).addClass(this.config.customClass);
// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if("ontouchstart"in document.documentElement)r()(document.body).children().on("mouseover",null,r.a.noop);var p=function e(){if(t.config.animation)t._fixTransition();var i=t._hoverState;t._hoverState=null;r()(t.element).trigger(t.constructor.Event.SHOWN);if(i===x)t._leave(null,t)};if(r()(this.tip).hasClass(C)){var h=a.default.getTransitionDurationFromElement(this.tip);r()(this.tip).one(a.default.TRANSITION_END,p).emulateTransitionEnd(h)}else p()}}},{key:"hide",value:function e(t){var i=this;var n=this.getTipElement();var o=r.a.Event(this.constructor.Event.HIDE);var s=function e(){if(i._hoverState!==E&&n.parentNode)n.parentNode.removeChild(n);i._cleanTipClass();i.element.removeAttribute("aria-describedby");r()(i.element).trigger(i.constructor.Event.HIDDEN);if(null!==i._popper)i._popper.destroy();if(t)t()};r()(this.element).trigger(o);if(o.isDefaultPrevented())return;r()(n).removeClass(j);
// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if("ontouchstart"in document.documentElement)r()(document.body).children().off("mouseover",null,r.a.noop);this._activeTrigger[D]=false;this._activeTrigger[$]=false;this._activeTrigger[A]=false;if(r()(this.tip).hasClass(C)){var l=a.default.getTransitionDurationFromElement(n);r()(n).one(a.default.TRANSITION_END,s).emulateTransitionEnd(l)}else s();this._hoverState=""}},{key:"update",value:function e(){if(null!==this._popper)this._popper.scheduleUpdate()}
// Protected
},{key:"isWithContent",value:function e(){return Boolean(this.getTitle())}},{key:"addAttachmentClass",value:function e(t){r()(this.getTipElement()).addClass("".concat(k,"-").concat(t))}},{key:"getTipElement",value:function e(){this.tip=this.tip||r()(this.config.template)[0];return this.tip}},{key:"setContent",value:function e(){var t=this.getTipElement();this.setElementContent(r()(t.querySelectorAll(O)),this.getTitle());r()(t).removeClass("".concat(C," ").concat(j))}},{key:"setElementContent",value:function e(t,i){if("object"===d(i)&&(i.nodeType||i.jquery)){
// Content is a DOM node or a jQuery
if(this.config.html){if(!r()(i).parent().is(t))t.empty().append(i)}else t.text(r()(i).text());return}if(this.config.html){if(this.config.sanitize)i=Object(n.sanitizeHtml)(i,this.config.whiteList,this.config.sanitizeFn);t.html(i)}else t.text(i)}},{key:"getTitle",value:function e(){var t=this.element.getAttribute("data-original-title");if(!t)t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title;return t}
// Private
},{key:"_getPopperConfig",value:function e(t){var i=this;return c(c({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:P},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function e(t){if(t.originalPlacement!==t.placement)i._handlePopperPlacementChange(t)},onUpdate:function e(t){return i._handlePopperPlacementChange(t)}}),this.config.popperConfig)}},{key:"_getOffset",value:function e(){var t=this;var i={};if("function"==typeof this.config.offset)i.fn=function(e){e.offsets=c(c({},e.offsets),t.config.offset(e.offsets,t.element));return e};else i.offset=this.config.offset;return i}},{key:"_getContainer",value:function e(){if(false===this.config.container)return document.body;if(a.default.isElement(this.config.container))return r()(this.config.container);return r()(document).find(this.config.container)}},{key:"_getAttachment",value:function e(t){return L[t.toUpperCase()]}},{key:"_setListeners",value:function e(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)r()(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if(e!==N){var i=e===A?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN;var n=e===A?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;r()(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(n,t.config.selector,(function(e){return t._leave(e)}))}}));this._hideModalHandler=function(){if(t.element)t.hide()};r()(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler);if(this.config.selector)this.config=c(c({},this.config),{},{trigger:"manual",selector:""});else this._fixTitle()}},{key:"_fixTitle",value:function e(){var t=d(this.element.getAttribute("data-original-title"));if(this.element.getAttribute("title")||"string"!==t){this.element.setAttribute("data-original-title",this.element.getAttribute("title")||"");this.element.setAttribute("title","")}}},{key:"_enter",value:function e(t,i){var n=this.constructor.DATA_KEY;if(!(i=i||r()(t.currentTarget).data(n))){i=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(n,i)}if(t)i._activeTrigger["focusin"===t.type?$:A]=true;if(r()(i.getTipElement()).hasClass(j)||i._hoverState===E){i._hoverState=E;return}clearTimeout(i._timeout);i._hoverState=E;if(!i.config.delay||!i.config.delay.show){i.show();return}i._timeout=setTimeout((function(){if(i._hoverState===E)i.show()}),i.config.delay.show)}},{key:"_leave",value:function e(t,i){var n=this.constructor.DATA_KEY;if(!(i=i||r()(t.currentTarget).data(n))){i=new this.constructor(t.currentTarget,this._getDelegateConfig());r()(t.currentTarget).data(n,i)}if(t)i._activeTrigger["focusout"===t.type?$:A]=false;if(i._isWithActiveTrigger())return;clearTimeout(i._timeout);i._hoverState=x;if(!i.config.delay||!i.config.delay.hide){i.hide();return}i._timeout=setTimeout((function(){if(i._hoverState===x)i.hide()}),i.config.delay.hide)}},{key:"_isWithActiveTrigger",value:function e(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return true;return false}},{key:"_getConfig",value:function e(t){var i=r()(this.element).data();Object.keys(i).forEach((function(e){if(-1!==S.indexOf(e))delete i[e]}));if("number"==typeof(t=c(c(c({},this.constructor.Default),i),"object"===d(t)&&t?t:{})).delay)t.delay={show:t.delay,hide:t.delay};if("number"==typeof t.title)t.title=t.title.toString();if("number"==typeof t.content)t.content=t.content.toString();a.default.typeCheckConfig(g,t,this.constructor.DefaultType);if(t.sanitize)t.template=Object(n.sanitizeHtml)(t.template,t.whiteList,t.sanitizeFn);return t}},{key:"_getDelegateConfig",value:function e(){var t={};if(this.config)for(var i in this.config)if(this.constructor.Default[i]!==this.config[i])t[i]=this.config[i];return t}},{key:"_cleanTipClass",value:function e(){var t=r()(this.getTipElement());var i=t.attr("class").match(T);if(null!==i&&i.length)t.removeClass(i.join(""))}},{key:"_handlePopperPlacementChange",value:function e(t){this.tip=t.instance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(t.placement))}},{key:"_fixTransition",value:function e(){var t=this.getTipElement();var i=this.config.animation;if(null!==t.getAttribute("x-placement"))return;r()(t).removeClass(C);this.config.animation=false;this.hide();this.show();this.config.animation=i}
// Static
}],[{key:"VERSION",get:function e(){return y}},{key:"Default",get:function e(){return I}},{key:"NAME",get:function e(){return g}},{key:"DATA_KEY",get:function e(){return b}},{key:"Event",get:function e(){return M}},{key:"EVENT_KEY",get:function e(){return w}},{key:"DefaultType",get:function e(){return z}},{key:"_jQueryInterface",value:function t(i){return this.each((function(){var t=r()(this);var n=t.data(b);var o="object"===d(i)&&i;if(!n&&/dispose|hide/.test(i))return;if(!n){n=new e(this,o);t.data(b,n)}if("string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'.concat(i,'"'));n[i]()}}))}}]);return e}();
/**
 * jQuery
 */r.a.fn[g]=F._jQueryInterface;r.a.fn[g].Constructor=F;r.a.fn[g].noConflict=function(){r.a.fn[g]=_;return F._jQueryInterface};
/* harmony default export */t.default=F;
/***/},
/***/"./node_modules/bootstrap/js/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* harmony import */var n=i(/*! jquery */"jquery");
/* harmony import */var o=i.n(n);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.6.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Private TransitionEnd Helpers
 */var r="transitionend";var s=1e6;var a=1e3;
// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function l(e){if(null==e)return"".concat(e);return{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()}function c(){return{bindType:r,delegateType:r,handle:function e(t){if(o()(t.target).is(this))return t.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
return}}}function u(e){var t=this;var i=false;o()(this).one(f.TRANSITION_END,(function(){i=true}));setTimeout((function(){if(!i)f.triggerTransitionEnd(t)}),e);return this}function d(){o.a.fn.emulateTransitionEnd=u;o.a.event.special[f.TRANSITION_END]=c()}
/**
 * Public Util API
 */var f={TRANSITION_END:"bsTransitionEnd",getUID:function e(t){do{
// eslint-disable-next-line no-bitwise
t+=~~(Math.random()*s);// "~~" acts like a faster Math.floor() here
}while(document.getElementById(t));return t},getSelectorFromElement:function e(t){var i=t.getAttribute("data-target");if(!i||"#"===i){var n=t.getAttribute("href");i=n&&"#"!==n?n.trim():""}try{return document.querySelector(i)?i:null}catch(e){return null}},getTransitionDurationFromElement:function e(t){if(!t)return 0;
// Get transition-duration of the element
var i=o()(t).css("transition-duration");var n=o()(t).css("transition-delay");var r=parseFloat(i);var s=parseFloat(n);
// Return 0 if element or transition duration is not found
if(!r&&!s)return 0;
// If multiple durations are defined, take the first
i=i.split(",")[0];n=n.split(",")[0];return(parseFloat(i)+parseFloat(n))*a},reflow:function e(t){return t.offsetHeight},triggerTransitionEnd:function e(t){o()(t).trigger(r)},supportsTransitionEnd:function e(){return Boolean(r)},isElement:function e(t){return(t[0]||t).nodeType},typeCheckConfig:function e(t,i,n){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var r=n[o];var s=i[o];var a=s&&f.isElement(s)?"element":l(s);if(!new RegExp(r).test(a))throw new Error("".concat(t.toUpperCase(),": ")+'Option "'.concat(o,'" provided type "').concat(a,'" ')+'but expected type "'.concat(r,'".'))}},findShadowRoot:function e(t){if(!document.documentElement.attachShadow)return null;
// Can find the shadow root otherwise it'll return the document
if("function"==typeof t.getRootNode){var i=t.getRootNode();return i instanceof ShadowRoot?i:null}if(t instanceof ShadowRoot)return t;
// when we don't find a shadow root
if(!t.parentNode)return null;return f.findShadowRoot(t.parentNode)},jQueryDetection:function e(){if(void 0===o.a)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=o.a.fn.jquery.split(" ")[0].split(".");var i=1;var n=2;var r=9;var s=1;var a=4;if(t[0]<n&&t[1]<r||t[0]===i&&t[1]===r&&t[2]<s||t[0]>=a)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};f.jQueryDetection();d();
/* harmony default export */t.default=f;
/***/},
/***/"./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/function(e,t,i){"use strict";
// Copyright Joyent, Inc. and other Node contributors.

// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:

// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o="object"===("undefined"==typeof Reflect?"undefined":n(Reflect))?Reflect:null;var r=o&&"function"==typeof o.apply?o.apply:function e(t,i,n){return Function.prototype.apply.call(t,i,n)};var s;if(o&&"function"==typeof o.ownKeys)s=o.ownKeys;else if(Object.getOwnPropertySymbols)s=function e(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))};else s=function e(t){return Object.getOwnPropertyNames(t)};function a(e){if(console&&console.warn)console.warn(e)}var l=Number.isNaN||function e(t){return t!=t};function c(){c.init.call(this)}e.exports=c;e.exports.once=_;
// Backwards-compat with node 0.10.x
c.EventEmitter=c;c.prototype._events=void 0;c.prototype._eventsCount=0;c.prototype._maxListeners=void 0;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var u=10;function d(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+n(e))}Object.defineProperty(c,"defaultMaxListeners",{enumerable:true,get:function e(){return u},set:function e(t){if("number"!=typeof t||t<0||l(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}});c.init=function(){if(void 0===this._events||this._events===Object.getPrototypeOf(this)._events){this._events=Object.create(null);this._eventsCount=0}this._maxListeners=this._maxListeners||void 0};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
c.prototype.setMaxListeners=function e(t){if("number"!=typeof t||t<0||l(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");this._maxListeners=t;return this};function f(e){if(void 0===e._maxListeners)return c.defaultMaxListeners;return e._maxListeners}c.prototype.getMaxListeners=function e(){return f(this)};c.prototype.emit=function e(t){var i=[];for(var n=1;n<arguments.length;n++)i.push(arguments[n]);var o="error"===t;var s=this._events;if(void 0!==s)o=o&&void 0===s.error;else if(!o)return false;
// If there is no 'error' event listener then throw.
if(o){var a;if(i.length>0)a=i[0];if(a instanceof Error)
// Note: The comments on the `throw` lines are intentional, they show
// up in Node's output if this results in an unhandled exception.
throw a;// Unhandled 'error' event
// At least give some kind of context to the user
var l=new Error("Unhandled error."+(a?" ("+a.message+")":""));l.context=a;throw l;// Unhandled 'error' event
}var c=s[t];if(void 0===c)return false;if("function"==typeof c)r(c,this,i);else{var u=c.length;var d=y(c,u);for(n=0;n<u;++n)r(d[n],this,i)}return true};function p(e,t,i,n){var o;var r;var s;d(i);if(void 0===(r=e._events)){r=e._events=Object.create(null);e._eventsCount=0}else{
// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(void 0!==r.newListener){e.emit("newListener",t,i.listener?i.listener:i);
// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
r=e._events}s=r[t]}if(void 0===s){
// Optimize the case of one listener. Don't need the extra array object.
s=r[t]=i;++e._eventsCount}else{if("function"==typeof s)
// Adding the second element, need to change to array.
s=r[t]=n?[i,s]:[s,i];
// If we've already got an array, just append.
else if(n)s.unshift(i);else s.push(i);
// Check for listener leak
if((o=f(e))>0&&s.length>o&&!s.warned){s.warned=true;
// No error code for this since it is a Warning
// eslint-disable-next-line no-restricted-syntax
var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning";l.emitter=e;l.type=t;l.count=s.length;a(l)}}return e}c.prototype.addListener=function e(t,i){return p(this,t,i,false)};c.prototype.on=c.prototype.addListener;c.prototype.prependListener=function e(t,i){return p(this,t,i,true)};function h(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;if(0===arguments.length)return this.listener.call(this.target);return this.listener.apply(this.target,arguments)}}function v(e,t,i){var n={fired:false,wrapFn:void 0,target:e,type:t,listener:i};var o=h.bind(n);o.listener=i;n.wrapFn=o;return o}c.prototype.once=function e(t,i){d(i);this.on(t,v(this,t,i));return this};c.prototype.prependOnceListener=function e(t,i){d(i);this.prependListener(t,v(this,t,i));return this};
// Emits a 'removeListener' event if and only if the listener was removed.
c.prototype.removeListener=function e(t,i){var n,o,r,s,a;d(i);if(void 0===(o=this._events))return this;if(void 0===(n=o[t]))return this;if(n===i||n.listener===i)if(0==--this._eventsCount)this._events=Object.create(null);else{delete o[t];if(o.removeListener)this.emit("removeListener",t,n.listener||i)}else if("function"!=typeof n){r=-1;for(s=n.length-1;s>=0;s--)if(n[s]===i||n[s].listener===i){a=n[s].listener;r=s;break}if(r<0)return this;if(0===r)n.shift();else b(n,r);if(1===n.length)o[t]=n[0];if(void 0!==o.removeListener)this.emit("removeListener",t,a||i)}return this};c.prototype.off=c.prototype.removeListener;c.prototype.removeAllListeners=function e(t){var i,n,o;if(void 0===(n=this._events))return this;
// not listening for removeListener, no need to emit
if(void 0===n.removeListener){if(0===arguments.length){this._events=Object.create(null);this._eventsCount=0}else if(void 0!==n[t])if(0==--this._eventsCount)this._events=Object.create(null);else delete n[t];return this}
// emit removeListener for all listeners on all events
if(0===arguments.length){var r=Object.keys(n);var s;for(o=0;o<r.length;++o){if("removeListener"===(s=r[o]))continue;this.removeAllListeners(s)}this.removeAllListeners("removeListener");this._events=Object.create(null);this._eventsCount=0;return this}if("function"==typeof(i=n[t]))this.removeListener(t,i);else if(void 0!==i)
// LIFO order
for(o=i.length-1;o>=0;o--)this.removeListener(t,i[o]);return this};function m(e,t,i){var n=e._events;if(void 0===n)return[];var o=n[t];if(void 0===o)return[];if("function"==typeof o)return i?[o.listener||o]:[o];return i?w(o):y(o,o.length)}c.prototype.listeners=function e(t){return m(this,t,true)};c.prototype.rawListeners=function e(t){return m(this,t,false)};c.listenerCount=function(e,t){if("function"==typeof e.listenerCount)return e.listenerCount(t);else return g.call(e,t)};c.prototype.listenerCount=g;function g(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;else if(void 0!==i)return i.length}return 0}c.prototype.eventNames=function e(){return this._eventsCount>0?s(this._events):[]};function y(e,t){var i=new Array(t);for(var n=0;n<t;++n)i[n]=e[n];return i}function b(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function w(e){var t=new Array(e.length);for(var i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}function _(e,t){return new Promise((function(i,n){function o(i){e.removeListener(t,r);n(i)}function r(){if("function"==typeof e.removeListener)e.removeListener("error",o);i([].slice.call(arguments))}T(e,t,r,{once:true});if("error"!==t)k(e,o,{once:true})}))}function k(e,t,i){if("function"==typeof e.on)T(e,"error",t,i)}function T(e,t,i,o){if("function"==typeof e.on)if(o.once)e.once(t,i);else e.on(t,i);else if("function"==typeof e.addEventListener)
// EventTarget does not have `error` event semantics like Node
// EventEmitters, we do not listen for `error` events here.
e.addEventListener(t,(function n(r){
// IE does not have builtin `{ once: true }` support so we
// have to do it manually.
if(o.once)e.removeEventListener(t,n);i(r)}));else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+n(e))}
/***/},
/***/"./node_modules/jquery-zoom/jquery.zoom.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery-zoom/jquery.zoom.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/function(e,t){
/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
i=window.jQuery,n={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1},i.zoom=function(e,t,n,o){var r,s,a,l,c,u,d,f=i(e),p=f.css("position"),h=i(t);return e.style.position=/(absolute|fixed)/.test(p)?p:"relative",e.style.overflow="hidden",n.style.width=n.style.height="",i(n).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:n.width*o,height:n.height*o,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(e),{init:function i(){s=f.outerWidth(),r=f.outerHeight(),t===e?(l=s,a=r):(l=h.outerWidth(),a=h.outerHeight()),c=(n.width-s)/l,u=(n.height-r)/a,d=h.offset()},move:function e(t){var i=t.pageX-d.left,o=t.pageY-d.top;o=Math.max(Math.min(o,a),0),i=Math.max(Math.min(i,l),0),n.style.left=i*-c+"px",n.style.top=o*-u+"px"}}},i.fn.zoom=function(e){return this.each((function(){var t=i.extend({},n,e||{}),o=t.target&&i(t.target)[0]||this,r=this,s=i(r),a=document.createElement("img"),l=i(a),c="mousemove.zoom",u=!1,d=!1;if(!t.url){var f=r.querySelector("img");if(f&&(t.url=f.getAttribute("data-src")||f.currentSrc||f.src),!t.url)return}s.one("zoom.destroy",function(e,t){s.off(".zoom"),o.style.position=e,o.style.overflow=t,a.onload=null,l.remove()}.bind(this,o.style.position,o.style.overflow)),a.onload=function(){function e(e){f.init(),f.move(e),l.stop().fadeTo(i.support.opacity?t.duration:0,1,i.isFunction(t.onZoomIn)?t.onZoomIn.call(a):!1)}function n(){l.stop().fadeTo(t.duration,0,i.isFunction(t.onZoomOut)?t.onZoomOut.call(a):!1)}var f=i.zoom(o,r,a,t.magnify);"grab"===t.on?s.on("mousedown.zoom",(function(t){1===t.which&&(i(document).one("mouseup.zoom",(function(){n(),i(document).off(c,f.move)})),e(t),i(document).on(c,f.move),t.preventDefault())})):"click"===t.on?s.on("click.zoom",(function(t){return u?void 0:(u=!0,e(t),i(document).on(c,f.move),i(document).one("click.zoom",(function(){n(),u=!1,i(document).off(c,f.move)})),!1)})):"toggle"===t.on?s.on("click.zoom",(function(t){u?n():e(t),u=!u})):"mouseover"===t.on&&(f.init(),s.on("mouseenter.zoom",e).on("mouseleave.zoom",n).on(c,f.move)),t.touch&&s.on("touchstart.zoom",(function(t){t.preventDefault(),d?(d=!1,n()):(d=!0,e(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0]))})).on("touchmove.zoom",(function(e){e.preventDefault(),f.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])})).on("touchend.zoom",(function(e){e.preventDefault(),d&&(d=!1,n())})),i.isFunction(t.callback)&&t.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=t.url}))},i.fn.zoom.defaults=n;
/***/var i,n},
/***/"./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/function(e,t,i){
/* WEBPACK VAR INJECTION */(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(i,n){var o=n(i,i.document,Date);i.lazySizes=o;if("object"==(false?void 0:t(e))&&e.exports)e.exports=o}("undefined"!=typeof window?window:{},(
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function e(t,i,n){
// Pass in the window Date function also for SSR because the Date class can be lost
"use strict";
/*jshint eqnull:true */var o,
/**
     * @type { LazySizesConfigPartial }
     */
r;!function(){var e;var i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",
//strictClass: 'lazystrict',
autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",
//preloadAfterLoad: false,
minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};r=t.lazySizesConfig||t.lazysizesConfig||{};for(e in i)if(!(e in r))r[e]=i[e]}();if(!i||!i.getElementsByClassName)return{init:function e(){},
/**
       * @type { LazySizesConfigPartial }
       */
cfg:r,
/**
       * @type { true }
       */
noSupport:true};var s=i.documentElement;var a=t.HTMLPictureElement;var l="addEventListener";var c="getAttribute";
/**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */var u=t[l].bind(t);var d=t.setTimeout;var f=t.requestAnimationFrame||d;var p=t.requestIdleCallback;var h=/^picture$/i;var v=["load","error","lazyincluded","_lazyloaded"];var m={};var g=Array.prototype.forEach;
/**
   * @param ele {Element}
   * @param cls {string}
   */var y=function e(t,i){if(!m[i])m[i]=new RegExp("(\\s|^)"+i+"(\\s|$)");return m[i].test(t[c]("class")||"")&&m[i]};
/**
   * @param ele {Element}
   * @param cls {string}
   */var b=function e(t,i){if(!y(t,i))t.setAttribute("class",(t[c]("class")||"").trim()+" "+i)};
/**
   * @param ele {Element}
   * @param cls {string}
   */var w=function e(t,i){var n;if(n=y(t,i))t.setAttribute("class",(t[c]("class")||"").replace(n," "))};var _=function e(t,i,n){var o=n?l:"removeEventListener";if(n)e(t,i);v.forEach((function(e){t[o](e,i)}))};
/**
   * @param elem { Element }
   * @param name { string }
   * @param detail { any }
   * @param noBubbles { boolean }
   * @param noCancelable { boolean }
   * @returns { CustomEvent }
   */var k=function e(t,n,r,s,a){var l=i.createEvent("Event");if(!r)r={};r.instance=o;l.initEvent(n,!s,!a);l.detail=r;t.dispatchEvent(l);return l};var T=function e(i,n){var o;if(!a&&(o=t.picturefill||r.pf)){if(n&&n.src&&!i[c]("srcset"))i.setAttribute("srcset",n.src);o({reevaluate:true,elements:[i]})}else if(n&&n.src)i.src=n.src};var S=function e(t,i){return(getComputedStyle(t,null)||{})[i]};
/**
   *
   * @param elem { Element }
   * @param parent { Element }
   * @param [width] {number}
   * @returns {number}
   */var C=function e(t,i,n){n=n||t.offsetWidth;for(;n<r.minSize&&i&&!t._lazysizesWidth;){n=i.offsetWidth;i=i.parentNode}return n};var j=function(){var e,t;var n=[];var o=[];var r=n;var s=function i(){var s=r;r=n.length?o:n;e=true;t=false;for(;s.length;)s.shift()();e=false};var a=function n(o,a){if(e&&!a)o.apply(this,arguments);else{r.push(o);if(!t){t=true;(i.hidden?d:f)(s)}}};a._lsFlush=s;return a}();var E=function e(t,i){return i?function(){j(t)}:function(){var e=this;var i=arguments;j((function(){t.apply(e,i)}))}};var x=function e(t){var i;var o=0;var s=r.throttleDelay;var a=r.ricTimeout;var l=function e(){i=false;o=n.now();t()};var c=p&&a>49?function(){p(l,{timeout:a});if(a!==r.ricTimeout)a=r.ricTimeout}:E((function(){d(l)}),true);return function(e){var t;if(e=true===e)a=33;if(i)return;i=true;if((t=s-(n.now()-o))<0)t=0;if(e||t<9)c();else d(c,t)}};
//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
var O=function e(t){var i,o;var r=99;var s=function e(){i=null;t()};var a=function e(){var t=n.now()-o;if(t<r)d(e,r-t);else(p||s)(s)};return function(){o=n.now();if(!i)i=d(a,r)}};var P=(W=/^img$/i,B=/^iframe$/i,U="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),Q=0,Y=0,V=0,X=-1,K=function e(t){V--;if(!t||V<0||!t.target)V=0},G=function e(t){if(null==R)R="hidden"==S(i.body,"visibility");return R||!("hidden"==S(t.parentNode,"visibility")&&"hidden"==S(t,"visibility"))},Z=function e(t,n){var o;var r=t;var a=G(t);M-=n;q+=n;F-=n;H+=n;for(;a&&(r=r.offsetParent)&&r!=i.body&&r!=s;)if((a=(S(r,"opacity")||1)>0)&&"visible"!=S(r,"overflow")){o=r.getBoundingClientRect();a=H>o.left&&F<o.right&&q>o.top-1&&M<o.bottom+1}return a},ee=x(J=function e(){var t,n,a,l,u,d,f,p,h,v,m,g;var y=o.elements;if((N=r.loadMode)&&V<8&&(t=y.length)){n=0;X++;for(;n<t;n++){if(!y[n]||y[n]._lazyRace)continue;if(!U||o.prematureUnveil&&o.prematureUnveil(y[n])){ae(y[n]);continue}if(!(p=y[n][c]("data-expand"))||!(d=1*p))d=Y;if(!v){v=!r.expand||r.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:r.expand;o._defEx=v;m=v*r.expFactor;g=r.hFac;R=null;if(Y<m&&V<1&&X>2&&N>2&&!i.hidden){Y=m;X=0}else if(N>1&&X>1&&V<6)Y=v;else Y=Q}if(h!==d){I=innerWidth+d*g;z=innerHeight+d;f=-1*d;h=d}a=y[n].getBoundingClientRect();if((q=a.bottom)>=f&&(M=a.top)<=z&&(H=a.right)>=f*g&&(F=a.left)<=I&&(q||H||F||M)&&(r.loadHidden||G(y[n]))&&($&&V<3&&!p&&(N<3||X<4)||Z(y[n],d))){ae(y[n]);u=true;if(V>9)break}else if(!u&&$&&!l&&V<4&&X<4&&N>2&&(A[0]||r.preloadAfterLoad)&&(A[0]||!p&&(q||H||F||M||"auto"!=y[n][c](r.sizesAttr))))l=A[0]||y[n]}if(l&&!u)ae(l)}}),ie=E(te=function e(t){var i=t.target;if(i._lazyCache){delete i._lazyCache;return}K(t);b(i,r.loadedClass);w(i,r.loadingClass);_(i,ne);k(i,"lazyloaded")}),ne=function e(t){ie({target:t.target})},oe=function e(t,i){var n=t.getAttribute("data-load-mode")||r.iframeLoadMode;
// loadMode can be also a string!
if(0==n)t.contentWindow.location.replace(i);else if(1==n)t.src=i},re=function e(t){var i;var n=t[c](r.srcsetAttr);if(i=r.customMedia[t[c]("data-media")||t[c]("media")])t.setAttribute("media",i);if(n)t.setAttribute("srcset",n)},se=E((function(e,t,i,n,o){var s,a,l,u,f,p;if(!(f=k(e,"lazybeforeunveil",t)).defaultPrevented){if(n)if(i)b(e,r.autosizesClass);else e.setAttribute("sizes",n);a=e[c](r.srcsetAttr);s=e[c](r.srcAttr);if(o)u=(l=e.parentNode)&&h.test(l.nodeName||"");p=t.firesLoad||"src"in e&&(a||s||u);f={target:e};b(e,r.loadingClass);if(p){clearTimeout(D);D=d(K,2500);_(e,ne,true)}if(u)g.call(l.getElementsByTagName("source"),re);if(a)e.setAttribute("srcset",a);else if(s&&!u)if(B.test(e.nodeName))oe(e,s);else e.src=s;if(o&&(a||u))T(e,{src:s})}if(e._lazyRace)delete e._lazyRace;w(e,r.lazyClass);j((function(){
// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
var t=e.complete&&e.naturalWidth>1;if(!p||t){if(t)b(e,r.fastLoadedClass);te(f);e._lazyCache=true;d((function(){if("_lazyCache"in e)delete e._lazyCache}),9)}if("lazy"==e.loading)V--}),true)})),ae=function e(t){if(t._lazyRace)return;var i;var n=W.test(t.nodeName);
//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
var o=n&&(t[c](r.sizesAttr)||t[c]("sizes"));var s="auto"==o;if((s||!$)&&n&&(t[c]("src")||t.srcset)&&!t.complete&&!y(t,r.errorClass)&&y(t,r.lazyClass))return;i=k(t,"lazyunveilread").detail;if(s)de.updateElem(t,true,t.offsetWidth);t._lazyRace=true;V++;se(t,i,s,o,n)},le=O((function(){r.loadMode=3;ee()})),ue=function e(){if($)return;if(n.now()-L<999){d(e,999);return}$=true;r.loadMode=3;ee();u("scroll",ce,true)},{_:function e(){L=n.now();o.elements=i.getElementsByClassName(r.lazyClass);A=i.getElementsByClassName(r.lazyClass+" "+r.preloadClass);u("scroll",ee,true);u("resize",ee,true);u("pageshow",(function(e){if(e.persisted){var t=i.querySelectorAll("."+r.loadingClass);if(t.length&&t.forEach)f((function(){t.forEach((function(e){if(e.complete)ae(e)}))}))}}));if(t.MutationObserver)new MutationObserver(ee).observe(s,{childList:true,subtree:true,attributes:true});else{s[l]("DOMNodeInserted",ee,true);s[l]("DOMAttrModified",ee,true);setInterval(ee,999)}u("hashchange",ee,true);
//, 'fullscreenchange'
["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){i[l](e,ee,true)}));if(/d$|^c/.test(i.readyState))ue();else{u("load",ue);i[l]("DOMContentLoaded",ee);d(ue,2e4)}if(o.elements.length){J();j._lsFlush()}else ee()},checkElems:ee,unveil:ae,_aLSL:ce=function e(){if(3==r.loadMode)r.loadMode=2;le()}});var A,$,D,N,L,I,z,M,F,H,q,R,W,B,U,Q,Y,V,X,K,G,Z,J,ee,te,ie,ne,oe,re,se,ae,le,ce,ue;var de=(pe=E((function(e,t,i,n){var o,r,s;e._lazysizesWidth=n;n+="px";e.setAttribute("sizes",n);if(h.test(t.nodeName||""))for(r=0,s=(o=t.getElementsByTagName("source")).length;r<s;r++)o[r].setAttribute("sizes",n);if(!i.detail.dataAttr)T(e,i.detail)})),he=function e(t,i,n){var o;var r=t.parentNode;if(r){n=C(t,r,n);if(!(o=k(t,"lazybeforesizes",{width:n,dataAttr:!!i})).defaultPrevented)if((n=o.detail.width)&&n!==t._lazysizesWidth)pe(t,r,o,n)}},{_:function e(){fe=i.getElementsByClassName(r.autosizesClass);u("resize",ve)},checkElems:ve=O((function e(){var t;var i=fe.length;if(i){t=0;for(;t<i;t++)he(fe[t])}})),updateElem:he});var fe,pe,he,ve;var me=function e(){if(!e.i&&i.getElementsByClassName){e.i=true;de._();P._()}};d((function(){if(r.init)me()}));return o={
/**
     * @type { LazySizesConfigPartial }
     */
cfg:r,autoSizer:de,loader:P,init:me,uP:T,aC:b,rC:w,hC:y,fire:k,gW:C,rAF:j}}));
/* WEBPACK VAR INJECTION */}).call(this,i(/*! ./../webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(e))
/***/},
/***/"./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/function(e,t,i){"use strict";i.r(t);
/* WEBPACK VAR INJECTION */(function(e){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator;var n=function(){var e=["Edge","Trident","Firefox"];for(var t=0;t<e.length;t+=1)if(i&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();function o(e){var t=false;return function(){if(t)return;t=true;window.Promise.resolve().then((function(){t=false;e()}))}}function r(e){var t=false;return function(){if(!t){t=true;setTimeout((function(){t=false;e()}),n)}}}
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var s=i&&window.Promise?o:r;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function a(e){return e&&"[object Function]"==={}.toString.call(e)}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function l(e,t){if(1!==e.nodeType)return[];
// NOTE: 1 DOM access here
var i=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?i[t]:i}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function c(e){if("HTML"===e.nodeName)return e;return e.parentNode||e.host}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function u(e){
// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}
// Firefox want us to check `-x` and `-y` variations as well
var t=l(e),i=t.overflow,n=t.overflowX,o=t.overflowY;if(/(auto|scroll|overlay)/.test(i+o+n))return e;return u(c(e))}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */function d(e){return e&&e.referenceNode?e.referenceNode:e}var f=i&&!!(window.MSInputMethodContext&&document.documentMode);var p=i&&/MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function h(e){if(11===e)return f;if(10===e)return p;return f||p}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function v(e){if(!e)return document.documentElement;var t=h(10)?document.body:null;
// NOTE: 1 DOM access here
var i=e.offsetParent||null;
// Skip hidden elements which don't have an offsetParent
for(;i===t&&e.nextElementSibling;)i=(e=e.nextElementSibling).offsetParent;var n=i&&i.nodeName;if(!n||"BODY"===n||"HTML"===n)return e?e.ownerDocument.documentElement:document.documentElement;
// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(-1!==["TH","TD","TABLE"].indexOf(i.nodeName)&&"static"===l(i,"position"))return v(i);return i}function m(e){var t=e.nodeName;if("BODY"===t)return false;return"HTML"===t||v(e.firstElementChild)===e}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function g(e){if(null!==e.parentNode)return g(e.parentNode);return e}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function y(e,t){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;
// Here we make sure to give as "start" the element that comes first in the DOM
var i=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING;var n=i?e:t;var o=i?t:e;
// Get common ancestor container
var r=document.createRange();r.setStart(n,0);r.setEnd(o,0);var s=r.commonAncestorContainer;
// Both nodes are inside #document
if(e!==s&&t!==s||n.contains(o)){if(m(s))return s;return v(s)}
// one of the nodes is inside shadowDOM, find which one
var a=g(e);if(a.host)return y(a.host,t);else return y(e,g(t).host)}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function b(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft";var i=e.nodeName;if("BODY"===i||"HTML"===i){var n=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||n)[t]}return e[t]}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function w(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var n=b(t,"top");var o=b(t,"left");var r=i?-1:1;e.top+=n*r;e.bottom+=n*r;e.left+=o*r;e.right+=o*r;return e}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function _(e,t){var i="x"===t?"Left":"Top";var n="Left"===i?"Right":"Bottom";return parseFloat(e["border"+i+"Width"])+parseFloat(e["border"+n+"Width"])}function k(e,t,i,n){return Math.max(t["offset"+e],t["scroll"+e],i["client"+e],i["offset"+e],i["scroll"+e],h(10)?parseInt(i["offset"+e])+parseInt(n["margin"+("Height"===e?"Top":"Left")])+parseInt(n["margin"+("Height"===e?"Bottom":"Right")]):0)}function T(e){var t=e.body;var i=e.documentElement;var n=h(10)&&getComputedStyle(i);return{height:k("Height",t,i,n),width:k("Width",t,i,n)}}var S=function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")};var C=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,i,n){if(i)e(t.prototype,i);if(n)e(t,n);return t}}();var j=function e(t,i,n){if(i in t)Object.defineProperty(t,i,{value:n,enumerable:true,configurable:true,writable:true});else t[i]=n;return t};var E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n))e[n]=i[n]}return e};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function x(e){return E({},e,{right:e.left+e.width,bottom:e.top+e.height})}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function O(e){var t={};
// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(h(10)){t=e.getBoundingClientRect();var i=b(e,"top");var n=b(e,"left");t.top+=i;t.left+=n;t.bottom+=i;t.right+=n}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top};
// subtract scrollbar size from sizes
var r="HTML"===e.nodeName?T(e.ownerDocument):{};var s=r.width||e.clientWidth||o.width;var a=r.height||e.clientHeight||o.height;var c=e.offsetWidth-s;var u=e.offsetHeight-a;
// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(c||u){var d=l(e);c-=_(d,"x");u-=_(d,"y");o.width-=c;o.height-=u}return x(o)}function P(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:false;var n=h(10);var o="HTML"===t.nodeName;var r=O(e);var s=O(t);var a=u(e);var c=l(t);var d=parseFloat(c.borderTopWidth);var f=parseFloat(c.borderLeftWidth);
// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(i&&o){s.top=Math.max(s.top,0);s.left=Math.max(s.left,0)}var p=x({top:r.top-s.top-d,left:r.left-s.left-f,width:r.width,height:r.height});p.marginTop=0;p.marginLeft=0;
// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!n&&o){var v=parseFloat(c.marginTop);var m=parseFloat(c.marginLeft);p.top-=d-v;p.bottom-=d-v;p.left-=f-m;p.right-=f-m;
// Attach marginTop and marginLeft because in some circumstances we may need them
p.marginTop=v;p.marginLeft=m}if(n&&!i?t.contains(a):t===a&&"BODY"!==a.nodeName)p=w(p,t);return p}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var i=e.ownerDocument.documentElement;var n=P(e,i);var o=Math.max(i.clientWidth,window.innerWidth||0);var r=Math.max(i.clientHeight,window.innerHeight||0);var s=!t?b(i):0;var a=!t?b(i,"left"):0;return x({top:s-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:o,height:r})}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function $(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return false;if("fixed"===l(e,"position"))return true;var i=c(e);if(!i)return false;return $(i)}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function D(e){
// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!e||!e.parentElement||h())return document.documentElement;var t=e.parentElement;for(;t&&"none"===l(t,"transform");)t=t.parentElement;return t||document.documentElement}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function N(e,t,i,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:false;
// NOTE: 1 DOM access here
var r={top:0,left:0};var s=o?D(e):y(e,d(t));
// Handle viewport case
if("viewport"===n)r=A(s,o);else{
// Handle other cases based on DOM element used as boundaries
var a=void 0;if("scrollParent"===n){if("BODY"===(a=u(c(t))).nodeName)a=e.ownerDocument.documentElement}else if("window"===n)a=e.ownerDocument.documentElement;else a=n;var l=P(a,s,o);
// In case of HTML, we need a different computation
if("HTML"===a.nodeName&&!$(s)){var f=T(e.ownerDocument),p=f.height,h=f.width;r.top+=l.top-l.marginTop;r.bottom=p+l.top;r.left+=l.left-l.marginLeft;r.right=h+l.left}else
// for all the other DOM elements, this one is good
r=l}
// Add paddings
var v="number"==typeof(i=i||0);r.left+=v?i:i.left||0;r.top+=v?i:i.top||0;r.right-=v?i:i.right||0;r.bottom-=v?i:i.bottom||0;return r}function L(e){return e.width*e.height}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function I(e,t,i,n,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=N(i,n,r,o);var a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}};var l=Object.keys(a).map((function(e){return E({key:e},a[e],{area:L(a[e])})})).sort((function(e,t){return t.area-e.area}));var c=l.filter((function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}));var u=c.length>0?c[0].key:l[0].key;var d=e.split("-")[1];return u+(d?"-"+d:"")}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function z(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return P(i,n?D(t):y(t,d(i)),n)}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function M(e){var t=e.ownerDocument.defaultView.getComputedStyle(e);var i=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0);var n=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+n,height:e.offsetHeight+i}}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function F(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function H(e,t,i){i=i.split("-")[0];
// Get popper node sizes
var n=M(e);
// Add position, width and height to our offsets object
var o={width:n.width,height:n.height};
// depending by the popper placement we have to compute its offsets slightly differently
var r=-1!==["right","left"].indexOf(i);var s=r?"top":"left";var a=r?"left":"top";var l=r?"height":"width";var c=!r?"height":"width";o[s]=t[s]+t[l]/2-n[l]/2;if(i===a)o[a]=t[a]-n[c];else o[a]=t[F(a)];return o}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function q(e,t){
// use native find if supported
if(Array.prototype.find)return e.find(t);
// use `filter` to obtain the same behavior of `find`
return e.filter(t)[0]}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function R(e,t,i){
// use native findIndex if supported
if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===i}));
// use `find` + `indexOf` if `findIndex` isn't supported
var n=q(e,(function(e){return e[t]===i}));return e.indexOf(n)}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function W(e,t,i){(void 0===i?e:e.slice(0,R(e,"name",i))).forEach((function(e){if(e.function)
// eslint-disable-line dot-notation
console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i=e.function||e.fn;// eslint-disable-line dot-notation
if(e.enabled&&a(i)){
// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
t.offsets.popper=x(t.offsets.popper);t.offsets.reference=x(t.offsets.reference);t=i(t,e)}}));return t}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function B(){
// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed)return;var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};
// compute reference element offsets
e.offsets.reference=z(this.state,this.popper,this.reference,this.options.positionFixed);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
e.placement=I(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);
// store the computed placement inside `originalPlacement`
e.originalPlacement=e.placement;e.positionFixed=this.options.positionFixed;
// compute the popper offsets
e.offsets.popper=H(this.popper,e.offsets.reference,e.placement);e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";
// run the modifiers
e=W(this.modifiers,e);
// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(e)}else this.options.onUpdate(e)}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function U(e,t){return e.some((function(e){var i=e.name;return e.enabled&&i===t}))}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function Q(e){var t=[false,"ms","Webkit","Moz","O"];var i=e.charAt(0).toUpperCase()+e.slice(1);for(var n=0;n<t.length;n++){var o=t[n];var r=o?""+o+i:e;if(void 0!==document.body.style[r])return r}return null}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */function Y(){this.state.isDestroyed=true;
// touch DOM only if `applyStyle` modifier is enabled
if(U(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");this.popper.style.position="";this.popper.style.top="";this.popper.style.left="";this.popper.style.right="";this.popper.style.bottom="";this.popper.style.willChange="";this.popper.style[Q("transform")]=""}this.disableEventListeners();
// remove the popper if user explicitly asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
if(this.options.removeOnDestroy)this.popper.parentNode.removeChild(this.popper);return this}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function V(e){var t=e.ownerDocument;return t?t.defaultView:window}function X(e,t,i,n){var o="BODY"===e.nodeName;var r=o?e.ownerDocument.defaultView:e;r.addEventListener(t,i,{passive:true});if(!o)X(u(r.parentNode),t,i,n);n.push(r)}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function K(e,t,i,n){
// Resize event listener on window
i.updateBound=n;V(e).addEventListener("resize",i.updateBound,{passive:true});
// Scroll event listener on scroll parents
var o=u(e);X(o,"scroll",i.updateBound,i.scrollParents);i.scrollElement=o;i.eventsEnabled=true;return i}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function G(){if(!this.state.eventsEnabled)this.state=K(this.reference,this.options,this.state,this.scheduleUpdate)}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function Z(e,t){
// Remove resize event listener on window
V(e).removeEventListener("resize",t.updateBound);
// Remove scroll event listener on scroll parents
t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)}));
// Reset state
t.updateBound=null;t.scrollParents=[];t.scrollElement=null;t.eventsEnabled=false;return t}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function J(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=Z(this.reference,this.state)}}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function ee(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function te(e,t){Object.keys(t).forEach((function(i){var n="";
// add unit if the value is numeric and is one of the following
if(-1!==["width","height","top","right","bottom","left"].indexOf(i)&&ee(t[i]))n="px";e.style[i]=t[i]+n}))}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function ie(e,t){Object.keys(t).forEach((function(i){if(false!==t[i])e.setAttribute(i,t[i]);else e.removeAttribute(i)}))}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function ne(e){
// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
te(e.instance.popper,e.styles);
// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
ie(e.instance.popper,e.attributes);
// if arrowElement is defined and arrowStyles has some properties
if(e.arrowElement&&Object.keys(e.arrowStyles).length)te(e.arrowElement,e.arrowStyles);return e}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function oe(e,t,i,n,o){
// compute reference element offsets
var r=z(o,t,e,i.positionFixed);
// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var s=I(i.placement,r,t,e,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);t.setAttribute("x-placement",s);
// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
te(t,{position:i.positionFixed?"fixed":"absolute"});return i}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */function re(e,t){var i=e.offsets,n=i.popper,o=i.reference;var r=Math.round,s=Math.floor;var a=function e(t){return t};var l=r(o.width);var c=r(n.width);var u=-1!==["left","right"].indexOf(e.placement);var d=-1!==e.placement.indexOf("-");var f=!t?a:u||d||l%2==c%2?r:s;var p=!t?a:r;return{left:f(l%2==1&&c%2==1&&!d&&t?n.left-1:n.left),top:p(n.top),bottom:p(n.bottom),right:f(n.right)}}var se=i&&/Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ae(e,t){var i=t.x,n=t.y;var o=e.offsets.popper;
// Remove this legacy support in Popper.js v2
var r=q(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;if(void 0!==r)console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration;var a=v(e.instance.popper);var l=O(a);
// Styles
var c={position:o.position};var u=re(e,window.devicePixelRatio<2||!se);var d="bottom"===i?"top":"bottom";var f="right"===n?"left":"right";
// if gpuAcceleration is set to `true` and transform is supported,
//  we use `translate3d` to apply the position to the popper we
// automatically use the supported prefixed version if needed
var p=Q("transform");
// now, let's make a step back and look at this code closely (wtf?)
// If the content of the popper grows once it's been positioned, it
// may happen that the popper gets misplaced because of the new content
// overflowing its reference element
// To avoid this problem, we provide two options (x and y), which allow
// the consumer to define the offset origin.
// If we position a popper on top of a reference element, we can set
// `x` to `top` to make the popper grow towards its top instead of
// its bottom.
var h=void 0,m=void 0;if("bottom"===d)
// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
if("HTML"===a.nodeName)m=-a.clientHeight+u.bottom;else m=-l.height+u.bottom;else m=u.top;if("right"===f)if("HTML"===a.nodeName)h=-a.clientWidth+u.right;else h=-l.width+u.right;else h=u.left;if(s&&p){c[p]="translate3d("+h+"px, "+m+"px, 0)";c[d]=0;c[f]=0;c.willChange="transform"}else{
// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var g="bottom"===d?-1:1;var y="right"===f?-1:1;c[d]=m*g;c[f]=h*y;c.willChange=d+", "+f}
// Attributes
var b={"x-placement":e.placement};
// Update `data` attributes, styles and arrowStyles
e.attributes=E({},b,e.attributes);e.styles=E({},c,e.styles);e.arrowStyles=E({},e.offsets.arrow,e.arrowStyles);return e}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function le(e,t,i){var n=q(e,(function(e){return e.name===t}));var o=!!n&&e.some((function(e){return e.name===i&&e.enabled&&e.order<n.order}));if(!o){var r="`"+t+"`";var s="`"+i+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ce(e,t){var i;
// arrow depends on keepTogether in order to work
if(!le(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;
// if arrowElement is a string, suppose it's a CSS selector
if("string"==typeof n){
// if arrowElement is not found, don't run the modifier
if(!(n=e.instance.popper.querySelector(n)))return e}else
// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!e.instance.popper.contains(n)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return e}var o=e.placement.split("-")[0];var r=e.offsets,s=r.popper,a=r.reference;var c=-1!==["left","right"].indexOf(o);var u=c?"height":"width";var d=c?"Top":"Left";var f=d.toLowerCase();var p=c?"left":"top";var h=c?"bottom":"right";var v=M(n)[u];

// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction

// top/left side
if(a[h]-v<s[f])e.offsets.popper[f]-=s[f]-(a[h]-v);
// bottom/right side
if(a[f]+v>s[h])e.offsets.popper[f]+=a[f]+v-s[h];e.offsets.popper=x(e.offsets.popper);
// compute center of the popper
var m=a[f]+a[u]/2-v/2;
// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var g=l(e.instance.popper);var y=parseFloat(g["margin"+d]);var b=parseFloat(g["border"+d+"Width"]);var w=m-e.offsets.popper[f]-y-b;
// prevent arrowElement from being placed not contiguously to its popper
w=Math.max(Math.min(s[u]-v,w),0);e.arrowElement=n;e.offsets.arrow=(j(i={},f,Math.round(w)),j(i,p,""),i);return e}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function ue(e){if("end"===e)return"start";else if("start"===e)return"end";return e}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var de=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];
// Get rid of `auto` `auto-start` and `auto-end`
var fe=de.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function pe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:false;var i=fe.indexOf(e);var n=fe.slice(i+1).concat(fe.slice(0,i));return t?n.reverse():n}var he={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ve(e,t){
// if `inner` modifier is enabled, we can't use the `flip` modifier
if(U(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)
// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return e;var i=N(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed);var n=e.placement.split("-")[0];var o=F(n);var r=e.placement.split("-")[1]||"";var s=[];switch(t.behavior){case he.FLIP:s=[n,o];break;case he.CLOCKWISE:s=pe(n);break;case he.COUNTERCLOCKWISE:s=pe(n,true);break;default:s=t.behavior}s.forEach((function(a,l){if(n!==a||s.length===l+1)return e;n=e.placement.split("-")[0];o=F(n);var c=e.offsets.popper;var u=e.offsets.reference;
// using floor because the reference offsets may contain decimals we are not going to consider here
var d=Math.floor;var f="left"===n&&d(c.right)>d(u.left)||"right"===n&&d(c.left)<d(u.right)||"top"===n&&d(c.bottom)>d(u.top)||"bottom"===n&&d(c.top)<d(u.bottom);var p=d(c.left)<d(i.left);var h=d(c.right)>d(i.right);var v=d(c.top)<d(i.top);var m=d(c.bottom)>d(i.bottom);var g="left"===n&&p||"right"===n&&h||"top"===n&&v||"bottom"===n&&m;
// flip the variation if required
var y=-1!==["top","bottom"].indexOf(n);
// flips variation if reference element overflows boundaries
var b=!!t.flipVariations&&(y&&"start"===r&&p||y&&"end"===r&&h||!y&&"start"===r&&v||!y&&"end"===r&&m);
// flips variation if popper content overflows boundaries
var w=!!t.flipVariationsByContent&&(y&&"start"===r&&h||y&&"end"===r&&p||!y&&"start"===r&&m||!y&&"end"===r&&v);var _=b||w;if(f||g||_){
// this boolean to detect any flip loop
e.flipped=true;if(f||g)n=s[l+1];if(_)r=ue(r);e.placement=n+(r?"-"+r:"");
// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
e.offsets.popper=E({},e.offsets.popper,H(e.instance.popper,e.offsets.reference,e.placement));e=W(e.instance.modifiers,e,"flip")}}));return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function me(e){var t=e.offsets,i=t.popper,n=t.reference;var o=e.placement.split("-")[0];var r=Math.floor;var s=-1!==["top","bottom"].indexOf(o);var a=s?"right":"bottom";var l=s?"left":"top";var c=s?"width":"height";if(i[a]<r(n[l]))e.offsets.popper[l]=r(n[l])-i[c];if(i[l]>r(n[a]))e.offsets.popper[l]=r(n[a]);return e}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function ge(e,t,i,n){
// separate value from unit
var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var r=+o[1];var s=o[2];
// If it's not a number it's an operator, I guess
if(!r)return e;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=i;break;case"%":case"%r":default:a=n}return x(a)[t]/100*r}else if("vh"===s||"vw"===s){
// if is a vh or vw, we calculate the size based on the viewport
var l=void 0;if("vh"===s)l=Math.max(document.documentElement.clientHeight,window.innerHeight||0);else l=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return l/100*r}else
// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return r}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */function ye(e,t,i,n){var o=[0,0];
// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var r=-1!==["right","left"].indexOf(n);
// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var s=e.split(/(\+|\-)/).map((function(e){return e.trim()}));
// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var a=s.indexOf(q(s,(function(e){return-1!==e.search(/,|\s/)})));if(s[a]&&-1===s[a].indexOf(","))console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var l=/\s*,\s*|\s+/;var c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];
// Convert the values with units to absolute pixels to allow our computations
// Loop trough the offsets arrays and execute the operations
(c=c.map((function(e,n){
// Most of the units rely on the orientation of the popper
var o=(1===n?!r:r)?"height":"width";var s=false;return e.reduce((function(e,t){if(""===e[e.length-1]&&-1!==["+","-"].indexOf(t)){e[e.length-1]=t;s=true;return e}else if(s){e[e.length-1]+=t;s=false;return e}else return e.concat(t)}),[]).map((function(e){return ge(e,o,t,i)}))}))).forEach((function(e,t){e.forEach((function(i,n){if(ee(i))o[t]+=i*("-"===e[n-1]?-1:1)}))}));return o}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function be(e,t){var i=t.offset;var n=e.placement,o=e.offsets,r=o.popper,s=o.reference;var a=n.split("-")[0];var l=void 0;if(ee(+i))l=[+i,0];else l=ye(i,r,s,a);if("left"===a){r.top+=l[0];r.left-=l[1]}else if("right"===a){r.top+=l[0];r.left+=l[1]}else if("top"===a){r.left+=l[0];r.top-=l[1]}else if("bottom"===a){r.left+=l[0];r.top+=l[1]}e.popper=r;return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function we(e,t){var i=t.boundariesElement||v(e.instance.popper);
// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(e.instance.reference===i)i=v(i);
// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var n=Q("transform");var o=e.instance.popper.style;// assignment to help minification
var r=o.top,s=o.left,a=o[n];o.top="";o.left="";o[n]="";var l=N(e.instance.popper,e.instance.reference,t.padding,i,e.positionFixed);
// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
o.top=r;o.left=s;o[n]=a;t.boundaries=l;var c=t.priority;var u=e.offsets.popper;var d={primary:function e(i){var n=u[i];if(u[i]<l[i]&&!t.escapeWithReference)n=Math.max(u[i],l[i]);return j({},i,n)},secondary:function e(i){var n="right"===i?"left":"top";var o=u[n];if(u[i]>l[i]&&!t.escapeWithReference)o=Math.min(u[n],l[i]-("right"===i?u.width:u.height));return j({},n,o)}};c.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=E({},u,d[t](e))}));e.offsets.popper=u;return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function _e(e){var t=e.placement;var i=t.split("-")[0];var n=t.split("-")[1];
// if shift shiftvariation is specified, run the modifier
if(n){var o=e.offsets,r=o.reference,s=o.popper;var a=-1!==["bottom","top"].indexOf(i);var l=a?"left":"top";var c=a?"width":"height";var u={start:j({},l,r[l]),end:j({},l,r[l]+r[c]-s[c])};e.offsets.popper=E({},s,u[n])}return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function ke(e){if(!le(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference;var i=q(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<i.top||t.left>i.right||t.top>i.bottom||t.right<i.left){
// Avoid unnecessary DOM access if visibility hasn't changed
if(true===e.hide)return e;e.hide=true;e.attributes["x-out-of-boundaries"]=""}else{
// Avoid unnecessary DOM access if visibility hasn't changed
if(false===e.hide)return e;e.hide=false;e.attributes["x-out-of-boundaries"]=false}return e}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function Te(e){var t=e.placement;var i=t.split("-")[0];var n=e.offsets,o=n.popper,r=n.reference;var s=-1!==["left","right"].indexOf(i);var a=-1===["top","left"].indexOf(i);o[s?"left":"top"]=r[i]-(a?o[s?"width":"height"]:0);e.placement=F(t);e.offsets.popper=x(o);return e}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */
/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */
/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Se={
/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
placement:"bottom",
/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
positionFixed:false,
/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
eventsEnabled:true,
/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
removeOnDestroy:false,
/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
onCreate:function e(){},
/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
onUpdate:function e(){},
/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
modifiers:{
/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
shift:{
/** @prop {number} order=100 - Index used to define the order of execution */
order:100,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:_e},
/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
offset:{
/** @prop {number} order=200 - Index used to define the order of execution */
order:200,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:be,
/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
offset:0},
/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
preventOverflow:{
/** @prop {number} order=300 - Index used to define the order of execution */
order:300,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:we,
/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
priority:["left","right","top","bottom"],
/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
padding:5,
/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
boundariesElement:"scrollParent"},
/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
keepTogether:{
/** @prop {number} order=400 - Index used to define the order of execution */
order:400,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:me},
/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
arrow:{
/** @prop {number} order=500 - Index used to define the order of execution */
order:500,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ce,
/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
element:"[x-arrow]"},
/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
flip:{
/** @prop {number} order=600 - Index used to define the order of execution */
order:600,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ve,
/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
behavior:"flip",
/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
padding:5,
/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
boundariesElement:"viewport",
/**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
flipVariations:false,
/**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
flipVariationsByContent:false},
/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
inner:{
/** @prop {number} order=700 - Index used to define the order of execution */
order:700,
/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
enabled:false,
/** @prop {ModifierFn} */
fn:Te},
/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
hide:{
/** @prop {number} order=800 - Index used to define the order of execution */
order:800,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ke},
/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
computeStyle:{
/** @prop {number} order=850 - Index used to define the order of execution */
order:850,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ae,
/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
gpuAcceleration:true,
/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
x:"bottom",
/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
y:"right"},
/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
applyStyle:{
/** @prop {number} order=900 - Index used to define the order of execution */
order:900,
/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
enabled:true,
/** @prop {ModifierFn} */
fn:ne,
/** @prop {Function} */
onLoad:oe,
/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
gpuAcceleration:void 0}}};
/**
 * @callback onCreate
 * @param {dataObject} data
 */
/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods
var Ce=function(){
/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
function e(t,i){var n=this;var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};S(this,e);this.scheduleUpdate=function(){return requestAnimationFrame(n.update)};
// make update() debounced, so that it only runs at most once-per-tick
this.update=s(this.update.bind(this));
// with {} we create a new object with the options inside it
this.options=E({},e.Defaults,o);
// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};
// get reference and popper elements (allow jQuery wrappers)
this.reference=t&&t.jquery?t[0]:t;this.popper=i&&i.jquery?i[0]:i;
// Deep merge modifiers options
this.options.modifiers={};Object.keys(E({},e.Defaults.modifiers,o.modifiers)).forEach((function(t){n.options.modifiers[t]=E({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}));
// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map((function(e){return E({name:e},n.options.modifiers[e])})).sort((function(e,t){return e.order-t.order}));
// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach((function(e){if(e.enabled&&a(e.onLoad))e.onLoad(n.reference,n.popper,n.options,e,n.state)}));
// fire the first update to position the popper in the right place
this.update();var r=this.options.eventsEnabled;if(r)
// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();this.state.eventsEnabled=r}
// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
C(e,[{key:"update",value:function e(){return B.call(this)}},{key:"destroy",value:function e(){return Y.call(this)}},{key:"enableEventListeners",value:function e(){return G.call(this)}},{key:"disableEventListeners",value:function e(){return J.call(this)}
/**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
/**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */}]);return e}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */Ce.Utils=("undefined"!=typeof window?window:e).PopperUtils;Ce.placements=de;Ce.Defaults=Se;
/* harmony default export */t.default=Ce;
/* WEBPACK VAR INJECTION */}).call(this,i(/*! ./../../../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))
/***/},
/***/"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/function(e,t){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||new Function("return this")()}catch(e){
// This works if the window reference is available
if("object"===("undefined"==typeof window?"undefined":i(window)))n=window}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n;
/***/},
/***/"./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/function(e,t){e.exports=function(e){if(!e.webpackPolyfill){e.deprecate=function(){};e.paths=[];
// module.parent = undefined by default
if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function t(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function t(){return e.i}});e.webpackPolyfill=1}return e};
/***/},
/***/0:
/*!********************************************!*\
  !*** multi ./js/theme.js ./css/theme.scss ***!
  \********************************************/
/*! no static exports found */
/***/function(e,t,i){i(/*! ./js/theme.js */"./js/theme.js");e.exports=i(/*! ./css/theme.scss */"./css/theme.scss");
/***/},
/***/jquery:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/function(e,t){e.exports=jQuery;
/***/},
/***/prestashop:
/*!*****************************!*\
  !*** external "prestashop" ***!
  \*****************************/
/*! no static exports found */
/***/function(e,t){e.exports=prestashop;
/***/}
/******/});
//# sourceMappingURL=theme.js.map