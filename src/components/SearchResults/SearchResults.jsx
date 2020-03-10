import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ConnectedPodcastList from '../PodcastList/PodcastList';

export function SearchResults({ podcasts, isFetching, error }) {
  return (
    <div>
      {error !== '' ? (
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error}</p>
        </Message>
      ) : (
        <ConnectedPodcastList podcasts={podcasts} isFetching={isFetching} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts.podcasts,
    isFetching: state.podcasts.isFetching,
    error: state.podcasts.error
  };
};

SearchResults.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      rss: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  error: PropTypes.string.isRequired
};

const ConnectedSearchResults = connect(mapStateToProps)(SearchResults);

export default ConnectedSearchResults;
