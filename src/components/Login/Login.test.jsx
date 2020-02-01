import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from './Login';

configure({ adapter: new Adapter() });

describe('Test Login component', () => {
  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <Login
            username='username'
            password='password'
            validationErrorMessage='errorMessage'
          />
        )
      )
    ).toMatchSnapshot();
  });
});
