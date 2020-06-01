import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ApiService from './common/api.service';

ApiService.init();

Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  Promise.all([store.dispatch('check_auth')]).then(next());
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
