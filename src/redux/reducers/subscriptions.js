import {
  ADD_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from '../actions/Subscriptions/subscriptions';

export default function subscriptions(
  state = { isFetching: false, podcasts: [] },
  action
) {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      return {
        ...state,
        podcasts: [...state.podcasts, action.podcastInfo]
      };
    case REMOVE_SUBSCRIPTION: {
      const index = state.podcasts
        .map(item => item.rss)
        .indexOf(action.podcastUrl);
      if (index !== -1) {
        return {
          ...state,
          podcasts: [
            ...state.podcasts.slice(0, index),
            ...state.podcasts.slice(index + 1)
          ]
        };
      }
      return state;
    }
    default:
      return state;
  }
}
