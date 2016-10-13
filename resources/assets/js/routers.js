'use strict'

export default function(router) {
    router.map({
        '/': {
            name: 'Dashboard',
            component: require('../views/components/Dashboard.vue'),
            auth: true
        },
        '/price-overview/': {
            name: 'Price Overview',
            component: require('../views/components/PriceOverview.vue'),
            auth: true
        },
        '/product-overview/': {
            name: 'Product Overview',
            component: require('../views/components/Product.vue'),
            auth: true
        },
        '/upload-product/': {
            name: 'Upload Product',
            component: require('../views/components/UploadProduct.vue'),
            auth: true
        },
        '/upload-marketplace-sku_mapping/': {
            name: 'Upload Marketplace SKU Mapping',
            component: require('../views/components/UploadMarketplacdeSkuMapping.vue'),
            auth: true
        },
        '/tracer-sku-setting/': {
            name: 'Tracer SKU Setting',
            component: require('../views/components/TracerSkuSetting.vue'),
            auth: true
        },
        '/marketplace-content-export/': {
            name: 'Marketplace Content Export',
            component: require('../views/components/MarketplaceContentExport.vue'),
            auth: true
        }
        // '/order_fulfillment/': {
        //     name: 'Order Fulfilment',
        //     component: require('../views/components/OrderFulfillment.vue'),
        //     auth: true
        // }
    })

    //todo
    router.beforeEach((transition) => {
        if (transition.to.auth) {
            transition.next();
        } else {
            transition.redirect('/');
        }
    });
}