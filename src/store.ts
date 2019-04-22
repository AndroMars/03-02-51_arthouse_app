import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    works: {
      0: {
        order: 0,
        title: 'Work 1',
        navigation_title: 'Work 1 Full Name',
        content: 'Test Content Work 1'
      },
      1: {
        order: 1,
        title: 'Work 2',
        navigation_title: 'Work 2 Full Name',
        content: 'Test Content Work 2'
      },
      3: {
        order: 3,
        title: 'Work 3',
        navigation_title: 'Work 3 Full Name',
        content: 'Test Content Work 3'
      }
    },
    sites: {
      0: {
        order: 0,
        title: 'Home',
        navigation_title: 'home',
        content: 'About Content'
      },
      1: {
        order: 0,
        title: 'Contact',
        navigation_title: 'contact',
        content: 'Contact Content'
      },
      2: {
        order: 0,
        title: 'About',
        navigation_title: 'about',
        content: 'About Content'
      },
      3: {
        order: 0,
        title: 'Newsletter',
        navigation_title: 'newsletter',
        content: 'Newsletter Content'
      }
    },
    site: {
      title: 'My Work',
      active: true,
    }
  },
  mutations: {

  },
  actions: {

  },
});
