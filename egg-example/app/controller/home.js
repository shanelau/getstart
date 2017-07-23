'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
<<<<<<< HEAD
      this.ctx.body = 'hi, egg';
=======
      console.log(app.foo(123));
      console.log(this.ctx.isIOS);
      yield this.ctx.render('home.tpl', {
        title: 'hello world.',
        name: 'lx',
      });
>>>>>>> 0bc9ba5d3cb8cd2d6ffdff436ff59bb68656d489
    }
  }
  return HomeController;
};
