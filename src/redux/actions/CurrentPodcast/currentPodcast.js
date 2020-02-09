import axios from 'axios';

export const REQUEST_CURRENT_PODCAST = 'REQUEST_CURRENT_PODCAST';
export const RECEIVE_CURRENT_PODCAST = 'RECEIVE_CURRENT_PODCAST';

export function requestCurrentPodcast() {
  return { type: REQUEST_CURRENT_PODCAST, isFetching: true };
}

export function receiveCurrentPodcast(currentPodcast) {
  return {
    type: RECEIVE_CURRENT_PODCAST,
    id: currentPodcast.id,
    isFetching: false,
    name: currentPodcast.name,
    description: currentPodcast.description,
    imageUrl: currentPodcast.imageUrl,
    episodes: currentPodcast.episodes,
    rss: currentPodcast.rss,
    podcastUrl: currentPodcast.podcastUrl
  };
}

export function fetchCurrentPodcast(rss, jwt) {
  return dispatch => {
    dispatch(requestCurrentPodcast());
    return axios
      .get(`${process.env.REACT_APP_API_URL}/podcast?rss=${rss}`, {
        headers: { authorization: `Bearer ${jwt}` }
      })
      .then(res => {
        dispatch(receiveCurrentPodcast(res.data));
      });
  };
}
