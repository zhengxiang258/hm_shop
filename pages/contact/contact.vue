<template>
	<view>
		<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.16pic.com%2F00%2F48%2F95%2F16pic_4895971_b.jpg&refer=http%3A%2F%2Fpic2.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622105497&t=dc431278fe8731c415581a74e653eb64" mode=""></image>
		<view class="phone" @click="phone">
			联系电话：13160211578(点击拨打)
		</view>
		<view class="address">
			家庭住址：江苏省连云港市赣榆区金山镇
		</view>
		
		<map :latitude="latitude" :longitude="longitude" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:119.074593,
				longitude:35.02558,
				scale:15
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:"13160211578"
				})
			}
		}
	}
</script>

<style>
image{
	width: 750rpx;
	height: 360rpx;
}
.phone{
	line-height: 100rpx;
	border-bottom: 1px solid #ccc;
	padding: 30rpx;
}
.address{
	line-height: 100rpx;
	border-bottom: 1px solid #ccc;
	padding: 30rpx;
}
map{
	width: 750rpx;
	height: 520rpx;
}
</style>
