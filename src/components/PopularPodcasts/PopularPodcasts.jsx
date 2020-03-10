import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Message } from 'semantic-ui-react';
import ConnectedPodcastList from '../PodcastList/PodcastList';
import { fetchPopularPodcasts } from '../../redux/actions/PopularPodcasts/popularPodcasts';

function PopularPodcasts({
  fetchPopularPodcastsConnect,
  popularPodcasts,
  isFetching,
  error
}) {
  useEffect(() => {
    fetchPopularPodcastsConnect();
  }, [fetchPopularPodcastsConnect]);

  return (
    <div>
      <Header as='h2'>Popular podcasts</Header>
      {error !== '' ? (
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error}</p>
        </Message>
      ) : (
        <ConnectedPodcastList
          podcasts={popularPodcasts}
          isFetching={isFetching}
        />
      )}
    </div>
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
    isFetching: state.popularPodcasts.isFetching,
    error: state.popularPodcasts.error
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchPopularPodcastsConnect: () => dispatch(fetchPopularPodcasts())
  };
};

export default connect(mapStateToProps, dispatchToProps)(PopularPodcasts);
