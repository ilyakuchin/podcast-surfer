import React, { Component } from "react";
import findEpisodes from "../../api/FindEpisodes";
import { Link } from "react-router-dom";

export default class SearchPodcast extends Component {
  render() {
    return this.state ? (
      <div>
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
