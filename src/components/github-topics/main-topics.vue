<template>
	<section>
		<searchTopics></searchTopics>
		<listTopics v-for="topic in getTopics.items" :key="topic.id" :topic-data="topic"></listTopics>
		<div class="pagination" v-if="(getTopics.total_count> 0)">
			<ul>
				<li><a href="" @click.prevent="backPage()">prev</a></li>
				<li><a href="" @click.prevent="nextPage()">next</a></li>
			</ul>
		</div>
	</section>
</template>

<script>
import listTopics from './list-topics.vue';
import searchTopics from './search-topics.vue';

export default {
		components: {
		listTopics,
		searchTopics,
	},
  name:'main-topics',
  data () {
	  return {
		  topics:{},

	  }
  },
    computed: {
	  getTopics(){
		  return this.$store.state.topics;
	  },

  },
    watch: {
	  'getTopics': ()=>{
 			return this.getTopics;
	  },

  },

  methods: {
	  backPage(){
		  const pageActive = parseInt(this.$route.query.page, 10) - 1;

		  if(parseInt(this.$route.query.page, 10) > 1){
			  this.fetchTopics(pageActive);
		  }
	  },
	  nextPage(){
		   const pageActive  = parseInt(this.$route.query.page, 10)  + 1;
		   this.fetchTopics(pageActive);
	  },
	  fetchTopics( pageActive = null){
		  	  const query = {
			  term: this.$route.query.term,
			  param: this.$route.query.param,
			  page : pageActive,

		  };
		   this.$store.dispatch('fetchTopics', query);
		   this.$router.push({query: Object.assign({}, this.$route.query, { term: this.$route.query.term, param: this.$route.query.param, page: pageActive }) })
	  },
	  resolveQueryString(){

	  if(this.$route.query.page && this.$route.query.term){
		  const query = {
			  term: this.$route.query.term,
			  param: this.$route.query.param,
			  page: this.$route.query.page,
		  }
		   this.$store.dispatch('fetchTopics', query);
	  	}
	  },

  },

  mounted(){
	    this.resolveQueryString();

  },

};
</script>
<style >
.error {
	display: block;

	max-height: 0;

	margin-right: 0;

	overflow: hidden;

	font-weight: 700;

	widows: 100%;

	text-align: center;

	color: #ffffff;

	background-color: red;

	transition: max-height 0.5s;
}
.error.active {
	max-height: 40px;
	min-height: 40px;

	padding-top: 1.25rem;

	transition: max-height 1s, min-height 1s;
}
.pagination ul {
	font-size: 0;

	list-style: none;

	-webkit-padding-start: 0;
}
.pagination ul li {
	display: inline-block;

	width: 50%;

	font-size: 1rem;

	box-sizing: border-box;
}
.pagination ul li a {
	text-decoration: none;
	text-transform: uppercase;

	color: #53a4b0;
}
.pagination ul li:first-child {
	padding-right: 1.25rem;

	text-align: right;
}
.pagination ul li:last-of-type {
	padding-left: 1.25rem;

	text-align: left;
}

</style>

