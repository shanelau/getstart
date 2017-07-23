
/**
 * deal function
 */
const q = require('./Queue');

require('./services/MailService')(q);
require('./check/ContrabTask');

process.once('SIGTERM', function (sig) {
  queue.shutdown(5000, function (err) {
    console.log('Kue shutdown: ', err || '');
    process.exit(0);
  });
});