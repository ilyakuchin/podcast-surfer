import { combineReducers } from 'redux';

import subscriptions from './subscriptions';
import userInfo from './userInfo';
import currentEpisode from './currentEpisode';
import currentPodcast from './currentPodcast';
import podcasts from './podcasts';
import searchPhrase from './searchPhrase';
import feed from './feed';

const rootReducer = combineReducers({
  userInfo,
  searchPhrase,
  podcasts,
  currentPodcast,
  currentEpisode,
  subscriptions,
  feed
});

export default rootReducer;
