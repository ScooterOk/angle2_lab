import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    appStart: false,
    firstPage: true,
    tweenReady: false,
    page: '',
    previousPage: '',
    mobile: null,
    menu: false,
    touch: false,
    scroll: true,
    pager: '01',
    moveCursor : false,
    transitionPage: true,
    mousemove: {},
    resize: 0,
    cursorColor: '',
    cursorHoverColor: '',
    cursorHoverActive: false,
    cursorLongAnimate: false,
    cursorLongAnimatePermit: true,
    deviceorientation: null,
    startProject: false,
    home: {

    },
    services: {
      enterDone: false,
      titleAnimate : false      
    },
    projects: {
      scrollListPermit: false
    },
    about: {
      enterDone: false,
      titleAnimate: false
    }
  },
  getters: {
    
  },
  actions : {
    
  },
  mutations: {
    set(state, status){
      state[status.name] = status.value;      
    },
    process(state, status){
      state.process[status.name] = status.value;      
    },
    projects(state, status){
      state.projects[status.name] = status.value;      
    },
    about(state, status){
      state.about[status.name] = status.value;      
    },
    services(state, status){
      state.services[status.name] = status.value;      
    },
    
  }
})

export default store