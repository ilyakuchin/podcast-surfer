import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { App } from './App';

configure({ adapter: new Adapter() });

describe('Test App Component', () => {
  test('Should Render Correctly', () => {
    expect(toJson(shallow(<App jwt="jwt" username='username' />))).toMatchSnapshot();
  });

  test('Should Render Correctly', () => {
    expect(toJson(shallow(<App jwt={undefined} username='username' />))).toMatchSnapshot();
  });
});
