import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/UserInfo/userInfo';
import ConnectedPodcast from '../Podcast/Podcast';
import ConnectedEpisodePlayer from '../EpisodePlayer/EpisodePlayer';
import SearchPodcast from '../SearchPodcast/SearchPodcast';

export function AuthenticatedApp({ username, logoutConnect }) {
  return (
    <div>
      {username}
      <Link to='/' onClick={logoutConnect}>
        Logout
      </Link>
      <Route path='/' component={SearchPodcast} exact />
      <Route path='/podcast' component={ConnectedPodcast} />
      <Route path='/episode-player' component={ConnectedEpisodePlayer} />
    </div>
  );
}

const mapStateToProps = state => {
  return { username: state.userInfo.username };
};

const dispatchToProps = dispatch => {
  return {
    logoutConnect: () => dispatch(logout())
  };
};

AuthenticatedApp.propTypes = {
  username: PropTypes.string.isRequired,
  logoutConnect: PropTypes.func.isRequired
};

const ConnectedAuthenticatedApp = connect(
  mapStateToProps,
  dispatchToProps
)(AuthenticatedApp);

export default ConnectedAuthenticatedApp;
