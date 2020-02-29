import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchPodcast } from './SearchPodcast';

configure({ adapter: new Adapter() });

describe('Test SearchPodcast Component', () => {
  test('should render correctly', () => {
    expect(toJson(shallow(<SearchPodcast podcasts={[]} />))).toMatchSnapshot();
  });

  test('should show popular podcasts when has no podcasts in search results', () => {
    expect(
      toJson(
        shallow(
          <SearchPodcast
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
