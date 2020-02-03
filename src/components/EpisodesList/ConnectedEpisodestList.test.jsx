import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import mockState from '../../helpers/index';
import ConnectedEpisodesList from './EpisodesList';

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

let store;
let component;
const episodes = [
  {
    id: '1',
    name: 'name1',
    description: 'description1',
    image: 'image1',
    audio: 'audio1'
  },
  {
    id: '2',
    name: 'name2',
    description: 'description2',
    image: 'image2',
    audio: 'audio2'
  },
  {
    id: '3',
    name: 'name3',
    description: 'description3',
    image: 'image3',
    audio: 'audio3'
  }
];

describe('Test ConnectedEpisodesList component', () => {
  beforeEach(() => {
    store = mockStore(mockState);

    component = shallow(<ConnectedEpisodesList store={store} />);
  });

  test('should get episodes props from the store correctly', () => {
    expect(component.props().children.props.episodes).toMatchObject(episodes);
  });

  test('should get jwt props from the store correctly', () => {
    expect(component.props().children.props.jwt).toBe('test');
  });

  test('should get rss props from the store correctly', () => {
    expect(component.props().children.props.rss).toBe('rssUrl');
  });
});
