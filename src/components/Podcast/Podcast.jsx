import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedEpisodesList from '../EpisodesList/EpisodesList';
import ConnectedSubscribeButton from '../SubscribeButton/SubscribeButton';

export function Podcast({ isFetching, name, description, imageUrl, jwt }) {
  return !isFetching ? (
    <div>
      <img src={imageUrl} alt='podcast cover' />
      <div>
        {name}
        {jwt !== '' ? <ConnectedSubscribeButton /> : <div />}
      </div>

      <div>{description}</div>
      <ConnectedEpisodesList />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

Podcast.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  jwt: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.currentPodcast.isFetching,
    name: state.currentPodcast.name,
    description: state.currentPodcast.description,
    imageUrl: state.currentPodcast.imageUrl,
    podcastUrl: state.currentPodcast.podcastUrl,
    jwt: state.userInfo.jwt,
  };
};

const ConnectedPodcast = connect(mapStateToProps)(Podcast);

export default ConnectedPodcast;
