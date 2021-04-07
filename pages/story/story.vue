<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="bgimg">
			<view class="caption">卓动故事</view>
			<view class="explain">卓越之心-动人之事</view>
		</view>
		<view class="intro">
			<view class="caption_a">卓动科技</view>
			<view class="explain_a">广州卓动信息科技有限公司，深耕于游戏发行、游戏研发、电商应用、工具应用、企业服务等多领域</view>
			<view class="explain_a">从游戏出海起家到多项目、多业务、多领域并行，卓动已将业务覆盖至全球70多个国家，
				并在更多的业务领域中，持续探索。未来，卓动作为互联网行业的领先者与探索者，将秉持着“多元、合作、共赢”的经营理念，致力于成为全球领先的互联网服务供应商。</view>
			<view class="exhibition">
				<image class="icon1" src="../../static/storyImg/icon1.png"></image>
				<image class="icon2" src="../../static/storyImg/icon2.png"></image>
				<image class="icon3" src="../../static/storyImg/icon3.png"></image>
				<image class="icon4" src="../../static/storyImg/icon4.png"></image>
				<button class="circle circle_a" size="mini" type="primary">电商应用</button>
				<button class="circle circle_b" size="mini" type="primary">游戏发行</button>
				<button class="circle circle_c" size="mini" type="primary">工具应用</button>
				<button class="circle circle_d" size="mini" type="primary">电商应用</button>
				<button class="circle circle_e" size="mini" type="primary">游戏研发</button>
			</view>
		</view>
		<view class="team">
			<view class="caption_a">卓动始终感恩和你在一起</view>
			<view class="explain_a">没有一家公司的成功仅仅靠的是一个人,感恩我们的团队,让我们在为梦想狂奔的路上,互相扶持与学习一同成长并蜕变</view>
			<view class="member">
				<view class="person">
					<image class="picture" mode="widthFix" src="../../static/storyImg/pic1.png"></image>
					<view class="name">杨世挺 Max</view>
					<view class="post">合伙人-董事</view>
				</view>
				<view class="person">
					<image class="picture" mode="widthFix" src="../../static/storyImg/pic1.png"></image>
					<view class="name">杨世挺 Max</view>
					<view class="post">合伙人-董事</view>
				</view>
				<view class="person">
					<image class="picture" mode="widthFix" src="../../static/storyImg/pic1.png"></image>
					<view class="name">杨世挺 Max</view>
					<view class="post">合伙人-董事</view>
				</view>
				<view class="person">
					<image class="picture" mode="widthFix" src="../../static/storyImg/pic1.png"></image>
					<view class="name">杨世挺 Max</view>
					<view class="post">合伙人-董事</view>
				</view>
			</view>
		</view>
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

	.bgimg {
		box-sizing: border-box;
		height: 170rpx;
		background-image: url(../../static/storyImg/banner.png);
		background-repeat: no-repeat;
		background-size: contain;
		text-align: center;
		padding-top: 50rpx;
	}

	.bgimg .caption {
		font-size: 40rpx;
		font-weight: bold;

	}

	.bgimg .explain {
		font-size: 12rpx;
	}

	.intro {
		padding: 40rpx 60rpx 60rpx;
		background-image: url(../../static/storyImg/bg.png);
		background-repeat: no-repeat;
		background-size: cover;
		font-size: 24rpx;
		color: #FFFFFF;
	}

	.intro .caption_a {
		text-align: center;
		font-size: 40rpx;
		font-weight: bold;
	}

	.intro .explain_a {
		padding-top: 10rpx;
	}

	.intro .exhibition {
		height: 500rpx;
		background-image: url(../../static/storyImg/circle.png);
		background-repeat: no-repeat;
		background-size: 70%;
		background-position: center;
		position: relative;
	}

	.intro .exhibition .icon1 {
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		left: 240rpx;
		top: 156rpx;
	}

	.intro .exhibition .icon2 {
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		left: 320rpx;
		top: 186rpx;
	}

	.intro .exhibition .icon3 {
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		left: 240rpx;
		top: 246rpx;
	}

	.intro .exhibition .icon4 {
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		left: 320rpx;
		top: 276rpx;
	}

	.intro .exhibition .circle {
		width: 180rpx;
		height: 60rpx;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.intro .exhibition .circle_a {
		animation: action 20s linear infinite;
	}

	.intro .exhibition .circle_b {
		animation: action 20s linear infinite;
		animation-delay: -4s;
	}

	.intro .exhibition .circle_c {
		animation: action 20s linear infinite;
		animation-delay: -8s;
	}

	.intro .exhibition .circle_d {
		animation: action 20s linear infinite;
		animation-delay: -12s;
	}

	.intro .exhibition .circle_e {
		animation: action 20s linear infinite;
		animation-delay: -16s;
		clear: both
	}

	@keyframes action {
		from {
			transform: rotate(0deg) translate(120%) rotate(0deg);
		}

		to {
			transform: rotate(360deg) translate(120%) rotate(-360deg);
		}
	}
	
	.team {
		padding: 40rpx 60rpx 0;
		background-color:#005FD5;
		font-size: 24rpx;
		color: #FFFFFF;
	}
	
	.team .caption_a {
		text-align: center;
		font-size: 40rpx;
		font-weight: bold;
	}
	
	.team .explain_a {
		padding-top: 10rpx;
	}
	.team .member{
		padding: 40rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.team .person{
		width: 35%;
		padding-bottom: 40rpx;
		text-align: center;
	}
	.team .person .picture{
		width: 100%;
	}
	.team .person .name{
		padding: 10rpx 0;
	}
</style>
