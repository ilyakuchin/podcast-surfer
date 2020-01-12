import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Test EpisodePlayer component", () => {
  test("should render correctly", () => {
    const location = {
      state: {
        image: "test",
        name: "test",
        description: "test",
        audio: { type: "test", url: "test" }
      }
    };
    const wrapper = shallow(<EpisodePlayer location={location} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
