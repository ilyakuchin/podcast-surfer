import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../helpers/history';
import { setSearchPhrase } from '../../redux/actions/SearchPhrase/searchPhrase';
import { searchPodcasts } from '../../redux/actions/Podcasts/podcasts';

export function SearchForm({
  searchPhrase,
  jwt,
  setSearchPhraseConnect,
  searchPodcastsConnect,
}) {
  return (
    <form
      onSubmit={(e) => {
        searchPodcastsConnect(e, searchPhrase, jwt);
        history.push('/search');
      }}
    >
      <input
        value={searchPhrase}
        onChange={setSearchPhraseConnect}
        action={{
          icon: 'search',
        }}
        placeholder='Search...'
      />
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    searchPhrase: state.searchPhrase,
    jwt: state.userInfo.jwt,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    searchPodcastsConnect: (e, searchPhrase, jwt) =>
      dispatch(searchPodcasts(e, searchPhrase, jwt)),
    setSearchPhraseConnect: (e) => dispatch(setSearchPhrase(e.target.value)),
  };
};

SearchForm.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  jwt: PropTypes.string.isRequired,
  setSearchPhraseConnect: PropTypes.func.isRequired,
  searchPodcastsConnect: PropTypes.func.isRequired,
};

const ConnectedSearchForm = connect(
  mapStateToProps,
  dispatchStateToProps
)(SearchForm);

export default ConnectedSearchForm;
