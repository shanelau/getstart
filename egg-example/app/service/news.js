module.exports = app => {
  class NewsService extends app.Service {
    * list(page = 1) {
      const { serverUrl, pageSize } = this.app.config.news;
      const { data: idList } = yield this.ctx.curl(`${serverUrl}/topstories.json`, {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`,
        },
        dataType: 'json',
      });
      const newsList = yield Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      });
      return newsList.map(res => res.data);
    }
    * getUser(uid = 1) {
      const user = yield app.mysql.get('user', {
        id: uid,
      });
      return {
        user,
      };
    }

    * addUser(data) {
      const user = yield app.mysql.insert('user', data);
      return user.affectedRows === 1 && user;
    }
  }


  return NewsService;
};
