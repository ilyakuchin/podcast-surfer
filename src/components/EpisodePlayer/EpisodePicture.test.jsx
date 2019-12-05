import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePicture from "./EpisodePicture";

configure({ adapter: new Adapter() });

describe("test episode picture", () => {
  test("should show image ", () => {
    expect(
      shallow(
        <EpisodePicture link="https://www.placecage.com/640/360"></EpisodePicture>
      ).contains(<img src="https://www.placecage.com/640/360"></img>)
    ).toBe(true);
  });

  test("should show placeholder if there is no image", () => {
    expect(
      shallow(<EpisodePicture link=""></EpisodePicture>).contains(
        <img src="https://placekitten.com/640/360"></img>
      )
    ).toBe(true);
  });
});
