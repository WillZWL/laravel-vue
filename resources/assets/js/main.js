import Vue from 'vue'
import App from '../views/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueConfig from './vue.config'
import routerMap from './routers'
import VeeValidate from 'vee-validate'

// Vue.config.debug = true
// Vue.config.devtools = true

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate)

Vue.http.headers.common['Authorization'] = 'Bearer hhwNqYiJMRNwR3tQGsJhTiist002SJ8dXotwKYCE';

/* eslint-disable no-new */

var router = new VueRouter({
    history: true,
    root: '/accelerator'
});

routerMap(router);

router.start(App, 'body')
