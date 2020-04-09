import userInfo from './userInfo';
import {
  LOGOUT,
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN,
  CLEAR_USER_INFO,
  SET_VALIDATION_ERROR_MESSAGE,
  SET_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTIONS_REQUEST,
  UPDATE_SUBSCRIPTIONS_SUCCESS
} from '../../actions/UserInfo/userInfo';

describe('Test userInfo reducer', () => {
  test('should return initial state', () => {
    expect(userInfo(undefined, {})).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle LOGOUT', () => {
    expect(
      userInfo(
        {
          username: 'username',
          password: 'password',
          validationErrorMessage: '',
          jwt: 'jwt',
          subscriptions: [],
          isSubscribeButtonEnabled: true
        },
        { type: LOGOUT, username: '', password: '', jwt: '' }
      )
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle SET_USERNAME action', () => {
    expect(
      userInfo(undefined, {
        type: SET_USERNAME,
        username: 'username'
      })
    ).toEqual({
      username: 'username',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle SET_PASSWORD action', () => {
    expect(
      userInfo(undefined, {
        type: SET_PASSWORD,
        password: 'password'
      })
    ).toEqual({
      username: '',
      password: 'password',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle LOGIN action', () => {
    expect(
      userInfo(undefined, {
        type: LOGIN,
        jwt: 'jwt'
      })
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: 'jwt',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle LOGOUT action', () => {
    expect(
      userInfo(undefined, {
        type: LOGOUT,
        username: '',
        password: '',
        jwt: ''
      })
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle CLEAR_USER_INFO action', () => {
    expect(
      userInfo(undefined, {
        type: CLEAR_USER_INFO,
        username: '',
        password: '',
        validationErrorMessage: ''
      })
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle SET_VALIDATION_ERROR_MESSAGE action', () => {
    expect(
      userInfo(undefined, {
        type: SET_VALIDATION_ERROR_MESSAGE,
        validationErrorMessage: 'error'
      })
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: 'error',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle SET_SUBSCRIPTIONS action', () => {
    expect(
      userInfo(undefined, {
        type: SET_SUBSCRIPTIONS,
        subscriptions: ['url1', 'url2', 'url3']
      })
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: ['url1', 'url2', 'url3'],
      isSubscribeButtonEnabled: true
    });
  });

  test('should handle UPDATE_SUBSCRIPTIONS_REQUEST action', () => {
    expect(
      userInfo(undefined, {
        type: UPDATE_SUBSCRIPTIONS_REQUEST,
        isSubscribeButtonEnabled: false
      })
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: false
    });
  });

  test('should handle UPDATE_SUBSCRIPTIONS_SUCCESS action', () => {
    expect(
      userInfo(undefined, {
        type: UPDATE_SUBSCRIPTIONS_SUCCESS,
        isSubscribeButtonEnabled: true
      })
    ).toEqual({
      username: '',
      password: '',
      validationErrorMessage: '',
      jwt: '',
      subscriptions: [],
      isSubscribeButtonEnabled: true
    });
  });
});
