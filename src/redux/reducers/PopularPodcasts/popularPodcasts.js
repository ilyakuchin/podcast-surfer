import {
  FETCH_POPULAR_PODCASTS_REQUEST,
  FETCH_POPULAR_PODCASTS_SUCCESS,
  FETCH_POPULAR_PODCASTS_FAILURE
} from '../../actions/PopularPodcasts/popularPodcasts';

export default function podcasts(
  state = { isFetching: false, podcasts: [], error: '' },
  action
) {
  switch (action.type) {
    case FETCH_POPULAR_PODCASTS_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case FETCH_POPULAR_PODCASTS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        podcasts: action.popularPodcasts
      };
    case FETCH_POPULAR_PODCASTS_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    default:
      return state;
  }
}
