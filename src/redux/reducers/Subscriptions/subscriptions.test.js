import subscriptions from './subscriptions';
import {
  FETCH_SUBSCRIPTIONS_REQUEST,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_FAILURE
} from '../../actions/Subscriptions/subscriptions';

describe('Tests for subscriptions reducer', () => {
  test('should return initial state', () => {
    expect(subscriptions(undefined, {})).toEqual({
      isFetching: false,
      subscriptions: []
    });
  });

  test('should handle FETCH_SUBSCRIPTIONS_REQUEST', () => {
    expect(
      subscriptions(undefined, {
        type: FETCH_SUBSCRIPTIONS_REQUEST,
        isFetching: true
      })
    ).toEqual({
      isFetching: true,
      subscriptions: []
    });
  });

  test('should handle FETCH_SUBSCRIPTIONS_SUCCESS', () => {
    expect(
      subscriptions(undefined, {
        type: FETCH_SUBSCRIPTIONS_SUCCESS,
        isFetching: false,
        subscriptions: ['podcast1', 'podcast2', 'podcast3']
      })
    ).toEqual({
      isFetching: false,
      subscriptions: ['podcast1', 'podcast2', 'podcast3']
    });
  });

  test('should handle FETCH_SUBSCRIPTIONS_FAILURE', () => {
    expect(
      subscriptions(undefined, {
        type: FETCH_SUBSCRIPTIONS_FAILURE,
        isFetching: false,
        errorMessage: 'error'
      })
    ).toEqual({
      isFetching: false,
      errorMessage: 'error',
      subscriptions: []
    });
  });
});
