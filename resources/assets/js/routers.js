'use strict'

export default function(router) {
    router.map({
        '/': {
            name: 'dashboard',
            component: require('./components/Dashboard.vue'),
            auth: true
        },
        '/price-overview/': {
            name: 'price-overview',
            component: require('./components/Price.vue'),
            auth: true
        },
        '/product-overview/': {
            name: 'product-overview',
            component: require('./components/Product.vue'),
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