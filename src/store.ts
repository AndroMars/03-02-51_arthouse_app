import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

class ArtWork {
  public title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const api = 'https://firestore.googleapis.com/v1/';
const project = 'projects/arthouse-d425b/databases/(default)';
const document = '/documents/fl_content/';
const firestoreURL = api + project + document;

export default new Vuex.Store({
  state: {
    documents: [],
    navigation: {
      selectedWork: 100,
    },
    works: [
      {
        id: 0,
        order: 0,
        title: 'Work 1',
        navigation_title: 'Work 1 Full Name',
        content: 'Test Content Work 1',
      },
      {
        id: 1,
        order: 1,
        title: 'Work 2',
        navigation_title: 'Work 2 Full Name',
        content: 'Test Content Work 2',
      },
      {
        id: 2,
        order: 3,
        title: 'Work 3',
        navigation_title: 'Work 3 Full Name',
        content: 'Test Content Work 3',
      },
    ],
    sites: [
      {
        id: 4,
        order: 0,
        title: 'Home',
        navigation_title: 'home',
        content: 'About Content',
      },
      {
        id: 5,
        order: 0,
        title: 'Contact',
        navigation_title: 'contact',
        content: 'Contact Content',
      },
      {
        id: 7,
        order: 0,
        title: 'About',
        navigation_title: 'about',
        content: 'About Content',
      },
      {
        id: 6,
        order: 0,
        title: 'Newsletter',
        navigation_title: 'newsletter',
        content: 'Newsletter Content',
      },
    ],
    site: {
      title: 'My Work',
      active: true,
    },
  },
  mutations: {
    selectWork(state, id) {
      state.navigation.selectedWork = id;
    },
    setResult(state, result) {
      state.documents = result.documents;
    },
  },
  actions: {
    requestData(context) {
      axios
        .get(firestoreURL)
        .then((r) => r.data)
        .then((result) => {
          context.commit('setResult', result);
        });
    },
    selectWork(context, id) {
      context.commit('selectWork', id);
    },
  },
  getters: {
    WORKS: (state) => {
      return state.works;
    },
  },
});
