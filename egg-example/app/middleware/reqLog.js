module.exports = (options, app) => {
  return function* gizp(next) {
    const begin = new Date().getTime();
    yield next;
    const end = new Date().getTime();
    app.logger.info(`${this.request.originalUrl} - ${end - begin}ms`);
  };
};
