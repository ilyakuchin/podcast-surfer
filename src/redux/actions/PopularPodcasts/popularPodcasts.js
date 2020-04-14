import axios from 'axios';
import { popularPodcastsUrl } from '../../../helpers/urls';

export const FETCH_POPULAR_PODCASTS_REQUEST = 'FETCH_POPULAR_PODCASTS_REQUEST';
export const FETCH_POPULAR_PODCASTS_SUCCESS = 'FETCH_POPULAR_PODCASTS_SUCCESS';
export const FETCH_POPULAR_PODCASTS_FAILURE = 'FETCH_POPULAR_PODCASTS_FAILURE';

export function fetchPopularPodcastsRequest() {
  return { type: FETCH_POPULAR_PODCASTS_REQUEST, isFetching: true };
}

export function fetchPopularPodcastsSuccess(popularPodcasts) {
  return {
    type: FETCH_POPULAR_PODCASTS_SUCCESS,
    isFetching: false,
    popularPodcasts
  };
}

export function fetchPopularPodcastsFailure(error) {
  return {
    type: FETCH_POPULAR_PODCASTS_FAILURE,
    isFetching: false,
    error
  };
}

export function fetchPopularPodcasts() {
  return dispatch => {
    dispatch(fetchPopularPodcastsRequest());
    return axios
      .get(popularPodcastsUrl, { timeout: '10s' })
      .then(res => {
        dispatch(fetchPopularPodcastsSuccess(res.data));
      })
      .catch(err => {
        if (!err.response) {
          dispatch(
            fetchPopularPodcastsFailure('Error connecting to the server')
          );
        } else {
          dispatch(fetchPopularPodcastsFailure(err.response.data.message));
        }
      });
  };
}
