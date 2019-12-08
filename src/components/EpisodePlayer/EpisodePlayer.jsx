import React, { Component } from "react";
import EpisodeDescription from "./EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle";
import EpisodePicture from "./EpisodePicture";
import EpisodeAudio from "./EpisodeAudio";

export default class EpisodePlayer extends Component {
  render() {
    return (
      <div>
        <EpisodePicture src={this.props.pictureSrc}></EpisodePicture>
        <EpisodeTitle title={this.props.title}></EpisodeTitle>
        <EpisodeDescription
          description={this.props.description}
        ></EpisodeDescription>
        <EpisodeAudio src={this.props.audioSrc}></EpisodeAudio>
      </div>
    );
  }
}
