'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      console.log(app.foo(123));
      console.log(this.ctx.isIOS);
      yield this.ctx.render('home.tpl', {
        title: 'hello world.',
        name: 'lx',
      });
    }
  }
  return HomeController;
};
