<div class="tabs product-tabs card">

    {if $product.description}
        <a
            class="card-header{if $product.description} active{/if}"
            data-toggle="collapse"
            href="#description"
            role="tab"
            aria-controls="description"
            {if $product.description} aria-selected="true"{/if}>{l s='Description' d='Shop.Theme.Catalog'}</a>

        <div class="card-body collapse{if $product.description} show{/if}" id="description">
            {if !isset($description)}
                {assign var='description' value=$product.description}   
            {/if}
            {block name='product_description'}
                <div class="product-description">{$description nofilter}</div>
            {/block}
        </div>
    {/if}

    {if isset($otherDescriptions)}
        {foreach from=$otherDescriptions item=description key=extraKey}
            <a
                class="card-header"
                data-toggle="collapse"
                href="#description{$extraKey}"
                role="tab"
                aria-controls="description{$extraKey}"
                >{$description[0]}</a>

            <div class="card-body collapse" id="description{$extraKey}">
                {block name='product_description'}
                    <div class="product-description">{$description[1] nofilter}</div>
                {/block}
            </div>

        {/foreach}
    {/if}

    <a
        class="card-header{if !$product.description} active{/if}"
        data-toggle="collapse"
        href="#product-details-cont"
        role="tab"
        aria-controls="product-details-cont"
        {if !$product.description} aria-selected="true"{/if}>{l s='Product Details' d='Shop.Theme.Catalog'}</a>

    <div class="card-body collapse{if !$product.description} show{/if}" id="product-details-cont">
        {block name='product_details'}
            {include file='catalog/_partials/product-details.tpl'}
        {/block}
    </div>

    {if $product.attachments}
        <a
            class="card-header"
            data-toggle="collapse"
            href="#attachments"
            role="tab"
            aria-controls="attachments">{l s='Attachments' d='Shop.Theme.Catalog'}</a>

        <div class="card-body collapse" id="attachments">
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

    {foreach from=$product.extraContent item=extra key=extraKey}
        <a
            class="card-header"
            data-toggle="collapse"
            href="#extra-{$extraKey}"
            role="tab"
            aria-controls="extra-{$extraKey}">{$extra.title}</a>
        <div class="card-body collapse {$extra.attr.class}" id="extra-{$extraKey}" {foreach $extra.attr as $key => $val} {$key}="{$val}"{/foreach}>
            {$extra.content nofilter}
        </div>
    {/foreach}
</div>