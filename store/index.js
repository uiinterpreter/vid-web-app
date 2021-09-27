import Vue from 'vue'
import Vuex from 'vuex';
import actionsStore from './modules/action'
import viewStore from './modules/view'

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      views: viewStore,
      actions: actionsStore
    },
  });
};


/*

export const state = () => ({
  drawer: true
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  }
}
*/


export default createStore