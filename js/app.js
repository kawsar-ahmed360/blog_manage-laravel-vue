require('./bootstrap');
window.Vue = require('vue');


import Vuex from 'vuex';
Vue.use(Vuex);

import storeData from './store/store';


const store = new Vuex.Store(
  storeData
);


import axios from 'axios'
window.axios = axios;
//------------vform------
import Form from 'vform'
import HasError from 'vform'
import AlertError from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;



//-----------Sweet Alert-------

import Swal from 'sweetalert2';
window.Swal = Swal;


//---------vue editor---
import { VueEditor, Quill } from "vue2-editor";


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



const app = new Vue({
  router,VueEditor,
  store,
  el: '#app',
});
