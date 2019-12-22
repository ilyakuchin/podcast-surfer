import React, { Component } from "react";
import getPodcast from "../../api/GetPodcast";
import { Link } from "react-router-dom";

export default class Podcast extends Component {
  render() {
    return this.state ? (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.description}</div>
        <div>{this.state.image}</div>
        <ul>
          {this.state.episodes.map(item => (
            <li key={item.id}>
              <Link to="/episode-player">{item.name}</Link>
              <div>{item.description}</div>
              <div>{item.image}</div>
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }

  componentDidMount() {
    this.setState({ ...getPodcast() });
  }
}
