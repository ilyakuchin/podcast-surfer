import userInfo from './userInfo';
import { LOGOUT } from '../../actions/UserInfo/userInfo';

describe('Test userInfo reducer', () => {
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
});
