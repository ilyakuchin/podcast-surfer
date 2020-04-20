import React, { useEffect } from 'react';
import { Switch, Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from './helpers/history';
import ConnectedPodcast from './components/Podcast/Podcast';
import ConnectedEpisodePlayer from './components/EpisodePlayer/EpisodePlayer';
import { fetchUser, logout } from './redux/actions/UserInfo/userInfo';
import ConnectedSubscriptions from './components/Subscriptions/Subscriptions';
import ConnectedLogin from './components/Login/Login';
import ConnectedSubscriptionsEpisodeFeed from './components/SubscriptionsEpisodeFeed/SubscriptionsEpisodeFeed';
import ConnectedSignup from './components/Signup/Signup';
import ConnectedSearchForm from './components/SearchForm/SearchForm';
import NotFound from './components/NotFound/NotFound';
import ConnectedSearchResults from './components/SearchResults/SearchResults';
import Home from './components/Home/Home';

export function App({ jwt, fetchUserConnect, logoutConnect, username }) {
  useEffect(() => {
    fetchUserConnect();
  }, [fetchUserConnect]);

  return (
    <div>
      <Router history={history}>
        <div>
          <div>
            <Link to='/'>PODCAST SURFER</Link>
          </div>
          {jwt ? (
            <>
              <div>
                <Link to='/subscriptions'>Subscriptions</Link>
              </div>
              <div>
                <Link to='/feed'>Feed</Link>
              </div>
              <div>
                <ConnectedSearchForm />
              </div>
              <div>{username}</div>
              <div>
                <Link to='/' onClick={logoutConnect}>
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <>
              <div>
                <ConnectedSearchForm />
              </div>
              <div>
                <Link to='/login'>Log in</Link>
              </div>
            </>
          )}
        </div>
        <div>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/search' component={ConnectedSearchResults} exact />
            <Route path='/home' component={Home} exact />
            <Route path='/podcast' component={ConnectedPodcast} />
            <Route path='/episode-player' component={ConnectedEpisodePlayer} />
            <Route path='/subscriptions' component={ConnectedSubscriptions} />
            <Route path='/feed' component={ConnectedSubscriptionsEpisodeFeed} />
            <Route path='/login' component={ConnectedLogin} />
            <Route path='/signup' component={ConnectedSignup} />
            <Route path='/feed' component={ConnectedSubscriptionsEpisodeFeed} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

App.defaultProps = {
  jwt: null,
};

App.propTypes = {
  jwt: PropTypes.string,
  fetchUserConnect: PropTypes.func.isRequired,
  logoutConnect: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    jwt: state.userInfo.jwt,
    username: state.userInfo.username,
    subscriptions: state.userInfo.subscriptions,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    fetchUserConnect: () => dispatch(fetchUser()),
    logoutConnect: () => dispatch(logout()),
  };
};

const ConnectedApp = connect(mapStateToProps, dispatchToProps)(App);
export default ConnectedApp;
