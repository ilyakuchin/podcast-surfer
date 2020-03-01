import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import PopularPodcasts from './PopularPodcasts';
import mockState from '../../helpers/index';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;

describe('Test PopularPodcasts component', () => {
  beforeEach(() => {
    store = mockStore({
      ...mockState,
      fetchPopularPodcasts: () => 'fetchPopularPodcasts'
    });

    component = shallow(<PopularPodcasts store={store} />);
  });

  test('should render correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
