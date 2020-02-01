import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUsername, setPassword, signup } from '../../redux/actions/userInfo';

export function Signup({
  username,
  password,
  validationErrorMessage,
  signupConnect,
  setUsernameConnect,
  setPasswordConnect
}) {
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div>
      <h2>SIGNUP</h2>
      <Link to='/'>Back to Login</Link>
      <div>{validationErrorMessage}</div>
      <form>
        <input
          type='text'
          value={username}
          onChange={e => setUsernameConnect(e.target.value)}
          placeholder='username'
          required
        />
        <input
          type='password'
          value={password}
          onChange={e => setPasswordConnect(e.target.value)}
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
          onClick={e => signupConnect(e, username, password, confirmPassword)}
        />
      </form>
    </div>
  );
}

Signup.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  validationErrorMessage: PropTypes.string.isRequired,
  signupConnect: PropTypes.func.isRequired,
  setUsernameConnect: PropTypes.func.isRequired,
  setPasswordConnect: PropTypes.func.isRequired
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
    signupConnect: (e, username, password, confirmPassword) =>
      dispatch(signup(e, username, password, confirmPassword)),
    setUsernameConnect: username => dispatch(setUsername(username)),
    setPasswordConnect: password => dispatch(setPassword(password))
  };
};

const ConnectedSignup = connect(mapStateToProps, dispatchToProps)(Signup);
export default ConnectedSignup;
