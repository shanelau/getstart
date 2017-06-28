const isJSON = require('koa-is-json');

module.exports = (options, app) => {
  return function* gizp(next) {
    yield next;
    let body = this.body;
    if (!body) return;
    if (isJSON(body)) body = JSON.stringify(body);
    this.body = body;
  };
};
