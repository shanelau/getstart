'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/news', app.controller.news.list);
};
