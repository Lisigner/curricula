import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faPlus, faMinus, faTrash, faCheck, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope
} from "@fortawesome/free-solid-svg-icons"
library.add(faPlus, faMinus, faTrash, faCheck, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')