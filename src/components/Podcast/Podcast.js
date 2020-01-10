import React, { Component } from "react";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styled from "styled-components";
import EpisodesList from "./EpisodesList/EpisodesList";

const PodcastGrid = styled.div`
  display: grid;
  width: 100%
  margin-top: 30px;
  justify-items: center;
  grid-gap: 15px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "podcast-img podcast-title"
    "podcast-img podcast-description"
    "episodes episodes";

  @media(max-width: 600px) {
    grid-template-areas:
    "podcast-img"
    "podcast-title"
    "podcast-description"
    "episodes";
  }
`;

const PodcastImg = styled.img`
  grid-area: podcast-img;
  margin-left: 10px;
  width: 300px;
  height: 300px;
  object-fit: scale-down;

  @media (max-width: 600px) {
    margin: 0;
    max-width: 65%;
    max-height: 65%;
  }
`;

const PodcastTitle = styled.h2`
  grid-area: podcast-title;
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const PodcastDescription = styled.p`
  grid-area: podcast-description;
  max-width: 700px;
  white-space: pre-line;

  @media (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const SpinnerGrid = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas: spinner;
`;

const CenteredSpinner = styled(LoadingSpinner)`
  grid-area: spinner;
`;

export default class Podcast extends Component {
  render() {
    return this.state ? (
      <PodcastGrid>
        <PodcastImg src={this.state.image} alt="podcast cover" />
        <PodcastTitle>{this.state.name}</PodcastTitle>
        <PodcastDescription>{this.state.description}</PodcastDescription>
        <EpisodesList episodes={this.state.episodes}></EpisodesList>
      </PodcastGrid>
    ) : (
      <SpinnerGrid>
        <CenteredSpinner></CenteredSpinner>
      </SpinnerGrid>
    );
  }

  componentDidMount() {
    const { rss } = this.props.location.state;
    axios
      .get(`https://podcast-player-api.herokuapp.com/podcast?rss=${rss}`)
      .then(res => {
        this.setState({ ...res.data });
      });
  }
}
