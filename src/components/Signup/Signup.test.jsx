import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Signup } from './Signup';

configure({ adapter: new Adapter() });

describe('Test Signup component', () => {
  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <Signup
            username='username'
            password='password'
            validationErrorMessage='error'
          />
        )
      )
    ).toMatchSnapshot();
  });
});
