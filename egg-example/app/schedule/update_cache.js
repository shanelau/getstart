module.exports = {
  schedule: {
    interval: '10m',
    type: 'worker',
  },
  * task(ctx) {
    const res = yield ctx.curl('https://api.coinmarketcap.com/v1/ticker/?limit=10', {
      dataType: 'json',
    });
    console.log(res);
  },
}
;
