import {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS
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
    default:
      return state;
  }
}
