import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN,
  SET_VALIDATION_ERROR_MESSAGE,
  CLEAR_USER_INFO,
  LOGOUT,
  setUsername,
  setPassword,
  setJWT,
  setValidationErrorMessage,
  loginInputValidation,
  signupInputValidation,
  clearUserInfo,
  logout,
  removeLocalStorageToken,
  signup
} from './userInfo';

import { registerUrl } from '../../../helpers/urls';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UserInfo actions test', () => {
  test('should create action to set username', () => {
    const expectedAction = { type: SET_USERNAME, username: 'username' };
    expect(setUsername('username')).toEqual(expectedAction);
  });

  test('should create action to set password', () => {
    const expectedAction = { type: SET_PASSWORD, password: 'password' };
    expect(setPassword('password')).toEqual(expectedAction);
  });

  test('should create action to set jwt', () => {
    const expectedAction = { type: LOGIN, jwt: 'jwt' };
    expect(setJWT('jwt')).toEqual(expectedAction);
  });

  test('should create action to set validation error message', () => {
    const expectedAction = {
      type: SET_VALIDATION_ERROR_MESSAGE,
      validationErrorMessage: 'message'
    };
    expect(setValidationErrorMessage('message')).toEqual(expectedAction);
  });

  test('should create action to clear userinfo', () => {
    const expectedAction = {
      type: CLEAR_USER_INFO,
      username: '',
      password: '',
      validationErrorMessage: ''
    };
    expect(clearUserInfo()).toEqual(expectedAction);
  });

  test('should create action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
      username: '',
      password: '',
      jwt: null
    };

    expect(logout()).toEqual(expectedAction);
  });

  test('should remove user token from local storage', () => {
    window.localStorage.setItem('jwt_token_podcast', 'jwt');
    removeLocalStorageToken();

    expect(window.localStorage.getItem('jwt_token_podcast')).toBe(null);
  });
});

describe('Test login input validation', () => {
  test('should return empty string when user and password meet requirements', () => {
    expect(loginInputValidation('username', 'password')).toEqual('');
  });

  test('should return error message when user is epmty', () => {
    expect(loginInputValidation(undefined, 'password')).toEqual(
      'Username field is required'
    );
  });

  test('should return error message when password is empty', () => {
    expect(loginInputValidation('username', undefined)).toEqual(
      'Password field is required'
    );
  });

  test('should return error message when username and password are empty', () => {
    expect(loginInputValidation(undefined, undefined)).toEqual(
      'Username field is required'
    );
  });
});

describe('Test signup input validation', () => {
  test('should return empty message when username, password and comfirm password meet requirements', () => {
    expect(signupInputValidation('username', 'password', 'password')).toEqual(
      ''
    );
  });

  test('should return error message when username is empty', () => {
    expect(signupInputValidation(undefined, 'password', 'password')).toEqual(
      'Username field is required'
    );
  });

  test('should return error message when username does not contain only letters and number', () => {
    expect(signupInputValidation('username!', 'password', 'password')).toEqual(
      'Username must contain only letters and numbers'
    );
  });

  test('should return error message when username has less than 3 characters', () => {
    expect(signupInputValidation('us', 'password', 'password')).toEqual(
      'Username must be at least 3 characters long'
    );
  });

  test('should return error message when password is empty', () => {
    expect(signupInputValidation('username', undefined, 'password')).toEqual(
      'Password field is required'
    );
  });

  test('should return error message when password is less than 3 characters', () => {
    expect(signupInputValidation('username', 'pa', 'pa')).toEqual(
      'Password must be at least 3 characters long'
    );
  });

  test('should return error message when confirm password field is empty', () => {
    expect(signupInputValidation('username', 'password', undefined)).toEqual(
      'Confirm password field is required'
    );
  });

  test('should return error message when password and confirm password are not equal', () => {
    expect(signupInputValidation('username', 'pass1', 'pass2')).toEqual(
      'Password and confirm password does not match'
    );
  });
});

test('should return signup actions', () => {
  const mock = new MockAdapter(axios);
  const username = 'username';
  const password = 'password';
  const confirmPassword = 'password';

  const expectedActions = [
    {
      type: CLEAR_USER_INFO,
      username: '',
      password: '',
      validationErrorMessage: ''
    }
  ];

  mock
    .onPost(registerUrl, {
      username,
      password,
      confirmPassword
    })
    .reply(200);

  const store = mockStore();
  return store
    .dispatch(signup(username, password, confirmPassword))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});
