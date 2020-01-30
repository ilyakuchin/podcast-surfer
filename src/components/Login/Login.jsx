import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  setUsername,
  setPassword,
  login,
  setValidationErrorMessage
} from '../../redux/actions/userInfo';

export function Login({
  username,
  password,
  setUsername,
  setPassword,
  login,
  setValidationErrorMessage
}) {
  function validateInput() {
    if (!username) {
      setValidationErrorMessage('Username field is required');
      return false;
    }
    if (!password) {
      setValidationErrorMessage('Password field is required');
      return false;
    }
    return true;
  }
  return (
    <div>
      <h2>LOGIN</h2>
      <Link to='/signup'>Sign Up</Link>
      <form>
        <div>Username</div>
        <input
          type='text'
          value={username}
          onChange={e => {
            if (validateInput()) {
              setUsername(e.target.value);
            }
          }}
          placeholder='username'
          name='uname'
          required
        />

        <div>Password</div>
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='password'
          name='pswrd'
          required
        />
        <input
          type='submit'
          value='Submit'
          onClick={e => {
            login(e, username, password);
          }}
        />
      </form>
    </div>
  );
}

Login.defaultProps = {
  username: '',
  password: ''
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  login: PropTypes.func
};

const mapStateToProps = state => {
  return {
    username: state.userInfo.username,
    password: state.userInfo.password
  };
};

const dispatchToProps = dispatch => {
  return {
    setUsername: username => dispatch(setUsername(username)),
    setPassword: password => dispatch(setPassword(password)),
    login: (e, username, password) => dispatch(login(e, username, password)),
    setValidationErrorMessage: message =>
      dispatch(setValidationErrorMessage(message))
  };
};

const ConnectedLogin = connect(mapStateToProps, dispatchToProps)(Login);

export default ConnectedLogin;
