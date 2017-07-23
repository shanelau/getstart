const queue = require('../Queue');
var should = require('should');
const _ = require('lodash');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function (done) {
      function createJob(id){
        var job = queue.create('email', {
          title: id
          , to: 'tj@learnboost.com'
          , template: 'welcome-email'
        }).save(function (err) {
          if (err) console.error(err);
          done();
        });
      }

      createJob(1);


    });
  });

  describe('#deplay()', function () {
    it('should return -1 when the value is not present', function (done) {
      function createJob(id) {
        var job = queue.create('emailerr', {
          title: 'fire-' + id
        }).delay(3000).attempts(2).save(function (err) {
          if (err) console.error(err);
          console.log(job.id);
          done();
        });
      }
      createJob(1);
    });
  });
});