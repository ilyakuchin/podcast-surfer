import { SET_CURRENT_EPISODE } from '../../actions/CurrentEpisode/currentEpisode';

export default function currentEpisode(
  state = {
    name: '',
    description: '',
    imageUrl: '',
    audioUrl: '',
    error: {}
  },
  action
) {
  switch (action.type) {
    case SET_CURRENT_EPISODE:
      return {
        ...state,
        name: action.name,
        description: action.description,
        imageUrl: action.imageUrl,
        audioUrl: action.audioUrl
      };
    default:
      return state;
  }
}
