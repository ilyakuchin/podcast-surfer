import podcasts from './podcasts';
import {
  REQUEST_PODCASTS,
  RECEIVE_PODCASTS
} from '../../actions/Podcasts/podcasts';

describe('Test podcasts reducer', () => {
  test('should return initial state', () => {
    expect(podcasts(undefined, {})).toEqual({
      isFetching: false,
      podcasts: []
    });
  });

  test('should handle REQUEST_PODCASTS', () => {
    expect(
      podcasts(undefined, { type: REQUEST_PODCASTS, isFetching: true })
    ).toEqual({
      isFetching: true,
      podcasts: []
    });
  });

  test('should handle RECEIVE_PODCASTS', () => {
    expect(
      podcasts(undefined, {
        type: RECEIVE_PODCASTS,
        isFetching: false,
        podcasts: ['podcast1', 'podcast2']
      })
    ).toEqual({ isFetching: false, podcasts: ['podcast1', 'podcast2'] });
  });
});
