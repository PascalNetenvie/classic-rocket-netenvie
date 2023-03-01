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
import $ from 'jquery';
import prestashop from 'prestashop';
import SlickSlider from './components/slick';

$(document).ready(function () {
    console.log('ready product');
    createProductSpin();
    createInputFile();
    //let slickSlider = new SlickSlider();
    slickSliderProductInit();


    if (prestashop.responsive.mobile) {
        //$(".btn-zoom").hide();
        console.log('zoom');
        //$(".product-img img").parent().zoom();
        $("#product-modal img").parent().zoom({magnify: 0.8});
    }

    prestashop.on('updatedProduct', function (event) {
        console.log('updatedProduct');
        createInputFile();


        if (event && event.product_minimal_quantity) {
            const minimalProductQuantity = parseInt(event.product_minimal_quantity, 10);
            const quantityInputSelector = '#quantity_wanted';
            let quantityInput = $(quantityInputSelector);

            // @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
            quantityInput.trigger('touchspin.updatesettings', {min: minimalProductQuantity});
        }
        $($('.tabs .nav-link.active').attr('href')).addClass('active').removeClass('fade');
        $('.js-product-images-modal').replaceWith(event.product_images_modal);
        // slickSlider.init();
        slickSliderProductInit();
    });


    function slickSliderProductInit()
    {
        console.log('slickSliderProductInit');

        $('.product-thumbs').slick({
            asNavFor: '.products-imagescover',
            prevArrow: '<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">expand_less</i></button>',
            nextArrow: '<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">expand_more</i></button>',
            dots: false,
            infinite: true,
            speed: 300,
            rows: 0,
            slidesToShow: 6,
            slidesToScroll: 1,
            "focusOnSelect": true,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        vertical: false,
                        verticalSwiping: false,
                        prevArrow: '<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',
                        nextArrow: '<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        vertical: false,
                        verticalSwiping: false,
                        prevArrow: '<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',
                        nextArrow: '<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>'
                    }
                }
            ]
        });
        $('.products-imagescover').slick({
            asNavFor: '.product-thumbs',
            prevArrow: '<button type="button" class="btn btn-link slick-prev slick-arrow"><i class="material-icons">chevron_left</i></button>',
            nextArrow: '<button type="button" class="btn btn-link slick-next slick-arrow"><i class="material-icons">chevron_right</i></button>',
            dots: false,
            infinite: true,
            speed: 300,
            rows: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
        });



    }

    function createInputFile()
    {
        $('.js-file-input').on('change', (event) => {
            let target, file;

            if ((target = $(event.currentTarget)[0]) && (file = target.files[0])) {
                $(target).prev().text(file.name);
            }
        });
    }

    function createProductSpin()
    {
        const $quantityInput = $('#quantity_wanted');

        $quantityInput.TouchSpin({
            buttondown_class: 'btn js-touchspin',
            buttonup_class: 'btn js-touchspin',
            min: parseInt($quantityInput.attr('min'), 10),
            max: 1000000
        });

        $('body').on('change keyup', '#quantity_wanted', (e) => {
            $(e.currentTarget).trigger('touchspin.stopspin');
            prestashop.emit('updateProduct', {
                eventType: 'updatedProductQuantity',
                event: e
            });
        });

    }

});

$(document).on('click', '.btn-zoom', function () {
    var idImage = $(this).data('id-image');
    $("#product-modal img.img-fluid").addClass('d-none').removeClass('current');
    $("#product-modal img#image-" + idImage).removeClass('d-none').addClass('current');
});

$(document).on('click', '.next-image-modal', function (e) {
    console.log('next-image-modal click');
    var current = false;
    var find = false;
    var next = false;
    var el = false;
    $("#product-modal img.img-fluid").each(function (i) {
        el = $(this);
        if (current && !find) {
            find = true;
            next = el;
        }
        if ($(this).hasClass('current')) {
            //console.log('find');
            current = true;
        }
    });
    /*
     console.log('find :' + find);
     console.log('current :' + current);
     console.log('next');
     console.log(next);
     */
    if (!next) {
        next = $("#product-modal img.img-fluid").first();
    }
    $("#product-modal img.img-fluid").addClass('d-none').removeClass('current');
    next.removeClass('d-none').addClass('current');
});
$(document).on('click', '.prev-image-modal', function (e) {

    console.log('next-image-modal click');
    var current = false;
    var find = false;
    var prev = false;
    var el = $("#product-modal img.img-fluid").last();
    $("#product-modal img.img-fluid").each(function (i) {
        if ($(this).hasClass('current')) {
            prev = el;
        }
        el = $(this);
    });
    /*
     console.log('find :' + find);
     console.log('current :' + current);
     console.log('next');
     console.log(next);
     */
    $("#product-modal img.img-fluid").addClass('d-none').removeClass('current');
    prev.removeClass('d-none').addClass('current');
});
/*
 $(document).on('shown.bs.modal', '#product-modal', function (e) {
 $('#js-slick-product').resize();
 });
 */
//add to cart loader
$(document).on('click', '.js-add-to-cart:enabled:not(.is--loading)', function () {
    $(this).addClass('is--loading').attr("disabled", true);
});
prestashop.on('updateCart', function (event) {
    removeAddToCartLoader();

});
prestashop.on('handleError', function (event) {
    removeAddToCartLoader();
    $('.js-add-to-cart').attr("disabled", false);

});
function removeAddToCartLoader() {
    $('.js-add-to-cart.is--loading').removeClass('is--loading');

}