<template>
	<view class="news">
		<news-item :list="newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	
	export default {
		components:{
			newsItem
		},
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			async getNewsList(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList = res.data.message
				console.log(res)
				
			},
			
			goDetail(id){
				uni.navigateTo({
					url:"/pages/detail-item/detail-item?id="+id
				})
			}
		},
		onLoad() {
			this.getNewsList()
		}
	}
</script>

<style lang="scss">
.news{
	
}
</style>
