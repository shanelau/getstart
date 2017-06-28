const rule = {
  category: {
    type: 'string',
    max: 100,
  },
  action: {
    type: 'string',
    max: 100,
  },
  label: {
    type: 'string',
    max: 500,
    required: false,
  },
  resource: { type: 'int', required: false },
};

module.exports = app => {
  class TrackEventController extends app.Controller {
    /**
     *
     * @memberof TrackEventController
     */
    * create() {
      const { request } = this.ctx;
      let data = request.body;
      data = data.map(event => {
        this.ctx.validate(rule, event);
        event.ua = request.headers['user-agent'];

        event.ip = request.ip || request.headers['x-forwarded-for'] ||
          request.connection.remoteAddress ||
          request.socket.remoteAddress ||
          request.connection.socket.remoteAddress;
        return event;
      });
      const result = yield this.ctx.model.TrackEvent.bulkCreate(data);
      this.ctx.body = {
        code: 200,
        data: result,
      };
    }
    * read() {
      const data = this.ctx.request.query;
      console.log(data);
      const query = {};
      if (data.where) query.where = JSON.parse(data.where);
      if (data.attributes) query.attributes = JSON.parse(data.attributes);
      if (data.order) query.order = JSON.parse(data.order);
      if (data.limit) query.limit = +data.limit;
      if (data.offset) query.offset = +data.offset;
      console.log(query);

      const result = yield this.ctx.model.TrackEvent.findAll(query);
      this.ctx.body = {
        code: 200,
        data: result,
      };
    }
  }
  return TrackEventController;
}
;
