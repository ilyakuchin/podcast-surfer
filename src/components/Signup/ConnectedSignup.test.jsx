import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from '../../helpers/index';
import ConnectedSignup from './Signup';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;

describe('Test ConnectedSignup component', () => {
  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedSignup store={store} />);
  });

  test('should get username props from the store correctly', () => {
    expect(component.props().children.props.username).toBe('testLogin');
  });

  test('should get password props from the store correctly', () => {
    expect(component.props().children.props.password).toBe('testPassword');
  });

  test('should get validationErrorMessage props from the store correctly', () => {
    expect(component.props().children.props.validationErrorMessage).toBe(
      'error'
    );
  });
});
