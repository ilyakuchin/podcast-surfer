import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodeAudio from "./EpisodeAudio";

configure({ adapter: new Adapter() });

describe("Episode audio", () => {
  test("should show audio player", () => {
    expect(
      shallow(
        <EpisodeAudio src="http://feeds.soundcloud.com/stream/721823038-frontend_u-e117.m4a"></EpisodeAudio>
      ).contains(
        <audio controls>
          <source
            src="http://feeds.soundcloud.com/stream/721823038-frontend_u-e117.m4a"
            type="audio/mp4"
          ></source>
        </audio>
      )
    ).toBe(true);
  });

  test("should show a placeholder if there is no audio", () => {
    expect(
      shallow(<EpisodeAudio src=""></EpisodeAudio>).contains(
        <div>There is no audio</div>
      )
    ).toBe(true);
  });
});
