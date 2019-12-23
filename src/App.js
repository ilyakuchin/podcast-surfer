import React, { Component } from "react";
import "./App.css";
import Podcast from "./components/Podcast/Podcast";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import { Switch, Route } from "react-router-dom";
import SearchPodcast from "./components/SearchPodcast/SearchPodcast";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodeInfo: null
    };
  }
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={SearchPodcast} exact />
          <Route path="/podcast" component={Podcast} />
          <Route path="/episode-player" component={EpisodePlayer} />
        </Switch>
      </main>
    );
  }
}
