import axios from 'axios';
import { buildSearchPodcastUrl } from '../../../helpers/urls';

export const REQUEST_PODCASTS = 'REQUEST_PODCASTS';
export const RECEIVE_PODCASTS = 'RECEIVE_PODCASTS';

export function requestPodcasts() {
  return { type: REQUEST_PODCASTS, isFetching: true };
}

export function receivePodcasts(podcasts) {
  return { type: RECEIVE_PODCASTS, isFetching: false, podcasts };
}

export function searchPodcasts(e, searchPhrase) {
  e.preventDefault();

  return dispatch => {
    dispatch(requestPodcasts());
    return axios.get(buildSearchPodcastUrl(searchPhrase)).then(res => {
      dispatch(receivePodcasts(res.data));
    });
  };
}
