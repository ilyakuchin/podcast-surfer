import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchPodcast from "./SearchPodcast";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

configure({ adapter: new Adapter() });

describe("SearchPodcast component test", () => {
  test("should render properly", () => {
    const expectedNode = shallow(
      <div>
        <form>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <ul></ul>
      </div>
    );
    const actualNode = shallow(<SearchPodcast />);

    expect(actualNode.html()).toEqual(expectedNode.html());
  });
});
