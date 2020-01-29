import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUsername, setPassword, login } from '../../redux/actions/userInfo';

export function Login({ username, password, setUsername, setPassword, login }) {
  return (
    <div>
      <form>
        <div>Username</div>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
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
    login: (e, username, password) => dispatch(login(e, username, password))
  };
};

const ConnectedLogin = connect(mapStateToProps, dispatchToProps)(Login);

export default ConnectedLogin;
