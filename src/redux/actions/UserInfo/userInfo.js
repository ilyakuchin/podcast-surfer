import axios from 'axios';
import history from '../../../helpers/history';
import { loginUrl, registerUrl } from '../../../helpers/urls';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO';
export const SET_VALIDATION_ERROR_MESSAGE = 'SET_VALIDATION_ERROR_MESSAGE';
export const SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS';

export const UPDATE_SUBSCRIPTIONS_REQUEST = 'UPDATE_SUBSCRIPTIONS_REQUEST';
export const UPDATE_SUBSCRIPTIONS_SUCCESS = 'UPDATE_SUBSCRIPTIONS_SUCCESS';
export const UPDATE_SUBSCRIPTIONS_FAILURE = 'UPDATE_SUBSCRIPTIONS_FAILURE';

export function setUsername(username) {
  return { type: SET_USERNAME, username };
}

export function setPassword(password) {
  return { type: SET_PASSWORD, password };
}

export function setJWT(jwt) {
  return { type: LOGIN, jwt };
}

export function setSubscriptions(subscriptions) {
  return { type: SET_SUBSCRIPTIONS, subscriptions };
}

export function clearUserInfo() {
  return {
    type: CLEAR_USER_INFO,
    username: '',
    password: '',
    validationErrorMessage: ''
  };
}

export function setValidationErrorMessage(message) {
  return {
    type: SET_VALIDATION_ERROR_MESSAGE,
    validationErrorMessage: message
  };
}

export function loginInputValidation(username, password) {
  if (!username) {
    return 'Username field is required';
  }
  if (!password) {
    return 'Password field is required';
  }

  return '';
}

export function login(username, password) {
  const errorMessage = loginInputValidation(username, password);

  if (errorMessage !== '') {
    return setValidationErrorMessage(errorMessage);
  }

  return dispatch => {
    return axios
      .post(loginUrl, {
        username,
        password
      })
      .then(res => {
        window.localStorage.setItem('jwt_token_podcast', res.data.token);
        dispatch(setJWT(window.localStorage.getItem('jwt_token_podcast')));
        dispatch(setValidationErrorMessage(''));
        history.push('/');
      })
      .then(() => {
        return axios.get(`${process.env.REACT_APP_API_URL}/users`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              'jwt_token_podcast'
            )}`
          }
        });
      })
      .then(res => {
        dispatch(setSubscriptions(res.data.user.subscriptions));
      })
      .catch(err =>
        dispatch(setValidationErrorMessage(err.response.data.message))
      );
  };
}

export function fetchUser() {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`, {
        headers: {
          Authorization: `Bearer: ${window.localStorage.getItem(
            'jwt_token_podcast'
          )}`
        }
      })
      .then(res => {
        dispatch(setUsername(res.data.user.username));
        dispatch(setJWT(window.localStorage.getItem('jwt_token_podcast')));
        dispatch(setSubscriptions(res.data.user.subscriptions));
      })
      .catch(() => {
        dispatch(clearUserInfo());
      });
  };
}

export function removeLocalStorageToken() {
  window.localStorage.removeItem('jwt_token_podcast');
}

export function logout() {
  removeLocalStorageToken();
  return { type: LOGOUT, username: '', password: '', jwt: '' };
}

export function signupInputValidation(username, password, confirmPassword) {
  if (!username) {
    return 'Username field is required';
  }

  if (!username.match('^[a-zA-Z0-9_.-]*$')) {
    return 'Username must contain only letters and numbers';
  }

  if (username.length < 3) {
    return 'Username must be at least 3 characters long';
  }
  if (!password) {
    return 'Password field is required';
  }

  if (password.length < 3) {
    return 'Password must be at least 3 characters long';
  }

  if (!confirmPassword) {
    return 'Confirm password field is required';
  }
  if (password !== confirmPassword) {
    return 'Password and confirm password does not match';
  }

  return '';
}

export function signup(username, password, confirmPassword) {
  const validationErrorMessage = signupInputValidation(
    username,
    password,
    confirmPassword
  );

  if (validationErrorMessage !== '') {
    return setValidationErrorMessage(validationErrorMessage);
  }
  return dispatch => {
    return axios
      .post(registerUrl, {
        username,
        password,
        confirmPassword
      })
      .then(() => {
        dispatch(clearUserInfo());
        history.push('/login');
      })
      .catch(err =>
        dispatch(setValidationErrorMessage(err.response.data.message))
      );
  };
}

export function updateSubscriptionsRequest() {
  return {
    type: UPDATE_SUBSCRIPTIONS_REQUEST,
    isSubscribeButtonEnabled: false
  };
}

export function updateSubscriptionsSuccess() {
  return {
    type: UPDATE_SUBSCRIPTIONS_SUCCESS,
    isSubscribeButtonEnabled: true
  };
}

export function updateSubscriptionsFailure() {
  return {
    type: UPDATE_SUBSCRIPTIONS_FAILURE,
    isSubscribeButtonEnabled: false
  };
}

export function updateSubscriptions(subscriptionUrls, jwt) {
  return dispatch => {
    dispatch(updateSubscriptionsRequest());
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}/users`,
        { subscriptions: subscriptionUrls },
        {
          headers: {
            Authorization: `Bearer: ${jwt}`
          }
        }
      )
      .then(() => dispatch(fetchUser()))
      .then(() => dispatch(updateSubscriptionsSuccess()));
  };
}
