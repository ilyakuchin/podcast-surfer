export const loginUrl = `${process.env.REACT_APP_API_URL}/auth/login`;
export const registerUrl = `${process.env.REACT_APP_API_URL}/auth/register`;
export function buildPodcastRequestUrl(podcastUrl) {
  return `${process.env.REACT_APP_API_URL}/podcasts?url=${podcastUrl}`;
}
export function buildSearchPodcastUrl(term) {
  return `${process.env.REACT_APP_API_URL}/podcasts?term=${term}`;
}

export const popularPodcastsUrl = `${process.env.REACT_APP_API_URL}/podcasts/popular`;
