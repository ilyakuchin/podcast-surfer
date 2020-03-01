import {
  FETCH_FEED_REQUEST,
  fetchFeedRequest,
  FETCH_FEED_SUCCESS,
  fetchFeedSuccess,
  FETCH_FEED_FAILURE,
  fetchFeedFailure
} from './feed';

describe('Test feed actions', () => {
  test('should return FETCH_FEED_REQUEST action', () => {
    const expectedAction = { type: FETCH_FEED_REQUEST, isFetching: true };

    expect(fetchFeedRequest()).toEqual(expectedAction);
  });

  test('should return FETCH_FEED_SUCCESS action', () => {
    const expectedAction = {
      type: FETCH_FEED_SUCCESS,
      isFetching: false,
      feed: ['episode1', 'episode2']
    };

    expect(fetchFeedSuccess(['episode1', 'episode2'])).toEqual(expectedAction);
  });

  test('should return FETCH_FEED_FAILURE action', () => {
    const expectedAction = {
      type: FETCH_FEED_FAILURE,
      isFetching: false
    };

    expect(fetchFeedFailure()).toEqual(expectedAction);
  });
});
