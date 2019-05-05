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

    this.url = baseURL + file + '?alt=media';
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
    selected: '',
    documents: {
      1: {
        id: 1,
        title: 'Haus',
        subtitle: 'Mein kleines Haus',
        texttop: 'Text 1',
        imagestop: [
          'haus1',
          'haus2',
          'haus3',
          'haus4',
          'haus5',
          'haus6',
        ],
      },
      2: {
        id: 2,
        title: 'Wohnzimmer',
        subtitle: 'Mein Wohnzimmer',
        texttop: 'Text 1',
        imagestop: [
          'wohnzimmer1',
          'wohnzimmer2',
          'wohnzimmer3',
          'wohnzimmer4',
          'wohnzimmer5',
          'wohnzimmer6',
        ],
      },
      3: {
        id: 3,
        title: 'Wand',
        subtitle: 'Eine Wand',
        texttop: 'Text 1',
        imagestop: [
          'wand1',
          'wand2',
          'wand3',
        ],
      },
      4: {
        id: 4,
        title: 'Gesicht',
        subtitle: 'Ein gesicht',
        texttop: 'Text 1',
        imagestop: [
          'gesicht1',
          'gesicht2',
        ],
      },
      5: {
        id: 5,
        title: 'Holzspahn',
        subtitle: 'Ein Holzspahn',
        texttop: 'Text 1',
        imagestop: [
          'holzspahn1',
          'holzspahn2',
        ],
      },
      6: {
        id: 6,
        title: 'Laub',
        subtitle: 'das ist ein hier',
        texttop: 'Text 1',
        imagestop: [
          'laub',
        ],
      },

    },
    files: {
      'haus1': {
        name: 'haus1',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FZFE7KuF1CkwJIRCofBxZ_Haus1.jpg?alt=media',
      },
      'haus2': {
        name: 'haus2',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2Ff7VAFPGPf25RIft5XfeR_Haus2.jpg?alt=media',
      },
      'haus3': {
        name: 'haus3',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2F8sCq4BpJcZIqznnUPu7D_Haus3.jpg?alt=media',
      } ,
      'haus4': {
        name: 'haus4',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2F4W7iphhzMXXig2JGtgzO_Haus4.jpg?alt=media',
      },
      'haus5': {
        name: 'haus5',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FmjQPtnlafWfoqfHKNGej_Haus5.jpg?alt=media',
      },
      'haus6': {
        name: 'haus6',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FrqABV3QORpa1MjohPHyz_Haus6.jpg?alt=media',
      },
      'laub': {
        name: 'laub',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FAl34vdmROwLyFTzjfP2j_laub.jpg?alt=media',
      },
      'wand1': {
        name: 'wand1',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2Fg0FHhJkJ82luEmnN41N0_Wand1.jpg?alt=media',
      },
      'wand2': {
        name: 'wand2',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FvA7R8kOrU1rugnoTiddW_Wand2.jpg?alt=media',
      } ,
      'wand3': {
        name: 'wand3',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FmL4VO28Nr2AkQyI7lvBU_Wand3.jpg?alt=media',
      } ,
      'wohnzimmer1': {
        name: 'wohnzimmer1',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FZskAmPDP0ESmuoGv3w5I_Wohnzimmer1.jpg?alt=media',
      },
      'wohnzimmer2': {
        name: 'wohnzimmer2',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FruPsd9QS1WxABn1O4rQf_Wohnzimmer2.jpg?alt=media',
      },
      'wohnzimmer3': {
        name: 'wohnzimmer3',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FUHIeVWohBtaV9pglhLan_Wohnzimmer3.jpg?alt=media',
      } ,
      'wohnzimmer4': {
        name: 'wohnzimmer4',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FPiwPF57lsdCF1TNo0ivL_Wohnzimmer4.jpg?alt=media',
      }, 
      'wohnzimmer5': {
        name: 'wohnzimmer5',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FZskAmPDP0ESmuoGv3w5I_Wohnzimmer1.jpg?alt=media',
      } ,
      'wohnzimmer6': {
        name: 'wohnzimmer6',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2Ff1rJOXqPNFqxj8joaumk_Wohnzimmer6.jpg?alt=media',
      } ,
      'gesicht1': {
        name: 'gesicht1',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FK0T72KX2j18KRUL6lOYU_gesicht1.jpg?alt=media',
      }, 
      'gesicht2': {
        name: 'gesicht2',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2Fr07WOh9o91mS2hTDUSl0_gesicht2.jpg?alt=media',
      } ,
      'holzspahn': {
        name: 'holzspahn1',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FHcYv4JxiQEyiegsODsxf_holzspan.jpg?alt=media',
      } ,
      'holzspahn2': {
        name: 'holzspahn2',
        url: 'https://firebasestorage.googleapis.com/v0/b/arthouse-d425b.appspot.com/o/flamelink%2Fmedia%2Fsized%2F500_9999_99%2FTpDTij6R5AU3e4xPDPWu_holzspan2.jpg?alt=media',
      } 
    },
    
    sites: {  
      'home': {
        id: 'home',
        title: 'Home',
        navigation_title: 'home',
        content: 'About Content',
      },
      'contact': {
        id: 'contact',
        title: 'Contact',
        navigation_title: 'contact',
        content: 'Contact Content',
      },
      'about': {
        id: 'about',
        title: 'About',
        navigation_title: 'about',
        content: 'About Content',
      },
      'newsletter': {
        id: 'newsletter',
        title: 'Newsletter',
        navigation_title: 'newsletter',
        content: 'Newsletter Content',
      },
    },
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
        _.forEach(_.get(item, 'fields.imagesTop.arrayValue.values', []), (image: any) => {
          const referenceValue = _.get(image, 'referenceValue');
          imagesTop.push(referenceValue);
        });

        let imagesBottom: any[] = [];
        _.forEach(_.get(item, 'fields.imagesBottom.arrayValue.values', []), (image: any) => {
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
    SITES: (state) => {
      return state.sites;
    },
    getFileURL: (state) => (name: string) => _.get(state.files,[name, 'url']),
    SELECTEDDOCUMENT: (state) => {
      if (!state.selected || state.selected === '0') {
        return new ArtWork('0', '', '', '', '', '');
      }
      return _.get(state.documents, state.selected);
    },
  },
});