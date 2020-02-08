export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

export const FETCH_SUBSCRIPTIONS_REQUEST = 'FETCH_SUBSCRIPTIONS_REQUEST';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_EPISODE_SUCCESS';
export const FETCH_SUBSCRIPTIONS_FAILURE = 'FETCH_SUBSCRIPTIONS_FAILURE';

export function addSubscription(podcastInfo) {
  return {
    type: ADD_SUBSCRIPTION,
    podcastInfo: {
      id: podcastInfo.currentPodcastId,
      name: podcastInfo.currentPodcastName,
      description: podcastInfo.currentPodcastDescription,
      image: podcastInfo.currentPodcastImageUrl,
      rss: podcastInfo.currentPodcastUrl
    }
  };
}

export function removeSubscription(podcastUrl) {
  return { type: REMOVE_SUBSCRIPTION, podcastUrl };
}

export function fetchSubscriptionRequest() {
  return { type: FETCH_SUBSCRIPTIONS_REQUEST, isFetching: true };
}

export function fetchSubscriptionSuccess(podcasts) {
  return { type: FETCH_SUBSCRIPTIONS_SUCCESS, podcasts };
}

export function fetchSubscriptions() {
  return fetchSubscriptionSuccess();
}
