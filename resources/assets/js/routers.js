'use strict'

export default function(router) {
    router.map({
        '/': {
            name: 'dashboard',
            component: require('../views/components/Dashboard.vue'),
            auth: true
        },
        '/price-overview/': {
            name: 'price-overview',
            component: require('../views/components/PriceOverview.vue'),
            auth: true
        },
        '/product-overview/': {
            name: 'product-overview',
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
        }
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