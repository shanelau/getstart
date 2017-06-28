module.exports = (options, app) => {
  return function* robotMiddleware(next) {
    const source = this.get('user-agent');
    const match = options.ua.some(ua => { return ua.test(source); });
    if (match) {
      this.status = 403;
      this.message = 'Go away';
    } else {
      yield next;
    }
  };
};

