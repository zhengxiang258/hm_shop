<template>
	<view>
		<view class="detail-content" v-for="item in detailList" :key="item.id">
			<view class="detail-title">
				{{item.title}}
			</view>
			<view class="detail-info">
				<text>发表时间：{{item.add_time | forDate}}</text>
				<text>浏览：{{item.click}}</text>
			</view>
			<view class="detail-content">
				<rich-text :nodes="item.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detailList:[]
			}
		},
		methods: {
			async getDetail(){
				const res = await this.$myRequest({
					url:"/api/getnew/" + this.id
				})
				this.detailList = res.data.message
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getDetail()
		}
	}
</script>

<style lang="scss">
.detail-content{
	padding: 20rpx;
	.detail-title{
		text-align: center;
		font-size: 36rpx;
		font-weight: bold;
	}
	.detail-info{
		font-size: 35rpx;
		display: flex;
		justify-content: space-between;
	}
	.detail-content{
		
	}
}
</style>
