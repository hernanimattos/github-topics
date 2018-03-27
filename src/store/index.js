import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "./http-commom.js";

Vue.use(Vuex);
const state = {
  topics: Object,
  error: {
	  status: 0;
	  errro: String,
  },
};
const actions = {
  fetchTopics: ({ commit }, payload) => {
    const param = payload.param ? `+${payload.param}` : "";
	const page = payload.page ? payload.page : 1;

	const query = payload.term + param;



      HTTP.get("/topics", {
        params: {
          q: query,
          page: page,
          per_page: (page * 5)
        }
      })
        .then(response => {
		  commit("getTopics", response.data);
		  	console.log(response);
        })
        .catch(error => {
          commit("error", {text: error.responsestatusText , status: error.response.status});
        });

  }
};
const mutations = {
  getTopics: (state, payload) => {
    state.topics = payload;
  },
  error: (state, payload)=>{

	  	state.error = { text: payload.text, status: payload.status };

  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
