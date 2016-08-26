'use strict'

export default function(router) {
    router.map({
        '/': {
            name: 'dashboard',
            component: require('./components/Dashboard.vue')
        },
        '/price-overview/': {
            name: 'price-overview',
            component: require('./components/Price.vue')
        },
        '/product-overview/': {
            name: 'product-overview',
            component: require('./components/Product.vue')
        }
    })
}