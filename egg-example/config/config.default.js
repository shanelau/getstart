'use strict';

module.exports = appInfo => {
  const config = {
    dump: {
      ignore: new Set([ 'pass', 'pwd', 'passd', 'passwd', 'password', 'keys', 'secret' ]),
    },
    compress: {
      threshold: 2048,
    },
    gzip: {
      match(ctx) {
        // 只有 ios 设备才开启
        const reg = /iphone|ipad|ipod/i;
        return reg.test(ctx.get('user-agent'));
      },
    },
    i18n: {
      queryField: 'locale',
      cookieField: 'locale',
      // Cookie 默认一年后过期， 如果设置为 Number，则单位为 ms
      cookieMaxAge: '1y',
    },
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
        headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
    },

  };

  // should change to your own
  config.keys = appInfo.name + '_1497857036837_454';

  // add your config here
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.mysql = {
    enable: true,
    package: 'egg-mysql',
    pass: 'lx',
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  config.errorHandler = {
    match: '/api',
  };
  config.middleware = [
    'errorHandler',
    'reqLog',
    'robot',
    // 'zlib',
    // 'compress',
  ];
  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };


  return config;
};
