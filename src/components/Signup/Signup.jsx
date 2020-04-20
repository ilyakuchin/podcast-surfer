import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setUsername,
  setPassword,
  signup,
} from '../../redux/actions/UserInfo/userInfo';

export function Signup({
  username,
  password,
  validationErrorMessage,
  signupConnect,
  setUsernameConnect,
  setPasswordConnect,
}) {
  const hasValidationError = () => {
    return validationErrorMessage !== '';
  };

  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <form error={hasValidationError()}>
        <div>
          <div>
            <h2>Signup</h2>
            <input
              label={{ align: ' left', children: 'Username' }}
              type='text'
              value={username}
              onChange={(e) => setUsernameConnect(e.target.value)}
              placeholder='username'
              required
            />
            <input
              label={{ align: ' left', children: 'Password' }}
              type='password'
              value={password}
              onChange={(e) => setPasswordConnect(e.target.value)}
              placeholder='password'
              required
            />
            <input
              label={{ align: ' left', children: 'Confirm Password' }}
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='confirm password'
              required
            />
            <button
              content='Sign Up'
              type='submit'
              value='Submit'
              onClick={(e) =>
                signupConnect(e, username, password, confirmPassword)
              }
            />
            <div>{validationErrorMessage}</div>
          </div>
        </div>
      </form>
      <div>
        <div>
          <Link to='/login'>Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  validationErrorMessage: PropTypes.string.isRequired,
  signupConnect: PropTypes.func.isRequired,
  setUsernameConnect: PropTypes.func.isRequired,
  setPasswordConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    username: state.userInfo.username,
    password: state.userInfo.password,
    validationErrorMessage: state.userInfo.validationErrorMessage,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    signupConnect: (e, username, password, confirmPassword) => {
      e.preventDefault();
      dispatch(signup(username, password, confirmPassword));
    },
    setUsernameConnect: (username) => dispatch(setUsername(username)),
    setPasswordConnect: (password) => dispatch(setPassword(password)),
  };
};

const ConnectedSignup = connect(mapStateToProps, dispatchToProps)(Signup);
export default ConnectedSignup;
