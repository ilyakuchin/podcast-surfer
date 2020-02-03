import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from '../../helpers/index';
import ConnectedEpisodePlayer from './EpisodePlayer';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;

describe('Test ConnectedEpisodePlayer component', () => {
  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedEpisodePlayer store={store} />);
  });

  test('should get isFetching props from the store correctly', () => {
    expect(component.props().children.props.isFetching).toBe(false);
  });

  test('should get name props from the store correctly', () => {
    expect(component.props().children.props.name).toBe('test');
  });

  test('should get description props from the store correctly', () => {
    expect(component.props().children.props.description).toBe('description');
  });

  test('should get imageUrl props from the store correctly', () => {
    expect(component.props().children.props.imageUrl).toBe('imageUrl');
  });

  test('should get audioUrl from the store correctly', () => {
    expect(component.props().children.props.audioUrl).toBe('audioUrl');
  });
});
