import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'

Vue.config.ignoredElements = [
  'app-element'
];

Vue.use(vueCustomElement);

Vue.customElement('app-element', App, {});

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')