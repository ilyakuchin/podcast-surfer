import React, { Component } from "react";
import findPodcasts from "../../api/FindPodcasts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

              findPodcasts(this.state.searchPhrase).then(res =>
                this.setState({ podcasts: res })
              );
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <ul>
          {this.state.podcasts.map(item => (
            <li key={item.id}>
              <Link to="/podcast">{item.name}</Link>
              <img src={item.image} alt="podcast cover" />
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
