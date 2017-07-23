module.exports = (queue) => {
  queue.process('email', 2, function (job, done) {
    console.log('job:', job.data.title);
    done();
  });

  queue.process('emailerr', function (job, done) {
    console.log('job:', job.data.title);
      done(new Error('err test'));
  });
}