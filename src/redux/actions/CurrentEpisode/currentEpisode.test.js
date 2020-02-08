import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import {
  fetchEpisodeRequest,
  fetchEpisode,
  FETCH_EPISODE_REQUEST,
  FETCH_EPISODE_SUCCESS,
  fetchEpisodeSuccess
} from './currentEpisode';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CurrentEpisode tests', () => {
  test('should create action to request an episode', () => {
    const expectedAction = { type: FETCH_EPISODE_REQUEST, isFetching: true };

    expect(fetchEpisodeRequest()).toEqual(expectedAction);
  });

  test('should create action to receive an episode', () => {
    const expectedAction = {
      type: FETCH_EPISODE_SUCCESS,
      isFetching: false,
      name: 'name',
      description: 'description',
      imageUrl: 'imageUrl',
      audioUrl: 'audioUrl'
    };

    const currentEpisode = {
      name: 'name',
      description: 'description',
      imageUrl: 'imageUrl',
      audioUrl: 'audioUrl'
    };

    expect(fetchEpisodeSuccess(currentEpisode)).toEqual(expectedAction);
  });
});

describe('Async actions', () => {
  test('should create action to fetch an episode', () => {
    const mock = new MockAdapter(axios);
    const rss = 'rss';
    const episodeId = '1';
    const jwt = 'jwt';

    const expectedActions = [
      { type: FETCH_EPISODE_REQUEST, isFetching: true },
      {
        type: FETCH_EPISODE_SUCCESS,
        isFetching: false,
        name: 'name',
        description: 'description',
        imageUrl: 'imageUrl',
        audioUrl: 'audioUrl'
      }
    ];

    mock
      .onGet(
        `${process.env.REACT_APP_API_URL}/episode?rss=${rss}&episodeId=${episodeId}`,
        { headers: { authorization: `Bearer ${jwt}` } }
      )
      .reply(200, {
        name: 'name',
        description: 'description',
        imageUrl: 'imageUrl',
        audioUrl: 'audioUrl'
      });

    const store = mockStore();

    return store.dispatch(fetchEpisode(jwt, rss, episodeId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
