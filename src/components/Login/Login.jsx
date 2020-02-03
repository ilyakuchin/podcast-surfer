import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  setUsername,
  setPassword,
  login
} from '../../redux/actions/UserInfo/userInfo';

export function Login({
  username,
  password,
  validationErrorMessage,
  setUsernameConnect,
  setPasswordConnect,
  loginConnect
}) {
  return (
    <div>
      <h2>LOGIN</h2>
      <Link to='/signup'>Sign Up</Link>
      <div>{validationErrorMessage}</div>
      <form>
        <div>Username</div>
        <input
          type='text'
          value={username}
          onChange={e => setUsernameConnect(e.target.value)}
          placeholder='username'
          name='uname'
          required
        />

        <div>Password</div>
        <input
          type='password'
          value={password}
          onChange={e => setPasswordConnect(e.target.value)}
          placeholder='password'
          name='pswrd'
          required
        />
        <input
          type='submit'
          value='Submit'
          onClick={e => loginConnect(e, username, password)}
        />
      </form>
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  validationErrorMessage: PropTypes.string.isRequired,
  setUsernameConnect: PropTypes.func.isRequired,
  setPasswordConnect: PropTypes.func.isRequired,
  loginConnect: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    username: state.userInfo.username,
    password: state.userInfo.password,
    validationErrorMessage: state.userInfo.validationErrorMessage
  };
};

const dispatchToProps = dispatch => {
  return {
    setUsernameConnect: username => dispatch(setUsername(username)),
    setPasswordConnect: password => dispatch(setPassword(password)),
    loginConnect: (e, username, password) => {
      e.preventDefault();
      dispatch(login(username, password));
    }
  };
};

const ConnectedLogin = connect(mapStateToProps, dispatchToProps)(Login);

export default ConnectedLogin;
