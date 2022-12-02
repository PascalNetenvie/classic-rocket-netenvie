{**
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
*}
<div class="images-container d-flex flex-wrap">
    {block name='product_images'}
        {if $product.images|count > 1}
            <div class="col-lg-2 col-12 product-thumbs js-qv-product-images visible-desktop slick__arrow-outside order-2 order-lg-1" data-slick='{literal}{"asNavFor":"[data-slick].products-imagescover","slidesToShow": {/literal}{if $product.images|count > 2}3{else}2{/if}{literal}, "slidesToScroll": 1,"focusOnSelect": true,"centerMode":false,"rows": 0,"variableWidth": true,"infinite": false}{/literal}'
                 data-count="{$product.images|count}">
                <div class="product-thumb slick-active">
                    <div class="rc">
                        <img
                            class="thumb js-thumb lazyload img-fluid"
                            data-src="{$product.default_image.bySize.small_default.url}"
                            alt="{$product.default_image.legend}" title="{$product.default_image.legend}"
                            width="{$product.cover.bySize.small_default.width}"
                            height="{$product.cover.bySize.small_default.height}"
                            >
                        <noscript>
                        <img class="img-fluid" src="{$product.default_image.bySize.small_default.url}" alt="{$product.default_image.legend}">
                        </noscript>
                    </div>
                </div>
                {foreach from=$product.images item=image}
                    {if $image.id_image != $product.default_image.id_image}
                        <div class="product-thumb">
                            <div class="rc">
                                <img
                                    class="thumb js-thumb lazyload img-fluid"
                                    data-src="{$image.bySize.small_default.url}"
                                    alt="{$image.legend}"
                                    title="{$image.legend}"
                                    width="{$product.cover.bySize.small_default.width}"
                                    height="{$product.cover.bySize.small_default.height}"
                                    >
                                <noscript>
                                <img class="img-fluid" src="{$image.bySize.small_default.url}" alt="{$image.legend}">
                                </noscript>
                            </div>
                        </div>
                    {/if}
                {/foreach}
            </div>
        {/if}
    {/block}


    {block name='product_cover'}
        <div class="position-relative col-lg-10 col-12 order-1 order-lg-2">
            {block name='product_flags'}
                {include file='catalog/_partials/product-flags.tpl'}
            {/block}
            <div class="products-imagescover mb-2" data-count="{$product.images|count}"
                 data-slick='{literal}{"asNavFor":"[data-slick].product-thumbs","rows": 0,"slidesToShow": 1,"arrows":false}{/literal}'
                 data-count="{$product.images|count}">
                <div class="product-img thumbnail-container">
                    <div class="">
                        {if $product.default_image}

                            <img class="img-fluid"
                                 srcset="{$product.default_image.bySize.pdt_540.url} 680w,{$product.default_image.bySize.pdt_360.url} 360w"
                                 src="{$product.default_image.bySize.medium_default.url}"
                                 alt="{$product.default_image.legend}" title="{$product.default_image.legend}"
                                 sizes="(min-width: 768px) 680px, (max-width: 767px) 320px"
                                 width="{$product.cover.bySize.medium_default.width}"
                                 height="{$product.cover.bySize.medium_default.height}"
                                 src="{$product.default_image.bySize.medium_default.url}"
                                 alt="{$product.default_image.legend}" title="{$product.default_image.legend}">
                        {elseif isset($urls.no_picture_image)}
                            <img class="img-fluid" src="{$urls.no_picture_image.bySize.large_default.url}">
                        {else}
                            <img src = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==">
                        {/if}



                        <noscript>
                        <img class="img-fluid" src="{$product.default_image.bySize.medium_default.url}" alt="{$product.default_image.legend}">
                        </noscript>
                    </div>
                </div>

                {foreach from=$product.images item=image   name="images"}
                    {if $image.id_image != $product.default_image.id_image}

                        <div class="product-img">
                            <div class="rc">
                                <img
                                    class="img-fluid lazyload"
                                    {if !$smarty.foreach.images.first && !$product.default_image}data-sizes="auto"{/if}
                                    {if !$smarty.foreach.images.first && !$product.default_image}data-{/if}srcset="{$image.bySize.pdt_540.url} 680w,{$image.bySize.pdt_360.url} 360w"
                                    {if !$smarty.foreach.images.first && !$product.default_image}data-{/if}src="{$image.bySize.medium_default.url}"
                                    alt="{$image.legend}"
                                    title="{$image.legend}"
                                    sizes="(min-width: 768px) 680px, (max-width: 767px) 320px"
                                    width="{$product.cover.bySize.medium_default.width}"
                                    height="{$product.cover.bySize.medium_default.height}"
                                    >
                                <noscript>
                                <img class="img-fluid" src="{$image.bySize.medium_default.url}" alt="{$image.legend}">
                                </noscript>
                            </div>
                        </div>
                    {/if}
                {/foreach}
            </div>
            {*if $product.default_image}
            <button type="button" class="btn btn-link btn-zoom visible-desktop product-layer-zoom" data-toggle="modal" data-target="#product-modal">
            <i class="material-icons zoom-in">&#xE8FF;</i>
            </button>
            {/if*}
        </div>
    {/block}


    {hook h='displayAfterProductThumbs'}
</div>