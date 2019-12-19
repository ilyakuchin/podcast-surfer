import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodeDescription from "./EpisodeDescription";

configure({ adapter: new Adapter() });

describe("Episode Description", () => {
  test("should return episode description", () => {
    expect(
      shallow(<EpisodeDescription description="testtest" />).contains(
        <div>testtest</div>
      )
    ).toBe(true);
  });

  test("should return 'description is empty' if there is no description", () => {
    expect(
      shallow(<EpisodeDescription description="" />).contains(
        <div>Description is empty</div>
      )
    ).toBe(true);
  });
});
