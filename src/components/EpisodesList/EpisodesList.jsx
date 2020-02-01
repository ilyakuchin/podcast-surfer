import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEpisode } from '../../redux/actions/currentEpisode';

const Episodes = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 700px;
  grid-area: episodes;
  list-style-type: none;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const EpisodeGrid = styled.li`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-gap: 15px;
  grid-template-areas: 'episode-image episode-link';
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px auto;

  @media (max-width: 600px) {
    margin-top: 50px;
    margin-bottom: 50px;
    grid-template-columns: auto;
    grid-template-areas:
      'episode-image'
      'episode-link';
  }
`;

const EpisodeImage = styled.img`
  grid-area: episode-image;
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;

const EpisodeLink = styled.div`
  max-width: 700px;
  grid-area: episode-link;

  @media (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export function EpisodesList({ jwt, rss, episodes, fetchEpisodeConnect }) {
  return (
    <Episodes>
      {episodes.map(({ id, name, imageUrl }) => (
        <EpisodeGrid key={id}>
          <EpisodeImage src={imageUrl} alt='episode cover' />
          <EpisodeLink>
            <Link
              onClick={() => fetchEpisodeConnect(jwt, rss, id)}
              to='/episode-player'
            >
              {name}
            </Link>
          </EpisodeLink>
        </EpisodeGrid>
      ))}
    </Episodes>
  );
}

const mapStateToProps = state => {
  return {
    rss: state.currentPodcast.rss,
    episodes: state.currentPodcast.episodes,
    jwt: state.userInfo.jwt
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchEpisodeConnect: (jwt, rss, id) => dispatch(fetchEpisode(jwt, rss, id))
  };
};

EpisodesList.propTypes = {
  jwt: PropTypes.string.isRequired,
  rss: PropTypes.string.isRequired,
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      imageUrl: PropTypes.string
    })
  ).isRequired,
  fetchEpisodeConnect: PropTypes.func.isRequired
};

const ConnectedEpisodesList = connect(
  mapStateToProps,
  dispatchToProps
)(EpisodesList);
export default ConnectedEpisodesList;
