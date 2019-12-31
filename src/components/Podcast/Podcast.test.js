import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./Podcast";

configure({ adapter: new Adapter() });

describe("Pocast component tests", () => {
  test("should render properly", () => {
    const actual = shallow(<Podcast></Podcast>);
    actual.setState({
      name: "podcastName",
      description: "pocastDescription",
      image: "link",
      episodes: [
        {
          id: 1,
          name: "episode1",
          description: "description1",
          image: "image1"
        },
        {
          id: 2,
          name: "episode2",
          description: "description2",
          image: "image2"
        },
        {
          id: 3,
          name: "episode3",
          description: "description3",
          image: "image3"
        }
      ]
    });

    const expected = shallow(
      <div>
        <div>podcastName</div>
        <div>pocastDescription</div>
        <img width="200" height="200" src="link" alt="pocast cover"></img>
        <ul>
          <li key="1">
            <a href="/episode-player">episode1</a>
            <div>description1</div>
            <img
              width="200"
              height="200"
              src="image1"
              alt="episode cover"
            ></img>
          </li>
          <li key="2">
            <a href="/episode-player">episode2</a>
            <div>description2</div>
            <img
              width="200"
              height="200"
              src="image2"
              alt="episode cover"
            ></img>
          </li>
          <li key="3">
            <a href="/episode-player">episode3</a>
            <div>description3</div>
            <img
              width="200"
              height="200"
              src="image3"
              alt="episode cover"
            ></img>
          </li>
        </ul>
      </div>
    );

    expect(actual.html()).toEqual(expected.html());
  });
});
