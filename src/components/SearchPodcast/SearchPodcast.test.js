import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchPodcast from "./SearchPodcast";

configure({ adapter: new Adapter() });

describe("Test SearchPodcast Component", () => {
  test("should render correctly", () => {
    expect(shallow(<SearchPodcast />)).toMatchSnapshot();
  });
});
