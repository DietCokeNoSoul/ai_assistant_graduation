// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const checkLogin = require('../../util/checkLogin');

// 云函数入口函数
exports.main = async (event, context) => {
  // 定时检查登录状态是否失效
    checkLogin();
}