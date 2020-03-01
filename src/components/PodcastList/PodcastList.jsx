import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Loader, Dimmer } from 'semantic-ui-react';
import { fetchCurrentPodcast } from '../../redux/actions/CurrentPodcast/currentPodcast';

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

const PodcastLink = styled.div`
  grid-area: podcast-link;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export function PodcastList({
  isFetching,
  podcasts,
  fetchCurrentPodcastConnect
}) {
  return !isFetching ? (
    <Podcasts>
      {podcasts.map(({ name, imageUrl, rss }) => (
        <PodcastGrid key={rss}>
          <PodcastImage src={imageUrl} alt='podcast cover' />
          <PodcastLink>
            <Link onClick={() => fetchCurrentPodcastConnect(rss)} to='/podcast'>
              {name}
            </Link>
          </PodcastLink>
        </PodcastGrid>
      ))}
    </Podcasts>
  ) : (
    <Dimmer active inverted>
      <Loader size='massive'>Loading</Loader>
    </Dimmer>
  );
}

const dispatchToProps = dispatch => {
  return {
    fetchCurrentPodcastConnect: rss => dispatch(fetchCurrentPodcast(rss))
  };
};

const ConnectedPodcastList = connect(null, dispatchToProps)(PodcastList);

export default ConnectedPodcastList;

PodcastList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      rss: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  fetchCurrentPodcastConnect: PropTypes.func.isRequired
};
