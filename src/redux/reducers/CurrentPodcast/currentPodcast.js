import {
  FETCH_CURRENT_PODCAST_REQUEST,
  FETCH_CURRENT_PODCAST_SUCCESS,
  FETCH_CURRENT_PODCAST_FAILURE
} from '../../actions/CurrentPodcast/currentPodcast';

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
    case FETCH_CURRENT_PODCAST_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case FETCH_CURRENT_PODCAST_SUCCESS:
      return {
        ...state,
        id: action.currentPodcast.id,
        isFetching: action.isFetching,
        name: action.currentPodcast.name,
        description: action.currentPodcast.description,
        imageUrl: action.currentPodcast.imageUrl,
        episodes: action.currentPodcast.episodes,
        rss: action.currentPodcast.rss,
        podcastUrl: action.currentPodcast.podcastUrl
      };
    case FETCH_CURRENT_PODCAST_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    default:
      return state;
  }
}
