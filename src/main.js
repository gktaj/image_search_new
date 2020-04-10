import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import JwPagination from "jw-vue-pagination";
import VueApexCharts from "vue-apexcharts";
import VueModalRouter from "vue-modal-router";
Vue.component("apexchart", VueApexCharts);
Vue.component("jw-pagination", JwPagination);
Vue.use(require("vue-moment"));

export const bus = new Vue();

Vue.use(VueModalRouter, {
  model: "show", // this should be equal to modal component model name
  delay: 300 // delay time to destroy modal instance
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
