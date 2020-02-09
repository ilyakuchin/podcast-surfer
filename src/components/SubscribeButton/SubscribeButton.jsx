import React from 'react';
import { connect } from 'react-redux';
import {
  addSubscription,
  removeSubscription
} from '../../redux/actions/Subscriptions/subscriptions';

function isSubscribed(subscriptions, currentPodcastUrl) {
  if (subscriptions) {
    const index = subscriptions
      .map(item => item.rss)
      .indexOf(currentPodcastUrl);
    return index !== -1;
  }
  return false;
}

export function SubscribeButton({
  subscriptions,
  currentPodcastId,
  currentPodcastName,
  currentPodcastDescription,
  currentPodcastImageUrl,
  currentPodcastUrl,
  addSubscription,
  removeSubscription,
  username,
  jwt
}) {
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          if (!isSubscribed(subscriptions, currentPodcastUrl)) {
            addSubscription(currentPodcastUrl, username, jwt);
          } else {
            removeSubscription(currentPodcastUrl, username, jwt);
          }
        }}
        type='button'
      >
        {!isSubscribed(subscriptions, currentPodcastUrl)
          ? 'Subscribe'
          : 'Unsbscribe'}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    subscriptions: state.subscriptions.subscriptions,
    currentPodcastId: state.currentPodcast.id,
    currentPodcastName: state.currentPodcast.name,
    currentPodcastDescription: state.currentPodcast.description,
    currentPodcastImageUrl: state.currentPodcast.imageUrl,
    currentPodcastUrl: state.currentPodcast.rss,
    username: state.userInfo.username,
    jwt: state.userInfo.jwt
  };
};

const dispatchToProps = dispatch => {
  return {
    addSubscription: (podcastUrl, username, jwt) =>
      dispatch(addSubscription(podcastUrl, username, jwt)),
    removeSubscription: (podcastUrl, username, jwt) =>
      dispatch(removeSubscription(podcastUrl, username, jwt))
  };
};

const ConnectedSubscribeButton = connect(
  mapStateToProps,
  dispatchToProps
)(SubscribeButton);

export default ConnectedSubscribeButton;
