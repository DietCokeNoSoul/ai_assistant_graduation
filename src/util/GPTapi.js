async function chat(prompt) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://api.gptgod.online/v1/chat/completions',
      method: 'POST',
      header: {
        'Authorization': 'Bearer sk-zVebGF3n3Ajjb2UG4sub0KPpwjvUsLED59irGqTlD4R7qRQ8',
        'Content-Type': 'application/json' // 设置请求头为 JSON 类型
      },
      data: {
        model: 'gpt-3.5-turbo-16k',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
      },
      success: function(res) {
        resolve(res.data.choices[0].message.content); // 流式输出结束，resolve Promise
      },
      fail: function(err) {
        console.error('请求失败', err);
        reject(err); // 请求失败，reject Promise
      }
    });
  });
}

export { chat };

