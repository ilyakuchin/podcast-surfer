import {
  FETCH_PODCASTS_REQUEST,
  FETCH_PODCASTS_SUCCESS
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
    default:
      return state;
  }
}
