import { SET_SEARCH_PHRASE, setSearchPhrase } from './searchPhrase';

describe('Test searchPhrase actions', () => {
  test('should create setSearchPhrase action correctly', () => {
    const expectedAction = {
      type: SET_SEARCH_PHRASE,
      searchPhrase: 'searchPhrase'
    };
    expect(setSearchPhrase('searchPhrase')).toEqual(expectedAction);
  });
});
