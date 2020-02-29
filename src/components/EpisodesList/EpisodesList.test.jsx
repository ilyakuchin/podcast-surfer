import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EpisodesList } from './EpisodesList';

configure({ adapter: new Adapter() });

describe('Test EpisodesList Component', () => {
  test('should render correctly', () => {
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
    expect(
      toJson(
        shallow(
          <EpisodesList
            rss='rss'
            episodes={episodes}
            setCurrentEpisodeConnect={jest.fn}
          />
        )
      )
    ).toMatchSnapshot();
  });

  test('should call fetchEpisodeConnect function on Link click', () => {
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

    const fn = jest.fn();

    const wrapper = shallow(
      <EpisodesList
        rss='rss'
        episodes={episodes}
        setCurrentEpisodeConnect={fn}
      />
    );

    wrapper
      .find('Link')
      .first()
      .simulate('click');

    expect(fn.mock.calls.length).toEqual(1);
  });
});
