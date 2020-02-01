import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AuthenticatedApp } from './AuthenticatedApp';

configure({ adapter: new Adapter() });

describe('Test {AuthenticatedApp} component', () => {
  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <AuthenticatedApp username='username' logoutConnect={() => {}} />
        )
      )
    ).toMatchSnapshot();
  });
});
