import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  setUsername,
  setPassword,
  signup
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
    <Container>
      <h2>SIGNUP</h2>
      <div>{validationErrorMessage}</div>
      <Form>
        <Input
          type='text'
          value={username}
          onChange={e => setUsernameConnect(e.target.value)}
          placeholder='username'
          required
        />
        <Input
          type='password'
          value={password}
          onChange={e => setPasswordConnect(e.target.value)}
          placeholder='password'
          required
        />
        <Input
          type='password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder='confirm password'
          required
        />
        <Input
          type='submit'
          onClick={e => signupConnect(e, username, password, confirmPassword)}
        />
      </Form>
      <Link to='/'>Back to Login</Link>
    </Container>
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
    signupConnect: (e, username, password, confirmPassword) => {
      e.preventDefault();
      dispatch(signup(username, password, confirmPassword));
    },
    setUsernameConnect: username => dispatch(setUsername(username)),
    setPasswordConnect: password => dispatch(setPassword(password))
  };
};

const ConnectedSignup = connect(mapStateToProps, dispatchToProps)(Signup);
export default ConnectedSignup;
