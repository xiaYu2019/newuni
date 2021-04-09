<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="picture">
			<view class="caption">卓动大数据精准营销平台</view>
			<view class="describe">用数字驱动销售，开启“互联网+”模式，打造一体化数字化营销智能服务平台,更有效地架构起供应商/经销商/代理商/消费者之间的沟通桥梁</view>
		</view>
		<view class="plight">
			<view class="caption_a">传统企业面临的困境</view>
			<image class="dilemma" mode="widthFix" src="../../../static/business/imgs.png"></image>
		</view>
		<view class="ability">
			<view class="title">我们的平台能做到</view>
			<image class="dilemma_i" mode="widthFix" src="../../../static/business/ability.png"></image>
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
		background-image: url("../../../static/business/bgd.png");
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

	.plight {
		padding-top: 60rpx;
		background-color: #fdf6f7;

	}

	.plight .caption_a {
		text-align: center;
		font-size: 40rpx;
		color: #000000;
		font-weight: bold;
	}

	.plight .dilemma {
		width: 100%;
		font-size: 0;
		vertical-align: bottom;
	}

	.ability {
		text-align: center;
		padding-top: 60rpx;
		background-color: #074e9c;
		padding-bottom: 40rpx;
	}
	.ability .title {
	    font-size: 40rpx;
	    color: #FFFFFF;
	    font-weight: bold;
		padding-bottom: 20rpx;
	}
	.ability .dilemma_i {
		width: 100%;
		font-size: 0;
		vertical-align: bottom;
	}
</style>
