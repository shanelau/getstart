const redisClient = require('../redis');
const config = require('../config/default.json');
const CONTRAB_KEY = "crontab.lock";
redisClient.setnx(CONTRAB_KEY, "hello", function (err, data) {
  console.log(err, data);
  if(data === 1){
    console.log(config);
    setTimeout(function() {
      redisClient.del(CONTRAB_KEY)
    }, 1000);
  }
});
