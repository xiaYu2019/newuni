<template>
	<view class="content">
		<view class="nav">
			<view class="log">
				<image src="../../static/jodo.png" mode=""></image>
				<text>卓动科技</text>
			</view>
			<view class="imgbut">
				<image src="../../static/menu.png" @click="unfold"></image>
			</view>
		</view>
		<cover-view class="listlink" v-show="listlink">
			<view class="box" @click="shut">
			</view>
			<view class="list">
				<navigator class="link hover" url="/pages/index/index" open-type="redirect">
					<text>首页</text>
					<image src="../../static/close.png" @click="shut"></image>
				</navigator>

				<navigator class="link" url="/pages/story/story" open-type="redirect">
					<text>卓动故事</text>
				</navigator>

				<view class="link" @click="shut_tale('business')">
					<text>卓动业务</text>
					<view :class="(twoNav.business)?'picture_up':'picture_below'"></view>
				</view>
				<view class="hiddenbox" v-show="twoNav.business">
					<navigator class="link_s" url="/pages/business/bigdata/bigdata" open-type="redirect">
						大数据业务
					</navigator>
					<navigator class="link_s" url="/pages/business/software/software" open-type="redirect">
						软件服务
					</navigator>
					<navigator class="link_s" url="/pages/business/game/game" open-type="redirect">
						游戏业务
					</navigator>
					<navigator class="link_s" url="/pages/business/company/company" open-type="redirect">
						企业服务
					</navigator>
					<navigator class="link_s" url="/pages/business/dirSir/dirSir" open-type="redirect">
						电商应用
					</navigator>
				</view>
				<view class="link" @click="shut_tale('message')">
					<text>卓动资讯</text>
					<view :class="(twoNav.message)?'picture_up':'picture_below'"></view>
				</view>
				<view class="hiddenbox" v-show="twoNav.message">
					<navigator class="link_s" url="/pages/journalism/journalism?tab=activity" open-type="redirect">
						活动资讯
					</navigator>
					<navigator class="link_s" url="/pages/journalism/journalism?tab=company" open-type="redirect">
						公司资讯
					</navigator>
					<navigator class="link_s" url="/pages/journalism/journalism?tab=train" open-type="redirect">
						培训资讯
					</navigator>
				</view>

				<navigator class="link" url="/pages/campus/campus" open-type="redirect">
					<text>加入我们</text>
				</navigator>

				<navigator class="link" url="/pages/relation/relation" open-type="redirect">
					<text>联系我们</text>
				</navigator>

			</view>
		</cover-view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				listlink: false,
				twoNav: {
					tale: false,
					business: false,
					message: false,
					join: false
				}
			}
		},
		onLoad() {

		},
		methods: {
			// 打开导航栏
			unfold() {
				this.listlink = true;
			},
			//关闭导航栏
			shut() {
				this.listlink = false;
			},
			//打开关闭子导航
			shut_tale(e) {
				this.twoNav[e] = !this.twoNav[e];
			}
		}
	}
</script>

<style>
	.content {
		position: absolute;
		z-index: 999;
	}

	.nav {
		width: 100%;
		height: 100rpx;
		background-color: #005fd5;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
	}

	.nav .log {
		width: 50%;
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 30rpx;
	}

	.nav .log>image {
		width: 150rpx;
		height: 50rpx;
		vertical-align: middle;
		font-size: 0;
		padding-right: 10rpx;
	}

	.nav .log>text {
		font-size: 32rpx;
		color: #FFFFFF;

	}

	.nav .imgbut {
		width: 100rpx;
		height: 100rpx;
		padding-right: 34rpx;
		line-height: 100rpx;
		text-align: right;
	}

	.nav .imgbut>image {
		vertical-align: middle;
		font-size: 0;
		width: 100%;
		height: 50%;
	}

	.listlink {
		width: 100%;
		height: 100%;
		position: fixed;
		display: flex;
		justify-content: space-between;
	}

	.listlink .box {
		width: 50%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
	}

	.listlink .list {
		box-sizing: border-box;
		width: 50%;
		height: 100%;
		padding: 30rpx 20rpx 0 40rpx;
		background-color: #fff;
	}

	.listlink .list .hover {
		display: flex;
		justify-content: space-between;
	}

	.listlink .list .link {
		padding-bottom: 10rpx;
		font-size: 36rpx;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid #eee;
		position: relative;
	}

	.listlink .list .link .picture_below {
		width: 0;
		height: 0;
		border-top: 10rpx solid #606060;
		border-right: 10rpx solid transparent;
		border-bottom: 10rpx solid transparent;
		border-left: 10rpx solid transparent;
		position: absolute;
		left: 80%;
		top: 30%;
	}

	.listlink .list .link .picture_up {
		width: 0;
		height: 0;
		border-top: 10rpx solid transparent;
		border-right: 10rpx solid transparent;
		border-bottom: 10rpx solid #606060;
		border-left: 10rpx solid transparent;
		position: absolute;
		left: 80%;
		top: 20%;
	}

	.listlink .list .link>text {
		color: #606060;
		display: block;
	}

	.listlink .list .link>image {
		width: 35rpx;
		height: 35rpx;
	}

	.listlink .list .hiddenbox {}

	.listlink .list .hiddenbox .link_s {
		margin-top: 10rpx;
		font-size: 14rpx;
		color: #9a9a9a;
		height: 34rpx;

	}
</style>
