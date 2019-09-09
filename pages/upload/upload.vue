<template>
	<view class="content">
		<view class="cropper-wrapper">
			<canvas
				class="cropper"
				disable-scroll="true"
				@touchstart="touchStart"
				@touchmove="touchMove"
				@touchend="touchEnd"
				:style="{ width: cropperOpt.width, height: cropperOpt.height }"
				canvas-id="cropper"
			></canvas>
		</view>
		<view class="cropper-buttons">
			<view class="title">
				<view class="upload" @tap="uploadTap">重新选择</view>
				<view class="getCropperImage" @tap="getCropperImage">确定</view>
			</view>
			<view lass="foot"></view>
		</view>
	</view>
</template>

<script>
import weCropper from './weCropper';
const device = uni.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight - 50;
// console.log(device);
export default {
	data() {
		return {
			cropperOpt: {
				id: 'cropper',
				width: width,
				height: height,
				scale: 2.5,
				zoom: 8,
				cut: {
					x: (width - 295) / 2,
					y: (height - 390) / 2,
					width: 295,
					height: 295
				}
			},
			weCropper: ''
		};
	},
	methods: {
		back() {
			uni.redirectTo({
				url: '../user/config/user-data'
			});
		},
		touchStart(e) {
			this.weCropper.touchStart(e);
		},
		touchMove(e) {
			this.weCropper.touchMove(e);
		},
		touchEnd(e) {
			this.weCropper.touchEnd(e);
		},
		convertBase64UrlToBlob(dataURI, type) {
			var binary = atob(dataURI.split(',')[1]);
			var array = [];
			for (var i = 0; i < binary.length; i++) {
				array.push(binary.charCodeAt(i));
			}
			return new Blob([new Uint8Array(array)], { type: type }, { filename: '1111.jpg' });
		},
		blobToDataURL(blob) {
			var a = new FileReader();
			a.readAsDataURL(blob); //读取文件保存在result中
			a.onload = function(e) {
				var getRes = e.target.result; //读取的结果在result中
				console.log(getRes);
			};
		},
		getCropperImage() {
			let _this = this;
			//let pathurl = url + '/user/upload';上传服务器地址
			this.weCropper.getCropperImage(avatar => {
				if (avatar) {
					//  获取到裁剪后的图片
					//  获取到裁剪后的图片
					uni.redirectTo({
					  url: '../user/config/user-data?avatar=' + avatar
					})
					//下面是上传到服务器的方法
// 					uni.uploadFile({
// 						url: pathurl,
// 						filePath: avatar,
// 						name: 'file',
// 						formData: { token: token, userId: userId},
// 						success: res => {
// 							console.log('uploadImage success, res is:', res);
// 								uni.showToast({
// 								title: '上传成功',
// 								icon: 'success',
// 								duration: 1000
// 							});
// 						},
// 						ail: err => {
// 							console.log('uploadImage fail', err);
// 							uni.showModal({
// 								content: err.errMsg,
// 								showCancel: false
// 							});
// 							uni.hideLoading();
// 						},
// 						complete: () => {
// 							console.log('complate');
// 						}
// 					});
				} else {
					console.log('获取图片失败，请稍后重试');
				}
			});
		},
		uploadTap() {
			const self = this;

			uni.chooseImage({
				count: 1, // 默认9
				sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success(res) {
					let src = res.tempFilePaths[0];
					//  获取裁剪图片资源后，给data添加src属性及其值

					self.weCropper.pushOrign(src);
				}
			});
		}
	},
	onLoad(option) {
		// do something
		const cropperOpt = this.cropperOpt;
		const src = option.src;
		if (src) {
			Object.assign(cropperOpt, {
				src
			});

			this.weCropper = new weCropper(cropperOpt)
				.on('ready', function(ctx) {})
				.on('beforeImageLoad', ctx => {
					uni.showToast({
						title: '上传中',
						icon: 'loading',
						duration: 3000
					});
				})
				.on('imageLoad', ctx => {
					uni.hideToast();
				});
		}
	}
};
</script>

<style lang="scss">
.content {
	background: rgba(255, 255, 255, 1);
}

.head-list {
	height: 43px;
	width: 100%;
	background: #ffffff;
	justify-content: center;
	align-items: center;
	display: flex;
	border-bottom: 1px solid rgba(244, 244, 244, 1);
}

.head-info {
	text-align: center;
	font-size: 18px;
	color: #000000;
	font-weight: bold;
}

.save-box {
	position: absolute;
	right: 0px;
	width: 50px;
	height: 43px;
	line-height: 43px;
}

.save {
	color: rgba(98, 111, 252, 1);
	font-size: 16px;
	font-weight: 400;
}

.icon-back {
	margin-top: 11px;
	width: 10px;
	height: 18px;
	color: #000000;
	margin-left: 6px;
}

.icon-back-box {
	display: block;
	position: absolute;
	left: 6px;
	height: 43px;
	width: 30px;
	align-items: center;
}
.cropper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.cropper-wrapper {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 1336upx;
	background-color: rgb(85, 85, 85);
}

.cropper-buttons {
	.title{
		width: 100vw;
		height: 115upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		line-height: 115upx;
		background-color: rgba(0, 0, 0, 0.95);
		color: #04b00f;
	}
	.foot{
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		background-color: rgba(0, 0, 0, 0.95);
	}
}

.cropper-buttons .upload,
.cropper-buttons .getCropperImage {
	width: 50%;
	text-align: center;
}

</style>
