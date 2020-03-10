import {
  FETCH_PODCASTS_REQUEST,
  fetchPodcastsRequest,
  FETCH_PODCASTS_SUCCESS,
  fetchPodcastsSuccess
} from './podcasts';

describe('Test podcast actions', () => {
  test('should return FETCH_PODCASTS_REQUEST action', () => {
    const expectedAction = { type: FETCH_PODCASTS_REQUEST, isFetching: true };
    expect(fetchPodcastsRequest()).toEqual(expectedAction);
  });

  test('should return FETCH_PODCASTS_SUCCESS action', () => {
    const expectedAction = {
      type: FETCH_PODCASTS_SUCCESS,
      isFetching: false,
      podcasts: ['podcast1', 'podcast2'],
      error: ''
    };

    expect(fetchPodcastsSuccess(['podcast1', 'podcast2'])).toEqual(
      expectedAction
    );
  });
});
