import { createStore } from 'vuex'
import { setItem } from '../utils/storage/storage'
import { getDevice } from '../utils/device';

export default createStore({ 
  state: {
    token:'token',
    device:getDevice()
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
