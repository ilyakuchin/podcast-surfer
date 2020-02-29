import feed from './feed';
import {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS
} from '../../actions/Feed/feed';

describe('Test feed reducer', () => {
  test('should return initial state', () => {
    expect(feed(undefined, {})).toEqual({ isFetching: false, feed: [] });
  });

  test('should handle FETCH_FEED_REQUEST', () => {
    expect(
      feed(undefined, { type: FETCH_FEED_REQUEST, isFetching: true })
    ).toEqual({ isFetching: true, feed: [] });
  });

  test('should handle FETCH_FEED_SUCCESS', () => {
    expect(
      feed(undefined, {
        type: FETCH_FEED_SUCCESS,
        isFetching: false,
        feed: ['episode1', 'episode2']
      })
    ).toEqual({ isFetching: false, feed: ['episode1', 'episode2'] });
  });
});
