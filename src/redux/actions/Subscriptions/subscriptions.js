import axios from 'axios';

export const ADD_SUBSCRIPTION_REQUEST = 'ADD_SUBSCRIPTION_REQUEST';
export const ADD_SUBSCRIPTION_SUCCESS = 'ADD_SUBSCRIPTION_SUCCESS';
export const ADD_SUBSCRIPTION_FAILURE = 'ADD_SUBSCRIPTION_FAILURE';

export const REMOVE_SUBSCRIPTION_REQUEST = 'REMOVE_SUBSCRIPTION_REQUEST';
export const REMOVE_SUBSCRIPTION_SUCCESS = 'REMOVE_SUBSCRIPTION_SUCCESS';
export const REMOVE_SUBSCRIPTION_FAILURE = 'REMOVE_SUBSCRIPTION_FAILURE';

export const FETCH_SUBSCRIPTIONS_REQUEST = 'FETCH_SUBSCRIPTIONS_REQUEST';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_EPISODE_SUCCESS';
export const FETCH_SUBSCRIPTIONS_FAILURE = 'FETCH_SUBSCRIPTIONS_FAILURE';

export function addSubscriptionRequest() {
  return { type: ADD_SUBSCRIPTION_REQUEST, isFetching: true };
}

export function addSubscriptionSuccess(subscriptions) {
  return { type: ADD_SUBSCRIPTION_SUCCESS, isFetching: false, subscriptions };
}

export function addSubscriptionFailure() {
  return { type: ADD_SUBSCRIPTION_FAILURE, isFetching: false };
}

export function addSubscription(podcastUrl, username, jwt) {
  return dispatch => {
    dispatch(addSubscriptionRequest());
    axios
      .post(`${process.env.REACT_APP_API_URL}/addSubscription`, {
        headers: { authorization: `Bearer ${jwt}` },
        username,
        podcastUrl
      })
      .then(res => dispatch(fetchSubscriptions(username, jwt)))
      .catch(err => dispatch(addSubscriptionFailure()));
  };
}

export function removeSubscriptionRequest() {
  return { type: REMOVE_SUBSCRIPTION_REQUEST, isFetching: true };
}

export function removeSubscriptionSuccess(subscriptions) {
  return {
    type: REMOVE_SUBSCRIPTION_SUCCESS,
    isFetching: false,
    subscriptions
  };
}

export function removeSubscriptionFailure(errorMessage) {
  return { type: REMOVE_SUBSCRIPTION_FAILURE, isFetching: false, errorMessage };
}

export function removeSubscription(podcastUrl, username, jwt) {
  console.log('removesubscription');
  console.log(jwt);
  return dispatch => {
    dispatch(removeSubscriptionRequest());
    axios
      .post(`${process.env.REACT_APP_API_URL}/deleteSubscription`, {
        headers: { authorization: `Bearer ${jwt}` },
        username,
        podcastUrl
      })
      .then(res => dispatch(fetchSubscriptions(username, jwt)))
      .catch(err => dispatch(removeSubscriptionFailure(err.message)));
  };
}

export function fetchSubscriptionRequest() {
  return { type: FETCH_SUBSCRIPTIONS_REQUEST, isFetching: true };
}

export function fetchSubscriptionSuccess(subscriptions) {
  return { type: FETCH_SUBSCRIPTIONS_SUCCESS, subscriptions };
}

export function fetchSubscriptions(username, jwt) {
  return dispatch => {
    dispatch(fetchSubscriptionRequest());
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/subscriptions?username=${username}`,
        {
          headers: { authorization: `Bearer ${jwt}` }
        }
      )
      .then(res => {
        let promises = [];
        for (let i = 0; i < res.data.length; i += 1) {
          promises.push(
            axios.get(
              `${process.env.REACT_APP_API_URL}/podcast?rss=${res.data[i]}`,
              {
                headers: { authorization: `Bearer ${jwt}` }
              }
            )
          );
        }
        return Promise.all(promises);
      })
      .then(res => {
        dispatch(fetchSubscriptionSuccess(res.map(item => item.data)));
      });
  };
}
