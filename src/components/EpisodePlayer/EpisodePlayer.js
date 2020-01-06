import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default class EpisodePlayer extends Component {
  render() {
    return this.state ? (
      <div>
        <img width="200" height="200" src={this.state.pictureSrc} alt=""></img>
        <div>{this.state.title}</div>
        <div>{this.state.description}</div>
        <audio controls>
          <source src={this.state.audioSrc} type="audio/mp4"></source>
        </audio>
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
  }
}
