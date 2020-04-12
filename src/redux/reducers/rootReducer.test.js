import { createStore } from 'redux';
import rootReducer from './rootReducer';
import userInfo from './UserInfo/userInfo';
import searchPhrase from './SearchPhrase/searchPhrase';
import podcasts from './Podcasts/podcasts';
import currentPodcast from './CurrentPodcast/currentPodcast';
import currentEpisode from './CurrentEpisode/currentEpisode';
import subscriptions from './Subscriptions/subscriptions';
import feed from './Feed/feed';

describe('Test root reducer', () => {
  const store = createStore(rootReducer);

  test('should have userInfo reducer', () => {
    expect(store.getState().userInfo).toEqual(userInfo(undefined, {}));
  });

  test('should have searchPhrase reducer', () => {
    expect(store.getState().searchPhrase).toEqual(searchPhrase(undefined, {}));
  });

  test('should have podcasts reducer', () => {
    expect(store.getState().podcasts).toEqual(podcasts(undefined, {}));
  });

  test('should have currentPodcast reducer', () => {
    expect(store.getState().currentPodcast).toEqual(
      currentPodcast(undefined, {})
    );
  });

  test('should have currentEpisode reducer', () => {
    expect(store.getState().currentEpisode).toEqual(
      currentEpisode(undefined, {})
    );
  });

  test('should have subscriptions reducer', () => {
    expect(store.getState().subscriptions).toEqual(
      subscriptions(undefined, {})
    );
  });

  test('should have feed reducer', () => {
    expect(store.getState().feed).toEqual(feed(undefined, {}));
  });
});
