import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from '../../helpers/index';
import ConnectedSearchResults from './SearchResults';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

const podcasts = [
  { id: '1', image: 'link', rss: 'rss1', name: 'name' },
  { id: '2', image: 'link2', rss: 'rss2', name: 'name2' },
  { id: '3', image: 'link3', rss: 'rss3', name: 'name3' }
];

let store;
let component;

describe('Test ConnectedSearchResults component', () => {
  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedSearchResults store={store} />);
  });
  test('should get podcasts props from the store correctly', () => {
    expect(component.props().children.props.podcasts).toMatchObject(podcasts);
  });

  test('should get jwt props from the store correctly', () => {
    expect(component.props().children.props.jwt).toBe('test');
  });
});
