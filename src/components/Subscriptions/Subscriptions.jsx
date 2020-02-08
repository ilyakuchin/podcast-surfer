import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PodcastList from '../PodcastList/PodcastList';
import { fetchCurrentPodcast } from '../../redux/actions/CurrentPodcast/currentPodcast';
import { fetchSubscriptions } from '../../redux/actions/Subscriptions/subscriptions';

export function Subscriptions({
  isFetching,
  subscriptions,
  jwt,
  fetchCurrentPodcastConnect,
  fetchSubscriptionsConnect
}) {
  useEffect(() => {
    fetchSubscriptionsConnect();
  }, [fetchSubscriptionsConnect]);

  return (
    <PodcastList
      jwt={jwt}
      podcasts={subscriptions}
      isFetching={isFetching}
      fetchCurrentPodcast={fetchCurrentPodcastConnect}
    />
  );
}

const mapStateToProps = state => {
  return {
    subscriptions: state.subscriptions.podcasts,
    isFetching: state.subscriptions.isFetching,
    jwt: state.userInfo.jwt
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchCurrentPodcastConnect: (rss, jwt, id) =>
      dispatch(fetchCurrentPodcast(rss, jwt, id)),
    fetchSubscriptionsConnect: () => dispatch(fetchSubscriptions())
  };
};

const ConnectedSubscriptions = connect(
  mapStateToProps,
  dispatchToProps
)(Subscriptions);

export default ConnectedSubscriptions;
