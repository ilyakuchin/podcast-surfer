import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import ConnectedPodcastList from '../PodcastList/PodcastList';
import { fetchSubscriptions } from '../../redux/actions/Subscriptions/subscriptions';

const ComponentGrid = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-areas: 'results';
`;

export function Subscriptions({
  fetchSubscriptionsConnect,
  subscriptionUrls,
  subscriptions,
  isFetching
}) {
  useEffect(() => {
    fetchSubscriptionsConnect(subscriptionUrls);
  }, [fetchSubscriptionsConnect, subscriptionUrls]);

  return (
    <div>
      {subscriptions.length > 0 ? (
        <Header as='h2'>Subscriptions</Header>
      ) : (
        <Header as='h2'>There is no subscriptions yet</Header>
      )}
      <ComponentGrid>
        <ConnectedPodcastList
          podcasts={subscriptions}
          isFetching={isFetching}
        />
      </ComponentGrid>
    </div>
  );
}

Subscriptions.propTypes = {
  fetchSubscriptionsConnect: PropTypes.func.isRequired,
  subscriptionUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  subscriptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
      episodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          description: PropTypes.string,
          imageUrl: PropTypes.string,
          audioUrl: PropTypes.string,
          date: PropTypes.string,
          podcastUrl: PropTypes.string
        })
      ),
      rss: PropTypes.string
    })
  ).isRequired,
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    subscriptionUrls: state.userInfo.subscriptions,
    username: state.userInfo.username,
    subscriptions: state.subscriptions.subscriptions,
    isFetching: state.subscriptions.isFetching
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchSubscriptionsConnect: (username, jwt) =>
      dispatch(fetchSubscriptions(username, jwt))
  };
};

const ConnectedSubscriptions = connect(
  mapStateToProps,
  dispatchToProps
)(Subscriptions);

export default ConnectedSubscriptions;
