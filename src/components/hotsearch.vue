<template>
  <div class="wrap_hotsearch"  id="app">
	<div class="hotsearch_main">
	  <div ui-view class="hots_main">
		<h6>热门搜索</h6>
		<ul>
		  <li v-for="classdata in class_names" @click="hotsearch.public({public_id:classdata.id})">{{classdata.class_name}}<b class="fa fa-check-circle"></b></li>
		</ul>
	  </div>
	</div>
	<div class="search_footer">
	  <img src="../../static/images/return.png">
	</div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>

</style>


