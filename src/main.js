import SuiVue from 'semantic-ui-vue';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueBpmnModeler from "vue-bpmn-modeler";

Vue.config.productionTip = false;
Vue.use(SuiVue);
Vue.use(VeeValidate);
Vue.use(VueBpmnModeler);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  
  components: { App }
});
