import React, { Component } from "react";
import EpisodeDescription from "./EpisodeDescription/EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle/EpisodeTitle";
import EpisodePicture from "./EpisodePicture/EpisodePicture";
import EpisodeAudio from "./EpisodeAudio/EpisodeAudio";

export default class EpisodePlayer extends Component {
  render() {
    return (
      <div>
        <EpisodePicture
          src={this.props.episodeInfo.pictureSrc}
        ></EpisodePicture>
        <EpisodeTitle title={this.props.episodeInfo.title}></EpisodeTitle>
        <EpisodeDescription
          description={this.props.episodeInfo.description}
        ></EpisodeDescription>
        <EpisodeAudio src={this.props.episodeInfo.audioSrc}></EpisodeAudio>
      </div>
    );
  }
}
