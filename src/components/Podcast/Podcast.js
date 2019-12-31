import React, { Component } from "react";
import getPodcast from "../../api/GetPodcast";
import { Link } from "react-router-dom";

export default class Podcast extends Component {
  constructor(props) {
    super(props);

    this.state = { episodes: [] };
    this.getPodcast = getPodcast.bind(this);
  }
  render() {
    return this.state ? (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.description}</div>
        <img
          width="200"
          height="200"
          src={this.state.image}
          alt="pocast cover"
        ></img>
        <ul>
          {this.state.episodes.map(item => (
            <li key={item.id}>
              <a href="/episode-player">{item.name}</a>
              <div>{item.description}</div>
              <img
                width="200"
                height="200"
                src={item.image}
                alt="episode cover"
              ></img>
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }

  componentDidMount() {
    this.getPodcast().then(res => this.setState({ ...res }));
  }
}
