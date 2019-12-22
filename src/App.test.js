import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./components/Podcast/Podcast";
import { Switch, Route } from "react-router-dom";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import SearchPodcast from "./components/SearchPodcast/SearchPodcast";

configure({ adapter: new Adapter() });

describe("Test App component", () => {
  test("Should render properly", () => {
    expect(
      shallow(<App />).contains(
        <main>
          <Switch>
            <Route path="/" component={SearchPodcast} exact />
            <Route path="/podcast" component={Podcast} />
            <Route path="/episode-player" component={EpisodePlayer} />
          </Switch>
        </main>
      )
    ).toBe(true);
  });
});
