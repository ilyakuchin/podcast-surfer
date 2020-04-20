import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  setUsername,
  setPassword,
  login,
} from '../../redux/actions/UserInfo/userInfo';

export function Login({
  username,
  password,
  validationErrorMessage,
  setUsernameConnect,
  setPasswordConnect,
  loginConnect,
}) {
  const hasValidationError = () => {
    return validationErrorMessage !== '';
  };
  return (
    <div>
      <form error={hasValidationError()}>
        <div
          textAlign='center'
          style={{ height: '80vh' }}
          verticalAlign='middle'
        >
          <div style={{ maxWidth: 450 }}>
            <h2>Login</h2>
            <input
              type='text'
              value={username}
              label={{ align: ' left', children: 'Username' }}
              onChange={(e) => setUsernameConnect(e.target.value)}
              placeholder='username'
              name='uname'
              required
            />

            <input
              type='password'
              value={password}
              label={{ align: ' left', children: 'Password' }}
              onChange={(e) => setPasswordConnect(e.target.value)}
              placeholder='password'
              name='pswrd'
              required
            />

            <button
              content='Log In'
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                loginConnect(username, password);
              }}
            />

            <div>
              {validationErrorMessage} <div />
            </div>
          </div>
        </div>
      </form>
      <div>
        <div>
          <div>
            Don&#39;t have an account?
            <Link to='/signup'> Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  validationErrorMessage: PropTypes.string.isRequired,
  setUsernameConnect: PropTypes.func.isRequired,
  setPasswordConnect: PropTypes.func.isRequired,
  loginConnect: PropTypes.func.isRequired,
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
    setUsernameConnect: (username) => dispatch(setUsername(username)),
    setPasswordConnect: (password) => dispatch(setPassword(password)),
    loginConnect: (username, password) => dispatch(login(username, password)),
  };
};

const ConnectedLogin = connect(mapStateToProps, dispatchToProps)(Login);

export default ConnectedLogin;
