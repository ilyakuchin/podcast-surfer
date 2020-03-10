import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Loader, Dimmer, Header } from 'semantic-ui-react';
import { fetchFeed } from '../../redux/actions/Feed/feed';
import { EpisodesList } from '../EpisodesList/EpisodesList';
import { setCurrentEpisode } from '../../redux/actions/CurrentEpisode/currentEpisode';

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

  function podcastGrid() {
    return !feed.length > 0 ? (
      <div>Feed is empty</div>
    ) : (
      <div>
        <Header as='h2'>Feed</Header>
        <PodcastGrid>
          <EpisodesList
            episodes={feed}
            setCurrentEpisodeConnect={setCurrentEpisodeConnect}
          />
        </PodcastGrid>
      </div>
    );
  }

  return !isFetching ? (
    podcastGrid()
  ) : (
    <Dimmer active inverted>
      <Loader size='massive'>Loading</Loader>
    </Dimmer>
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
