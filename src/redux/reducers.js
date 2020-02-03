import { combineReducers } from 'redux';
import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN,
  LOGOUT,
  CLEAR_USER_INFO,
  SET_VALIDATION_ERROR_MESSAGE
} from './actions/UserInfo/userInfo';
import { SET_SEARCH_PHRASE } from './actions/SearchPhrase/searchPhrase';
import {
  REQUEST_EPISODE,
  RECEIVE_EPISODE
} from './actions/CurrentEpisode/currentEpisode';
import {
  REQUEST_PODCASTS,
  RECEIVE_PODCASTS
} from './actions/Podcasts/podcasts';
import {
  REQUEST_CURRENT_PODCAST,
  RECEIVE_CURRENT_PODCAST
} from './actions/CurrentPodcast/currentPodcast';

function userInfo(state = {}, action) {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.username };
    case SET_PASSWORD:
      return { ...state, password: action.password };
    case LOGIN:
      return { ...state, jwt: action.jwt };
    case LOGOUT:
      return {
        ...state,
        username: action.username,
        password: action.password,
        jwt: action.jwt
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        username: action.username,
        password: action.password
      };
    case SET_VALIDATION_ERROR_MESSAGE:
      return {
        ...state,
        validationErrorMessage: action.validationErrorMessage
      };
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
