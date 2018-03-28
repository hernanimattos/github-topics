import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "./http-commom.js";

Vue.use(Vuex);
const state = {
  topics: Object,
  error: {
    status: 0,
    errro: String
  },
  notFound: false,
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
			console.log(response)

		  commit("getTopics", response.data);

        })
        .catch(error => {
          commit("error", {text: error.response.data.message , status: error.response.status});
        });
  }
};
const mutations = {
  getTopics: (state, payload) => {

	if (payload.total_count == 0 || payload.items.length == 0){
		state.notFound = true;
	}else{
		state.notFound = false;
	}
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
