import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import MainPage from './components/MainPage.vue';
import PostPage from './components/PostPage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", name: "home", component: MainPage },
    { path: "/post/:id", name: "post", component: PostPage }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
