import React, { Component } from "react";
import findEpisodes from "../../api/FindEpisodes";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchPodcast extends Component {
  render() {
    return this.state ? (
      <div>
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
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
    ) : null;
  }

  componentDidMount() {
    this.setState({ podcasts: findEpisodes() });
  }
}
