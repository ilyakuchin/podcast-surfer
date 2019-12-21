import React, { Component } from "react";
import getPodcast from "../../api/GetPodcast";

export default class Podcast extends Component {
  render() {
    return this.state ? (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.description}</div>
        <div>{this.state.image}</div>
      </div>
    ) : null;
  }

  componentDidMount() {
    this.setState({ ...getPodcast() });
  }
}
