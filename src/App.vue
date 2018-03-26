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
html{

box-sizing: border-box;


}
body{
	font-size: 1em;
	font-family: 'Montserrat', sans-serif;
	position: relative;
	line-height: 1.25em;
	padding-left: 1.25em;
	padding-right: 1.25em;
}
h1{
	color: black !important;
}




</style>
