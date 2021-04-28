<template>
	<view class="pics">
		<scroll-view scroll-y="true" >
			<view :class="active===index ? 'active':''" 
					v-for="(item,index) in cates"
					@click="activeClick(index,item.id)"
					:key="index">{{item.title}}</view>
		</scroll-view>
		
		<view class="right">
			<view class="right-item" v-for="item in secondData" :key="item.id">
				<!-- <image :src="item.img_url" mode=""></image> -->
				<image src="" mode="" @click="previewImg"></image>
				<text>{{item.title}}</text>
			</view>
			<view v-if="secondData.length === 0">
				暂无数据
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				secondData:[]
			}
		},
		methods: {
			async getCates(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory',
					method:'GET'
				})
				this.cates = res.data.message;
			},
			
			async activeClick(index,id){
				this.active = index
				const res = await this.$myRequest({
					url:'/api/getimages/'+id
				})
				// console.log(res)
				this.secondData = res.data.message
			},
			//预览图片
			previewImg(){
				const urls =  this.secondData.map(item => {
					return item.img_url
				})
				uni.previewImage({
					urls
				})
			}
		},
		onLoad() {
			this.getCates()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
.pics{
	height: 100%;
	scroll-view{
		position: fixed;
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #ccc;
		view{
			width: 200rpx;
			height: 150rpx;
			text-align: center;
			line-height: 150rpx;
			border-bottom:1px solid #ccc ;
		}
	}
	.active{
		color: #fff;
		background-color: $shop-color;
	}
	
	.right{
		position: absolute;
		right: 15rpx;
		top: 0;
		width: 65%;
		padding: 20rpx;
		.right-item{
			margin-bottom: 20rpx;
			image{
				width: 100%;
				height: 375rpx;
				border-radius: 20rpx;
				border: 1px solid red;
			}
			text{
				
			}
		}
	}
	
}


</style>
