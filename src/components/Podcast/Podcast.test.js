import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./Podcast";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Test Podcast Component", () => {
  test("should render correctly", () => {
    const wrapper = shallow(<Podcast />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
