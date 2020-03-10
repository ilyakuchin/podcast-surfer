import podcasts from './podcasts';
import {
  FETCH_PODCASTS_REQUEST,
  FETCH_PODCASTS_SUCCESS,
  FETCH_PODCASTS_FAILURE
} from '../../actions/Podcasts/podcasts';

describe('Test podcasts reducer', () => {
  test('should return initial state', () => {
    expect(podcasts(undefined, {})).toEqual({
      isFetching: false,
      podcasts: []
    });
  });

  test('should handle FETCH_PODCASTS_REQUEST', () => {
    expect(
      podcasts(undefined, { type: FETCH_PODCASTS_REQUEST, isFetching: true })
    ).toEqual({
      isFetching: true,
      podcasts: []
    });
  });

  test('should handle FETCH_PODCASTS_SUCCESS', () => {
    expect(
      podcasts(undefined, {
        type: FETCH_PODCASTS_SUCCESS,
        isFetching: false,
        podcasts: ['podcast1', 'podcast2']
      })
    ).toEqual({ isFetching: false, podcasts: ['podcast1', 'podcast2'] });
  });

  test('should handle FETCH_PODCASTS_FAILURE', () => {
    expect(
      podcasts(undefined, {
        type: FETCH_PODCASTS_FAILURE,
        isFetching: false,
        error: 'error'
      })
    ).toEqual({ isFetching: false, error: 'error', podcasts: [] });
  });
});
