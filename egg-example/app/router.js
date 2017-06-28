'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.resources('topics', '/api/v2/topics', 'topics');
  require('./router/news.js')(app);
  require('./router/util.js')(app);
};
