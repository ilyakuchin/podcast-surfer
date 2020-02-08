import {
  REQUEST_CURRENT_PODCAST,
  RECEIVE_CURRENT_PODCAST
} from '../actions/CurrentPodcast/currentPodcast';

export default function currentPodcast(
  state = {
    id: '',
    isFetching: false,
    isSubscribed: false,
    name: '',
    description: '',
    imageUrl: '',
    rss: '',
    episodes: [],
    podcastUrl: ''
  },
  action
) {
  switch (action.type) {
    case REQUEST_CURRENT_PODCAST:
      return { ...state, isFetching: action.isFetching, episodes: [] };
    case RECEIVE_CURRENT_PODCAST:
      return {
        ...state,
        id: action.id,
        isFetching: action.isFetching,
        name: action.name,
        description: action.description,
        imageUrl: action.imageUrl,
        episodes: action.episodes,
        rss: action.rss,
        podcastUrl: action.podcastUrl
      };
    default:
      return state;
  }
}
