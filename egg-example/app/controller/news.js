module.exports = app => {
  class NewsController extends app.Controller {
    * list() {
      const page = this.ctx.query.page || 1;
      const newsList = yield this.ctx.service.news.list(page);
      yield this.ctx.render('news/list.tpl', { list: newsList });
    }
  }
  return NewsController;
};

