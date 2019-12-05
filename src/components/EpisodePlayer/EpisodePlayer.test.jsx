import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";
import EpisodeDescription from "./EpisodeDescription";

configure({ adapter: new Adapter() });

describe("Episode player", () => {
  test("should return episode description", () => {
    expect(
      shallow(<EpisodePlayer></EpisodePlayer>).contains(
        <EpisodeDescription></EpisodeDescription>
      )
    ).toBe(true);
  });
});
