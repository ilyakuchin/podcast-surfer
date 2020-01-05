import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
              axios
                .get(
                  `${process.env.REACT_APP_API_URL}/podcasts?name=${this.state.searchPhrase}`
                )
                .then(res => {
                  this.setState({ podcasts: res.data });
                });
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

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
      </div>
    );
  }

  handleChange(e) {
    this.setState({ searchPhrase: e.target.value });
  }
}
