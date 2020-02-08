import {
  FETCH_EPISODE_REQUEST,
  FETCH_EPISODE_SUCCESS
} from '../actions/CurrentEpisode/currentEpisode';

export default function currentEpisode(
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
    case FETCH_EPISODE_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_EPISODE_SUCCESS:
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
