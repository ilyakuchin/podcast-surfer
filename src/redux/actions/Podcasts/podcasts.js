import axios from 'axios';

export const REQUEST_PODCASTS = 'REQUEST_PODCASTS';
export const RECEIVE_PODCASTS = 'RECEIVE_PODCASTS';

export function requestPodcasts() {
  return { type: REQUEST_PODCASTS, isFetching: true };
}

export function receivePodcasts(podcasts) {
  return { type: RECEIVE_PODCASTS, isFetching: false, podcasts };
}

export function searchPodcasts(e, searchPhrase, jwt) {
  e.preventDefault();

  return dispatch => {
    dispatch(requestPodcasts());
    return axios
      .get(`${process.env.REACT_APP_API_URL}/podcasts?name=${searchPhrase}`, {
        headers: { authorization: `Bearer ${jwt}` }
      })
      .then(res => {
        dispatch(receivePodcasts(res.data));
      });
  };
}

export function fetchPopularPodcasts() {
  return dispatch => {
    dispatch(requestPodcasts());
    return axios
      .get(`${process.env.REACT_APP_API_URL}/popular`)
      .then(res => dispatch(receivePodcasts(res.data)));
  };
}
