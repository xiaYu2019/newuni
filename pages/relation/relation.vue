<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="bgimg">
			<view class="caption">联系我们</view>
			<view class="explain">一起去发现更多</view>
		</view>
		<view class="location">
			<view class="subhead">公司地址</view>
			<view class="site">娄底冷水江市沙塘湾街道办事处长铺路金橘医疗科技有限公司二楼</view>
			<button class="bt" type="primary" size="mini">获取地理位置</button>
		</view>
		<view class="phone">
			<view class="subtitle">联系方式</view>
			<view class="way"> 电话:020-37362993</view>
		</view>
		<view class="phone">
			<view class="subtitle">官网微信公众号</view>
			<image class="code" src="/static/qrcode.jpg" mode="widthFix"></image>
		</view>
		<view class="phone">
			<view class="subtitle">邮箱</view>
			<view class="way">招聘:hr@jodoinc.com</view>
			<view class="way">游戏:oversea@jodoinc.com</view>
			<view class="way">商务:bd@jodoinc.com</view>
		</view>
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
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

	.bgimg {
		box-sizing: border-box;
		height: 170rpx;
		background-image: url(../../static/storyImg/banner.png);
		background-repeat: no-repeat;
		background-size: contain;
		text-align: center;
		padding-top: 50rpx;
	}

	.caption {
		font-size: 40rpx;
		font-weight: bold;

	}

	.explain {
		font-size: 12rpx;
	}

	.location {
		text-align: center;
	}

	.subhead {
		padding: 50rpx 0;
		font-size: 48rpx;
	}

	.site {
		font-size: 10rpx;
		padding-bottom: 20rpx;
	}
	.bt{
		margin-bottom: 40rpx;
	}

	.phone {
		text-align: center;
		margin-bottom: 50rpx;
	}
	.subtitle{
		font-size: 48rpx;
		padding-bottom: 30rpx;
	}
	.code{
		width: 300rpx;
	}
</style>
