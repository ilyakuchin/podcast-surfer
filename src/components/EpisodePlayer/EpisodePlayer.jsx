import React, { Component } from "react";
import EpisodeDescription from "./EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle";
import EpisodePicture from "./EpisodePicture";

export default class EpisodePlayer extends Component {
  render() {
    return (
      <div>
        <EpisodePicture></EpisodePicture>
        <EpisodeTitle></EpisodeTitle>
        <EpisodeDescription></EpisodeDescription>
      </div>
    );
  }
}
