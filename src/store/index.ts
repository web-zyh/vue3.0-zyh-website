import { createStore } from "vuex";
import { setItem, getItem } from "../utils/storage/storage";
import { getDevice } from "../utils/device";

export default createStore({
  state: {
    token: getItem("token") ? getItem("token") : "",
    device: getDevice(),
  },
  mutations: {
    saveToken(state, payload): void {
      state.token = payload;
      setItem("token", payload);
    },
    setDevice(state, payload) {
      state.device = payload;
    },
  },
  actions: {
    saveTokenAsync(context, data) {
      context.commit("saveToken", data);
    },
  },
  modules: {},
});
