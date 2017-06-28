module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const TrackEvent = app.model.define('track_event', {
    category: STRING,
    resource: STRING(100),
    action: {
      type: STRING(100),
    },
    label: {
      type: STRING(100),
    },
    ip: {
      type: STRING(100),
    },
    ua: {
      type: STRING(100),
    },
    comment: {
      type: STRING(100),
    },
    value: INTEGER,
    user_id: INTEGER,
  }, {
    tableName: 'track_event',
  });

  // User.findByLogin = function* (login) {
  //   return yield this.findOne({ login });
  // };

  // User.prototype.logSignin = function* () {
  //   yield this.update({ last_sign_in_at: new Date() });
  // };

  return TrackEvent;
};
