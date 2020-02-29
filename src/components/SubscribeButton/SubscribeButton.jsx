import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSubscriptions } from '../../redux/actions/UserInfo/userInfo';

function isSubscribed(subscriptions, currentPodcastUrl) {
  if (subscriptions) {
    const index = subscriptions.indexOf(currentPodcastUrl);
    return index !== -1;
  }
  return false;
}

export function SubscribeButton({
  subscriptions,
  currentPodcastUrl,
  jwt,
  updateSubscriptionsConnect
}) {
  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          if (!isSubscribed(subscriptions, currentPodcastUrl)) {
            updateSubscriptionsConnect(
              [...subscriptions, currentPodcastUrl],
              jwt
            );
          } else {
            const index = subscriptions.indexOf(currentPodcastUrl);
            if (index !== -1) {
              updateSubscriptionsConnect(
                [
                  ...subscriptions.slice(0, index),
                  ...subscriptions.slice(index + 1)
                ],
                jwt
              );
            }
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

SubscribeButton.propTypes = {
  subscriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPodcastUrl: PropTypes.string.isRequired,
  jwt: PropTypes.string.isRequired,
  updateSubscriptionsConnect: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    subscriptions: state.userInfo.subscriptions,
    currentPodcastImageUrl: state.currentPodcast.imageUrl,
    jwt: state.userInfo.jwt,
    currentPodcastUrl: state.currentPodcast.rss
  };
};

const dispatchToProps = dispatch => {
  return {
    updateSubscriptionsConnect: (subscriptions, jwt) =>
      dispatch(updateSubscriptions(subscriptions, jwt))
  };
};

const ConnectedSubscribeButton = connect(
  mapStateToProps,
  dispatchToProps
)(SubscribeButton);

export default ConnectedSubscribeButton;
