import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";
import EpisodeDescription from "./EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle";
import EpisodePicture from "./EpisodePicture";
import EpisodeAudio from "./EpisodeAudio";

configure({ adapter: new Adapter() });

describe("Episode player", () => {
  test("should return picture, title, description and audio (order sensitive)", () => {
    expect(
      shallow(
        <EpisodePlayer
          pictureSrc=""
          title=""
          description=""
          audioSrc=""
        ></EpisodePlayer>
      ).contains(
        <div>
          <EpisodePicture src=""></EpisodePicture>
          <EpisodeTitle title=""></EpisodeTitle>
          <EpisodeDescription description=""></EpisodeDescription>
          <EpisodeAudio src=""></EpisodeAudio>
        </div>
      )
    ).toBe(true);
  });
});
