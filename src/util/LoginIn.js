function LoginIn() {
    return new Promise((resolve, reject) => {
        // 获取OPENID
        wx.cloud.callFunction({
            name: 'login',
            complete: res => {
                let openid = res.result
                // 查询用户信息
                wx.cloud.callFunction({
                    name: 'getUserInfo',
                    data: {
                        _openid: openid
                    },
                    complete: userInfo => {
                        // 用户信息为空，跳转注册
                        if (userInfo.result.data.length == 0) {
                            uni.navigateTo({
                                url: '/subpkg/login/login?openid=' + openid
                            });
                        } else {
                            const expiredTime = Date.now() + 24 * 3600 * 1000; // 登录状态失效时间为一天后
                            // 将登录状态保存到本地缓存
                            uni.setStorageSync('loginStatus', {
                                _openid: openid,
                                expiredTime: expiredTime
                            });
                            resolve(userInfo);
                        }
                    }
                });
            }
        });
    });
}

module.exports={
    LoginIn:LoginIn
}