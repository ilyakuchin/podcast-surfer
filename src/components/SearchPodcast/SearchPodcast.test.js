import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchPodcast from "./SearchPodcast";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import findEpisodes from "../../api/FindEpisodes";

configure({ adapter: new Adapter() });

describe("SearchPodcast component test", () => {
  test("should render properly", () => {
    const expectedNode = shallow(
      <div>
        <input type="text" placeholder="Search.." name="search" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <ul></ul>
      </div>
    );
    const actualNode = shallow(<SearchPodcast />);

    expect(actualNode.html()).toEqual(expectedNode.html());
  });
});
