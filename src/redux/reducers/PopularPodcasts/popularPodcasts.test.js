import popularPodcasts from './popularPodcasts';
import {
  FETCH_POPULAR_PODCASTS_REQUEST,
  FETCH_POPULAR_PODCASTS_SUCCESS,
  FETCH_POPULAR_PODCASTS_FAILURE
} from '../../actions/PopularPodcasts/popularPodcasts';

describe('Test popularPodcasts reducer', () => {
  test('should return initial state', () => {
    expect(popularPodcasts(undefined, {})).toEqual({
      isFetching: false,
      podcasts: [],
      error: ''
    });
  });

  test('should handle FETCH_POPULAR_PODCASTS_REQUEST action', () => {
    expect(
      popularPodcasts(undefined, {
        type: FETCH_POPULAR_PODCASTS_REQUEST,
        isFetching: true
      })
    ).toEqual({
      isFetching: true,
      podcasts: [],
      error: ''
    });
  });

  test('should handle FETCH_POPULAR_PODCASTS_SUCCESS action', () => {
    expect(
      popularPodcasts(undefined, {
        type: FETCH_POPULAR_PODCASTS_SUCCESS,
        isFetching: false,
        popularPodcasts: ['podcast1', 'podcast2', 'podcast3']
      })
    ).toEqual({
      isFetching: false,
      podcasts: ['podcast1', 'podcast2', 'podcast3'],
      error: ''
    });
  });

  test('should handle FETCH_POPULAR_PODCASTS_FAILURE action', () => {
    expect(
      popularPodcasts(undefined, {
        type: FETCH_POPULAR_PODCASTS_FAILURE,
        isFetching: false,
        error: 'error'
      })
    ).toEqual({
      isFetching: false,
      podcasts: [],
      error: 'error'
    });
  });
});
