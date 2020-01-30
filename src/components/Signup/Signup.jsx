import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setUsername,
  setPassword,
  signup,
  setValidationErrorMessage
} from '../../redux/actions/userInfo';

export function Signup({
  username,
  password,
  signup,
  validationErrorMessage,
  setUsername,
  setPassword,
  setValidationErrorMessage
}) {
  const [confirmPassword, setConfirmPassword] = useState();
  function validateInput() {
    if (!username) {
      setValidationErrorMessage('Username field is required');
      return false;
    }

    if (!username.match('^[a-zA-Z0-9_.-]*$')) {
      setValidationErrorMessage(
        'Username must contain only letters and numbers'
      );
      return false;
    }

    if (username.length < 3) {
      setValidationErrorMessage('Username must be at least 3 characters long');
      return false;
    }
    if (!password) {
      setValidationErrorMessage('Password field is required');
      return false;
    }

    if (password.length < 3) {
      setValidationErrorMessage('Password must be at least 3 characters long');
      return false;
    }

    if (!confirmPassword) {
      setValidationErrorMessage('Confirm password field is required');
      return false;
    }
    if (password !== confirmPassword) {
      setValidationErrorMessage('Password and confirm password does not match');
      return false;
    }

    return true;
  }
  return (
    <div>
      <h2>SIGNUP</h2>
      <Link to='/'>Back to Login</Link>
      <div>{validationErrorMessage}</div>
      <form>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='username'
          required
        />
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='password'
          required
        />
        <input
          type='password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder='confirm password'
          required
        />
        <input
          type='submit'
          onClick={e => {
            if (validateInput()) {
              signup(e, username, password, confirmPassword);
            }
          }}
        />
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    username: state.userInfo.username,
    password: state.userInfo.password,
    validationErrorMessage: state.userInfo.validationErrorMessage
  };
};

const dispatchToProps = dispatch => {
  return {
    signup: (e, username, password, confirmPassword) =>
      dispatch(signup(e, username, password, confirmPassword)),
    setUsername: username => dispatch(setUsername(username)),
    setPassword: password => dispatch(setPassword(password)),
    setValidationErrorMessage: message =>
      dispatch(setValidationErrorMessage(message))
  };
};

const ConnectedSignup = connect(mapStateToProps, dispatchToProps)(Signup);
export default ConnectedSignup;
