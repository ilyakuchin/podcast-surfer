import {
  FETCH_SUBSCRIPTIONS_REQUEST,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_FAILURE
} from '../../actions/Subscriptions/subscriptions';

export default function subscriptions(
  state = { isFetching: false, subscriptions: [] },
  action
) {
  switch (action.type) {
    case FETCH_SUBSCRIPTIONS_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        subscriptions: action.subscriptions
      };
    case FETCH_SUBSCRIPTIONS_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
}
