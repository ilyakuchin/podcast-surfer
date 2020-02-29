import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SubscribeButton } from './SubscribeButton';

configure({ adapter: new Adapter() });

describe('Test SubscribeButton component', () => {
  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <SubscribeButton
            subscriptions={[]}
            currentPodcastUrl=''
            jwt=''
            updateSubscriptionsConnect={() => {}}
          />
        )
      )
    ).toMatchSnapshot();
  });
});
