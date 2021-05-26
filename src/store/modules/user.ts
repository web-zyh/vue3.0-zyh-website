import { setItem, getItem } from "../../utils/storage/storage";

const states = {
  token: getItem("token") ? getItem("token") : "",
};

const mutations = {
  saveToken (state: any, payload: string): void {
    state.token = payload;
    setItem("token", payload);
  }
};

const actions = {
  saveTokenAsync (context: any, data: string): void {
    context.commit("saveToken", data);
  }
};

export default {
  namespaced: true, // 开启命名空间，操作时要加上文件名称 store.dispatch("user/setLinkAsync", "???");
  state: states,
  mutations,
  actions
};
