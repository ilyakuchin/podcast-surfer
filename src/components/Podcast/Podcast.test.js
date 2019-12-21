import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Podcast from "./Podcast";

configure({ adapter: new Adapter() });

describe("Pocast component tests", () => {
  test("should render properly", () => {
    const wrap = shallow(<Podcast></Podcast>);
    wrap.setState({
      name: "podcastName",
      description: "pocastDescription",
      image: "link",
      episodes: [
        { name: "episode1", description: "description1", image: "image1" },
        { name: "episode2", description: "description2", image: "image2" },
        { name: "episode2", description: "description2", image: "image2" }
      ]
    });
    expect(
      wrap.contains(
        wrap.state ? (
          <div>
            <div>{wrap.state("name")}</div>
            <div>{wrap.state("description")}</div>
            <div>{wrap.state("image")}</div>
          </div>
        ) : null
      )
    ).toBe(true);
  });
});
