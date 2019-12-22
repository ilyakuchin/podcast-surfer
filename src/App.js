import React, { Component } from "react";
import "./App.css";
import Podcast from "./components/Podcast/Podcast";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import { Switch, Route } from "react-router-dom";

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
          <Route path="/" component={Podcast} exact />
          <Route path="/episode-player" component={EpisodePlayer} />
        </Switch>
      </main>
    );
  }
}
