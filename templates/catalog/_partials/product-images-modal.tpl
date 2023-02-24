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
        <div class="modal-header d-block d-md-none">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-content">
            <div class="modal-body">
                {if isset($cover)}
                    <img id="image-{$cover.id_image}" data-src="{$cover.large.url}" class="img-fluid lazyload" width="{$cover.large.width}" alt="{$cover.legend}" title="{$cover.legend}">
                    {foreach from=$product.images item=image}
                        {if $image.id_image != $cover.id_image}
                            <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}">
                        {/if}
                    {/foreach}
                {else}
                    {foreach from=$product.images item=image}
                        <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}">
                    {/foreach}
                {/if}
                {if $allImagesCount > 0}
                    {foreach from=$allImages item=image}
                        <img id="image-{$image.id_image}" data-src="{$image.large.url}" class="img-fluid lazyload" width="{$image.large.width}" alt="{$image.legend}" title="{$image.legend}">
                    {/foreach}
                {/if}
                <span class="label-zoom">Zoom : appuyer et glisser</span>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
