import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader, Dimmer, Card, Image } from 'semantic-ui-react';
import { fetchCurrentPodcast } from '../../redux/actions/CurrentPodcast/currentPodcast';

export function PodcastList({
  isFetching,
  podcasts,
  fetchCurrentPodcastConnect
}) {
  return !isFetching ? (
    <Card.Group>
      {podcasts.map(({ name, imageUrl, rss }) => (
        <Card centered key={rss}>
          <Card.Content textAlign='center'>
            <Image
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'scale-down'
              }}
              src={imageUrl}
              ui={false}
            />
            <Card.Header textAlign='center'>
              <Link
                onClick={() => fetchCurrentPodcastConnect(rss)}
                to='/podcast'
              >
                {name}
              </Link>
            </Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
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
