import React, { Component } from "react";
import "./App.css";
import Podcast from "./components/Podcast/Podcast";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodeInfo: null
    };
  }
  render() {
    return (
      <div className="App">
        <Podcast></Podcast>
      </div>
    );
  }
}
