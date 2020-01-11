import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchForm from "./SearchForm";

configure({ adapter: new Adapter() });

describe("Test SearchForm component", () => {
  test("should render correctly", () => {
    expect(shallow(<SearchForm />)).toMatchSnapshot();
  });
});
