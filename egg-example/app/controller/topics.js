const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};

exports.create = function* (ctx) {
  // 校验 `ctx.request.body` 是否符合我们预期的格式
  // 如果参数校验未通过，将会抛出一个 status = 422 的异常
  ctx.validate(createRule);
  // 调用 service 创建一个 topic
  const id = yield ctx.service.topics.create(ctx.request.body);
  // 设置响应体和状态码
  ctx.body = {
    topic_id: id,
  };
  ctx.status = 201;
};
