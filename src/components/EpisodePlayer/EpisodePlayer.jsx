import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Grid = styled.div`
  position: relative;
  bottom: 15px;
  margin-top: 30px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
  grid-template-areas:
    'pic header'
    'pic audio '
    'description description';
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-areas:
      'pic'
      'header'
      'audio'
      'description';
  }
`;

const Pic = styled.img`
  grid-area: pic;
  width: 200px;
  height: 200px;
  margin-left: 10px;
  @media (max-width: 600px) {
    margin: 0;
    max-width: 50%;
    max-height: 50%;
  }
  object-fit: scale-down;
`;

const Header = styled.h2`
  grid-area: header;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Audio = styled.audio`
  grid-area: audio;
  width: 95%;
`;

const Description = styled.div`
  grid-area: description;
  max-width: 700px;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  white-space: pre-line;
`;

export function EpisodePlayer({ name, description, imageUrl, audioUrl }) {
  return (
    <Grid>
      <Pic src={imageUrl} alt='' />
      <Header>{name}</Header>
      <Audio controls>
        <source src={audioUrl} type='audio/mp4' />
      </Audio>
      <Description>{description}</Description>
    </Grid>
  );
}

EpisodePlayer.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  audioUrl: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    isFetching: state.currentEpisode.isFetching,
    name: state.currentEpisode.name,
    description: state.currentEpisode.description,
    imageUrl: state.currentEpisode.imageUrl,
    audioUrl: state.currentEpisode.audioUrl
  };
};

const ConnectedEpisodePlayer = connect(mapStateToProps)(EpisodePlayer);

export default ConnectedEpisodePlayer;
