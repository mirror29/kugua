import store from '../store' // 获取 Vuex Store 实例
import request from '../common/request/request'

class Common{
	// 检查登录态
	checkStatus(status){
		if(status === 403) {
			uni.showModal({
					title: '请重新登录',
					content: '您的登录状态已失效，请重新登录',
					success: function (res) {
							if (res.confirm) {
									uni.navigateTo({
											url: '/pages/login/login'
									});
							} else if (res.cancel) {
									uni.navigateBack({
											delta: 1
									});
							}
					}
			});
			store.commit('logout');
			return false;
		}
	}

	// 检查登录态
	checkStatus2(status){
		if(status === 403) {
			uni.showModal({
					title: '请登录',
					content: '请登录您的账号',
					success: function (res) {
							if (res.confirm) {
									uni.navigateTo({
											url: '/pages/login/login'
									});
							} else if (res.cancel) {
									uni.navigateBack({
											delta: 1
									});
							}
					}
			});
			store.commit('logout');
			return false;
		}
	}

	//返回后台信息
	returnMsg(msg,code){
		uni.showToast({
				title: msg,
				icon: 'none',
				success() {
					if(code === 0){
						setTimeout(() => {
							uni.navigateBack({
									delta: 1
							});
						}, 1500);
					}
				}
		});
	}

	// 分享
	switchShare (index,shareInfo,copy) {
		let shareObj={
			href:shareInfo.href||"",
			title:shareInfo.title||"",
			summary:shareInfo.desc||"",
			success:(res)=>{
				console.log("success:" + JSON.stringify(res));
			},
			fail:(err)=>{
				console.log("fail:" + JSON.stringify(err));
			}
		};
		switch (index) {
			case 0:
				shareObj.provider="weixin";
				shareObj.scene="WXSceneSession";
				shareObj.type=2;
				shareObj.imageUrl=shareInfo.imgUrl||"";
				uni.setClipboardData({
					data:copy,
					complete() {
						uni.showToast({
							title: "文案已复制",
							icon: 'none'
						})
					}
				})
				uni.share(shareObj);
				break;
			case 1:
				shareObj.provider="weixin";
				shareObj.scene="WXSenceTimeline";
				shareObj.type=2;
				shareObj.imageUrl=shareInfo.imgUrl||"";
				uni.setClipboardData({
					data:copy,
					complete() {
						uni.showToast({
							title: "文案已复制",
							icon: 'none'
						})
					}
				})
				uni.share(shareObj);
				break;
			// case 2:
			// 	shareObj.provider="sinaweibo";
			// 	shareObj.type=0;
			// 	shareObj.imageUrl=shareInfo.imgUrl||"";
			// 	uni.share(shareObj);
			// 	break;
			// case 3:
			// 	shareObj.provider="qq";
			// 	shareObj.type=1;
			// 	shareObj.imageUrl=shareInfo.imgUrl||"";
			// 	uni.share(shareObj);
			// 	break;
			case 2:
				uni.setClipboardData({
					data:copy,
					complete() {
						uni.showToast({
							title: "文案已复制",
							icon: 'none'
						})
					}
				})
				break;
			case 3:
				plus.share.sendWithSystem({
					type:"web",
					title:shareInfo.title||"",
					thumbs:[shareInfo.imgUrl||""],
					href:shareInfo.href||"",
					content: shareInfo.desc||"",
				})
				break;
		};
	}

