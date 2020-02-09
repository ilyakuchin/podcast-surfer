import {
  ADD_SUBSCRIPTION_REQUEST,
  ADD_SUBSCRIPTION_FAILURE,
  ADD_SUBSCRIPTION_SUCCESS,
  REMOVE_SUBSCRIPTION_REQUEST,
  REMOVE_SUBSCRIPTION_FAILURE,
  REMOVE_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTIONS_REQUEST,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_FAILURE
} from '../actions/Subscriptions/subscriptions';

export default function subscriptions(
  state = { isFetching: false, subscriptions: [], errorMessage: '' },
  action
) {
  switch (action.type) {
    case ADD_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ADD_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        subscriptions: action.subscriptions
      };
    case ADD_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };
    case REMOVE_SUBSCRIPTION_REQUEST: {
      return { ...state, isFetching: action.isFetching };
    }
    case REMOVE_SUBSCRIPTION_SUCCESS: {
      return {
        ...state,
        isFetching: action.isFetching,
        subscriptions: action.subscriptions
      };
    }
    case REMOVE_SUBSCRIPTION_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
        errorMessage: action.errorMessage
      };
    }
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
