import React from "react";
import "./App.css";
import Podcast from "./components/Podcast/Podcast";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import { Switch, Route, Router } from "react-router-dom";
import SearchPodcast from "./components/SearchPodcast/SearchPodcast";
import { createBrowserHistory } from "history";
import Login from "./components/Login/Login";

export const history = createBrowserHistory();

history.listen((location, action) => {
  window.scrollTo(0, 0);
});

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} component={Login} exact />
        <Route path={"/search"} component={SearchPodcast} exact />
        <Route path={"/podcast"} component={Podcast} />
        <Route path={"/episode-player"} component={EpisodePlayer} />
      </Switch>
    </Router>
  );
}
