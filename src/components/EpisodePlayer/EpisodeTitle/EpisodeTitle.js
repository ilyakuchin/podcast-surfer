import React, { Component } from "react";

export default class EpisodeTitle extends Component {
  render() {
    if (this.props.title) {
      return <div>{this.props.title}</div>;
    } else {
      return <div>Episode title is missing</div>;
    }
  }
}
