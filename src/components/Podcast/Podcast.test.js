import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./Podcast";

configure({ adapter: new Adapter() });

describe("Pocast component tests", () => {
  test("should render properly", () => {
    expect(shallow(<Podcast></Podcast>).contains(<div></div>)).toBe(true);
  });
});
