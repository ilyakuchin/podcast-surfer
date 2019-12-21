export default function getPodcast() {
  return {
    name: "podcastName",
    description: "pocastDescription",
    image: "link",
    episodes: [
      { id: 1, name: "episode1", description: "description1", image: "image1" },
      { id: 2, name: "episode2", description: "description2", image: "image2" },
      { id: 3, name: "episode2", description: "description2", image: "image2" }
    ]
  };
}
