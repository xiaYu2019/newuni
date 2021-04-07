<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="picture">
			<view class="title">面向全球的互联网服务提供商</view>
			<view class="text">
				<text>业务多元化</text>
				<text>|</text>
				<text>服务定制化</text>
				<text>|</text>
				<text>市场全球化</text>
			</view>
		</view>
		<view class="plate">
			<view class="caption">
				以卓越之心 做动人之事
			</view>
			<view class="presentation">广州卓动信息科技有限公司，深耕于游戏发行、游戏研发、电商应用、工具应用、企业服务等多领域；</view>
			<view class="presentation">业务已覆盖至全球70多个国家，并将在更多领域中持续探索。</view>
			<view class="bt"> 卓动故事>></view>
		</view>
		<view class="business">
			<view class="caption">
				我们的业务
			</view>
			<view class="presentation">卓动秉持“多元化、合作、共赢”的经营理念，致力于成为全球领先的互联网服务提供商。</view>
			<view class="nape">
				<view class="brief">
					<view class="figure">01</view>
					<view class="subtitle">大数据和人工智能业务</view>
					<text>高性能的用户画像查询和探索，AB效果追踪，有效解决商户面临的营销效能低及商家洞察弱等行业痛点，打造海量个性化营销方案</text>
				</view>
				<view class="brief">
					<view class="figure">01</view>
					<view class="subtitle">大数据和人工智能业务</view>
					<text>高性能的用户画像查询和探索，AB效果追踪，有效解决商户面临的营销效能低及商家洞察弱等行业痛点，打造海量个性化营销方案</text>
				</view>
				<view class="brief">
					<view class="figure">01</view>
					<view class="subtitle">大数据和人工智能业务</view>
					<text>高性能的用户画像查询和探索，AB效果追踪，有效解决商户面临的营销效能低及商家洞察弱等行业痛点，打造海量个性化营销方案</text>
				</view>
				<view class="brief">
					<view class="figure">01</view>
					<view class="subtitle">大数据和人工智能业务</view>
					<text>高性能的用户画像查询和探索，AB效果追踪，有效解决商户面临的营销效能低及商家洞察弱等行业痛点，打造海量个性化营销方案</text>
				</view>
			</view>
		</view>
		<view class="advantage">
			<view class="caption">
				我们的优势
			</view>
			<view class="presentation">只有创新和坚持，才能取得成功</view>
			<view class="list">
				<view class="kind">
					<image class="tu" src="../../static/advantage-1.png" mode=""></image>
					<view class="subtitle">丰富的海外经验</view>
					<view class="text">多年互联网行业积累</view>
					<view class="text">海外经验沉淀丰富</view>
				</view>
				<view class="kind">
					<image class="tu" src="../../static/advantage-1.png" mode="aspectFit"></image>
					<view class="subtitle">丰富的海外经验</view>
					<view class="text">多年互联网行业积累</view>
					<view class="text">海外经验沉淀丰富</view>
				</view>
				<view class="kind">
					<image class="tu" src="../../static/advantage-1.png" mode="aspectFit"></image>
					<view class="subtitle">丰富的海外经验</view>
					<view class="text">多年互联网行业积累</view>
					<view class="text">海外经验沉淀丰富</view>
				</view>
				<view class="kind">
					<image class="tu" src="../../static/advantage-1.png" mode="aspectFit"></image>
					<view class="subtitle">丰富的海外经验</view>
					<view class="text">多年互联网行业积累</view>
					<view class="text">海外经验沉淀丰富</view>
				</view>
				<view class="kind">
					<image class="tu" src="../../static/advantage-1.png" mode="aspectFit"></image>
					<view class="subtitle">丰富的海外经验</view>
					<view class="text">多年互联网行业积累</view>
					<view class="text">海外经验沉淀丰富</view>
				</view>
			</view>
		</view>
		<view class="dynamic">
			<view class="caption">
				最新动态
			</view>
			<u-swiper :list="list" :effect3d="true"></u-swiper>
			<button class="morebt" size="mini" type="primary" plain="true">更多动态</button>
		</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// checked: false,
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
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
		width: 100%;
		height: 378rpx;
		box-sizing: border-box;
		padding-top: 130rpx;
		background-image: url(../../static/banner.jpg);
		background-size: contain;
		background-repeat: no-repeat;
	}

	.picture .title {
		font-size: 48rpx;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
	}

	.picture .text {
		text-align: center;
		margin-top: 16rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}

	.picture .text text {
		display: inline-block;
		margin-left: 10rpx;
	}

	.plate {
		width: 100%;
		height: 600rpx;
		box-sizing: border-box;
		padding: 60rpx 48rpx;
		background-color: #f7f7f7;
		background-image: url(../../static/ditu.png);
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: center bottom;
		text-align: center;
	}

	.plate .caption {
		margin-bottom: 18rpx;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}

	.plate .presentation {
		text-align: center;
		font-size: 24rpx;
		line-height: 35rpx;
	}

	.plate .bt {
		display: inline-block;
		margin-top: 22rpx;
		width: 240rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 10rpx;
		background-color: #005FD5;
		color: #FFFFFF;
		font-size: 30rpx;
		text-align: center;
	}

	.business {
		width: 100%;
		box-sizing: border-box;
		padding-top: 60rpx;
	}

	.business .caption {
		margin-bottom: 18rpx;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}

	.business .presentation {
		margin: 0 48rpx;
		text-align: center;
		font-size: 24rpx;
		line-height: 35rpx;
	}

	.business .nape {
		margin-top: 40rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.business .nape .brief {
		width: 50%;
		height: 480rpx;
		box-sizing: border-box;
		padding: 50rpx 30rpx;
		color: #FFFFFF;
	}

	.business .nape .brief:nth-child(1) {
		background-image: url(../../static/01.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.business .nape .brief:nth-child(2) {
		background-image: url(../../static/02.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.business .nape .brief:nth-child(3) {
		background-image: url(../../static/03.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.business .nape .brief:nth-child(4) {
		background-image: url(../../static/04.png);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.business .nape .brief .figure {
		font-size: 30rpx;
	}

	.business .nape .brief .subtitle {
		margin-top: 10rpx;
		margin-bottom: 45rpx;
		font-size: 30rpx;
		font-weight: bold;
	}

	.business .nape .brief>text {
		font-size: 24rpx;
	}

	.advantage {
		width: 100%;
		box-sizing: border-box;
		padding: 60rpx 48rpx;
		background-color: #F7F7F7;
	}

	.advantage .caption {
		margin-bottom: 18rpx;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}

	.advantage .presentation {
		text-align: center;
		font-size: 24rpx;
		line-height: 35rpx;
	}

	.advantage .list {
		margin-top: 40rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

	}

	.advantage .list .kind {
		width: 49%;
		margin-top: 14rpx;
		text-align: center;
		background-color: #FFFFFF;
		padding-bottom: 50rpx;
	}

	.tu{
		padding-top: 60rpx;
		padding-bottom: 20rpx;
		width: 100rpx;
		height: 100rpx;
	}
	.advantage .list .kind .subtitle {
		margin-bottom: 10rpx;
		font-size: 34rpx;
		font-weight: bold;
	}

	.dynamic {
		width: 100%;
		padding-top: 40rpx;
		padding-bottom: 80rpx;
		text-align: center;
	}

	.dynamic .caption {
		margin-bottom: 18rpx;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}
	.dynamic .morebt{
		margin-top: 40rpx;
	}
</style>
