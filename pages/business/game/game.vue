<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="cartoon">
			<video class="mp4" autoplay="true" loop="true" controls="false" show-center-play-btn="false" show-play-btn="false"  show-loading="false" src="/static/mp4/jodo-game.mp4"    object-fit="fill" ></video>
			<view class="caption">游戏产品</view>
			<view class="describe">卓动与世界一起游戏</view>
		</view>
		<view class="principal">
			<view class="title">游戏简介</view>
			<view class="item">
				<view class="left_t">
					<view class="subtitle">Idle Cook <text><研发游戏></text></view>
					<view class="word">《Idle Cook》是一款极为有趣的放置经营类美食游戏。在这里，你将经营自己的美食帝国！从点击食谱并卖出第一份美食开始，你将停不下来！探索新的食谱</view>
					<button class="bt" type="primary" size="mini" >探索更多</button>
				</view>
				<image class="picture" src="/static/business/iconyx1.png"></image>
			</view>
			<view class="item">
				<image class="picture" src="/static/business/iconxy2.png"></image>
				<view class="left_t">
					<view class="subtitle">海岛新时代<text><发行游戏></text></view>
					<view class="word">《Idle Cook》是一款极为有趣的放置经营类美食游戏。在这里，你将经营自己的美食帝国！从点击食谱并卖出第一份美食开始，你将停不下来！探索新的食谱</view>
					<button class="bt" type="primary" size="mini" >探索更多</button>
				</view>
			</view>
			<view class="item">
				<view class="left_t">
					<view class="subtitle">Idle Cook <text><研发游戏></text></view>
					<view class="word">《Idle Cook》是一款极为有趣的放置经营类美食游戏。在这里，你将经营自己的美食帝国！从点击食谱并卖出第一份美食开始，你将停不下来！探索新的食谱</view>
					<button class="bt" type="primary" size="mini" >探索更多</button>
				</view>
				<image class="picture" src="/static/business/iconyx1.png"></image>
			</view>
			<view class="item">
				<image class="picture" src="/static/business/iconxy2.png"></image>
				<view class="left_t">
					<view class="subtitle">海岛新时代<text><发行游戏></text></view>
					<view class="word">《Idle Cook》是一款极为有趣的放置经营类美食游戏。在这里，你将经营自己的美食帝国！从点击食谱并卖出第一份美食开始，你将停不下来！探索新的食谱</view>
					<button class="bt" type="primary" size="mini" >探索更多</button>
				</view>
			</view>
			<view class="item">
				<view class="left_t">
					<view class="subtitle">Idle Cook <text><研发游戏></text></view>
					<view class="word">《Idle Cook》是一款极为有趣的放置经营类美食游戏。在这里，你将经营自己的美食帝国！从点击食谱并卖出第一份美食开始，你将停不下来！探索新的食谱</view>
					<button class="bt" type="primary" size="mini" >探索更多</button>
				</view>
				<image class="picture" src="/static/business/iconyx1.png"></image>
			</view>
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

	.cartoon {
		width: 100%;
		position: relative;
	}

	.mp4 {
		width: 100%;
		height: 500rpx;
	}
	.caption{
		font-size: 48rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		top: 30%;
		left: 40%;
	}
	.describe{
		font-size: 24rpx;
		color: #FFFFFF;
		font-weight: bold;
		position: absolute;
		top: 50%;
		left: 38%;
	}
	.principal{
		width: 100%;
		padding: 40rpx 0 ;
	}
	.title{
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}
	.item{
		display: flex;
		justify-content: space-between;
		align-items:center;
		padding: 20rpx 60rpx;
	}
	.item:nth-child(odd){
		background-color: #F7F7F7;
	}
	.left_t{
		width: 60%;
	}
	.subtitle{
		font-weight: bold;
		color: #005FD5;
	}
	.subtitle>text{
		font-weight: 100;
	}
	.word{
		padding-bottom: 20rpx;
		font-size: 14rpx;
		line-height: 32rpx;
	}
	.bt{
	}
	.picture{
		width: 200rpx;
		height: 200rpx;
	}
</style>
