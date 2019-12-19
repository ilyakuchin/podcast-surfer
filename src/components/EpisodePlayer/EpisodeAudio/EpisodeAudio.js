import React, { Component } from "react";

export default class EpisodeAudio extends Component {
  render() {
    if (this.props.src) {
      return (
        <audio controls>
          <source src={this.props.src} type="audio/mp4"></source>
        </audio>
      );
    } else {
      return <div>There is no audio</div>;
    }
  }
}
