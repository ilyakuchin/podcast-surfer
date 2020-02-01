import axios from 'axios';
import history from '../../helpers/history';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO';
export const SET_VALIDATION_ERROR_MESSAGE = 'SET_VALIDATION_ERROR_MESSAGE';

export function setUsername(username) {
  return { type: SET_USERNAME, username };
}

export function setPassword(password) {
  return { type: SET_PASSWORD, password };
}

export function setJWT(jwt) {
  return { type: LOGIN, jwt };
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

export function login(e, username, password) {
  e.preventDefault();

  const errorMessage = loginInputValidation(username, password);

  if (errorMessage !== '') {
    return setValidationErrorMessage(errorMessage);
  }

  return dispatch => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password
      })
      .then(res => {
        window.localStorage.setItem('jwt_token_podcast', res.data.token);
        dispatch(setJWT(window.localStorage.getItem('jwt_token_podcast')));
        history.push('/');
      })
      .catch(error => {
        dispatch(setValidationErrorMessage(error.response.data));
      });
  };
}

export function logout() {
  window.localStorage.removeItem('jwt_token_podcast');
  return { type: LOGOUT, username: '', password: '', jwt: null };
}

export function clearUserInfo() {
  return { type: CLEAR_USER_INFO, username: '', password: '' };
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

export function signup(e, username, password, confirmPassword) {
  e.preventDefault();

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
      .post(`${process.env.REACT_APP_API_URL}/register`, {
        username,
        password,
        confirmPassword
      })
      .then(() => {
        dispatch(clearUserInfo());
        history.push('/');
      })
      .catch(error => {
        dispatch(setValidationErrorMessage(error.response.data));
      });
  };
}
