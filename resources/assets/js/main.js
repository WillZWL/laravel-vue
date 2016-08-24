import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)

Vue.use(VueResource)

/* eslint-disable no-new */

var router = new VueRouter({
    history: true,
    root: 'dashboard'
})


router.map({
    '/': {
        name: 'price',
        component: require('./components/Price.vue')
    },

})

router.start(App, 'body')