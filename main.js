//import scss from './assents/stylesheets/app/scss';

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import AppComponent from './components/app.component.vue';

import HomeComponent from './components/home/home.component.vue';
import UserComponent from './components/user/user.component.vue';

const routes =[
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/user',
    component: UserComponent
  }
];

const router = new Router({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(AppComponent)
}).$mount('#app');
