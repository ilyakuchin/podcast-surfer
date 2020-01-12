import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Episode from "./Episode";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Test Episode Component", () => {
  test("should render correctly", () => {
    expect(toJson(shallow(<Episode />))).toMatchSnapshot();
  });
});
