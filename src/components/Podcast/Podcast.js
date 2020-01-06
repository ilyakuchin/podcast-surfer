import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Podcast extends Component {
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
                  pathname: "/episode-player",
                  state: {
                    name: item.name,
                    description: item.description,
                    image: item.image,
                    audio: item.audio
                  }
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
    ) : (
      <div>Loading</div>
    );
  }

  componentDidMount() {
    const { rss } = this.props.location.state;
    axios
      .get(`https://podcast-player-api.herokuapp.com/podcast?rss=${rss}`)
      .then(res => {
        this.setState({ ...res.data });
      });
  }
}
