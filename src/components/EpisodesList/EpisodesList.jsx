import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentEpisode } from '../../redux/actions/CurrentEpisode/currentEpisode';

export function EpisodesList({ episodes, setCurrentEpisodeConnect }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div>
        {episodes
          .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
          .map(({ id, name, description, imageUrl, audioUrl }) => (
            <div key={id}>
              <img
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'scale-down',
                }}
                src={imageUrl}
              />
              <div>
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
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    episodes: state.currentPodcast.episodes,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    setCurrentEpisodeConnect: (name, description, imageUrl, audioUrl) =>
      dispatch(setCurrentEpisode(name, description, imageUrl, audioUrl)),
  };
};

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
  setCurrentEpisodeConnect: PropTypes.func.isRequired,
};

const ConnectedEpisodesList = connect(
  mapStateToProps,
  dispatchToProps
)(EpisodesList);
export default ConnectedEpisodesList;
