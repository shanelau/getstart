process.env.TZ = 'Asia/Shanghai';
module.exports = app => {
  app.beforeStart(function* () {
    // 应用会等待这个函数执行完成才启动
    app.cities = yield app.curl('https://api.coinmarketcap.com/v1/ticker/bitcoin/', {
      method: 'GET',
      dataType: 'json',
    });
    console.log('I am app before');
  });
};
