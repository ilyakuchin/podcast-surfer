import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EpisodePlayer } from './EpisodePlayer';

configure({ adapter: new Adapter() });

describe('Test EpisodePlayer component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <EpisodePlayer
        isFetching={false}
        name='test'
        description='test'
        imageUrl='test'
        audioUrl='test'
        fetchEpisode={null}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
