import Vue from "vue";
import Vuex, { Store } from "vuex";
import VuexPlugins from "@/plugins/vuexPlugins";
import { API_KEY } from "@/common/const";
import { getHostTableData, getTechTableData } from "@/common/helpers";

Vue.use(Vuex);

export const state = () => ({
  data: [],
  requestType: "",
  requestURL: "",
  tableTitle: "",
  error: null,
  isLoading: false,
});

export const actions = {
  async fetchData({ commit, state, getters }) {
    const type = state.requestType;
    const url = state.requestURL;
    commit("setLoading", true);

    const res = await this.$axios.get(type, {
      params: { key: API_KEY, url: url },
    });

    commit("setLoading", false);

    if (res.data.result.code === 200) {
      commit("clearError");
      commit("setData", res.data.results);
      const title = getters.isHostRequest
        ? `Данные о хостинге ${url}`
        : `Технологии ${url}`;
      commit("setTableTitle", title);
    } else {
      commit("createError", res.data.result);
    }
  },
};

export const getters = {
  isHostRequest(state) {
    return state.requestType === "Host";
  },
  normalizedData(state, getters) {
    let data;
    if (getters.isHostRequest) {
      data = getHostTableData(state.data);
    } else {
      data = getTechTableData(state.data);
    }

    return data;
  },
  tableTitle(state) {
    return state.tableTitle;
  },
  showTable(state) {
    return state.data.length > 0 && !state.error && !state.isLoading;
  },
  error(state) {
    return state.error;
  },
  isLoading(state) {
    return state.isLoading;
  },
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  },
  setRequestType(state, type) {
    state.requestType = type;
  },
  setRequestURL(state, url) {
    state.requestURL = url;
  },
  setTableTitle(state, title) {
    state.tableTitle = title;
  },
  setLoading(state, status) {
    state.isLoading = status;
  },
  createError(state, error) {
    state.error = error;
  },
  clearError(state) {
    state.error = null;
  },
};

export default new Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [VuexPlugins],
});
