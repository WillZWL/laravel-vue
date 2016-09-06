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
            component: require('../views/components/Price.vue'),
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
        }
    })

    //todo
    router.beforeEach((transition) => {
        if (transition.to.auth) {
            transition.next();
        } else {
            let redirect = encodeURIComponent(transition.to.path);
            transition.redirect('/?redirect=' + redirect);
        }
    });
}