<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="picture">
			<view class="caption">企业服务</view>
			<view class="describe">为创业团队和企业提供一站式企业生命周期服务，实现资源共享、互生共赢</view>
		</view>
		<view class="vessel">
			<view class="item">
				<image class="icon_i" src="/static/business/pic-1.png" mode="heightFix"></image>
				<view class="subtitle">财税服务</view>
				<view class="explain">财务规范化服务，税务筹划服务，公司注册服务，记账办税服务，工商注册服务等</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-2.png" mode="heightFix"></image>
				<view class="subtitle">人力服务</view>
				<view class="explain">提供一站式兼职外包服务，招聘，面试，培训，管理一步解决，让企业主更省心记账办税服务，工商注册服务等</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-3.png" mode="heightFix"></image>
				<view class="subtitle">翻译服务</view>
				<view class="explain">出海企业必备，翻译本地化，文化本地化针对全球市场进行优化，提供本土化翻译、KOL推广、产品本地化建议等服务</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-4.png" mode="heightFix"></image>
				<view class="subtitle">项目外包</view>
				<view class="explain">定制个性化用工方案满足您多样化的灵活用工需求，结合税务筹划，把用工成本压到最低</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-6.png" mode="heightFix"></image>
				<view class="subtitle">财税服务</view>
				<view class="explain">财务规范化服务，税务筹划服务，公司注册服务，记账办税服务，工商注册服务等</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-7.png" mode="heightFix"></image>
				<view class="subtitle">人力服务</view>
				<view class="explain">提供一站式兼职外包服务，招聘，面试，培训，管理一步解决，让企业主更省心记账办税服务，工商注册服务等</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-8.png" mode="heightFix"></image>
				<view class="subtitle">翻译服务</view>
				<view class="explain">出海企业必备，翻译本地化，文化本地化针对全球市场进行优化，提供本土化翻译、KOL推广、产品本地化建议等服务</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-4.png" mode="heightFix"></image>
				<view class="subtitle">项目外包</view>
				<view class="explain">定制个性化用工方案满足您多样化的灵活用工需求，结合税务筹划，把用工成本压到最低</view>
			</view>
			<view class="item">
				<image class="icon_i" src="/static/business/pic-9.png" mode="heightFix"></image>
				<view class="subtitle">项目外包</view>
				<view class="explain">定制个性化用工方案满足您多样化的灵活用工需求，结合税务筹划，把用工成本压到最低</view>
			</view>
		</view>
		<view class="bt">咨询合作</view>
		<pageFooter class="so"></pageFooter>
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
		background-image: url("../../../static/business/bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		padding: 120rpx 20rpx 100rpx 40rpx;
		color: #FFFFFF;
		text-align: center;
	}

	.caption {
		font-size: 48rpx;
		font-weight: bold;
	}

	.describe {
		padding-top: 20rpx;
		font-size: 24rpx;
		line-height: 38rpx;
	}
	.vessel{
		padding: 100rpx 80rpx 0;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.item{
		width: 42%;
		text-align: center;
		padding-bottom: 60rpx;
	}
	.icon_i{
		height: 80rpx;
	}
	.subtitle{
		padding: 20rpx 0 10rpx;
		font-size: 32rpx;
		font-weight: bold;
	}
	.explain{
		color: #aaaaaa;
		font-size: 24rpx;
	}
	.bt{
		margin: 0 auto;
		text-align: center;
		width: 250rpx;
		height: 60rpx;
		line-height: 60rpx;
		background-color: #005FD5;
		color: #FFFFFF;
		border-radius: 10rpx;
	}
	.so{
		margin-top: 100rpx ;
	}
</style>
