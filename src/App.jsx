import React, { useEffect } from 'react';
import { Switch, Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
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
import ConnectedSearchForm from './components/SearchForm/SearchForm';

export function App({ jwt, fetchUserConnect, logoutConnect, username }) {
  useEffect(() => {
    fetchUserConnect();
  }, [fetchUserConnect]);

  return (
    <div>
      <Router history={history}>
        {jwt ? (
          <Menu stackable>
            <Menu.Item>PODCAST SURFER</Menu.Item>
            <Menu.Item>
              <Link to='/'>Popular</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/subscriptions'>Subscriptions</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/feed'>Feed</Link>
            </Menu.Item>
            <Menu.Item position='right'>
              <ConnectedSearchForm />
            </Menu.Item>
            <Menu.Item position='right'>{username}</Menu.Item>
            <Menu.Item position='right'>
              <Link to='/' onClick={logoutConnect}>
                Logout
              </Link>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu stackable>
            <Menu.Item>PODCAST SURFER</Menu.Item>
            <Menu.Item>
              <Link to='/'>Popular</Link>
            </Menu.Item>
            <Menu.Item position='right'>
              <ConnectedSearchForm />
            </Menu.Item>
            <Menu.Item position='right'>
              <Link to='/login'>Log in</Link>
            </Menu.Item>
          </Menu>
        )}

        <div>
          <Switch>
            <Route path='/' component={ConnectedSearchPodcast} exact />
            <Route path='/podcast' component={ConnectedPodcast} />
            <Route path='/episode-player' component={ConnectedEpisodePlayer} />
            <Route path='/subscriptions' component={ConnectedSubscriptions} />
            <Route path='/feed' component={ConnectedSubscriptionsEpisodeFeed} />
            <Route path='/login' component={ConnectedLogin} />
            <Route path='/signup' component={ConnectedSignup} />
          </Switch>
        </div>
      </Router>
    </div>
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
