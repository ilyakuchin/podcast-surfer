import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentPodcast } from '../../redux/actions/CurrentPodcast/currentPodcast';
import PodcastList from '../PodcastList/PodcastList';

export function SearchResults({
  isFetching,
  jwt,
  podcasts,
  fetchCurrentPodcastConnect
}) {
  return (
    <PodcastList
      podcasts={podcasts}
      isFetching={isFetching}
      jwt={jwt}
      fetchCurrentPodcast={fetchCurrentPodcastConnect}
    />
  );
}

SearchResults.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  jwt: PropTypes.string.isRequired,
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      rss: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  fetchCurrentPodcastConnect: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    jwt: state.userInfo.jwt,
    podcasts: state.podcasts.podcasts,
    isFetching: state.podcasts.isFetching
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchCurrentPodcastConnect: (rss, jwt) =>
      dispatch(fetchCurrentPodcast(rss, jwt))
  };
};

const ConnectedSearchResults = connect(
  mapStateToProps,
  dispatchToProps
)(SearchResults);

export default ConnectedSearchResults;
