import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentPodcast } from '../../redux/actions/CurrentPodcast/currentPodcast';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { fetchPopularPodcasts } from '../../redux/actions/Podcasts/podcasts';

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

export function SearchResults({
  isFetching,
  jwt,
  podcasts,
  fetchCurrentPodcastConnect,
  fetchPopularPodcasts
}) {
  useEffect(() => {
    fetchPopularPodcasts();
  }, [fetchPopularPodcasts]);
  return !isFetching ? (
    <Podcasts>
      {podcasts.map(({ id, name, image, rss }) => (
        <PodcastGrid key={id}>
          <PodcastImage src={image} alt='podcast cover' />
          <PodcastLink>
            <Link
              onClick={() => fetchCurrentPodcastConnect(rss, jwt)}
              to='/podcast'
            >
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

SearchResults.propTypes = {
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
  fetchCurrentPodcastConnect: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    jwt: state.userInfo.jwt,
    podcasts: state.podcasts.podcasts,
    isFetching: state.podcasts.isFetching
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchCurrentPodcastConnect: (rss, jwt) =>
      dispatch(fetchCurrentPodcast(rss, jwt)),
    fetchPopularPodcasts: () => dispatch(fetchPopularPodcasts())
  };
};

const ConnectedSearchResults = connect(
  mapStateToProps,
  dispatchToProps
)(SearchResults);

export default ConnectedSearchResults;
