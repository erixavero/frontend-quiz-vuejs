//import scss from './assents/stylesheets/app/scss';

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import AppComponent from './components/app.component.vue';

import HomeComponent from './components/home/home.component.vue';
import UserComponent from './components/user/user.component.vue';
import RegComponent from './components/register/register.component.vue';
import ItemComponent from './components/item/item.component.vue';
import CatComponent from './components/cat/cat.component.vue';

const routes =[
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/user',
    component: UserComponent
  },
  {
    path: '/register',
    component: RegComponent
  },
  {
    path: '/item',
    component: ItemComponent
  },
  {
    path: '/cat',
    component: CatComponent
  },

];

const router = new Router({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(AppComponent)
}).$mount('#app');

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer '+ localStorage.getItem('token')),
  request.headers.set('Accept', 'application/json')
  //v.request.headers['Authorization'] = 'Bearer '+ localStorage.getItem('token');
});
