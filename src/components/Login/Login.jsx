import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  setUsername,
  setPassword,
  login
} from '../../redux/actions/UserInfo/userInfo';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 18px;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 10px;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;
`;

export function Login({
  username,
  password,
  validationErrorMessage,
  setUsernameConnect,
  setPasswordConnect,
  loginConnect
}) {
  return (
    <Container>
      <h2>LOGIN</h2>
      <div>{validationErrorMessage}</div>
      <Form>
        <Input
          type='text'
          value={username}
          onChange={e => setUsernameConnect(e.target.value)}
          placeholder='username'
          name='uname'
          required
        />

        <Input
          type='password'
          value={password}
          onChange={e => setPasswordConnect(e.target.value)}
          placeholder='password'
          name='pswrd'
          required
        />
        <Input
          type='submit'
          value='Submit'
          onClick={e => loginConnect(e, username, password)}
        />
      </Form>
      <div>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </Container>
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
