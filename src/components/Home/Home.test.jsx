import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

configure({ adapter: new Adapter() });

describe('Test Home component', () => {
  test('should render correctly', () => {
    expect(toJson(shallow(<Home />))).toMatchSnapshot();
  });
});
