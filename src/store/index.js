import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    katzen: [],
    displayKatzen: [],
    rows: 0,
    showSpinner: false
  },
  mutations: {
    SET_KATZEN(state, katzen) {
      state.katzen = katzen;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_KATZEN(state, displayKatzen) {
      state.displayKatzen = displayKatzen;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit("SET_SPINNER", true);
      return new Promise(resolve => {
        setTimeout(async () => {
          const res = await fetch("katze.json");
          const val = await res.json();
          resolve(val);
          commit("SET_SPINNER", false);
        }, 1000);
      });
    },
    updatePagination({ commit, dispatch }, {myJson, currentPage, perPage}) {
      commit("SET_KATZEN", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async fetchKatzen({ dispatch }) {
      const myJson = await dispatch("fetchData");
      dispatch("updatePagination", { myJson, currentPage: 1, perPage: 3 });
      return myJson;
    },
    async paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const katzen = state.katzen.slice(start, start + 3);
      commit("SET_DISPLAY_KATZEN", katzen);
    },
    async search({ dispatch }, { text }) {
      const myJson = await dispatch("fetchData");
      const values = myJson.filter(val => {
        return val.name.toLowerCase().includes(text.toLowerCase());
      });

      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 3
      });
    },

  },
  getters: {
    getKatzen(state) {
      return state.katzen;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayKatzen(state) {
      return state.displayKatzen;
    },
    getSpinner(state) {
      return state.showSpinner;
    }
  },
  modules: {}
});
