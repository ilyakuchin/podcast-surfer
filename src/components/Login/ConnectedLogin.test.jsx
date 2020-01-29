import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from '../../helpers/index';
import ConnectedLogin from './Login';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;

describe('Test ConnectedLogin component', () => {
  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedLogin store={store} />);
  });
  test('should get username props from the store correctly', () => {
    expect(component.props().children.props.username).toBe('testLogin');
  });

  test('should get password props from the store correctly', () => {
    expect(component.props().children.props.password).toBe('testPassword');
  });
});
