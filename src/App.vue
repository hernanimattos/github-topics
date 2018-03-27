<template>
  <div id="app">
	  <main-topics></main-topics>
  </div>
</template>
<script>

import mainTopics from
"./components/github-topics/main-topics.vue";
export default {
	components: {
		mainTopics,
	},
  name: 'app',
};
</script>

<style >
html {
	box-sizing: border-box;
}
body {
	position: relative;

	padding-right: 1.25em;
	padding-left: 1.25em;

	font-size: 1em;
	line-height: 1.25em;
	font-family: 'Montserrat', sans-serif;

	color: black !important;
}

</style>
