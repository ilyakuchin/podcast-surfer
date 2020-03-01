import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedPodcastList from '../PodcastList/PodcastList';
import { fetchPopularPodcasts } from '../../redux/actions/PopularPodcasts/popularPodcasts';

function PopularPodcasts({
  fetchPopularPodcastsConnect,
  popularPodcasts,
  isFetching
}) {
  useEffect(() => {
    fetchPopularPodcastsConnect();
  }, [fetchPopularPodcastsConnect]);

  return (
    <ConnectedPodcastList podcasts={popularPodcasts} isFetching={isFetching} />
  );
}

PopularPodcasts.propTypes = {
  fetchPopularPodcastsConnect: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  popularPodcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      rss: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    popularPodcasts: state.popularPodcasts.podcasts,
    isFetching: state.popularPodcasts.isFetching
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchPopularPodcastsConnect: () => dispatch(fetchPopularPodcasts())
  };
};

export default connect(mapStateToProps, dispatchToProps)(PopularPodcasts);
