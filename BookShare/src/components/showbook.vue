<template>
<template>
	<div class="e-book">
		<span class="bookname">{{book.bookname}}</span>
		<hr>
		<span class="bookauthor">{{book.author}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				data:null
			}
		},
		props:[
			'book'
		]
	}
</script>

<style>
	.e-book{
		width:200px;
		height:250px;
		border:1px solid gray;
		box-shadow: -2px 0 2px rgba(0, 0, 0, 0.3),0 -2px 2px rgba(0, 0, 0, 0.3),0 2px 2px rgba(0, 0, 0, 0.3),2px 0 2px rgba(0, 0, 0, 0.3);
		border-radius: 4px;
		margin:10px;
		margin-left:30px;
		display: inline-block;
	}
	.bookauthor{

	}
</style>