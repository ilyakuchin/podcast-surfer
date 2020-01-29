import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedAuthenticatedApp from './AuthenticatedApp';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe('Test ConnectedAuthenticatedApp component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      userInfo: { username: 'test' }
    });

    component = shallow(<ConnectedAuthenticatedApp store={store} />);
  });

  test('should get props from the store correctly', () => {
    expect(component.props().children.props.username).toBe('test');
  });
});
