require('./bootstrap');
window.Vue = require('vue');


import Vuex from 'vuex';
Vue.use(Vuex);

import storeData from './store/store2';


const store = new Vuex.Store(
  storeData
);





//----------------Vue Router----------

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { routes } from './routes/routes';
import { fromPairs } from 'lodash';

//---------------Vuex---------

const router = new VueRouter({
  routes, store,
  mode: 'history'
  
});

Vue.component('public-master',require('./components/fontend/PublicMaster.vue').default);
Vue.component('top-header',require('./components/fontend/Header.vue').default);
Vue.component('side-bar',require('./components/fontend/sidebar.vue').default);
Vue.component('pagination',require('laravel-vue-pagination'));
const app = new Vue({
  router,
  store,
  el: '#content',
 
});
