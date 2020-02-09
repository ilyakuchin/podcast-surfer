import axios from 'axios';
import { FETCH_EPISODE_FAILURE } from '../CurrentEpisode/currentEpisode';

export const FETCH_FEED_REQUEST = 'FETCH_FEED_REQUEST';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
export const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILURE';

export function fetchFeedRequest() {
  return { type: FETCH_FEED_REQUEST, isFetching: true };
}

export function fetchFeedSuccess(feed) {
  return { type: FETCH_FEED_SUCCESS, isFetching: false, feed };
}

export function fetchFeedFailure() {
  return { type: FETCH_EPISODE_FAILURE, isFetching: false };
}

export function fetchFeed(urlList, jwt) {
  return dispatch => {
    dispatch(fetchFeedRequest());
    const promises = [];
    for (let i = 0; i < urlList.length; i += 1) {
      promises.push(
        axios.get(
          `${process.env.REACT_APP_API_URL}/podcast?rss=${urlList[i]}`,
          {
            headers: { authorization: `Bearer ${jwt}` }
          }
        )
      );
    }
    Promise.all(promises).then(res => {
      const episodes = res
        .flatMap(item => item.data.episodes)
        .map(item => {
          item.date = new Date(item.date);
          return item;
        })
        .sort((a, b) => {
          if (a.date < b.date) return 1;
          if (a.date > b.date) return -1;
          return 0;
        });
      dispatch(fetchFeedSuccess(episodes));
    });
  };
}
