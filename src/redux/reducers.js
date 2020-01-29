import { combineReducers } from 'redux';
import { SET_USERNAME, SET_PASSWORD, LOGIN, LOGOUT } from './actions/userInfo';
import { SET_SEARCH_PHRASE } from './actions/searchPhrase';
import { REQUEST_EPISODE, RECEIVE_EPISODE } from './actions/currentEpisode';
import { REQUEST_PODCASTS, RECEIVE_PODCASTS } from './actions/podcasts';
import {
  REQUEST_CURRENT_PODCAST,
  RECEIVE_CURRENT_PODCAST
} from './actions/currentPodcast';

function userInfo(state = {}, action) {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.username };
    case SET_PASSWORD:
      return { ...state, password: action.password };
    case LOGIN:
      return { ...state, jwt: action.jwt };
    case LOGOUT:
      return { ...state, username: null, password: null, jwt: null };
    default:
      return state;
  }
}

function searchPhrase(state = '', action) {
  switch (action.type) {
    case SET_SEARCH_PHRASE:
      return action.searchPhrase;
    default:
      return state;
  }
}

function podcasts(state = { podcasts: [] }, action) {
  switch (action.type) {
    case REQUEST_PODCASTS:
      return { ...state, isFetching: action.isFetching };
    case RECEIVE_PODCASTS:
      return {
        ...state,
        isFetching: action.isFetching,
        podcasts: action.podcasts
      };
    default:
      return state;
  }
}

function currentPodcast(state = { episodes: [] }, action) {
  switch (action.type) {
    case REQUEST_CURRENT_PODCAST:
      return { isFetching: action.isFetching, episodes: [] };
    case RECEIVE_CURRENT_PODCAST:
      return {
        isFetching: action.isFetching,
        name: action.name,
        description: action.description,
        imageUrl: action.imageUrl,
        episodes: action.episodes,
        rss: action.rss
      };
    default:
      return state;
  }
}

function currentEpisode(state = { isFetching: false }, action) {
  switch (action.type) {
    case REQUEST_EPISODE:
      return {
        isFetching: action.isFetching
      };
    case RECEIVE_EPISODE:
      return {
        isFetching: action.isFetching,
        name: action.name,
        description: action.description,
        imageUrl: action.imageUrl,
        audioUrl: action.audioUrl
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userInfo,
  searchPhrase,
  podcasts,
  currentPodcast,
  currentEpisode
});

export default rootReducer;
