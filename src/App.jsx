import React from 'react';
import { Switch, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from './helpers/history';
import './App.css';
import ConnectedAuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp';
import ConnectedLogin from './components/Login/Login';

export function App({ jwt }) {
  return (
    <Router history={history}>
      <Switch>
        {jwt ? <ConnectedAuthenticatedApp /> : <ConnectedLogin />}
      </Switch>
    </Router>
  );
}

App.defaultProps = {
  jwt: null
};

App.propTypes = {
  jwt: PropTypes.string
};

const mapStateToProps = state => {
  return { jwt: state.userInfo.jwt };
};

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
