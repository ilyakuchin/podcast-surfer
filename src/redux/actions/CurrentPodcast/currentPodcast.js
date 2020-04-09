import axios from 'axios';
import { buildPodcastRequestUrl } from '../../../helpers/urls';

export const FETCH_CURRENT_PODCAST_REQUEST = 'FETCH_CURRENT_PODCAST_REQUEST';
export const FETCH_CURRENT_PODCAST_SUCCESS = 'FETCH_CURRENT_PODCAST_SUCCESS';
export const FETCH_CURRENT_PODCAST_FAILURE = 'FETCH_CURRENT_PODCAST_FAILURE';

export function fetchCurrentPodcastRequest() {
  return { type: FETCH_CURRENT_PODCAST_REQUEST, isFetching: true };
}

export function fetchCurrentPodcastSuccess(currentPodcast) {
  return {
    type: FETCH_CURRENT_PODCAST_SUCCESS,
    isFetching: false,
    currentPodcast
  };
}

export function fetchCurrentPodcastFailure(error) {
  return { type: FETCH_CURRENT_PODCAST_FAILURE, isFetching: false, error };
}

export function fetchCurrentPodcast(url) {
  return dispatch => {
    dispatch(fetchCurrentPodcastRequest());
    axios
      .get(buildPodcastRequestUrl(url), { timeout: '10s' })
      .then(res => {
        dispatch(
          fetchCurrentPodcastSuccess({
            id: res.data.id,
            name: res.data.name,
            description: res.data.description,
            imageUrl: res.data.imageUrl,
            episodes: res.data.episodes,
            rss: res.data.rss,
            podcastUrl: res.data.podcastUrl
          })
        );
      })
      .catch(err => {
        if (!err.response) {
          dispatch(
            fetchCurrentPodcastFailure('Error connecting to the server')
          );
        } else {
          dispatch(fetchCurrentPodcastFailure(err.response.data.message));
        }
      });
  };
}
