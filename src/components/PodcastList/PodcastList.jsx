import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Podcasts = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 50px;
  grid-area: results;
  list-style-type: none;
`;

const PodcastGrid = styled.li`
  margin-top: 50px;
  justify-items: center;
  align-items: center;
  max-width: 700px;
  display: grid;
  grid-template-areas: 'podcast-image podcast-link';
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px auto;

  @media (max-width: 600px) {
    grid-template-areas:
      'podcast-image'
      'podcast-link';
  }
`;

const PodcastImage = styled.img`
  grid-area: podcast-image;
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;

const CenterSpinner = styled.div`
  display: grid;
  grid-area: results;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
`;

const PodcastLink = styled.div`
  grid-area: podcast-link;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export default function PodcastList({
  isFetching,
  podcasts,
  fetchCurrentPodcast,
  jwt
}) {
  return !isFetching ? (
    <Podcasts>
      {podcasts.map(({ name, imageUrl, rss }) => (
        <PodcastGrid key={rss}>
          <PodcastImage src={imageUrl} alt='podcast cover' />
          <PodcastLink>
            <Link onClick={() => fetchCurrentPodcast(rss, jwt)} to='/podcast'>
              {name}
            </Link>
          </PodcastLink>
        </PodcastGrid>
      ))}
    </Podcasts>
  ) : (
    <CenterSpinner>
      <LoadingSpinner />
    </CenterSpinner>
  );
}

PodcastList.propTypes = {
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
  fetchCurrentPodcast: PropTypes.func.isRequired
};
