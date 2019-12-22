import React, { Component } from "react";
import EpisodeDescription from "./EpisodeDescription/EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle/EpisodeTitle";
import EpisodePicture from "./EpisodePicture/EpisodePicture";
import EpisodeAudio from "./EpisodeAudio/EpisodeAudio";
import getEpisode from "../../api/GetEpisode";

export default class EpisodePlayer extends Component {
  render() {
    return this.state ? (
      <div>
        <EpisodePicture src={this.state.pictureSrc} />
        <EpisodeTitle title={this.state.title} />
        <EpisodeDescription description={this.state.description} />
        <EpisodeAudio src={this.state.audioSrc} />
      </div>
    ) : null;
  }

  componentDidMount() {
    this.setState({ ...getEpisode() });
  }
}
