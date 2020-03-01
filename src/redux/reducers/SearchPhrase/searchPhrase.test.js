import searchPhrase from './searchPhrase';
import { SET_SEARCH_PHRASE } from '../../actions/SearchPhrase/searchPhrase';

describe('Test searchPhrase reducer', () => {
  test('should return initial state', () => {
    expect(searchPhrase(undefined, {})).toEqual('');
  });

  test('should handle SET_SEARCH_PHRASE', () => {
    expect(
      searchPhrase(undefined, {
        type: SET_SEARCH_PHRASE,
        searchPhrase: 'searchPhrase'
      })
    ).toEqual('searchPhrase');
  });
});
