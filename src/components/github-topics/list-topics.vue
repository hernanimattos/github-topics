
<template>
<div class="topic">
		<section class="topic-list" @click="modalActive">
		<article class="topic-wrapper">
			<header>
				<h3> {{topicData.name}}</h3>
			</header>
			<article class="topic-content">
				<p v-text="(topicData.short_description) ? topicData.short_description: 'No have data'"></p>

			</article>
			<footer>
				<div class="topic-footer-text">
					<h5>Creator</h5>
					<p v-text="(topicData.created_by) ? topicData.created_by: 'No have data'"></p>
				</div>
				<div class="topic-footer-text">
					<h5>Score</h5>
					<p v-text="(topicData.score) ? topicData.score: 'No have data'"></p>
				</div>
			</footer>
		</article>

	</section>
		<modal :topic="topic" :show-data="active" @close="active = $event">

		</modal>


</div>

</template>
<script>
import modal from "../modal/modal.vue";

export default {
  components: {
    modal
  },
  name: "list-topics",
  data() {
    return {
      active: false,
      topic: {}
    };
  },
  props: {
    topicData: {
      type: Object,
      required: false
    }
  },
  methods: {
    modalActive() {
      this.active = true;
      this.topic = this.topicData;
    }
  }
};
</script>
<style>


.topic {
	font-size: 0;

	vertical-align: top;

	cursor: pointer;

	box-sizing: border-box;
}

@media  (min-width: 768px) {
	.topic {
		display: inline-block;

		width: 50%;
	}
}

.topic-list {
	min-height: 2.5em;

	padding: 1rem;

	font-size: 1rem;
}
.topic-list > .topic-wrapper {
	padding: 1.25em;

	transform: scale(1);

	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

	transition: background-color 1s;
	transition: transform 1s;
}
.topic:hover .topic-list > .topic-wrapper {
	color: #ffffff;

	background-color: #53a4b0;

	transform: scale(1.1);

	transition: transform 1s;
}

.topic-list footer {
	font-size: 0;
}
.topic-list footer * {
	font-size: 1rem;
}
.topic-list footer .topic-footer-text {
	display: inline-block;

	width: 50%;

	vertical-align: top;
}
.topic-list footer .topic-footer-text:last-of-type {
	text-align: right;
}

</style>


