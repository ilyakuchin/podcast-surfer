import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchResults } from './SearchResults';

configure({ adapter: new Adapter() });

describe('Test SearchResults Component', () => {
  test('should render correctly', () => {
    const podcasts = [
      { id: '1', image: 'link', rss: 'link', name: 'name' },
      { id: '2', image: 'link2', rss: 'link2', name: 'name2' },
      { id: '3', image: 'link3', rss: 'link3', name: 'name3' }
    ];

    const wrapper = shallow(
      <SearchResults podcasts={podcasts} isFetching={false} jwt='jwt' />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
