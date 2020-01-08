import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import Podcast from "./Podcast";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("Pocast component tests", () => {
  test("should render properly", () => {
    const location = { state: { rss: "sample text" } };
    const wrapper = mount(
      <BrowserRouter>
        <Podcast location={location}></Podcast>
      </BrowserRouter>
    );
    wrapper
      .find(Podcast)
      .instance()
      .setState({
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
    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });
});
