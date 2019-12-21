import React, { Component } from "react";
import "./App.css";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import getEpisode from "./api/GetEpisode";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodeInfo: null
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.episodeInfo ? (
          <EpisodePlayer episodeInfo={this.state.episodeInfo}></EpisodePlayer>
        ) : null}
      </div>
    );
  }

  componentDidMount() {
    this.setState({ episodeInfo: getEpisode() });
  }
}
