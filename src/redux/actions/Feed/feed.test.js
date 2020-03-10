import {
  FETCH_FEED_REQUEST,
  fetchFeedRequest,
  FETCH_FEED_SUCCESS,
  fetchFeedSuccess,
  FETCH_FEED_FAILURE,
  fetchFeedFailure,
  sortEpisodesByDate
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

  test('should return -1 because date of episode B less than date of episode A', () => {
    const episodeA = { date: '2020-03-09T07:00:00.000Z' };
    const episodeB = { date: '2020-03-06T17:05:55.000Z' };

    expect(sortEpisodesByDate(episodeA, episodeB)).toEqual(-1);
  });

  test('should return 1 because date of episode A less than date of episode B', () => {
    const episodeA = { date: '2020-01-20T19:38:49.000Z' };
    const episodeB = { date: '2020-03-05T09:30:00.000Z' };

    expect(sortEpisodesByDate(episodeA, episodeB)).toEqual(1);
  });

  test('should return 0 because dates of episodes A and B are equal', () => {
    const episodeA = { date: '2020-01-20T19:38:49.000Z' };
    const episodeB = { date: '2020-01-20T19:38:49.000Z' };

    expect(sortEpisodesByDate(episodeA, episodeB)).toEqual(0);
  });
});
