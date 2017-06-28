'use strict';
const path = require('path');

// had enabled by egg
// exports.static = true;

module.exports = {
  ua: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua'),
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql: {
    enable: true,
    package: 'egg-sequelize',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },

}
;
