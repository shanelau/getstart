const redis = require('redis');
const redisConfig = {
  port: 6379,
  host: '127.0.0.1',
  // password: null,
  db: 0,
};

const redisClient = redis.createClient(redisConfig);

redisClient.on("ready", function (msg) {
  console.log("Redis is ready");
});

redisClient.on("error", function (err) {
  console.error("Error " + err);
});

module.exports = redisClient;