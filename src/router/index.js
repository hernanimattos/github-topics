import Vue from "vue";
import Router from "vue-router";
import mainTopics from "../components/github-topics/main-topics.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "mainTopics",
      component: mainTopics,
      redirect: "/topics"
    }
  ]
});
export default router;
