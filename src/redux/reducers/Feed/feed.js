import {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE
} from '../../actions/Feed/feed';

export default function feed(state = { isFetching: false, feed: [] }, action) {
  switch (action.type) {
    case FETCH_FEED_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_FEED_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        feed: action.feed
      };
    case FETCH_FEED_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    default:
      return state;
  }
}
