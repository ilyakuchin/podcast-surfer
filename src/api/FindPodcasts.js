import axios from "axios";

export default function findPodcasts(searchPhrase) {
  return axios
    .get(`https://itunes.apple.com/search?media=podcast&term=${searchPhrase}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
    .then(function(response) {
      let podcastsInfo = [];
      for (let i = 0; i < response.data.results.length; i++) {
        podcastsInfo.push({
          id: response.data.results[i].collectionId,
          name: response.data.results[i].collectionName,
          image: response.data.results[i].artworkUrl600,
          rss: response.data.results[i].feedUrl
        });
      }
      return podcastsInfo;
    });
}
