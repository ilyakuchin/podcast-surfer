import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodeTitle from "./EpisodeTitle";

configure({ adapter: new Adapter() });

describe("Name of the group", () => {
  test("should show episode title", () => {
    expect(
      shallow(<EpisodeTitle title="test title"></EpisodeTitle>).contains(
        <div>test title</div>
      )
    ).toBe(true);
  });

  test('should show "Episode title is missing" if there is no episode title', () => {
    expect(
      shallow(<EpisodeTitle title=""></EpisodeTitle>).contains(
        <div>Episode title is missing</div>
      )
    ).toBe(true);
  });
});
