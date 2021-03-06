import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: 'Home'
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta:{
      title: 'Blogs'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title: 'Register'
    }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta:{
      title: 'ForgotPassword'
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | VBlog`;
  next();
})

export default router;
