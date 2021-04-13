<template>
	<view class="tail">
		<text>法律声明 </text>
		<text>隐私策略 </text>
		<text>粤ICP备12082196号 </text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// checked: false,
			}
		},
		
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.tail {
		padding: 40rpx 40rpx 80rpx;
		color: #abc6e6;
		background-color: #005FD5;
		font-size: 12rpx;
	}

	.tail>text {
		padding-right: 20rpx;
	}
</style>
