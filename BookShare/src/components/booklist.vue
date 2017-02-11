<template>
	<div>
		<showbook v-for="book in books" :book='book'></showbook>
	</div>
</template>

<script>
	import showbook from './showbook.vue'
	export default{
		data(){
			return {
				data:null,
				books:[{
					bookname:'1',
					author:"wangtong"
				},{
					bookname:'2',
					author:"wangtong"
				},{
					bookname:'3',
					author:"wangtong"
				},{
					bookname:'4',
					author:"wangtong"
				},{
					bookname:'5',
					author:"wangtong"
				},{
					bookname:'6',
					author:"wangtong"
				},{
					bookname:'7',
					author:"wangtong"
				}]
			}
		},
		methods:{

		},
		components:{
			showbook
		},
		// props: ['data']
	}
</script>

<style>

</style>