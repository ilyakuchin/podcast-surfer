import axios from 'axios';
import history from '../../helpers/history';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function setUsername(username) {
  return { type: SET_USERNAME, username };
}

export function setPassword(password) {
  return { type: SET_PASSWORD, password };
}

export function setJWT(jwt) {
  return { type: LOGIN, jwt };
}

export function login(e, username, password) {
  e.preventDefault();

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
      });
  };
}

export function logout() {
  window.localStorage.removeItem('jwt_token_podcast');
  return { type: LOGOUT };
}
