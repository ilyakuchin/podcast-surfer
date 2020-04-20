import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function EpisodePlayer({ name, description, imageUrl, audioUrl }) {
  return (
    <div>
      <img src={imageUrl} alt='' />
      <h2>{name}</h2>
      <audio controls>
        <source src={audioUrl} type='audio/mp4' />
      </audio>
      <div>{description}</div>
    </div>
  );
}

EpisodePlayer.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  audioUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.currentEpisode.isFetching,
    name: state.currentEpisode.name,
    description: state.currentEpisode.description,
    imageUrl: state.currentEpisode.imageUrl,
    audioUrl: state.currentEpisode.audioUrl,
  };
};

const ConnectedEpisodePlayer = connect(mapStateToProps)(EpisodePlayer);

export default ConnectedEpisodePlayer;
