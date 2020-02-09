import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchFeed } from '../../redux/actions/Feed/feed';
import { EpisodesList } from '../EpisodesList/EpisodesList';
import { fetchEpisode } from '../../redux/actions/CurrentEpisode/currentEpisode';
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

function SubscriptionsEpisodeFeed({
  fetchFeedConnect,
  feed,
  subscriptions,
  jwt,
  fetchEpisodeConnect,
  isFetching
}) {
  useEffect(
    () =>
      fetchFeedConnect(
        subscriptions.map(item => item.rss),
        jwt
      ),
    [fetchFeedConnect, subscriptions, jwt]
  );
  return !isFetching ? (
    <PodcastGrid>
      <EpisodesList
        jwt={jwt}
        episodes={feed}
        fetchEpisodeConnect={fetchEpisodeConnect}
      />
    </PodcastGrid>
  ) : (
    <CenterSpinner>
      <LoadingSpinner />
    </CenterSpinner>
  );
}

const mapStateToProps = state => {
  return {
    subscriptions: state.subscriptions.subscriptions,
    feed: state.feed.feed,
    jwt: state.userInfo.jwt,
    isFetching: state.feed.isFetching
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchFeedConnect: (urlList, jwt) => dispatch(fetchFeed(urlList, jwt)),
    fetchEpisodeConnect: (jwt, podcastUrl, id) =>
      dispatch(fetchEpisode(jwt, podcastUrl, id))
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(SubscriptionsEpisodeFeed);
