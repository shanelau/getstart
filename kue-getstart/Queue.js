var kue = require('kue');
const redisClient = require('./redis');

var q = kue.createQueue({
  prefix: 'q',
  redis: redisClient
});
q.app = kue.app;

module.exports = q;


