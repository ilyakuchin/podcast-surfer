import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Message, Header } from 'semantic-ui-react';
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
  const hasValidationError = () => {
    return validationErrorMessage !== '';
  };
  return (
    <div>
      <Header as='h2'>Login</Header>
      <Form error={hasValidationError()}>
        <Form.Field
          control={Input}
          label='Username'
          type='text'
          value={username}
          onChange={e => setUsernameConnect(e.target.value)}
          placeholder='username'
          name='uname'
          required
          width={6}
        />

        <Form.Field
          control={Input}
          label='Password'
          type='password'
          value={password}
          onChange={e => setPasswordConnect(e.target.value)}
          placeholder='password'
          name='pswrd'
          required
          width={6}
        />
        <Button
          content='Log In'
          type='submit'
          onClick={e => {
            e.preventDefault();
            loginConnect(username, password);
          }}
        />
        <Message error content={validationErrorMessage} />
      </Form>
      <div>
        Don&#39;t have an account?
        <Link to='/signup'>Sign Up</Link>
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
    loginConnect: (username, password) => dispatch(login(username, password))
  };
};

const ConnectedLogin = connect(mapStateToProps, dispatchToProps)(Login);

export default ConnectedLogin;
