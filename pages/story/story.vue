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
		<view class="honor">
			<view class="caption_b">卓动荣誉</view>
			<view class="explain_b">卓动的每一次成长和蜕变，都离不开每一位风雨兼程使命必达的卓动人</view>
			<u-swiper :list="list" :effect3d="true"></u-swiper>
		</view>
		<view class="course">
			<view class="caption_c">卓动历程与革新</view>
			<view class="process">
				<view class="imgbox">
					<view class="imgs imgs_a pic_a"></view>
					<view class="imgs imgs_b pic_b"></view>
					<view class="imgs imgs_c pic_a"></view>
					<view class="imgs imgs_d pic_b"></view>
					<view class="imgs imgs_e pic_a"></view>
					<view class="imgs imgs_f pic_b"></view>
				</view>
			</view>
			<view class="frame framep_a">
				<view class="year">2013年</view>
				<text>2013年9月JODO正式成立</text>
			</view>
			<view class="frame framep_b">
				<view class="year">2015年</view>
				<text>2015年9月优秀产品展露头角</text>
			</view>
			<view class="frame framep_c">
				<view class="year">2016年</view>
				<text>2016年8月无融资计划，以自身盈利发展壮大，运营状况良好。</text>
			</view>
			<view class="frame framep_d">
				<view class="year">2017年</view>
				<text>2017年8月获阿里游戏生态晚会最佳出海游戏奖奖项</text>
			</view>
			<view class="frame framep_e">
				<view class="year">2018年</view>
				<text>2018年1月首款自研自发手游Super Hospital上线。</text>
			</view>
			<view class="frame framep_f">
				<view class="year">2019年</view>
				<text>2019年认定为技术先进型服务企业</text>
				<text>2019年1月自研自发游戏《Idle Cook》获得苹果首页推荐</text>
			</view>
			<view class="frame framep_g">
				<view class="year">2019年</view>
				<text>2019年评为广州市服务贸易重点培育企业</text>
				<text>2019年5月成立Superera轻游戏发行品牌，拓展了上百家全球的轻游戏研发商</text>
			</view>
		</view>
		<view class="future">2020年，探索多元化企业业务....</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				anchor: null,
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
		onLoad(options) {
			if (options) {
				// this.anchor = options.anchor;
			}

		},
		onReady() {


		},
		methods: {

		},
		onShow() {

		},
		mounted() {
			// let query = uni.createSelectorQuery();
			// // query.select(`.${this.anchor}`).boundingClientRect( (res) => {
			// // 	console.log(res)
			// // 	uni.pageScrollTo({
			// // 	    scrollTop: res.top,
			// // 	    duration: 300
			// // 	});
			// // }).exec()
			// // query.select(`.${this.anchor}`).boundingClientRect((res) => {
			// // 	console.log(res)
			// // 	uni.pageScrollTo({
			// // 		scrollTop: res.top,
			// // 		duration: 300
			// // 	});
			// // }).exec(),
			// query.select(`.${this.anchor}`).fields({dataset:true,rect:true,size:true},(res) => {
			// 	console.log(res)
			// 	uni.pageScrollTo({
			// 		scrollTop: res.top,
			// 		duration: 300
			// 	});
			// }).exec()
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
		background-color: #005FD5;
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

	.team .member {
		padding: 40rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.team .person {
		width: 35%;
		padding-bottom: 40rpx;
		text-align: center;
	}

	.team .person .picture {
		width: 100%;
	}

	.team .person .name {
		padding: 10rpx 0;
	}

	.honor {
		padding: 40rpx 0 60rpx;
		font-size: 28rpx;
		color: #000000;
		text-align: center;
	}

	.honor .caption_b {
		font-size: 40rpx;
		font-weight: bold;
	}

	.honor .explain_b {
		padding: 10rpx 60rpx 60rpx;
	}

	.course {
		padding: 60rpx 0 0rpx;
		font-size: 28rpx;
		color: #000000;
		background-color: #f6f6f6;
		position: relative;
	}

	.course .caption_c {
		text-align: center;
		font-size: 40rpx;
		font-weight: bold;
		padding-bottom: 40rpx;
	}

	.course .process {
		position: relative;
		height: 1200rpx;
	}

	.course .process::before {
		content: "";
		width: 1rpx;
		height: 89%;
		background-color: #005FD5;
		display: block;
		position: absolute;
		top: 10rpx;
		left: 50%;
	}

	.course .process .imgbox {
		height: 90%;
		width: 50rpx;
		position: relative;
		left: 46.8%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.course .process .imgbox .imgs {
		width: 50rpx;
		height: 50rpx;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.course .process .imgbox .imgs_a {
		background-image: url(../../static/storyImg/his-1.png);
	}

	.course .process .imgbox .imgs_b {
		background-image: url(../../static/storyImg/his-2.png);
	}

	.course .process .imgbox .imgs_c {
		background-image: url(../../static/storyImg/his-3.png);
	}

	.course .process .imgbox .imgs_d {
		background-image: url(../../static/storyImg/his-4.png);
	}

	.course .process .imgbox .imgs_e {
		background-image: url(../../static/storyImg/his-5.png);
	}

	.course .process .imgbox .imgs_f {
		background-image: url(../../static/storyImg/his-6.png);
	}

	.course .imgbox .pic_a::after {
		content: "";
		display: block;
		width: 0;
		height: 0;
		border-bottom: 10rpx solid transparent;
		border-left: 10rpx solid transparent;
		border-right: 10rpx solid #005FD5;
		border-top: 10rpx solid transparent;
		position: relative;
		top: 30%;
		left: -50%;
	}

	.course .imgbox .pic_b::after {
		content: "";
		display: block;
		width: 0;
		height: 0;
		border-bottom: 10rpx solid transparent;
		border-left: 10rpx solid #005fd5;
		/*transparent 表示透明*/
		border-right: 10rpx solid transparent;
		border-top: 10rpx solid transparent;
		position: relative;
		top: 33%;
		left: 115%;
	}

	.course .frame {
		position: absolute;
		box-sizing: border-box;
		width: 280rpx;
		padding: 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}

	.course .frame .year {
		font-size: 32rpx;
		font-weight: bold;
		color: #005FD5;
		margin-bottom: 10rpx;
	}

	.course .frame>text {
		font-size: 14rpx;
		display: block;
	}

	.course .framep_a {
		top: 10%;
		left: 4%;
	}

	.course .framep_b {
		top: 22%;
		right: 4%;
	}

	.course .framep_c {
		top: 35%;
		left: 4%;
	}

	.course .framep_d {
		top: 50%;
		right: 4%;
	}

	.course .framep_e {
		top: 65%;
		left: 4%;
	}

	.course .framep_f {
		top: 80%;
		right: 4%;
	}

	.course .framep_g {
		top: 80%;
		left: 4%;
	}

	.future {
		padding: 80rpx;
		text-align: center;
		background-color: #F6F6F6;
	}
</style>
