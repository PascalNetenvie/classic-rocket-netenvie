<div class="tabs product-tabs card card-block">
    <div class="nav nav-tabs" role="tablist">
        {if $product.description}
            <a
                class="nav-link{if $product.description} active{/if}"
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                {if $product.description} aria-selected="true"{/if}>{l s='Description' d='Shop.Theme.Catalog'}</a>

        {/if}

        {if isset($otherDescriptions)}
            {foreach from=$otherDescriptions item=description key=extraKey}

                <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#description{$extraKey}"
                    role="tab"
                    aria-controls="description{$extraKey}"
                    >{$description[0]}</a>
            {/foreach}
        {/if}

        <a
            class="nav-link{if !$product.description} active{/if}"
            data-toggle="tab"
            href="#product-details"
            role="tab"
            aria-controls="product-details"
            {if !$product.description} aria-selected="true"{/if}>{l s='Product Details' d='Shop.Theme.Catalog'}</a>

        {if $product.attachments}
            <a
                class="nav-link"
                data-toggle="tab"
                href="#attachments"
                role="tab"
                aria-controls="attachments">{l s='Attachments' d='Shop.Theme.Catalog'}</a>

        {/if}
        {foreach from=$product.extraContent item=extra key=extraKey}

            <a
                class="nav-link"
                data-toggle="tab"
                href="#extra-{$extraKey}"
                role="tab"
                aria-controls="extra-{$extraKey}">{$extra.title}</a>

        {/foreach}
    </div>

    <div class="tab-content" id="tab-content">
        <div class="tab-pane fade{if $product.description} show active{/if}" id="description" role="tabpanel">
            {if !isset($description)}
                {assign var='description' value=$product.description}   
            {/if}
            {block name='product_description'}
                <div class="product-description">{$description nofilter}</div>
            {/block}
        </div>

        {if isset($otherDescriptions)}
            {foreach from=$otherDescriptions item=description key=extraKey}
                <div class="tab-pane fade" id="description{$extraKey}" role="tabpanel">
                    {block name='product_description'}
                        <div class="product-description">{$description[1] nofilter}</div>
                    {/block}
                </div>
            {/foreach}
        {/if}

        {block name='product_details'}
            <div class="tab-pane fade{if !$product.description} show active{/if}"
                 id="product-details"
                 data-product="{$product.embedded_attributes|json_encode}"
                 role="tabpanel"
                 >
                {include file='catalog/_partials/product-details.tpl'}
            </div>
        {/block}

        {block name='product_attachments'}
            {if $product.attachments}
                <div class="tab-pane fade" id="attachments" role="tabpanel">
                    <section class="product-attachments">
                        <p class="h4 product__download">{l s='Download' d='Shop.Theme.Actions'}</p>
                        {foreach from=$product.attachments item=attachment}
                            <div class="attachment">
                                <a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">{$attachment.name}</a>
                                <p class="small">{$attachment.description}</p>
                                <a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">
                                    {l s='Download' d='Shop.Theme.Actions'} ({$attachment.file_size_formatted})
                                </a>
                            </div>
                        {/foreach}
                    </section>
                </div>
            {/if}
        {/block}

        {foreach from=$product.extraContent item=extra key=extraKey}
            <div class="tab-pane fade {$extra.attr.class}" id="extra-{$extraKey}" role="tabpanel" {foreach $extra.attr as $key => $val} {$key}="{$val}"{/foreach}>
                {$extra.content nofilter}
            </div>
        {/foreach}
    </div>
</div>