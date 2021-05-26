import { createStore } from "vuex";
import { setItem, getItem } from "../utils/storage/storage";
import { getDevice } from "../utils/device";
import user from "./modules/user";

export default createStore({
  modules: {
    user,
  },
  state: {
    device: getDevice(),
  },
  mutations: {
    setDevice(state, payload) {
      state.device = payload;
    },
  },
  actions: {

  }
});
