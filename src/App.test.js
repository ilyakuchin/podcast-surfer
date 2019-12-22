import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./components/Podcast/Podcast";
import { Switch, Route } from "react-router-dom";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";

configure({ adapter: new Adapter() });

describe("Test App component", () => {
  test("Should render properly", () => {
    expect(
      shallow(<App />).contains(
        <main>
          <Switch>
            <Route path="/" component={Podcast} exact />
            <Route path="/episode-player" component={EpisodePlayer} />
          </Switch>
        </main>
      )
    ).toBe(true);
  });
});
