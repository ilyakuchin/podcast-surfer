import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedPodcastList from '../PodcastList/PodcastList';
import { fetchSubscriptions } from '../../redux/actions/Subscriptions/subscriptions';

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
    <ConnectedPodcastList podcasts={subscriptions} isFetching={isFetching} />
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
