import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Subscriptions } from './Subscriptions';

configure({ adapter: new Adapter() });

describe('Test Subscriptions component', () => {
  test('should render correctly', () => {
    expect(
      toJson(
        shallow(
          <Subscriptions
            subscriptions={[]}
            subscriptionUrls={[]}
            isFetching={false}
            jwt='jwt'
            fetchSubscriptionsConnect={() => {}}
          />
        )
      )
    ).toMatchSnapshot();
  });
});
