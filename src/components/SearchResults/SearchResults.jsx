import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message, Grid } from 'semantic-ui-react';
import ConnectedPodcastList from '../PodcastList/PodcastList';

export function SearchResults({ podcasts, isFetching, error }) {
  return (
    <div>
      {error !== '' ? (
        <Grid textAlign='center' columns={1} container stackable>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Message negative>
              <Message.Header>Error</Message.Header>
              <p>{error}</p>
            </Message>
          </Grid.Column>
        </Grid>
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
