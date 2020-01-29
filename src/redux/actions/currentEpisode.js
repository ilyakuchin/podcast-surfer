import axios from 'axios';

export const REQUEST_EPISODE = 'REQUEST_EPISODE';
export const RECEIVE_EPISODE = 'RECEIVE_EPISODE';

export function requestEpisode() {
  return { type: REQUEST_EPISODE, isFetching: true };
}

export function receiveEpisode(currentEpisode) {
  return {
    type: RECEIVE_EPISODE,
    isFetching: false,
    name: currentEpisode.name,
    description: currentEpisode.description,
    imageUrl: currentEpisode.imageUrl,
    audioUrl: currentEpisode.audioUrl
  };
}

export function fetchEpisode(jwt, rss, episodeId) {
  return dispatch => {
    dispatch(requestEpisode());
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/episode?rss=${rss}&episodeId=${episodeId}`,
        {
          headers: { authorization: `Bearer ${jwt}` }
        }
      )
      .then(res => {
        dispatch(receiveEpisode(res.data));
      });
  };
}
