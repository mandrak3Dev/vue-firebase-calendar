import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueTextreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextreaAutosize)

const firebaseConfig = {
  apiKey: "AIzaSyC1yDBRzzv2oH2i0mqxaTplujG1jA9s38M",
  authDomain: "vue-calendar-bdcb8.firebaseapp.com",
  databaseURL: "https://vue-calendar-bdcb8.firebaseio.com",
  projectId: "vue-calendar-bdcb8",
  storageBucket: "vue-calendar-bdcb8.appspot.com",
  messagingSenderId: "462283928959",
  appId: "1:462283928959:web:b653c43cd98d1ccfb3164a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
