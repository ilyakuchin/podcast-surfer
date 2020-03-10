import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedSearchResults from './SearchResults';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;

describe('Test ConnectedSearchResults component', () => {
  beforeEach(() => {
    store = mockStore({
      isFetching: false,
      podcasts: {
        isFetching: false,
        podcasts: [
          { id: '1', image: 'link', rss: 'rss1', name: 'name' },
          { id: '2', image: 'link2', rss: 'rss2', name: 'name2' },
          { id: '3', image: 'link3', rss: 'rss3', name: 'name3' }
        ]
      }
    });

    component = shallow(<ConnectedSearchResults store={store} />);
  });
  test('should get isFetching props from the store correctly', () => {
    expect(component.props().children.props.isFetching).toEqual(false);
  });

  test('should get podcasts props from the store correctly', () => {
    expect(component.props().children.props.podcasts).toEqual([
      { id: '1', image: 'link', rss: 'rss1', name: 'name' },
      { id: '2', image: 'link2', rss: 'rss2', name: 'name2' },
      { id: '3', image: 'link3', rss: 'rss3', name: 'name3' }
    ]);
  });
});
