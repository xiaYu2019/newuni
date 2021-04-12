<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="picture">
			<view class="caption">电商应用</view>
			<view class="describe">致力于为用户提供高性价比商品，省心省力的用户体验</view>
		</view>
		<view class="content_x">
			<view class="title">黑牛购</view>
			<view class="intro">黑牛购尊享会员卡是一张汇合了各主流电商的<text>优惠折扣、会员专属福利</text>的特权卡。从影音娱乐到美食餐饮，从超市购物到交通出行，覆盖日常生活的方方面面。与各大知名品牌合作，为会员提供超过<text>300项优惠特权</text>。</view>
			<image class="drawing" mode="widthFix" src="../../../static/business/dspic.png"></image>
			<button class="consultbt" size="mini" type="primary" >咨询合作</button>
		</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>


<style>
	.box {
		width: 100%;
		height: 100rpx;
	}

	.picture {
		box-sizing: border-box;
		height: 450rpx;
		background-image: url("../../../static/business/dirSir.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		padding: 120rpx 20rpx 100rpx 40rpx;
		color: #FFFFFF;
		text-align: center;
	}

	.picture .caption {
		font-size: 48rpx;
		font-weight: bold;
	}

	.picture .describe {
		padding-top: 20rpx;
		font-size: 24rpx;
		line-height: 38rpx;
	}

	.content_x {
		padding: 40rpx 100rpx 80rpx;
		width: 100%;
		text-align: center;
	}

	.content_x .title {
		text-align: center;
		font-size: 48rpx;
		font-weight: bold;
		color: #005FD5;
	}
	.content_x .intro{
		padding-top: 20rpx;
		font-size: 26rpx;
		line-height: 40rpx;
		text-align: justify;
	}
	.content_x .intro>text{
		color: #005FD5;
		font-size: 24rpx;
	}
	.content_x .drawing{
		width: 100%;
		padding-top: 40rpx;
		padding-bottom: 60rpx;
		font-size: 0;
		vertical-align: bottom;
	}
	.consultbt{
	}
</style>
