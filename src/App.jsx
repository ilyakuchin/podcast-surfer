import React from 'react';
import { Switch, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from './helpers/history';
import './App.css';
import ConnectedAuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp/UnauthenticatedApp';

export function App({ jwt }) {
  return (
    <Router history={history}>
      <Switch>
        {jwt ? <ConnectedAuthenticatedApp /> : <UnauthenticatedApp />}
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
