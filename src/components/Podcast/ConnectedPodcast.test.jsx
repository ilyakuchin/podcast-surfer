import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from '../../helpers/index';
import ConnectedPodcast from './Podcast';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;

describe('Test ConnectedPodcast component', () => {
  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedPodcast store={store} />);
  });

  test('should get name props from the store correctly', () => {
    expect(component.props().children.props.name).toBe('testName');
  });

  test('should get description props from the store correctly', () => {
    expect(component.props().children.props.description).toBe(
      'testDescription'
    );
  });

  test('should get imageUrl props from the store correctly', () => {
    expect(component.props().children.props.imageUrl).toBe('testImageUrl');
  });

  test('should get isFetching props from the store correctly', () => {
    expect(component.props().children.props.isFetching).toBe(false);
  });
});
