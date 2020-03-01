import currentEpisode from './currentEpisode';
import { SET_CURRENT_EPISODE } from '../../actions/CurrentEpisode/currentEpisode';

describe('Test currentEpisode reducer', () => {
  test('should return initial state', () => {
    expect(currentEpisode(undefined, {})).toEqual({
      name: '',
      description: '',
      imageUrl: '',
      audioUrl: '',
      error: {}
    });
  });

  test('should handle SET_CURRENT_EPISODE', () => {
    expect(
      currentEpisode(undefined, {
        type: SET_CURRENT_EPISODE,
        name: 'name',
        description: 'description',
        imageUrl: 'imageUrl',
        audioUrl: 'audioUrl'
      })
    ).toEqual({
      name: 'name',
      description: 'description',
      imageUrl: 'imageUrl',
      audioUrl: 'audioUrl',
      error: {}
    });
  });
});
