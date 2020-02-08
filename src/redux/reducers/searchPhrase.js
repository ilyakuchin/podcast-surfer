import { SET_SEARCH_PHRASE } from '../actions/SearchPhrase/searchPhrase';

export default function searchPhrase(state = '', action) {
  switch (action.type) {
    case SET_SEARCH_PHRASE:
      return action.searchPhrase;
    default:
      return state;
  }
}
