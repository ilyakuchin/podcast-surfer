import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodesList from "./EpisodesList";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("Test EpisodesList Component", () => {
  test("should render correctly", () => {
    const episodes = [
      {
        id: 1,
        name: "name1",
        description: "description1",
        image: "image1",
        audio: "audio1"
      },
      {
        id: 2,
        name: "name2",
        description: "description2",
        image: "image2",
        audio: "audio2"
      },
      {
        id: 3,
        name: "name3",
        description: "description3",
        image: "image3",
        audio: "audio3"
      }
    ];
    expect(
      toJson(shallow(<EpisodesList episodes={episodes} />))
    ).toMatchSnapshot();
  });
});
