import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFeed } from '../../redux/actions/Feed/feed';
import { EpisodesList } from '../EpisodesList/EpisodesList';
import { setCurrentEpisode } from '../../redux/actions/CurrentEpisode/currentEpisode';

export function SubscriptionsEpisodeFeed({
  fetchFeedConnect,
  feed,
  subscriptions,
  setCurrentEpisodeConnect,
  isFetching,
}) {
  useEffect(() => fetchFeedConnect(subscriptions), [
    fetchFeedConnect,
    subscriptions,
  ]);

  function podcastGrid() {
    return !feed.length > 0 ? (
      <h2>Feed is empty</h2>
    ) : (
      <div>
        <h2>Feed</h2>
        <div>
          <EpisodesList
            episodes={feed}
            setCurrentEpisodeConnect={setCurrentEpisodeConnect}
          />
        </div>
      </div>
    );
  }

  return !isFetching ? podcastGrid() : <div>Loading...</div>;
}

SubscriptionsEpisodeFeed.propTypes = {
  fetchFeedConnect: PropTypes.func.isRequired,
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
  subscriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentEpisodeConnect: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    subscriptions: state.userInfo.subscriptions,
    feed: state.feed.feed,
    isFetching: state.feed.isFetching,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    fetchFeedConnect: (urlList) => dispatch(fetchFeed(urlList)),
    setCurrentEpisodeConnect: (name, description, imageUrl, audioUrl) =>
      dispatch(setCurrentEpisode(name, description, imageUrl, audioUrl)),
  };
};

const ConnectedSubscriptionsEpisodeFeed = connect(
  mapStateToProps,
  dispatchToProps
)(SubscriptionsEpisodeFeed);

export default ConnectedSubscriptionsEpisodeFeed;
