import key from 'keymaster';

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export default {

  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({ type: 'add' }); });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * add(action, { call, put }) {
      console.log('A');
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state) {
      const newCurrent = state.current + 1;
      console.log('B');
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1 };
    },
  },

};
