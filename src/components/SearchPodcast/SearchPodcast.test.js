import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchPodcast from "./SearchPodcast";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Test SearchPodcast Component", () => {
  test("should render correctly", () => {
    expect(toJson(shallow(<SearchPodcast />))).toMatchSnapshot();
  });
});
