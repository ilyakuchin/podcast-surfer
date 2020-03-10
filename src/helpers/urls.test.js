import { buildPodcastRequestUrl, buildSearchPodcastUrl } from './urls';

describe('Tests for urls helper', () => {
  test('should return buildPodcastRequestUrl', () => {
    expect(buildPodcastRequestUrl('url')).toEqual(
      `${process.env.REACT_APP_API_URL}/podcasts?url=url`
    );
  });

  test('should return buildSearchPodcastUrl', () => {
    expect(buildSearchPodcastUrl('term')).toEqual(
      `${process.env.REACT_APP_API_URL}/podcasts?term=term`
    );
  });
});
