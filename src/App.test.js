import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./components/EpisodePlayer/EpisodePlayer";

configure({ adapter: new Adapter() });

describe("Test App component", () => {
  test("Should render properly", () => {
    const wrap = shallow(<App />);
    wrap.setState({ episodeInfo: null });
    expect(
      wrap.contains(
        <div className="App">
          {wrap.state("episodeInfo") ? (
            <EpisodePlayer
              episodeInfo={wrap.state("episodeInfo")}
            ></EpisodePlayer>
          ) : null}
        </div>
      )
    ).toBe(true);
  });
});
