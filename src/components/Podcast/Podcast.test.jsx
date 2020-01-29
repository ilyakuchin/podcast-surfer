import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Podcast } from './Podcast';

configure({ adapter: new Adapter() });

describe('Test Podcast Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <Podcast
        name='podacstName'
        description='podcastDescription'
        imageUrl='podcast image'
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
