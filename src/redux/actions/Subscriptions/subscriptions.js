export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

export function addSubscription(podcastUrl) {
  return { type: ADD_SUBSCRIPTION, podcastUrl };
}

export function removeSubscription(podcastUrl) {
  return { type: REMOVE_SUBSCRIPTION, podcastUrl };
}
