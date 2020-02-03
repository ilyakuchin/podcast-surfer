import axios from 'axios';

export const REQUEST_EPISODE = 'REQUEST_EPISODE';
export const RECEIVE_EPISODE = 'RECEIVE_EPISODE';
export const FETCH_EPISODE_FAILURE = 'FETCH_EPISODE_FAILURE';

export function fetchEpisodeRequest() {
  return { type: REQUEST_EPISODE, isFetching: true };
}

export function fetchEpisodeSuccess(currentEpisode) {
  return {
    type: RECEIVE_EPISODE,
    isFetching: false,
    name: currentEpisode.name,
    description: currentEpisode.description,
    imageUrl: currentEpisode.imageUrl,
    audioUrl: currentEpisode.audioUrl
  };
}

export function fetchEpisodeFailure(ex) {
  return {
    type: FETCH_EPISODE_FAILURE,
    ex
  };
}

export function fetchEpisode(jwt, rss, episodeId) {
  return dispatch => {
    dispatch(fetchEpisodeRequest());
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/episode?rss=${rss}&episodeId=${episodeId}`,
        {
          headers: { authorization: `Bearer ${jwt}` }
        }
      )
      .then(res => {
        dispatch(fetchEpisodeSuccess(res.data));
      });
  };
}
