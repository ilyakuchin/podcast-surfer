import React from 'react';
import { connect } from 'react-redux';
import {
  addSubscription,
  removeSubscription
} from '../../redux/actions/Subscriptions/subscriptions';

function isSubscribed(subscriptions, currentPodcastId) {
  if (subscriptions) {
    const index = subscriptions
      .map(item => {
        return item.id;
      })
      .indexOf(currentPodcastId);
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
  removeSubscription
}) {
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          if (!isSubscribed(subscriptions, currentPodcastId)) {
            addSubscription({
              currentPodcastId,
              currentPodcastName,
              currentPodcastDescription,
              currentPodcastImageUrl,
              currentPodcastUrl
            });
          } else {
            removeSubscription(currentPodcastUrl);
          }
        }}
        type='button'
      >
        {!isSubscribed(subscriptions, currentPodcastId)
          ? 'Subscribe'
          : 'Unsbscribe'}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    subscriptions: state.subscriptions.podcasts,
    currentPodcastId: state.currentPodcast.id,
    currentPodcastName: state.currentPodcast.name,
    currentPodcastDescription: state.currentPodcast.description,
    currentPodcastImageUrl: state.currentPodcast.imageUrl,
    currentPodcastUrl: state.currentPodcast.rss
  };
};

const dispatchToProps = dispatch => {
  return {
    addSubscription: podcastInfo => dispatch(addSubscription(podcastInfo)),
    removeSubscription: podcastUrl => dispatch(removeSubscription(podcastUrl))
  };
};

const ConnectedSubscribeButton = connect(
  mapStateToProps,
  dispatchToProps
)(SubscribeButton);

export default ConnectedSubscribeButton;
