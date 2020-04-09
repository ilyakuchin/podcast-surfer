import {
  FETCH_CURRENT_PODCAST_REQUEST,
  fetchCurrentPodcastRequest
} from './currentPodcast';

describe('Test current podcast actions', () => {
  test('should return RECEIVE_CURRENT_PODCAST action', () => {
    const expectedAction = {
      type: FETCH_CURRENT_PODCAST_REQUEST,
      isFetching: true
    };

    expect(fetchCurrentPodcastRequest()).toEqual(expectedAction);
  });
});
