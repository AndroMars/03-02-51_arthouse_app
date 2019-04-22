import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation: {
      selectedWork: 100,
    },
    works: [
      {
        id: 0,
        order: 0,
        title: 'Work 1',
        navigation_title: 'Work 1 Full Name',
        content: 'Test Content Work 1'
      },
      {
        id: 1,
        order: 1,
        title: 'Work 2',
        navigation_title: 'Work 2 Full Name',
        content: 'Test Content Work 2'
      },
      {
        id: 2,
        order: 3,
        title: 'Work 3',
        navigation_title: 'Work 3 Full Name',
        content: 'Test Content Work 3'
      }
    ],
    sites: [
      {
        id: 4,
        order: 0,
        title: 'Home',
        navigation_title: 'home',
        content: 'About Content'
      },
      {
        id: 5,
        order: 0,
        title: 'Contact',
        navigation_title: 'contact',
        content: 'Contact Content'
      },
      {
        id: 7,
        order: 0,
        title: 'About',
        navigation_title: 'about',
        content: 'About Content'
      },
      {
        id: 6,
        order: 0,
        title: 'Newsletter',
        navigation_title: 'newsletter',
        content: 'Newsletter Content'
      }
    ],
    site: {
      title: 'My Work',
      active: true,
    }
  },
  mutations: {
    selectWork(state, id) {
      state.navigation.selectedWork = id;
    }
  },
  actions: {
    selectWork(context, id) {
      context.commit('selectWork', id);
    }
  },
  getters: {
    WORKS: state => {
      return state.works
    }
  }
});
