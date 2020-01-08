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
    const wrapper = shallow(<EpisodePlayer location={location} />);

    expect(wrapper).toMatchSnapshot();
  });
});
