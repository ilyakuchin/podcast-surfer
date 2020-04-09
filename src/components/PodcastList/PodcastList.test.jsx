import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PodcastList } from './PodcastList';

configure({ adapter: new Adapter() });

describe('Test PodcastList component', () => {
  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <PodcastList
            isFetching={false}
            jwt='jwt'
            fetchCurrentPodcastConnect={() => {}}
            podcasts={[
              { id: '1', image: 'link', rss: 'rss1', name: 'name' },
              { id: '2', image: 'link2', rss: 'rss2', name: 'name2' },
              { id: '3', image: 'link3', rss: 'rss3', name: 'name3' }
            ]}
          />
        )
      )
    ).toMatchSnapshot();
  });

  test('should render correctly if Fecthing', () => {
    expect(
      toJson(
        shallow(
          <PodcastList
            isFetching
            jwt='jwt'
            fetchCurrentPodcastConnect={() => {}}
            podcasts={[
              { id: '1', image: 'link', rss: 'rss1', name: 'name' },
              { id: '2', image: 'link2', rss: 'rss2', name: 'name2' },
              { id: '3', image: 'link3', rss: 'rss3', name: 'name3' }
            ]}
          />
        )
      )
    ).toMatchSnapshot();
  });
});
