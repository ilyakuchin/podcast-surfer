import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";
import getFunction from "./api/GetPodcast";

configure({ adapter: new Adapter() });

describe("Test App component", () => {
  test("Should render properly", () => {
    expect(
      shallow(<App />).contains(
        <div className="App">
          <EpisodePlayer episodeInfo={getFunction()}></EpisodePlayer>
        </div>
      )
    ).toBe(true);
  });
});
