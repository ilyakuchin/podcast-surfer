import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, Image, Pagination } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentEpisode } from '../../redux/actions/CurrentEpisode/currentEpisode';

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

export function EpisodesList({ episodes, setCurrentEpisodeConnect }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Episodes>
      <Pagination
        defaultActivePage={1}
        totalPages={Math.round(episodes.length / 10)}
        onPageChange={(e, { activePage }) => {
          setCurrentPage(activePage);
        }}
      />
      <List verticalAlign='middle'>
        {episodes
          .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
          .map(({ id, name, description, imageUrl, audioUrl }) => (
            <List.Item key={id}>
              <Image
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'scale-down'
                }}
                src={imageUrl}
              />
              <List.Content>
                <Link
                  onClick={() =>
                    setCurrentEpisodeConnect(
                      name,
                      description,
                      imageUrl,
                      audioUrl
                    )
                  }
                  to='/episode-player'
                >
                  {name}
                </Link>
              </List.Content>
            </List.Item>
          ))}
      </List>
    </Episodes>
  );
}

const mapStateToProps = state => {
  return {
    episodes: state.currentPodcast.episodes
  };
};

const dispatchToProps = dispatch => {
  return {
    setCurrentEpisodeConnect: (name, description, imageUrl, audioUrl) =>
      dispatch(setCurrentEpisode(name, description, imageUrl, audioUrl))
  };
};

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      imageUrl: PropTypes.string
    })
  ).isRequired,
  setCurrentEpisodeConnect: PropTypes.func.isRequired
};

const ConnectedEpisodesList = connect(
  mapStateToProps,
  dispatchToProps
)(EpisodesList);
export default ConnectedEpisodesList;
