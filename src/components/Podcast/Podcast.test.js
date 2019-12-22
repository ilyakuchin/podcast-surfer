import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./Podcast";
import { Link } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("Pocast component tests", () => {
  test("should render properly", () => {
    const wrap = shallow(<Podcast></Podcast>);
    wrap.setState({
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
          name: "episode2",
          description: "description2",
          image: "image2"
        }
      ]
    });
    expect(
      wrap.contains(
        wrap.state ? (
          <div>
            <div>{wrap.state("name")}</div>
            <div>{wrap.state("description")}</div>
            <div>{wrap.state("image")}</div>
            <ul>
              {wrap.state("episodes").map(item => (
                <li key={item.id}>
                  <Link to="/episode-player">{item.name}</Link>
                  <div>{item.description}</div>
                  <div>{item.image}</div>
                </li>
              ))}
            </ul>
          </div>
        ) : null
      )
    ).toBe(true);
  });
});
