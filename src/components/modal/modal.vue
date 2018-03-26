<template>
<section class="wrapper-modal" :class="{ active: showData}" >
			<div class="container-modal" >
				<div class="modal">
					<header>
						<span class="close" @click="close()">X</span>
					</header>
					<article class="modal-content">
						<h2 v-text="(topic.display_name) ? topic.display_name : 'No have data'"></h2>
						<h4>Descripition</h4>
					<p v-text="(topic.description) ? topic.description : 'No have data'">{{topic.description}}</p>
					</article>
				</div>
			</div>
		</section>
</template>

<script>
export default {
  name:'modal',
  data () {
	  return {

	  }
  },

  props: {
	  showData: {
	  type: Boolean,
	  required: true,
	  default: false,
	  },
	  topic: {
		  type: [Object, String],
		  required:true,
	  },
  },

  methods: {
	  close(){

		  this.$emit('close', !this.showData)
	  },

  },
};

</script>
<style>
.wrapper-modal {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	display: none;
	z-index: 1;

	width: 100%;
	min-height: 100vh;

	font-size: 1rem;

	background-color: rgb(0, 0, 0, 0.7);
}
.wrapper-modal.active {
	display: block;
}

.modal {
	position: relative;
	top: 10rem;

	width: 80%;
	min-height: 200px;

	margin: auto;

	background-color: #ffffff;
}d
.modal-content,
.modal header {
	padding-top: 0.5em;
	padding-right: 0.5em;
	padding-bottom: 0.5em;
	padding-left: 0.5em;
}
.modal header {
	text-align: right;

	color: #ffffff;

	background-color: blueviolet;

	border-bottom: 1px solid #cccccc;
}
.modal header .close {
	cursor: pointer;
}

</style>

