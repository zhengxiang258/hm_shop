<template>
	<view class="goods">
		<goods-list @goodsList="goGoodsItem" :goods="goods"></goods-list>
		
		<view class="end" v-if="flag">
			------我是有底线的------
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goodsList/goodsList'
	export default {
		components: {
			GoodsList
		},
		data() {
			return {
				pageIndex:1,
				goods:[],
				flag:false
			}
		},
		onLoad(){
			this.getList()
		},
		methods: {
			async getList(callback){
			  const res = await this.$myRequest({
					url:'/api/getgoods?pageindex='+ this.pageIndex
				})
				this.goods = [...this.goods,...res.data.message]
				// console.log(res)
				callback && callback()
			},
			
			//导航至商品详情页
			goGoodsItem(id){
				uni.navigateTo({
					url:"/pages/goods-item/goods-item?id="+id
				})
			}
		},
		onReachBottom(){
			// console.log("页面刷新了")
			if(this.goods.length < this.pageIndex*10) return this.flag = true
			this.pageIndex++;
			this.getList()
		},
		onPullDownRefresh(){
			// console.log("上拉书信")
			this.pageIndex = 1;
			this.goods = [];
			this.flag = false;
			setTimeout(()=>{
				this.getList(() => {
					uni.stopPullDownRefresh()
				})
			},1000)
		}
		
	}
</script>

<style>
.goods{
	background-color: #eee;
}
.end{
	text-align: center;
	padding: 20rpx;
}
</style>
