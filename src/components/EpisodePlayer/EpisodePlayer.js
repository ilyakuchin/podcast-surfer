import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styled from "styled-components";

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  justify-items: center;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "pic header header"
    "pic audio audio"
    "description description description";
`;

const Pic = styled.img`
  grid-area: pic;
`;

const Header = styled.h2`
  grid-area: header;
`;

const Audio = styled.audio`
  grid-area: audio;
  width: 100%;
`;

const Description = styled.p`
  grid-area: description;
  max-width: 700px;
`;

export default class EpisodePlayer extends Component {
  render() {
    return this.state ? (
      <Grid>
        <Pic width="200" height="200" src={this.state.pictureSrc} alt="" />
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
