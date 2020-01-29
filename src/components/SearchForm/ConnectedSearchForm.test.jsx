import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from '../../helpers/index';
import ConnectedSearchForm from './SearchForm';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;

describe('Test ConnectedSearchForm component', () => {
  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedSearchForm store={store} />);
  });

  test('should get searchPhrase props from the store correctly', () => {
    expect(component.props().children.props.searchPhrase).toBe(
      'testSearchPhrase'
    );
  });

  test('should get jwt props from the store correctly', () => {
    expect(component.props().children.props.jwt).toBe('test');
  });
});
