module.exports = app => {
  app.get('/news/item', app.controller.news.item);
  app.get('/news', app.controller.news.list);
  app.post('/news', app.controller.news.post);
};
