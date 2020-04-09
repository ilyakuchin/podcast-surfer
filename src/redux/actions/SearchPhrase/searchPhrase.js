export const SET_SEARCH_PHRASE = 'SET_SEARCH_PHRASE';

export function setSearchPhrase(searchPhrase) {
  return { type: SET_SEARCH_PHRASE, searchPhrase };
}
