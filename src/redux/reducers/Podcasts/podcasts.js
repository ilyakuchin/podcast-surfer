import {
  REQUEST_PODCASTS,
  RECEIVE_PODCASTS
} from '../../actions/Podcasts/podcasts';

export default function podcasts(
  state = { isFetching: false, podcasts: [] },
  action
) {
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
