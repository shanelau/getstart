module.exports = app => {
  class NewsController extends app.Controller {
    * list() {
      const page = this.ctx.query.page || 1;
      const newsList = yield this.ctx.service.news.list(page);
      yield this.ctx.render('news/list.tpl', { list: newsList });
    }
    * item() {
      const { app, ctx } = this;
      const id = ctx.query.id;
      const user = yield ctx.service.news.getUser(id);
      ctx.body = user;
    }

    * post() {
      const { app, ctx } = this;
      console.log(ctx.request.body.name);
      const data = {
        name: ctx.request.body.name,
        age: ctx.request.body.age,
      };
      const user = yield ctx.service.news.addUser(data);
      ctx.body = {
        code: 200,
        user: user.insertId,
      };
    }
  }
  return NewsController;
};

