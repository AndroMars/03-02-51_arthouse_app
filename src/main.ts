import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

let config = {
  apiKey: "AIzaSyB2oYJvk6EY42vnoXCo1GqJtQq2_7_eQHc",
  databaseURL: "https://arthouse-d425b.firebaseio.com",
  projectId: "arthouse-d425b",
  storageBucket: "arthouse-d425b.appspot.com"
};

const fb = firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
