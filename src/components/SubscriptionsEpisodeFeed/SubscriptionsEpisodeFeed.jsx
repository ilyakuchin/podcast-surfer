import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fetchFeed } from '../../redux/actions/Feed/feed';
import { EpisodesList } from '../EpisodesList/EpisodesList';
import { setCurrentEpisode } from '../../redux/actions/CurrentEpisode/currentEpisode';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const PodcastGrid = styled.div`
  display: grid;
  width: 100%;
  margin-top: 30px;
  justify-items: center;
  grid-gap: 15px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: 'episodes';
`;

const CenterSpinner = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
`;

export function SubscriptionsEpisodeFeed({
  fetchFeedConnect,
  feed,
  subscriptions,
  setCurrentEpisodeConnect,
  isFetching
}) {
  useEffect(() => fetchFeedConnect(subscriptions), [
    fetchFeedConnect,
    subscriptions
  ]);
  return !isFetching ? (
    <PodcastGrid>
      <EpisodesList
        episodes={feed}
        setCurrentEpisodeConnect={setCurrentEpisodeConnect}
      />
    </PodcastGrid>
  ) : (
    <CenterSpinner>
      <LoadingSpinner />
    </CenterSpinner>
  );
}

SubscriptionsEpisodeFeed.propTypes = {
  fetchFeedConnect: PropTypes.func.isRequired,
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      imageUrl: PropTypes.string
    })
  ).isRequired,
  subscriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentEpisodeConnect: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    subscriptions: state.userInfo.subscriptions,
    feed: state.feed.feed,
    isFetching: state.feed.isFetching
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchFeedConnect: urlList => dispatch(fetchFeed(urlList)),
    setCurrentEpisodeConnect: (name, description, imageUrl, audioUrl) =>
      dispatch(setCurrentEpisode(name, description, imageUrl, audioUrl))
  };
};

const ConnectedSubscriptionsEpisodeFeed = connect(
  mapStateToProps,
  dispatchToProps
)(SubscriptionsEpisodeFeed);

export default ConnectedSubscriptionsEpisodeFeed;
