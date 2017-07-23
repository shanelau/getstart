
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({ type: 'getList', payload: {} });
      dispatch({ type: 'getUser', payload: {} });
    },
  },

  effects: {
    *getList({ payload }, { call, put }) {  // eslint-disable-line
      const user = yield call(getUser, payload.id);
      yield put({ type: 'save', payload: { user } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
