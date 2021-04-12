<template>
	<view>
		<pageHead></pageHead>
		<view class="box"></view>
		<view class="bgimg">
			<view class="caption">加入炫蓝</view>
			<view class="explain">我们在一起，就会了不起</view>
		</view>
		<view class="welfare">
			<view class="subhead">福利&文化生活</view>
			<view class="vessel">
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l1.png"></image>
					<view class="word">年终奖金</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l2.png"></image>
					<view class="word">调薪机会</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l3.png"></image>
					<view class="word">部门团建</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l4.png"></image>
					<view class="word">七险一金</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l5.png"></image>
					<view class="word">周末双休</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l6.png"></image>
					<view class="word">带薪年假</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l7.png"></image>
					<view class="word">年度体检</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l8.png"></image>
					<view class="word">餐费补贴</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l9.png"></image>
					<view class="word">团建旅游</view>
				</view>
				<view class="etui">
					<image class="slice" mode="heightFix" src="/static/campus/pic-l10.png"></image>
					<view class="word">节日福利</view>
				</view>
			</view>
		</view>
		<view class="culture">
			<view class="item">
				<image class="picture" mode="widthFix" src="/static/campus/acti-1.png"></image>
				<view class="gaine">
					<text>休闲运动</text>
					<u-icon name="eye"></u-icon>
				</view>
			</view>
			<view class="item">
				<image class="picture" mode="widthFix" src="/static/campus/acti-2.png"></image>
				<view class="gaine">
					<text>节日party</text>
					<u-icon name="eye"></u-icon>
				</view>
			</view>
			<view class="item">
				<image class="picture" mode="widthFix" src="/static/campus/acti-3.png"></image>
				<view class="gaine">
					<text>公司年会</text>
					<u-icon name="eye"></u-icon>
				</view>
			</view>
			<view class="item">
				<image class="picture" mode="widthFix" src="/static/campus/acti-4.png"></image>
				<view class="gaine">
					<text>团建旅游</text>
					<u-icon name="eye"></u-icon>
				</view>
			</view>
		</view>
		<view class="invite">
			<view class="subhead">招聘</view>
			<view class="tab">
				<view :class='(pitch == "全部")?"pitch":""' @click="pitchs('全部')">全部</view>
				<view :class='(pitch == kei)?"pitch":""' v-for="(index,kei) in tab" @click="pitchs(kei)">{{kei}}</view>
			</view>
			<view v-if="pitch == '全部'" class="content_i">
				<view v-for="index in tab">
					<view v-for="indexs in index" class="nape" @click="shows">{{indexs}}
						<image class="thumbnail" src="/static/campus/righthuise.png"></image>
					</view>
				</view>
			</view>
			<view v-else class="content_i">
				<view class="nape" v-for="index in tab[pitch]" @click="shows">{{index}}
					<image class="thumbnail" src="/static/campus/righthuise.png"></image>
				</view>
			</view>
		</view>
		<!-- 弹出层 -->
		<u-popup v-model="show" mode="center" width="90%" height="80%" >
			<view class="popups">
				<view class="poptitle">大客户销售</view>
				<view class="popsubhead">岗位职责: </view>
				<view class="poptext">1.负.责财税产品（合规节税）的市场开拓（合作对象有社交电商、直播行业等）完成公司任务；</view>
				<view class="poptext">2.针对客户的需求及痛点，向客户提供全方位的财税咨询及方案，与合作方进行谈判并签约；</view>
				<view class="poptext">3.开发优质渠道合作方（主要是互联网类客户），并负责对其进行培训、提供客户落地支持；</view>
				<view class="poptext">4.根据公司的战略目标开拓新客户及合作渠道，并维护好客户关系；</view>
				<view class="poptext">5.与各部门的工作配合沟通、协调，及时处理突发状况；</view>
				<view class="poptext">6.完成领导安排的其他工作及任务。</view>
				<view class="popsubhead">任职要求: </view>
				<view class="poptext">1.2年以上相关岗位的经验；</view>
				<view class="poptext">2.勤奋、踏实，沟通能力强；</view>
				<view class="poptext">3.较强的公关应变能力、商务谈判技巧，对市场有较敏感的洞察力，具有亲和力；</view>
				<view class="bt">
					<button class="send" type="primary" size="mini">投递简历</button>
					<button class="send" type="primary" size="mini" @click="shows">狠心离开</button>
				</view>
			</view>
		</u-popup>
		<view class="develop">
			<view class="cultivate">培训&发展</view>
			<view class="box_e">
				<view class="plan_a">
					<view class="plan_up">
						<text>新兵</text>
						<text>专员</text>
					</view>
					<view class="plan_centre">
						成长计划A
					</view>
					<view class="plan_below">
						<text>专家/权威</text>
						<text>骨干</text>
					</view>
				</view>
				<view class="plan_a">
					<view class="plan_up">
						<text>新兵</text>
						<text>新兵基层管理者</text>
					</view>
					<view class="plan_centre">
						成长计划B
					</view>
					<view class="plan_below">
						<text>高层管理者</text>
						<text>中层管理者</text>
					</view>
				</view>

			</view>
		</view>
		<view class="plan">
			<view class="plan_ups">
				<view class="plan_b">
					<view class="plan_img">
						01&nbsp;&nbsp;小卓同学
					</view>
					<view class="plan_text">
						为职场新人定制打造为期6个月的全维度发展计划；辅助制定个人发展规划。每年2期，每期6个月，166课时，100％覆盖新人的成长。
					</view>
				</view>
				<view class="plan_b">
					<view class="plan_img">
						02&nbsp;&nbsp;小卓同学
					</view>
					<view class="plan_text">
						为职场新人定制打造为期6个月的全维度发展计划；我们将为你配置岗位导师，成长导师，双线导线辅导带教，为新人阶段的你答疑解惑，并提供专业的知识培训，辅助制定个人发展规划。每年2期，每期6个月，166课时，100％覆盖新人的成长。
					</view>
				</view>
			</view>
			<view class="plan_centres">
				<view class="project">培训计划</view>
				<view>TRAINING PROGRAM</view>
			</view>
			<view class="plan_belows">
				<view class="plan_b">
					<view class="plan_img">
						03&nbsp;&nbsp;小卓同学
					</view>
					<view class="plan_text">
						为职场新人定制打造为期6个月的全维度发展计划；我们将为你配置岗位导师，成长导师，双线导线辅导带教，为新人阶段的你答疑解惑，并提供专业的知识培训，辅助制定个人发展规划。每年2期，每期6个月，166课时，100％覆盖新人的成长。
					</view>
				</view>
				<view class="plan_b">
					<view class="plan_img">
						04&nbsp;&nbsp;小卓同学
					</view>
					<view class="plan_text">
						为职场新人定制打造为期6个月的全维度发展计划，辅助制定个人发展规划。每年2期，每期6个月，166课时，100％覆盖新人的成长。
					</view>
				</view>
			</view>
		</view>
		<pageFooter></pageFooter>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pitch: "全部",
				show: false,
				tab: {
					"产品类": ["产品类"],
					"市场类": ["市场类"],
					"技术类": ["技术类"],
					"策划类": ["策划类"],
					"美术类": ["美术类"],
					"职能类": ["职能类"],
					"运营类": ["运营类"]
				}
			}
		},
		methods: {
			pitchs(e) {
				this.pitch = e;
			},
			shows() {
				this.show = !this.show;
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

	.welfare {
		padding: 40rpx 60rpx;
		background-color: #FFFFFF;
	}

	.subhead {
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}

	.vessel {
		padding-top: 40rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.etui {
		width: 20%;
		text-align: center;
		padding-bottom: 40rpx;
	}

	.slice {
		height: 54rpx;
	}

	.culture {
		padding: 40rpx 60rpx;
		background-color: #F7F7F7;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.item {
		margin-bottom: 20rpx;
		width: 45%;
		padding: 14rpx;
		background-color: #FFFFFF;
		text-align: center;
	}

	.picture {
		width: 100%;
	}

	.gaine {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
	}

	.invite {
		padding-top: 40rpx;
		background-color: #f8fcff;
	}

	.tab {
		padding: 40rpx 60rpx 0;
		border-bottom: 1rpx solid #e0e4e7;
		display: flex;
		justify-content: space-between;
		font-size: 16rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.pitch {
		color: #005FD5;
		border-bottom: 1rpx solid #005FD5;
	}

	.content_i {
		padding: 40rpx 60rpx 60rpx;
		background-color: #f8fcff;
	}

	.nape {
		border: 1rpx solid #e0e4e7;
		padding: 10rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.thumbnail {
		width: 30rpx;
		height: 30rpx;
		background-color: rgba(224, 228, 231, .2);
		border-radius: 50%;
	}

	.develop {
		padding-top: 40rpx;
		background-color: #F7F7F7;
	}

	.cultivate {
		text-align: center;
		font-size: 48rpx;
		font-weight: bold;
		color: #005FD5;
	}

	.box_e {
		padding: 50rpx 100rpx 100rpx;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
	}

	.plan_a {
		width: 500rpx;
		height: 500rpx;
		margin-bottom: 1rem;
		background-image: url(/static/campus/training.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 80%;
		color: #005FD5;
		position: relative;
		font-size: 18rpx;
		font-weight: bold;
	}

	.plan_up {
		height: 25%;
		display: flex;
		justify-content: space-between;
	}

	.plan_centre {
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.plan_below {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		padding-top: 15%;
	}

	.plan {
		padding: 50rpx 50rpx;
		background-color: #0852a0;
		color: #FFFFFF;
	}

	.plan_ups {
		display: flex;
		justify-content: space-between;
	}

	.plan_b {
		width: 45%;
		padding-bottom: 50rpx;
	}

	.plan_img {
		padding: 20rpx;
		font-size: 24rpx;
		font-weight: bold;
		background-image: url(/static/campus/circle-1.png);
		background-repeat: no-repeat;
		background-size: 20%;
		background-position: 5rpx;
	}

	.plan_text {
		font-size: 12rpx;
		padding: 0 20rpx;
		text-align: justify;

	}

	.plan_centres {
		font-size: 12rpx;
		text-align: center;
	}

	.project {
		font-size: 48rpx;
	}

	.plan_belows {
		padding-top: 50rpx;
		display: flex;
		justify-content: space-between;
	}

	/* ============================================================================ */
	.popups {
		padding: 30rpx 40rpx;
		font-size: 12rpx;
	}

	.poptitle {
		font-size: 36rpx;
		font-weight: bold;
		text-align: center;
		color: #005FD5;
	}

	.popsubhead {
		padding: 40rpx 0 20rpx;
		font-size: 24rpx;
		color: #005FD5;
	}
	.poptext{
		line-height: 40rpx;
	}
	.send{
		margin-top: 80rpx;
	}
	.bt{
		display: flex;
		justify-content: space-between;
	}
</style>
