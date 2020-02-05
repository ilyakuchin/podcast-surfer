import { combineReducers } from 'redux';
import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN,
  LOGOUT,
  CLEAR_USER_INFO,
  SET_VALIDATION_ERROR_MESSAGE
} from './actions/UserInfo/userInfo';
import {
  ADD_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from './actions/Subscriptions/subscriptions';
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

function userInfo(
  state = {
    username: '',
    password: '',
    validationErrorMessage: '',
    jwt: '',
    subscptions: []
  },
  action
) {
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
        password: action.password,
        validationErrorMessage: action.validationErrorMessage
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

function podcasts(state = { isFetching: false, podcasts: [] }, action) {
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

function currentPodcast(
  state = {
    isFetching: false,
    isSubscribed: false,
    name: '',
    description: '',
    imageUrl: '',
    rss: '',
    episodes: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CURRENT_PODCAST:
      return { ...state, isFetching: action.isFetching, episodes: [] };
    case RECEIVE_CURRENT_PODCAST:
      return {
        ...state,
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

function currentEpisode(
  state = {
    isFetching: false,
    name: '',
    description: '',
    imageUrl: '',
    audioUrl: ''
  },
  action
) {
  switch (action.type) {
    case REQUEST_EPISODE:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case RECEIVE_EPISODE:
      return {
        ...state,
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

export function subscriptions(state = [], action) {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      return [...state, action.podcastUrl];
    case REMOVE_SUBSCRIPTION: {
      const index = state.indexOf(action.podcastUrl);
      if (index !== -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userInfo,
  searchPhrase,
  podcasts,
  currentPodcast,
  currentEpisode,
  subscriptions
});

export default rootReducer;
