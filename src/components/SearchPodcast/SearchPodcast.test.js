import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchPodcast from "./SearchPodcast";
import { Link } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("SearchPodcast component test", () => {
  test("should rende properly", () => {
    const wrap = shallow(<SearchPodcast />);
    wrap.setState({
      episodes: [
        { id: 1, name: "name1", description: "description1", image: "link1" },
        { id: 2, name: "name2", description: "description2", image: "link2" },
        { id: 3, name: "name3", description: "description3", image: "link3" }
      ]
    });
    expect(
      wrap.contains(
        wrap.state ? (
          <div>
            <ul>
              {wrap.state("podcasts").map(item => (
                <li key={item.id}>
                  <Link to="/podcast">{item.name}</Link>
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
