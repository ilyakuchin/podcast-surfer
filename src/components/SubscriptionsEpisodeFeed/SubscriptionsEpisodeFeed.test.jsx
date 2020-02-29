import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SubscriptionsEpisodeFeed } from './SubscriptionsEpisodeFeed';

configure({ adapter: new Adapter() });

describe('Test SubscriptionsEpisodeFeed component', () => {
  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <SubscriptionsEpisodeFeed
            fetchFeedConnect={() => {}}
            feed={[]}
            isFetching={false}
            subscriptions={[]}
            setCurrentEpisodeConnect={() => {}}
          />
        )
      )
    ).toMatchSnapshot();
  });

  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <SubscriptionsEpisodeFeed
            isFetching
            fetchFeedConnect={() => {}}
            feed={[]}
            subscriptions={[]}
            setCurrentEpisodeConnect={() => {}}
          />
        )
      )
    ).toMatchSnapshot();
  });
});
