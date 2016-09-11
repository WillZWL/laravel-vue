import Vue from 'vue'
import App from '../views/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueConfig from './vue.config'
import routerMap from './routers'

// Vue.config.debug = true
// Vue.config.devtools = true

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.headers.common['Authorization'] = 'Bearer o1lY40f8I5OtSA2JvGAlchxYB3vClbj79iDAe15d';

/* eslint-disable no-new */

var router = new VueRouter({
    history: true,
    root: 'scout'
});

routerMap(router);

router.start(App, 'body')