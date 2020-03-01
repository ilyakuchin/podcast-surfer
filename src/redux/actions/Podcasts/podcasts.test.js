import {
  REQUEST_PODCASTS,
  requestPodcasts,
  RECEIVE_PODCASTS,
  receivePodcasts
} from './podcasts';

describe('Test podcast actions', () => {
  test('should return REQUEST_PODCASTS action', () => {
    const expectedAction = { type: REQUEST_PODCASTS, isFetching: true };
    expect(requestPodcasts()).toEqual(expectedAction);
  });

  test('should return RECEIVE_PODCASTS action', () => {
    const expectedAction = {
      type: RECEIVE_PODCASTS,
      isFetching: false,
      podcasts: ['podcast1', 'podcast2']
    };

    expect(receivePodcasts(['podcast1', 'podcast2'])).toEqual(expectedAction);
  });
});
