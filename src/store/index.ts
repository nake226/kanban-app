import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default createStore({
  state: {},
  getters,
  actions,
  mutations,
  modules: {},
  strict: process.env.NODE_ENV !== "production"
});
