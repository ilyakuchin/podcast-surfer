import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./EpisodePlayer.css";

export default class EpisodePlayer extends Component {
  render() {
    return this.state ? (
      <div className="grid">
        <img
          className="pic"
          width="200"
          height="200"
          src={this.state.pictureSrc}
          alt=""
        ></img>
        <h2 className="header">{this.state.title}</h2>
        <audio className="audio" controls>
          <source src={this.state.audioSrc} type="audio/mp4"></source>
        </audio>
        <p className="description">{this.state.description}</p>
      </div>
    ) : (
      <LoadingSpinner />
    );
  }

  componentDidMount() {
    this.setState({
      pictureSrc: this.props.location.state.image,
      title: this.props.location.state.name,
      description: this.props.location.state.description,
      audioSrc: this.props.location.state.audio.url
    });

    window.scrollTo(0, 0);
  }
}
