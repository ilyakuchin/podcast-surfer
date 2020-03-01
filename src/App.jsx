import React, { useEffect } from 'react';
import { Switch, Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import history from './helpers/history';
import './App.css';
import ConnectedPodcast from './components/Podcast/Podcast';
import ConnectedEpisodePlayer from './components/EpisodePlayer/EpisodePlayer';
import ConnectedSearchPodcast from './components/SearchPodcast/SearchPodcast';
import { fetchUser, logout } from './redux/actions/UserInfo/userInfo';
import ConnectedSubscriptions from './components/Subscriptions/Subscriptions';
import ConnectedLogin from './components/Login/Login';
import ConnectedSubscriptionsEpisodeFeed from './components/SubscriptionsEpisodeFeed/SubscriptionsEpisodeFeed';
import ConnectedSignup from './components/Signup/Signup';
import 'semantic-ui-css/semantic.min.css';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-areas:
    'profile'
    'app';
`;

const Profile = styled.div`
  grid-area: profile;
`;

const AppContainer = styled.div`
  grid-area: app;
`;

export function App({ jwt, fetchUserConnect, logoutConnect, username }) {
  useEffect(() => {
    fetchUserConnect();
  }, [fetchUserConnect]);

  return (
    <Container>
      <Router history={history}>
        {jwt ? (
          <Profile>
            <div>{username}</div>
            <div>
              <Link to='/subscriptions'>Subscriptions</Link>
            </div>
            <div>
              <Link to='/feed'>Feed</Link>
            </div>
            <div>
              <Link to='/' onClick={logoutConnect}>
                Logout
              </Link>
            </div>
          </Profile>
        ) : (
          <Link to='/login'>Log in</Link>
        )}
        <AppContainer>
          <Switch>
            <Route path='/' component={ConnectedSearchPodcast} exact />
            <Route path='/podcast' component={ConnectedPodcast} />
            <Route path='/episode-player' component={ConnectedEpisodePlayer} />
            <Route path='/subscriptions' component={ConnectedSubscriptions} />
            <Route path='/feed' component={ConnectedSubscriptionsEpisodeFeed} />
            <Route path='/login' component={ConnectedLogin} />
            <Route path='/signup' component={ConnectedSignup} />
          </Switch>
        </AppContainer>
      </Router>
    </Container>
  );
}

App.defaultProps = {
  jwt: null
};

App.propTypes = {
  jwt: PropTypes.string,
  fetchUserConnect: PropTypes.func.isRequired,
  logoutConnect: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    jwt: state.userInfo.jwt,
    username: state.userInfo.username,
    subscriptions: state.userInfo.subscriptions
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchUserConnect: () => dispatch(fetchUser()),
    logoutConnect: () => dispatch(logout())
  };
};

const ConnectedApp = connect(mapStateToProps, dispatchToProps)(App);
export default ConnectedApp;
