import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { setSearchPhrase } from '../../redux/actions/searchPhrase';
import { searchPodcasts } from '../../redux/actions/podcasts';

const Search = styled.form`
  margin-top: 30px;
  grid-area: search;
  display: grid;
  max-width: 700px;
  align-self: center;
  justify-self: center;
  grid-template-columns: 10fr 1fr;
  grid-template-areas: 'input button';
`;

const SearchInput = styled.input`
  grid-area: input;
  font-size: 18px;
`;

const SearchButton = styled.button`
  grid-area: button;
  font-size: 18px;
`;

export function SearchForm({
  searchPhrase,
  jwt,
  setSearchPhraseConnect,
  searchPodcastsConnect
}) {
  return (
    <Search>
      <SearchInput
        type='text'
        placeholder='Search podcast..'
        name='search'
        value={searchPhrase}
        onChange={setSearchPhraseConnect}
      />
      <SearchButton
        type='submit'
        onClick={e => searchPodcastsConnect(e, searchPhrase, jwt)}
      >
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </Search>
  );
}

const mapStateToProps = state => {
  return {
    searchPhrase: state.searchPhrase,
    jwt: state.userInfo.jwt
  };
};

const dispatchStateToProps = dispatch => {
  return {
    searchPodcastsConnect: (e, searchPhrase, jwt) =>
      dispatch(searchPodcasts(e, searchPhrase, jwt)),
    setSearchPhraseConnect: e => dispatch(setSearchPhrase(e.target.value))
  };
};

SearchForm.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  jwt: PropTypes.string.isRequired,
  setSearchPhraseConnect: PropTypes.func.isRequired,
  searchPodcastsConnect: PropTypes.func.isRequired
};

const ConnectedSearchForm = connect(
  mapStateToProps,
  dispatchStateToProps
)(SearchForm);

export default ConnectedSearchForm;
