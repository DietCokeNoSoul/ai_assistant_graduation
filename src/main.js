import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

//封装弹框
uni.$showMsg = function(title = '数据请求失败',duration = 1000){
  uni.showToast({
    title,
    duration,
    icon:'none'
  })
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
