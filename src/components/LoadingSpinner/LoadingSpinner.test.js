import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import LoadingSpinner from "./LoadingSpinner";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Test LoadingSpinner Component", () => {
  test("should render correctly", () => {
    expect(toJson(shallow(<LoadingSpinner />))).toMatchSnapshot();
  });
});
