module.exports = app => {
  class TrackEventService extends app.Service {
    * create(data) {
      const events = yield app.mysql.insert('track_event', data);
      return events.affectedRows >= 1;
    }

    * read(data) {
      const events = yield app.mysql.select('track_event', data);
      return events;
    }
  }
  return TrackEventService;
};
