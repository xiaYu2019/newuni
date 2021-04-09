<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="picture">
			<view class="caption">软件服务</view>
			<view class="describe">为用户提供各种工具类应用产品和休闲娱乐类产品</view>
		</view>
		<view class="content_x">
			<view class="title">卓动产品</view>
			<view class="intro">产品发行于海内外，目前拥有<text>10</text>多款移动产品，总下载量超过两百万，用户涵盖<text>100</text>多个国家及地区、<text>5</text>种主流语言版本，其中大部分来自欧美为主的海外市场</view>
			<view class="intro">产品包括一系列手机工具应用，如<text>CLEAN TOOL、CAMERAL、PHOTO EDITOR</text>等， 为全球用户提供更高效、更便捷、更具个性化的手机操控体验。</view>
			<image class="drawing" mode="widthFix" src="../../../static/business/picy1.png"></image>
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
		background-image: url("../../../static/business/softwbg.png");
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
