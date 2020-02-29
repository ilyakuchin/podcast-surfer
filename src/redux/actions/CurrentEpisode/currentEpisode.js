export const SET_CURRENT_EPISODE = 'SET_CURRENT_EPISODE';

export function setCurrentEpisode(name, description, imageUrl, audioUrl) {
  return {
    type: SET_CURRENT_EPISODE,
    name,
    description,
    imageUrl,
    audioUrl
  };
}
