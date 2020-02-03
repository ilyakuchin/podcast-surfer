import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { logout } from '../../redux/actions/UserInfo/userInfo';
import ConnectedPodcast from '../Podcast/Podcast';
import ConnectedEpisodePlayer from '../EpisodePlayer/EpisodePlayer';
import SearchPodcast from '../SearchPodcast/SearchPodcast';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const UserProfile = styled.div`
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export function AuthenticatedApp({ username, logoutConnect }) {
  return (
    <Container>
      <UserProfile>
        {username}
        <div>
          <Link to='/' onClick={logoutConnect}>
            Logout
          </Link>
        </div>
      </UserProfile>
      <Route path='/' component={SearchPodcast} exact />
      <Route path='/podcast' component={ConnectedPodcast} />
      <Route path='/episode-player' component={ConnectedEpisodePlayer} />
    </Container>
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
