<template>
	<view>
		<view class="news-item" v-for="item in list" :key="item.id" @click="itemClick(item.id)">
			<view class="news-img">
				<!-- <image :src="item.img_url" mode=""></image> -->
				<image src="" mode=""></image>
			</view>
			<view class="news-content">
				<view class="news-title">
					{{item.title}}
				</view>
				<view class="news-time">
					<text>发表时间：{{item.add_time | forDate}}</text>
					<text class="liulan">浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		filters:{
			forDate(date){
				const nDate = new Date(date)
				const y = nDate.getFullYear()
				const m = nDate.getMonth().toString().padStart(2,0)
				const d = nDate.getDay().toString().padStart(2,0)
				return y+'-'+m+'-'+d
			}
		},
		props:['list'],
		data() {
			return {
				
			};
		},
		methods:{
			itemClick(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news-item {
		border-bottom: 1px solid $shop-color;
		display: flex;
		padding: 20rpx;

		.news-img {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
			border: 1px solid pink;
		}

		.news-content {

			margin-left: 20rpx;

			.news-title {
				font-size: 35rpx;
			}

			.news-time {
				margin-top: 30rpx;
				font-size: 30rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
