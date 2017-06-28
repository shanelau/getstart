module.exports = appInfo => {
  return {
    sequelize: {
      // 单数据库信息配置
      dialect: 'mysql',
        // host
      host: '127.0.0.1',
        // 端口号
      port: '3306',
        // 用户名
      user: 'root',
        // 密码
      password: 'root',
        // 数据库名
      database: 'egg',
      debug: true,
      options: {
        timezone: '+08:00',
      },
      // 是否加载到 app 上，默认开启
    },
  };
}
;
