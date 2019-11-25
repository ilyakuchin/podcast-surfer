import React, { Component } from "react";

export default class EpisodePlayer extends Component {
  render() {
    if (this.props.description) {
      return <div>{this.props.description}</div>;
    } else {
      return <div>Description is empty</div>;
    }
  }
}
