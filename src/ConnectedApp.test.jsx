import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from './helpers/index';
import ConnectedApp from './App';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe('test ConnectedApp component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedApp store={store} />);
  });

  test('should get props from the store correctly', () => {
    expect(component.props().children.props.jwt).toBe('test');
  });
});
