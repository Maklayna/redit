import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import registration from '../components/registration';
import login from '../components/login';
import secret from '../components/secret';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/reg',
      name: 'registration',
      component: registration,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/secret',
      name: 'secret',
      component: secret,
    },
  ],
  mode: 'history',
});
