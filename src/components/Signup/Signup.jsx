import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button, Message, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {
  setUsername,
  setPassword,
  signup
} from '../../redux/actions/UserInfo/userInfo';

export function Signup({
  username,
  password,
  validationErrorMessage,
  signupConnect,
  setUsernameConnect,
  setPasswordConnect
}) {
  const hasValidationError = () => {
    return validationErrorMessage !== '';
  };

  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <Form error={hasValidationError()}>
        <Grid
          textAlign='center'
          style={{ height: '80vh' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Signup
            </Header>
            <Form.Field
              control={Input}
              label={{ align: ' left', children: 'Username' }}
              type='text'
              value={username}
              onChange={e => setUsernameConnect(e.target.value)}
              placeholder='username'
              required
            />
            <Form.Field
              control={Input}
              label={{ align: ' left', children: 'Password' }}
              type='password'
              value={password}
              onChange={e => setPasswordConnect(e.target.value)}
              placeholder='password'
              required
            />
            <Form.Field
              control={Input}
              label={{ align: ' left', children: 'Confirm Password' }}
              type='password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder='confirm password'
              required
            />
            <Button
              content='Sign Up'
              type='submit'
              value='Submit'
              onClick={e =>
                signupConnect(e, username, password, confirmPassword)
              }
            />
            <Message error content={validationErrorMessage} />
          </Grid.Column>
        </Grid>
      </Form>
      <Grid textAlign='center' columns={1} container stackable>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Link to='/login'>Back to Login</Link>
        </Grid.Column>
      </Grid>
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
