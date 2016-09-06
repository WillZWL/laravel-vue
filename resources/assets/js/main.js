import Vue from 'vue'
import App from '../views/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueConfig from './vue.config'
import routerMap from './routers'

// Vue.config.debug = true

Vue.use(VueRouter)

Vue.use(VueResource)

/* eslint-disable no-new */

var router = new VueRouter({
    history: true,
    root: ''
});

routerMap(router);

router.start(App, 'body')