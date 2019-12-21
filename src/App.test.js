import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./components/Podcast/Podcast";

configure({ adapter: new Adapter() });

describe("Test App component", () => {
  test("Should render properly", () => {
    expect(shallow(<App />).contains(<Podcast></Podcast>)).toBe(true);
  });
});
