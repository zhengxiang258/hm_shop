<template>
	<view class="goods-item">
		<swiper>
			<swiper-item>
				<!-- <image src="" mode="" alt="轮播图"></image> -->
				轮播图
			</swiper-item>
		</swiper>

		<view class="goods_price">
			<view class="price">
				<text class="new">￥{{info.sell_price}}</text>
				<text class="old">￥{{info.market_price}}</text>
			</view>
			<view class="phone">
				{{info.title}}
			</view>
		</view>
		<view class="goods_stock">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<view class="gods_content">
			<rich-text :nodes="desc.content"></rich-text>
		</view>

		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'

	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				id: 0,
				swiperList: [],
				info: [],
				desc: [],
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 1
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getSwiper() {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + this.id
				})
				this.swiperList = res.data.message
			},

			async getInfo() {
				const res = await this.$myRequest({
					url: '/api/goods/getinfo/' + this.id
				})
				this.info = res.data.message[0]
			},

			async getDesc() {
				const res = await this.$myRequest({
					url: '/api/goods/getdesc/' + this.id
				})
				this.desc = res.data.message[0]
			},

			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwiper()
			this.getInfo()
			this.getDesc()
		}
	}
</script>

<style lang="scss">
	.goods-item {
		background-color: #eee;
		overflow: hidden;
		swiper {
			border: 1px solid red;

			swiper-item {
				border: 1px solid red;
				height: 375rpx;
				background-color: #fff;

				image {
					width: 100%;
					height: 100%;

				}
			}
		}

		.goods_price {
			background-color: #fff;
			padding: 20rpx;
			line-height: 60rpx;

			.price {
				.new {
					color: $shop-color;
				}

				.old {
					color: #ccc;
					text-decoration: line-through;
					margin-left: 30rpx;
					font-size: 30rpx;
				}
			}

			.phone {
				margin: 15rpx 0;
				font-size: 36rpx;
			}
		}

		.goods_stock {
			background-color: #fff;
			margin: 16rpx 0;
			padding: 20rpx;
			line-height: 70rpx;
		}

		.gods_content {
			background-color: #fff;
			padding: 20rpx;

			line-height: 60rpx;
			margin-bottom: 100rpx;
		}
		
		.goods_nav{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
		}
	}
</style>
