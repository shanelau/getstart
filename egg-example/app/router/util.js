module.exports = app => {
  app.post('/api/util/trackevent', app.controller.util.trackEvent.create);
  app.get('/api/util/trackevent', app.controller.util.trackEvent.read);
};
