import { createStore } from 'vuex'
import { setItem } from '../utils/storage/storage'

export default createStore({ 
  state: {
    token:'token'
  },
  mutations: {
    commitTokenState(state,payload): void {
      state.token = payload;
      setItem("token",payload);
    },
  },
  actions: {
  },
  modules: {
  }
})
