import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styled from "styled-components";

const Grid = styled.div`
  position: relative;
  bottom: 15px;
  margin-top: 30px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
  grid-template-areas:
    "pic header"
    "pic audio "
    "description description";
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-areas:
      "pic"
      "header"
      "audio"
      "description";
  }
`;

const Pic = styled.img`
  grid-area: pic;
  width: 200px;
  height: 200px;
  margin-left: 10px;
  @media (max-width: 600px) {
    margin: 0;
    max-width: 50%;
    max-height: 50%;
  }
  object-fit: scale-down;
`;

const Header = styled.h2`
  grid-area: header;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Audio = styled.audio`
  grid-area: audio;
  width: 95%;
`;

const Description = styled.div`
  grid-area: description;
  max-width: 700px;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  white-space: pre-line;
`;

export default class EpisodePlayer extends Component {
  render() {
    return this.state ? (
      <Grid>
        <Pic src={this.state.pictureSrc} alt="" />
        <Header>{this.state.title}</Header>
        <Audio controls>
          <source src={this.state.audioSrc} type="audio/mp4"></source>
        </Audio>

        <Description>{this.state.description}</Description>
      </Grid>
    ) : (
      <LoadingSpinner />
    );
  }

  componentDidMount() {
    this.setState({
      pictureSrc: this.props.location.state.image,
      title: this.props.location.state.name,
      description: this.props.location.state.description,
      audioSrc: this.props.location.state.audio.url
    });
  }
}
