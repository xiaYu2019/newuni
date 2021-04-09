<template>
	<view>
		<u-upload ref="uUpload" :action="action" :auto-upload="false" :before-upload="beforeUpload"></u-upload>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 非真实地址
				action: 'http://192.168.1.8:8080/pic/upload',
			}
		},
		methods: {
			submit() {
				console.log(this.$refs.uUpload.upload);
				this.$refs.uUpload.upload();
			},
			beforeUpload(index, list) {
				console.log(index,list)
			}
		}
	}
</script>
