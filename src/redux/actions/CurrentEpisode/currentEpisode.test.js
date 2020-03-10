import { SET_CURRENT_EPISODE, setCurrentEpisode } from './currentEpisode';

describe('Tests for currentEpisode acion', () => {
  test('should return SET_CURRENT_EPISODE action', () => {
    const expectedAction = {
      type: SET_CURRENT_EPISODE,
      name: 'name',
      description: 'description',
      imageUrl: 'imageUrl',
      audioUrl: 'audioUrl'
    };

    expect(
      setCurrentEpisode('name', 'description', 'imageUrl', 'audioUrl')
    ).toEqual(expectedAction);
  });
});
