import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import _ from 'lodash';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

class File {
  public name: string;
  public file: string;

  public url: string;
//  public url_sized: string;

  constructor(name: string, file: string) {
    const baseURL = 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2';

    this.name = name;
    this.file = file;

    this.url = baseURL + file;
  }
}

class ArtWork {
  public id: string;
  public title: string;
  public subtitle: string;
  public texttop: string;
  public imagestop: any[];
  public textcenter: string;
  public imagesbottom: any[];
  public textbottom: string;

  constructor(id: string, title: string, subtitle: string, texttop: string, textcenter: string, textbottom: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.texttop = texttop;
    this.textcenter = textcenter;
    this.textbottom = textbottom;
    this.imagestop = [];
    this.imagesbottom = [];
  }
}

const api = 'https://firestore.googleapis.com/v1/';
const project = 'projects/arthouse-d425b/databases/(default)';
const document = '/documents/';
const firestoreURL = api + project + document;

export default new Vuex.Store({
  state: {
    documents: {},
    selected: '',
    files: {},

    works: [],
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
      state.selected = id;
    },
    setData(state, result) {
      const documents = {};

      _.forEach(result.documents, (item: any) => {
        const document = new ArtWork(
          _.get(item, 'fields.id.stringValue', '0'),
          _.get(item, 'fields.title.stringValue', ''),
          _.get(item, 'fields.subtitle.stringValue', ''),
          _.get(item, 'fields.textTop.stringValue', ''),
          _.get(item, 'fields.textCenter.stringValue', ''),
          _.get(item, 'fields.textBottom.stringValue', ''),
        );

        let imagesTop: any[] = [];
        _.forEach(_.get(item, 'fields.imagesTop.arrayValue.values', []), (image) => {
          const referenceValue = _.get(image, 'referenceValue');
          imagesTop.push(referenceValue);
        });

        let imagesBottom: any[] = [];
        _.forEach(_.get(item, 'fields.imagesBottom.arrayValue.values', []), (image) => {
          const referenceValue = _.get(image, 'referenceValue');
          imagesBottom.push(referenceValue);
        });

        document.imagestop = imagesTop;
        document.imagesbottom = imagesBottom;

        _.set(documents, document.id, document);
      });

      _.set(state, 'documents', documents);
    },
    setFiles(state, result) {
   //   console.log("mtart utation");
      let files = {};

      // console.log("result", result);

      
      _.forEach(result.documents, (item:any) => {
        let name = _.get(item, 'name', '');

        let file = new File(
          name,
          _.get(item, 'fields.file.stringValue', ''),
        );

        _.set(files, name, file);

        // console.log(file);
      });

      _.set(state, 'files', files);

    },
  },
  actions: {
    requestData(context) {
      axios
        .get(firestoreURL + 'fl_content/')
        .then((r) => r.data)
        .then((result) => {
          context.commit('setData', result);
        });
    },
    requestFiles(context) {
      axios
        .get(firestoreURL + 'fl_files/')
        .then((r) => r.data)
        .then((result) => {
          // console.log(result);
          context.commit('setFiles', result);
        });
    },
    selectWork(context, id) {
      context.commit('selectWork', id);
    },
  },
  getters: {
    DOCUMENTS: (state) => {
      return state.documents;
    },
    getFiles: (state) => {
      return state.files;
    },
    SELECTEDDOCUMENT: (state) => {
      if (!state.selected || state.selected === '0') {
        return new ArtWork('0', '', '', '', '', '');
      }
      return _.get(state.documents, state.selected);
    },
  },
});
