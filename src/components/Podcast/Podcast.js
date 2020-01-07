import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default class Podcast extends Component {
  render() {
    return (
      <div className="container1">
        {this.state ? (
          <div className="grid1">
            <h2 className="title1">{this.state.name}</h2>
            <img
              className="pic1"
              width="200"
              height="200"
              src={this.state.image}
              alt="podcast cover"
            />
            <p className="description">{this.state.description}</p>
            <ul className="episodes1">
              {this.state.episodes.map(item => (
                <li key={item.id}>
                  <img
                    width="200"
                    height="200"
                    src={item.image}
                    alt="episode cover"
                  />
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
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
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
