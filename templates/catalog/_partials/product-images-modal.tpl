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

{if  isset($allImages)}
    {assign var='allImagesCount' value=$allImages|count }   
{else} 
    {assign var='allImagesCount' value=0}   
{/if}
<div class="modal fade js-product-images-modal" id="product-modal">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header d-flex d-md-none">
                <button type="button" class="prev-image-modal" aria-label="Previous">
                    <i class="material-icons">chevron_leftt</i>
                </button>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="material-icons">close</i>
                </button>
                <button type="button" class="next-image-modal" aria-label="Next">
                    <i class="material-icons">chevron_right</i>
                </button>
            </div>
            <button type="button" class="close d-none d-md-block" data-dismiss="modal" aria-label="Close">
                <i class="material-icons">close</i>
            </button>
            <div class="modal-body">
                <div id="js-slick-product">
                    {if isset($cover)}
                        <div>
                            <img id="image-{$cover.id_image}" data-src="{$cover.large.url}" class="img-fluid lazyload" width="{$cover.large.width}" alt="{$cover.legend}" title="{$cover.legend}" />
                        </div>
                        {foreach from=$product.images item=image}
                            {if $image.id_image != $cover.id_image}
                                <div>
                                    <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}" />
                                </div>
                            {/if}
                        {/foreach}
                    {else}
                        {foreach from=$product.images item=image}
                            <div>
                                <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}" />
                            </div>
                        {/foreach}
                    {/if}
                    {if $allImagesCount > 0}
                        {foreach from=$allImages item=image}
                            <div>
                                <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}" />
                            </div>
                        {/foreach}
                    {/if}
                </div>
            </div>
            <div class="d-block d-md-none">
                <p class="label-zoom">Zoom : appuyer et glisser</p>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
