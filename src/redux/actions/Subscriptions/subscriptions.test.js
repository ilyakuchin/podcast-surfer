import {
  FETCH_SUBSCRIPTIONS_REQUEST,
  fetchSubscriptionsRequest
} from './subscriptions';

describe('Test subscriptions actions', () => {
  test('should return FETCH_SUBSCRIPTION_REQUEST action', () => {
    const expectedAction = {
      type: FETCH_SUBSCRIPTIONS_REQUEST,
      isFetching: true
    };

    expect(fetchSubscriptionsRequest()).toEqual(expectedAction);
  });
});
