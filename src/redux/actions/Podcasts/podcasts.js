import axios from 'axios';
import { buildSearchPodcastUrl } from '../../../helpers/urls';

export const FETCH_PODCASTS_REQUEST = 'FETCH_PODCASTS_REQUEST';
export const FETCH_PODCASTS_SUCCESS = 'FETCH_PODCASTS_SUCCESS';
export const FETCH_PODCASTS_FAILURE = 'FETCH_PODCASTS_FAILURE';

export function fetchPodcastsRequest() {
  return { type: FETCH_PODCASTS_REQUEST, isFetching: true };
}

export function fetchPodcastsSuccess(podcasts) {
  return { type: FETCH_PODCASTS_SUCCESS, isFetching: false, podcasts };
}

export function fetchPodcastsFailure(error) {
  return { type: FETCH_PODCASTS_FAILURE, isFetching: false, error };
}

export function searchPodcasts(e, searchPhrase) {
  e.preventDefault();

  return dispatch => {
    dispatch(fetchPodcastsRequest());
    return axios
      .get(buildSearchPodcastUrl(searchPhrase))
      .then(res => {
        dispatch(fetchPodcastsSuccess(res.data));
      })
      .catch(error => dispatch(fetchPodcastsFailure(error)));
  };
}
