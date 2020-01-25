import React, { useContext } from "react";
import Podcast from "./components/Podcast/Podcast";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import { Route, Link } from "react-router-dom";
import SearchPodcast from "./components/SearchPodcast/SearchPodcast";
import AuthContext from "./context/AuthContext";

export default function AuthenticatedApp() {
  const value = useContext(AuthContext);
  return (
    <div>
      {value.username}
      <Link to={"/"} onClick={value.logout}>
        Logout
      </Link>
      <Route path={"/"} component={SearchPodcast} exact />
      <Route path={"/podcast"} component={Podcast} />
      <Route path={"/episode-player"} component={EpisodePlayer} />
    </div>
  );
}
