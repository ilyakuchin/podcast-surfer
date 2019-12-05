import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";
import EpisodeDescription from "./EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle";
import EpisodePicture from "./EpisodePicture";

configure({ adapter: new Adapter() });

describe("Episode player", () => {
  test("should return episode description", () => {
    expect(
      shallow(<EpisodePlayer></EpisodePlayer>).contains(
        <div>
          <EpisodePicture></EpisodePicture>
          <EpisodeTitle></EpisodeTitle>
          <EpisodeDescription></EpisodeDescription>
        </div>
      )
    ).toBe(true);
  });
});
