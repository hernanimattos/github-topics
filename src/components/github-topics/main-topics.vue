<template>
	<section>
		<searchTopics></searchTopics>
		<listTopics v-for="topic in getTopics.items" :key="topic.id" :topic-data="topic" class=""></listTopics>
		<div class="pagination" v-if="(getTopics.total_count> 0)">
			<a href="" @click.prevent="nextPage()">More</a>
		</div>
	</section>
</template>

<script>
import listTopics from "./list-topics.vue";
import searchTopics from "./search-topics.vue";

export default {
  components: {
    listTopics,
    searchTopics
  },
  name: "main-topics",
  data() {
    return {
      topics: {}
    };
  },
  computed: {
    getTopics() {
      return this.$store.state.topics;
    }
  },
  watch: {
    getTopics: () => {
      return this.getTopics;
    }
  },
  methods: {
    nextPage() {

      const pageActive = parseInt(this.$route.query.page, 10) + 1;
      const perPage = parseInt(this.$route.query.per_page, 10) + 5;
	  this.fetchTopics(pageActive, perPage);

	},

    fetchTopics(pageActive = null, perPage = null) {
      const query = {
        term: this.$route.query.term,
        param: this.$route.query.param,
        page: pageActive,
        per_page: perPage
      };

      this.$store.dispatch("fetchTopics", query);

      this.$router.push({
        query: Object.assign({}, this.$route.query, {
          term: this.$route.query.term,
          param: this.$route.query.param,
          page: pageActive,
          per_page: perPage
        })
      });
    },
    resolveQueryString() {
      if (this.$route.query.page && this.$route.query.term) {
        const query = {
          term: this.$route.query.term,
          param: this.$route.query.param,
          page: this.$route.query.page,
          per_page: this.$route.query.per_page
        };
        this.$store.dispatch("fetchTopics", query);
      }
    },
    infinity(){
      this.$nextTick(()=>{
        window.addEventListener('scroll', ()=>{
            const windowScroll = window.scrollY;
                const documentHeight = document.body.clientHeight;
                const windowHeght = window.innerHeight;
                if(windowScroll == documentHeight - windowHeght ){
                  this.nextPage();
                }
        })
      });
    },
  },

  mounted() {
    this.resolveQueryString();
    this.infinity();
  }
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

.pagination a {
	display: block;

	width: 20px;

	padding: 20px 0 20px 0;
	margin: 0 auto;

	text-decoration: none;
	text-transform: uppercase;

	color: #53a4b0;
}

</style>

