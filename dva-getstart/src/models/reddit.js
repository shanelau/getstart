import fetch from 'isomorphic-fetch';

export default {

  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    requestPosts(state, action) {

    },
    receivePosts(state, action) {

    },
  },
  effects: {
    fetchPosts(subreddit) {
      return (dispatch) => {
        dispatch(requestPosts(subreddit));
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
          .then(response => response.json())
          .then(json => dispatch(receivePosts(subreddit, json)));
      };
    },
  },


};
