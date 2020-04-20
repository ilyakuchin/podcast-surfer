import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentPodcast } from '../../redux/actions/CurrentPodcast/currentPodcast';

export function PodcastList({
  isFetching,
  podcasts,
  fetchCurrentPodcastConnect,
}) {
  return !isFetching ? (
    <div>
      {podcasts.map(({ name, imageUrl, rss }) => (
        <div key={rss}>
          <div>
            <img
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'scale-down',
              }}
              src={imageUrl}
              ui={false}
            />
            <div>
              <Link
                onClick={() => fetchCurrentPodcastConnect(rss)}
                to='/podcast'
              >
                {name}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

const dispatchToProps = (dispatch) => {
  return {
    fetchCurrentPodcastConnect: (rss) => dispatch(fetchCurrentPodcast(rss)),
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
      name: PropTypes.string,
    })
  ).isRequired,
  fetchCurrentPodcastConnect: PropTypes.func.isRequired,
};
