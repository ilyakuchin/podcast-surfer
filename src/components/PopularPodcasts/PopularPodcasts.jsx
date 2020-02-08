import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PodcastList from '../PodcastList/PodcastList';
import { fetchPopularPodcasts } from '../../redux/actions/Podcasts/podcasts';
import { fetchCurrentPodcast } from '../../redux/actions/CurrentPodcast/currentPodcast';

function PopularPodcasts({
  podcasts,
  isFetching,
  jwt,
  fetchCurrentPodcastConnect,
  fetchPopularPodcastsConnect
}) {
  useEffect(() => {
    fetchPopularPodcastsConnect();
  }, [fetchPopularPodcastsConnect]);

  return (
    <PodcastList
      podcasts={podcasts}
      isFetching={isFetching}
      jwt={jwt}
      fetchCurrentPodcast={fetchCurrentPodcastConnect}
    />
  );
}

PopularPodcasts.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  jwt: PropTypes.string.isRequired,
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      rss: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  fetchCurrentPodcastConnect: PropTypes.func.isRequired,
  fetchPopularPodcastsConnect: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts.podcasts,
    jwt: state.userInfo.jwt,
    isFetching: state.podcasts.isFetching
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchCurrentPodcastConnect: (rss, jwt) =>
      dispatch(fetchCurrentPodcast(rss, jwt)),
    fetchPopularPodcastsConnect: () => dispatch(fetchPopularPodcasts())
  };
};

export default connect(mapStateToProps, dispatchToProps)(PopularPodcasts);
