// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const rp = require('request-promise');

async function chat(messages) {
  const options = {
    method: 'POST',
    uri: 'https://api.gptgod.online/v1/chat/completions',
    headers: {
      'Authorization': 'Bearer sk-zVebGF3n3Ajjb2UG4sub0KPpwjvUsLED59irGqTlD4R7qRQ8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-16k',
      messages: messages
    }),
  };

  try {
    const response = await rp(options);
    return response;
  } catch (error) {
    console.error('请求失败', error);
    throw error;
  }
}

exports.main = async (event, context) => {
  try {
    const message = event.message; // 假设从事件中获取消息
    const response = await chat(message);
    const responseObject = JSON.parse(response); // 将 JSON 字符串解析为 JavaScript 对象
    return responseObject;
  } catch (error) {
    console.error('调用 chat 函数时出错:', error);
    throw error;
  }
};