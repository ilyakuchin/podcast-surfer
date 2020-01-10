import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EpisodeGrid = styled.li`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-gap: 15px;
  grid-template-areas: "episode-image episode-link";
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px auto;

  @media (max-width: 600px) {
    margin-top: 50px;
    margin-bottom: 50px;
    grid-template-columns: auto;
    grid-template-areas:
      "episode-image"
      "episode-link";
  }
`;

const EpisodeImage = styled.img`
  grid-area: episode-image;
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;

const EpisodeLink = styled.div`
  max-width: 700px;
  grid-area: episode-link;

  @media (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export default class Episode extends Component {
  render() {
    return (
      <EpisodeGrid>
        <EpisodeImage src={this.props.image} alt="episode cover" />
        <EpisodeLink>
          <Link
            to={{
              pathname: "/episode-player",
              state: {
                name: this.props.name,
                description: this.props.description,
                image: this.props.image,
                audio: this.props.audio
              }
            }}
          >
            {this.props.name}
          </Link>
        </EpisodeLink>
      </EpisodeGrid>
    );
  }
}
