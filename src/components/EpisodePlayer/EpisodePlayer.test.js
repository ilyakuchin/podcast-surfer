import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";
import EpisodeDescription from "./EpisodeDescription/EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle/EpisodeTitle";
import EpisodePicture from "./EpisodePicture/EpisodePicture";
import EpisodeAudio from "./EpisodeAudio/EpisodeAudio";

configure({ adapter: new Adapter() });

describe("Episode player", () => {
  test("should return picture, title, description and audio (order sensitive)", () => {
    expect(
      shallow(
        <EpisodePlayer
          episodeInfo={{
            pictureSrc: "test",
            title: "test",
            description: "test",
            audioSrc: "test"
          }}
        ></EpisodePlayer>
      ).contains(
        <div>
          <EpisodePicture src="test"></EpisodePicture>
          <EpisodeTitle title="test"></EpisodeTitle>
          <EpisodeDescription description="test"></EpisodeDescription>
          <EpisodeAudio src="test"></EpisodeAudio>
        </div>
      )
    ).toBe(true);
  });
});
