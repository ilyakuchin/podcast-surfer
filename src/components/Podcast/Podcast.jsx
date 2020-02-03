import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ConnectedEpisodesList from '../EpisodesList/EpisodesList';

const PodcastGrid = styled.div`
  display: grid;
  width: 100%
  margin-top: 30px;
  justify-items: center;
  grid-gap: 15px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "podcast-img podcast-title"
    "podcast-img podcast-description"
    "episodes episodes";

  @media(max-width: 600px) {
    grid-template-areas:
    "podcast-img"
    "podcast-title"
    "podcast-description"
    "episodes";
  }
`;

const PodcastImg = styled.img`
  grid-area: podcast-img;
  margin-left: 10px;
  width: 300px;
  height: 300px;
  object-fit: scale-down;

  @media (max-width: 600px) {
    margin: 0;
    max-width: 65%;
    max-height: 65%;
  }
`;

const PodcastTitle = styled.h2`
  grid-area: podcast-title;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const PodcastDescription = styled.p`
  grid-area: podcast-description;
  max-width: 700px;
  white-space: pre-line;

  @media (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export function Podcast({ isFetching, name, description, imageUrl }) {
  return !isFetching ? (
    <PodcastGrid>
      <PodcastImg src={imageUrl} alt='podcast cover' />
      <PodcastTitle>{name}</PodcastTitle>
      <PodcastDescription>{description}</PodcastDescription>
      <ConnectedEpisodesList />
    </PodcastGrid>
  ) : (
    <LoadingSpinner />
  );
}

Podcast.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    isFetching: state.currentPodcast.isFetching,
    name: state.currentPodcast.name,
    description: state.currentPodcast.description,
    imageUrl: state.currentPodcast.imageUrl
  };
};

const ConnectedPodcast = connect(mapStateToProps)(Podcast);

export default ConnectedPodcast;
