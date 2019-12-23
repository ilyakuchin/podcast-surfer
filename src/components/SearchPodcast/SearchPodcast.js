import React, { Component } from "react";
import findEpisodes from "../../api/FindEpisodes";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchPodcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: []
    };
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search.." name="search" />
        <button
          onClick={() => {
            this.setState({
              podcasts: findEpisodes()
            });
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <ul>
          {this.state.podcasts.map(item => (
            <li key={item.id}>
              <Link to="/podcast">{item.name}</Link>
              <div>{item.description}</div>
              <div>{item.image}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
