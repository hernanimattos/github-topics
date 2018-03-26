import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "./http-commom.js";

Vue.use(Vuex);
const state = {
  topics: Object,
  error: null,
};
const actions = {
  fetchTopics: ({ commit }, payload) => {
    const param = payload.param ? `+${payload.param}` : "";
    const page = payload.page ? payload.page : 1;

    const query = payload.term + param;

    const r = new Promise(() => {
      HTTP.get("/topics", { params: { q: query, page: page, per_page: 5 } })
        .then(response => {

          commit("getTopics", response.data);
        })
        .catch(error => {
			console.log(error.response);

          commit("error", error.response.status);
        });
    });
  }
};
const mutations = {
  getTopics: (state, payload) => {
    state.topics = payload;
  },
  error: (state, payload)=>{
	    console.log(payload, "error");
	  	state.error = payload;

  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
