function checkLogin(){
    const loginStatus = uni.getStorageSync('loginStatus');
    if (loginStatus) {
      // 检查登录状态是否过期
      if (loginStatus.expiredTime > Date.now()) {
        // 登录状态有效，可以执行相应操作
        return true;
      } else {
        // 登录状态已过期，清除本地缓存中的登录状态
        uni.removeStorageSync('loginStatus');
        uni.removeStorageSync('userName');
        uni.removeStorageSync('userImage');
        return false;
      }
    } else {
      // 本地缓存中不存在登录状态
      return false;
    }
}

module.exports={
    checkLogin:checkLogin
}