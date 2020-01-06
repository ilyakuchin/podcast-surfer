import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default class SearchPodcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: [],
      searchPhrase: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.setState({ podcasts: undefined });
              axios
                .get(
                  `https://podcast-player-api.herokuapp.com/podcasts?name=${this.state.searchPhrase}`
                )
                .then(res => {
                  this.setState({ podcasts: res.data });
                });
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        {this.state.podcasts ? (
          <ul>
            {this.state.podcasts.map(item => (
              <li key={item.id}>
                <Link to={{ pathname: "/podcast", state: { rss: item.rss } }}>
                  {item.name}
                </Link>
                <img
                  height="200"
                  width="200"
                  src={item.image}
                  alt="podcast cover"
                />
              </li>
            ))}
          </ul>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    );
  }

  handleChange(e) {
    this.setState({ searchPhrase: e.target.value });
  }
}
