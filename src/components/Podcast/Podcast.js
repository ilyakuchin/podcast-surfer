import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Podcast extends Component {
  constructor(props) {
    super(props);

    this.state = { episodes: [] };
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
          alt="podcast cover"
        />
        <ul>
          {this.state.episodes.map(item => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: "/episode-player"
                }}
              >
                {item.name}
              </Link>
              <div>{item.description}</div>
              <img
                width="200"
                height="200"
                src={item.image}
                alt="episode cover"
              />
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }

  componentDidMount() {
    const { rss } = this.props.location.state;
    axios.get(`http://localhost:5000/podcast?rss=${rss}`).then(res => {
      this.setState({ ...res.data });
    });
  }
}
