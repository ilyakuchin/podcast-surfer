import React from "react";
import "./App.css";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import getFunction from "./api/GetPodcast";

function App() {
  return (
    <div className="App">
      <EpisodePlayer episodeInfo={getFunction()}></EpisodePlayer>
    </div>
  );
}

export default App;
