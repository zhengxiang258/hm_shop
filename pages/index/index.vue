<template>
	<view class="box">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>

		<!-- 导航 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view class="nav-img">
					<span :class="item.icon"></span>
				</view>
				<view>{{item.name}}</view>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="hotCom">
			<view class="hot_title">
				推荐商品
			</view>
			<goods-list @goodsList="goGoodsItem" :goods="goods"></goods-list>
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
				navs: [{
						icon: 'iconfont icon-ziyuan',
						name: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-ziyuan',
						name: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-ziyuan',
						name: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-ziyuan',
						name: '学习视频',
						path: '/pages/videos/videos'
					}
				],
				swipers: [],
				goods: []

			}
			

		},
		onLoad() {
			this.getSwipers()
			this.getList()
		},
		methods: {
			//获取轮播
			getSwipers() {
				this.$myRequest({
						url: '/api/getlunbo',
						method: 'GET'
					})
					.then(res => {
						this.swipers = res.data.message
					})
			},
			async getList() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1',
				})
				console.log(res)
				this.goods = res.data.message
			},

			//导航跳转
			navItemClick(url) {
				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			
			//导航至商品详情页
			goGoodsItem(id){
				uni.navigateTo({
					url:"/pages/goods-item/goods-item?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url('../../static/font_nav/iconfont.css');


	.box {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}



		.nav {
			display: flex;

			.nav-item {
				width: 25%;
				text-align: center;

				.nav-img {
					width: 120rpx;
					height: 120rpx;
					background-color: #b50e30;
					border-radius: 60rpx;
					line-height: 120rpx;
					margin: 10px auto;
					color: #fff;
					font-size: 45rpx;
				}

				.nav-text {
					font-size: 30rpx;
				}
			}
		}



		.hotCom {
			margin-top: 30rpx;
			background-color: #eee;
			overflow: hidden;

			.hot_title {
				color: $shop-color;
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
				font-size: 45rpx;
				background-color: #fff;
				margin: 10rpx 0;
				letter-spacing: 40rpx;
			}
		}
	}
</style>
