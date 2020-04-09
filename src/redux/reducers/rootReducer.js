import { combineReducers } from 'redux';

import userInfo from './UserInfo/userInfo';
import currentEpisode from './CurrentEpisode/currentEpisode';
import currentPodcast from './CurrentPodcast/currentPodcast';
import podcasts from './Podcasts/podcasts';
import searchPhrase from './SearchPhrase/searchPhrase';
import feed from './Feed/feed';
import popularPodcasts from './PopularPodcasts/popularPodcasts';
import subscriptions from './Subscriptions/subscriptions';

const rootReducer = combineReducers({
  userInfo,
  searchPhrase,
  podcasts,
  currentPodcast,
  currentEpisode,
  popularPodcasts,
  subscriptions,
  feed
});

export default rootReducer;
