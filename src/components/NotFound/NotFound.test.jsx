import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from './NotFound';

configure({ adapter: new Adapter() });

describe('Test NotFound component', () => {
  test('should render correctly', () => {
    expect(toJson(shallow(<NotFound />))).toMatchSnapshot();
  });
});
