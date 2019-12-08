import React, { Component } from "react";

export default class EpisodePicture extends Component {
  render() {
    if (this.props.src) {
      return <img src={this.props.src}></img>;
    } else {
      return <img src="https://placekitten.com/640/360"></img>;
    }
  }
}
