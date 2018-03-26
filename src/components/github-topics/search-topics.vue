<template>
<section>
	<form @submit.prevent="fetchSearch">
		<fieldset>

			<input type="text" v-model="search.term" required alt="Digite o termo de busca">
			<select name="" id="" v-model="search.param" >
				<option value="" disabled >Choice a resquisit</option>
				<option  v-for="option in topics.topics" :value="option.value" :key="option.name">{{option.name}}</option>
			</select>
			<button type="submit">Send</button>
		</fieldset>
	</form>
		<span class="error " v-show="showError" :class="{active: showError}" > Unfortunatly we have problems. Try more later.</span>
</section>

</template>

<script>
import options from "./config-options";

export default {
  name: "search-topics",
  data () {
	  return {
		  search: {
			  param: null,
			  term: null,
		  },
		  showError: false,
		  topics: options,
	  };
  },
  computed: {
	  	 error(){
		   this.showError =  (this.$store.state.error) ? true : false;
	  },
  },
  methods: {
	  fetchSearch(){
		this.$store.dispatch('fetchTopics', this.$data.search);
		this.$router.push({query: Object.assign({}, this.$route.query, { term: this.$data.search.term, param:this.$data.search.param, page: 1 }) })
	  }
  },
};
</script>
<style>

form * {
	width: 100%;

	padding-top: 1.25rem;
	padding-right: 1.25rem;
	padding-bottom: 1.25rem;
	padding-left: 1.25rem;
	margin-bottom: 10px;

	border: solid 1px #cccccc;

	box-sizing: border-box;
}
fieldset {
	margin: 0;
}

form [type='text'] {
	width: 100%;
}

form select {
	background-image: url('../../assets/arrows.png');
	background-position: right;
	background-repeat: no-repeat;

	border-radius: 0;

	-webkit-appearance: none;
}
form button {
	padding-top: 1.25rem;
	padding-bottom: 1.25rem;

	color: #ffffff;

	background-color: #53a4b0;
}
form button:hover {
	cursor: pointer;

	background-color: #53a4b0bd;

	transition: background-color 0.5s;
}

</style>