	// 分享
	switchShare2 (index,shareInfo,copy) {
		let shareObj={
			href:shareInfo.href||"",
			title:shareInfo.title||"",
			summary:shareInfo.desc||"",
			success:(res)=>{
				console.log("success:" + JSON.stringify(res));
			},
			fail:(err)=>{
				console.log("fail:" + JSON.stringify(err));
			}
		};
		switch (index) {
			case 0:
				shareObj.provider="weixin";
				shareObj.scene="WXSceneSession";
				shareObj.type=0;
				shareObj.imageUrl=shareInfo.imgUrl||"";
				uni.setClipboardData({
					data:copy,
					complete() {
						uni.showToast({
							title: "文案已复制",
							icon: 'none'
						})
					}
				})
				uni.share(shareObj);
				break;
			case 1:
				shareObj.provider="weixin";
				shareObj.scene="WXSenceTimeline";
				shareObj.type=0;
				shareObj.imageUrl=shareInfo.imgUrl||"";
				uni.setClipboardData({
					data:copy,
					complete() {
						uni.showToast({
							title: "文案已复制",
							icon: 'none'
						})
					}
				})
				uni.share(shareObj);
				break;
			// case 2:
			// 	shareObj.provider="sinaweibo";
			// 	shareObj.type=0;
			// 	shareObj.imageUrl=shareInfo.imgUrl||"";
			// 	uni.share(shareObj);
			// 	break;
			// case 3:
			// 	shareObj.provider="qq";
			// 	shareObj.type=1;
			// 	shareObj.imageUrl=shareInfo.imgUrl||"";
			// 	uni.share(shareObj);
			// 	break;
			case 2:
				uni.setClipboardData({
					data:copy,
					complete() {
						uni.showToast({
							title: "文案已复制",
							icon: 'none'
						})
					}
				})
				break;
			case 3:
				plus.share.sendWithSystem({
					type:"web",
					title:shareInfo.title||"",
					thumbs:[shareInfo.imgUrl||""],
					href:shareInfo.href||"",
					content: shareInfo.desc||"",
				})
				break;
		};
	}

	formatTime (date) {  //转换时间戳
		// 格式化日期，如月、日、时、分、秒保证为2位数
		const formatNumber = n => {
			n = n.toString()
			return n[1] ? n : '0' + n
		}

		const time = new Date(parseInt(date *1000))
    const year = time.getFullYear()
		const month = time.getMonth() + 1
		const day = time.getDate()
		const hour = time.getHours()
		const minute = time.getMinutes()
		const second = time.getSeconds()

		return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
	}

	searchClip(){
		let clipText = ''
		uni.getClipboardData({   //获取系统粘贴版
				success: function (res) {
					clipText = res.data
				}
		});

		// let reg1 = /^[a-zA-z]+://[^\s]*$/;  //匹配url
		// let reg2 = /[^a-zA-Z\d].+[^a-zA-Z\d]/;  //匹配淘口令
		let reg = /^[0-9]*$/; //匹配纯数字

		setTimeout(() => {
			if (reg.test(clipText) === false && clipText.length > 0) {
				store.commit('setClip',clipText);
			}
		}, 10);
	}

	//淘宝授权登录
	taoLogin(){
		uni.navigateTo({
				url: '/pages/product/auth'
		});
		// const bcPlugin = uni.requireNativePlugin('dahui-alibaichuan');
		// const bcPlugin = uni.requireNativePlugin('dasu-alibaichuan');
		// if (plus.device.vendor == 'Apple') {
		// 	bcPlugin.BCSDKInitWithAppkey('27845613', result => {
		// 		if(result.code === 0){
		// 			console.log(result)
		// 			bcPlugin.BCAuth(res => {
		// 				console.log(res)
		// 				if(res.code === 0){
		// 					uni.navigateTo({
		// 							url: '/pages/user/oauth'
		// 					});
		// 				}
		// 			});
		// 		}
		// 	});
		// } else {
		// 	bcPlugin.login(result => {
		// 		// console.log(result)
		// 		if (result.type == "success") {
		// 			uni.navigateTo({
		// 					url: '/pages/user/oauth'
		// 			});
		// 		} else {
		// 			//授权失败，包括用户取消登录
		// 			uni.showToast({
		// 				title: '授权失败,如有异常，请联系客服。'
		// 			});
		// 		}
		// 	});
		// }
	}
}


if (!global.$common) {
  global.$common = new Common();
}

export default global.$common;
