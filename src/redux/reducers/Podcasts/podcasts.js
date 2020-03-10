import {
  FETCH_PODCASTS_REQUEST,
  FETCH_PODCASTS_SUCCESS,
  FETCH_PODCASTS_FAILURE
} from '../../actions/Podcasts/podcasts';

export default function podcasts(
  state = { isFetching: false, podcasts: [] },
  action
) {
  switch (action.type) {
    case FETCH_PODCASTS_REQUEST:
      return { ...state, isFetching: action.isFetching };
    case FETCH_PODCASTS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        podcasts: action.podcasts
      };
    case FETCH_PODCASTS_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    default:
      return state;
  }
}
