import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN,
  LOGOUT,
  CLEAR_USER_INFO,
  SET_VALIDATION_ERROR_MESSAGE,
  SET_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTIONS_REQUEST,
  UPDATE_SUBSCRIPTIONS_SUCCESS
} from '../../actions/UserInfo/userInfo';

export default function userInfo(
  state = {
    username: '',
    password: '',
    validationErrorMessage: '',
    jwt: '',
    subscriptions: [],
    isSubscribeButtonEnabled: true
  },
  action
) {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.username };
    case SET_PASSWORD:
      return { ...state, password: action.password };
    case LOGIN:
      return { ...state, jwt: action.jwt };
    case LOGOUT:
      return {
        ...state,
        username: action.username,
        password: action.password,
        jwt: action.jwt
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        username: action.username,
        password: action.password,
        validationErrorMessage: action.validationErrorMessage
      };
    case SET_VALIDATION_ERROR_MESSAGE:
      return {
        ...state,
        validationErrorMessage: action.validationErrorMessage
      };
    case SET_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: action.subscriptions
      };
    case UPDATE_SUBSCRIPTIONS_REQUEST:
      return {
        ...state,
        isSubscribeButtonEnabled: action.isSubscribeButtonEnabled
      };
    case UPDATE_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        isSubscribeButtonEnabled: action.isSubscribeButtonEnabled
      };
    default:
      return state;
  }
}
