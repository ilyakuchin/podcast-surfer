import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";

configure({ adapter: new Adapter() });

describe("Episode player", () => {
  test("should return picture, title, description and audio (order sensitive)", () => {
    const location = {
      state: {
        image: "test",
        name: "test",
        description: "test",
        audio: { type: "test", url: "test" }
      }
    };
    const actual = shallow(<EpisodePlayer location={location} />);

    const expected = shallow(
      <div>
        <img width="200" height="200" src="test" alt=""></img>
        <div>test</div>
        <div>test</div>
        <audio controls>
          <source src="test" type="audio/mp4"></source>
        </audio>
      </div>
    );

    expect(actual.html()).toEqual(expected.html());
  });
});
