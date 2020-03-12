import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Message, Grid } from 'semantic-ui-react';
import ConnectedPodcastList from '../PodcastList/PodcastList';
import { fetchPopularPodcasts } from '../../redux/actions/PopularPodcasts/popularPodcasts';

function PopularPodcasts({
  fetchPopularPodcastsConnect,
  popularPodcasts,
  isFetching,
  error
}) {
  useEffect(() => {
    fetchPopularPodcastsConnect();
  }, [fetchPopularPodcastsConnect]);

  return (
    <div>
      <Header as='h2' textAlign='center'>
        Popular podcasts
      </Header>
      {error !== '' ? (
        <Grid textAlign='center' columns={1} container stackable>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Message negative>
              <Message.Header>Error</Message.Header>
              <p>{error}</p>
            </Message>
          </Grid.Column>
        </Grid>
      ) : (
        <ConnectedPodcastList
          podcasts={popularPodcasts}
          isFetching={isFetching}
        />
      )}
    </div>
  );
}

PopularPodcasts.propTypes = {
  fetchPopularPodcastsConnect: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  popularPodcasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      rss: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    popularPodcasts: state.popularPodcasts.podcasts,
    isFetching: state.popularPodcasts.isFetching,
    error: state.popularPodcasts.error
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchPopularPodcastsConnect: () => dispatch(fetchPopularPodcasts())
  };
};

export default connect(mapStateToProps, dispatchToProps)(PopularPodcasts);
