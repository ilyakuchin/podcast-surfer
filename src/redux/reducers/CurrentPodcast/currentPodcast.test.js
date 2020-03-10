import currentPodcast from './currentPodcast';
import {
  FETCH_CURRENT_PODCAST_REQUEST,
  FETCH_CURRENT_PODCAST_SUCCESS,
  FETCH_CURRENT_PODCAST_FAILURE
} from '../../actions/CurrentPodcast/currentPodcast';

describe('Test currentPodcast reducer', () => {
  test('should return initial state', () => {
    expect(currentPodcast(undefined, {})).toEqual({
      id: '',
      isFetching: false,
      isSubscribed: false,
      name: '',
      description: '',
      imageUrl: '',
      rss: '',
      episodes: [],
      podcastUrl: ''
    });
  });

  test('should handle FETCH_CURRENT_PODCAST_REQUEST action', () => {
    expect(
      currentPodcast(undefined, {
        type: FETCH_CURRENT_PODCAST_REQUEST,
        isFetching: true
      })
    ).toEqual({
      id: '',
      isFetching: true,
      isSubscribed: false,
      name: '',
      description: '',
      imageUrl: '',
      rss: '',
      episodes: [],
      podcastUrl: ''
    });
  });

  test('should handle FETCH_CURRENT_PODCAST_SUCCESS action', () => {
    expect(
      currentPodcast(undefined, {
        type: FETCH_CURRENT_PODCAST_SUCCESS,
        currentPodcast: {
          id: 'id',
          name: 'podcast',
          description: 'description',
          imageUrl: 'imageUrl',
          episodes: ['episode1', 'episode2', 'episode3'],
          rss: 'rss',
          podcastUrl: 'podcast url'
        },
        isFetching: false,
        isSubscribed: false
      })
    ).toEqual({
      id: 'id',
      isFetching: false,
      isSubscribed: false,
      name: 'podcast',
      description: 'description',
      imageUrl: 'imageUrl',
      rss: 'rss',
      episodes: ['episode1', 'episode2', 'episode3'],
      podcastUrl: 'podcast url'
    });
  });

  test('should handle FETCH_CURRENT_PODCAST_FAILURE action', () => {
    expect(
      currentPodcast(undefined, {
        type: FETCH_CURRENT_PODCAST_FAILURE,
        isFetching: false,
        error: 'error'
      })
    ).toEqual({
      id: '',
      isFetching: false,
      isSubscribed: false,
      name: '',
      description: '',
      imageUrl: '',
      rss: '',
      episodes: [],
      podcastUrl: '',
      error: 'error'
    });
  });
});
