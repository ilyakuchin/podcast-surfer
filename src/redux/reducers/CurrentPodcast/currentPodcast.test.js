import currentPodcast from './currentPodcast';

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
});
