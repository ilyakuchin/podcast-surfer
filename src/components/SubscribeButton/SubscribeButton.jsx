import React from 'react';
import { connect } from 'react-redux';
import {
  addSubscription,
  removeSubscription
} from '../../redux/actions/Subscriptions/subscriptions';

function isSubscribed(subscriptions, currentPodcast) {
  if (subscriptions) {
    const index = subscriptions.indexOf(currentPodcast);
    return index !== -1;
  }
  return false;
}

export function SubscribeButton({
  subscriptions,
  currentPodcastName,
  addSubscription,
  removeSubscription
}) {
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          if (!isSubscribed(subscriptions, currentPodcastName)) {
            addSubscription(currentPodcastName);
          } else {
            removeSubscription(currentPodcastName);
          }
        }}
        type='button'
      >
        {!isSubscribed(subscriptions, currentPodcastName)
          ? 'Subscribe'
          : 'Unsbscribe'}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    subscriptions: state.subscriptions,
    currentPodcastName: state.currentPodcast.name
  };
};

const dispatchToProps = dispatch => {
  return {
    addSubscription: name => dispatch(addSubscription(name)),
    removeSubscription: name => dispatch(removeSubscription(name))
  };
};

const ConnectedSubscribeButton = connect(
  mapStateToProps,
  dispatchToProps
)(SubscribeButton);

export default ConnectedSubscribeButton;
