import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";

configure({ adapter: new Adapter() });

describe("Episode Player Page", () => {
  test("should return podcast description", () => {
    expect(
      shallow(<EpisodePlayer description="testtest" />).contains(
        <div>testtest</div>
      )
    ).toBe(true);
  });
  test("should return description is empty if there is no description", () => {
    expect(
      shallow(<EpisodePlayer description="" />).contains(
        <div>Description is empty</div>
      )
    ).toBe(true);
  });
});
