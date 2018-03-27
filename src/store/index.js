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
	// const perPgae = (payload.per_page > 5) ? payload.per_page : 5;

	const query = payload.term + param;

	console.log(query)

      HTTP.get("/topics", {
        params: {
          q: query,
          page: page,
          per_page: (page * 5)
        }
      })
        .then(response => {
          commit("getTopics", response.data);
        })
        .catch(error => {
          commit("error", error.response.status);
        });

  }
};
const mutations = {
  getTopics: (state, payload) => {
    state.topics = payload;
  },
  error: (state, payload)=>{

	  	state.error = payload;

  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
