import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchResults } from './SearchResults';

configure({ adapter: new Adapter() });

describe('Test SearchResults Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<SearchResults isFetching podcasts={[]} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
