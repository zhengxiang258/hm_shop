<template>
	<view class="hot_list">
		<view class="hot_item" v-for="item in goods" @click="goodsListClick(item.id)" :key="item.id">
			<view class="hot_img">
				<!-- <image :src="item.img_url" mode=""></image> -->
				<image src="" mode=""></image>
			</view>
			<view class="hot_price">
				<span class="sell_price">￥{{item.sell_price}}</span>
				<span class="market_price">￥{{item.market_price}}</span>
			</view>
			<view class="hot_text">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		data() {
			return {

			}
		},
		methods: {
			goodsListClick(id){
				this.$emit('goodsList',id)
			}
		}
	}
</script>

<style lang="scss">
	.hot_list {
		display: flex;
		flex-wrap: wrap;

		.hot_item {
			background-color: #fff;
			// flex: 1;
			width: 42%;
			margin: 10rpx 0 8rpx 15rpx;
			padding: 20rpx;

			.hot_img {
				width: 200rpx;
				height: 300rpx;
				padding-left: 50%;
				transform: translateX(-100rpx);

				image {
					width: 100%;
					height: 100%;
					border: 1px solid red;
				}
			}

			.hot_price {
				margin-top: 10rpx;

				.sell_price {
					color: $shop-color;
				}

				.market_price {
					color: #ccc;
					font-size: 20rpx;
					margin-left: 20rpx;
					text-decoration: line-through;
				}
			}

			.hot_text {
				font-size: 30rpx;
				font-weight: 500;
			}
		}
	}
</style>
