<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="bgimg">
			<view class="caption">新闻资讯</view>
			<view class="explain">我们一起去发现更多</view>
		</view>
		<view class="tab">
			<view :class='(pitch == "activity")?"pitch":""' @click="pitchs('activity')">活动咨询</view>
			<view :class='(pitch == "company")?"pitch":""' @click="pitchs('company')" >公司资讯</view>
			<view :class='(pitch == "train")?"pitch":""' @click="pitchs('train')">培训资讯</view>
		</view>
		<view class="vessel">
			<view class="activity" v-show='pitch == "activity"'>
				<view class="item">
					<image class="picture" src="/static/journalism/b4b58e3542.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">愚人节丨直面自己</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">愚人节玩点不一样，勇敢展现自我风采......</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/b4b58e3542.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">愚人节丨直面自己</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">愚人节玩点不一样，勇敢展现自我风采......</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/b4b58e3542.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">愚人节丨直面自己</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">愚人节玩点不一样，勇敢展现自我风采......</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/b4b58e3542.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">愚人节丨直面自己</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">愚人节玩点不一样，勇敢展现自我风采......</view>
					</view>
				</view>
			</view>
			<view class="company" v-show='pitch == "company"'>
				<view class="item">
					<image class="picture" src="/static/journalism/fa28bbb574.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">《艾泽远征》：大吉工作室的手游初探之路</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">卓动科技从游戏出海起家，到目前的多业务、多领域并行。在持续探索多领域的过程中，仍不忘挖掘游戏市场的更多可能性.......</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/fa28bbb574.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">《艾泽远征》：大吉工作室的手游初探之路</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">卓动科技从游戏出海起家，到目前的多业务、多领域并行。在持续探索多领域的过程中，仍不忘挖掘游戏市场的更多可能性.......</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/fa28bbb574.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">《艾泽远征》：大吉工作室的手游初探之路</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">卓动科技从游戏出海起家，到目前的多业务、多领域并行。在持续探索多领域的过程中，仍不忘挖掘游戏市场的更多可能性.......</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/fa28bbb574.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">《艾泽远征》：大吉工作室的手游初探之路</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">卓动科技从游戏出海起家，到目前的多业务、多领域并行。在持续探索多领域的过程中，仍不忘挖掘游戏市场的更多可能性.......</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/fa28bbb574.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">《艾泽远征》：大吉工作室的手游初探之路</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">卓动科技从游戏出海起家，到目前的多业务、多领域并行。在持续探索多领域的过程中，仍不忘挖掘游戏市场的更多可能性.......</view>
					</view>
				</view>
			</view>
			<view class="train" v-show='pitch == "train"' >
				<view class="item">
					<image class="picture" src="/static/journalism/faf88cd61d.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">学习不停，成长不止-小卓同学正式启动</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">第五季小卓同学正式启动了！让我们看看，为期4天的集训，都发生了什么？</view>
					</view>
				</view>
				<view class="item">
					<image class="picture" src="/static/journalism/faf88cd61d.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">学习不停，成长不止-小卓同学正式启动</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">第五季小卓同学正式启动了！让我们看看，为期4天的集训，都发生了什么？</view>
					</view>
				</view><view class="item">
					<image class="picture" src="/static/journalism/faf88cd61d.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">学习不停，成长不止-小卓同学正式启动</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">第五季小卓同学正式启动了！让我们看看，为期4天的集训，都发生了什么？</view>
					</view>
				</view><view class="item">
					<image class="picture" src="/static/journalism/faf88cd61d.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">学习不停，成长不止-小卓同学正式启动</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">第五季小卓同学正式启动了！让我们看看，为期4天的集训，都发生了什么？</view>
					</view>
				</view><view class="item">
					<image class="picture" src="/static/journalism/faf88cd61d.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">学习不停，成长不止-小卓同学正式启动</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">第五季小卓同学正式启动了！让我们看看，为期4天的集训，都发生了什么？</view>
					</view>
				</view><view class="item">
					<image class="picture" src="/static/journalism/faf88cd61d.png" mode="widthFix"></image>
					<view class="writing">
						<view class="subhead">学习不停，成长不止-小卓同学正式启动</view>
						<view class="time">2021-03-31</view>
						<view class="decipher">第五季小卓同学正式启动了！让我们看看，为期4天的集训，都发生了什么？</view>
					</view>
				</view>
			</view>
			<view class="bt">加载更多>></view>
		</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pitch:null,
			}
		},
		onLoad(options) {
				this.pitch = options.tab;
		
		},
		methods: {
			
			// tab切换
			pitchs(s){
				this.pitch =s;
			}
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
	.tab{
		padding: 40rpx 80rpx 0; 
		display: flex;
		justify-content: space-around;
	}
	.tab>view{
		padding: 0 20rpx;
		border-radius: 6rpx;
	}
	.pitch{
		background-color: #404040;
		color: #FFFFFF;
	}
	.vessel{
		padding: 30rpx 20rpx;
		background-color: #F8F8F8;
	}
	.item{
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
		padding: 30rpx 20rpx  20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.picture{
		width:30%;
	}
	.writing{
		width: 65%;
		font-size: 22rpx;
		color: #ababab;
	}
	.subhead{
		padding-bottom: 10rpx;
		font-size: 26rpx;
		font-weight: bold;
		color: #5a5a5a;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.decipher{
		padding-top: 10rpx;
		min-height: 120rpx;
	}
	.bt{
		margin: 40rpx auto;
		width: 250rpx;
		height: 50rpx;
		line-height: 50rpx;
		background-color: #111b28;
		text-align: center;
		color: #FFFFFF;
		border-radius: 10rpx;
	}
	
</style>
