import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsername, setPassword, signup } from '../../redux/actions/userInfo';

export function Signup({
  username,
  password,
  signup,
  validationErrorMessage,
  setUsername,
  setPassword
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
          onClick={e => signup(e, username, password, confirmPassword)}
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
    setPassword: password => dispatch(setPassword(password))
  };
};

const ConnectedSignup = connect(mapStateToProps, dispatchToProps)(Signup);
export default ConnectedSignup;
