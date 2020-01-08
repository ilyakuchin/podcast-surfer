import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styled from "styled-components";

const ComponentGrid = styled.div`
  margin-top: 30px;
  display: grid;
  justify-items: center;
  place-items: center;
  height: 100%;
`;

const PodcastGrid = styled.div`
  display: grid;
  max-width: 700px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "podcast-img podcast-title"
    "podcast-img podcast-description"
    "episodes episodes";
`;

const PodcastImg = styled.img`
  grid-area: podcast-img;
`;

const PodcastTitle = styled.h2`
  grid-area: podcast-title;
`;

const PodcastDescription = styled.p`
  grid-area: podcast-description;
`;

const Episodes = styled.ul`
  grid-area: episodes;
  list-style-type: none;
`;

const EpisodeGrid = styled.li`
  display: grid;
  grid-template-areas: "episode-image episode-link";
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px auto;
`;

const EpisodeImage = styled.img`
  grid-area: episode-image;
`;

const EpisodeLink = styled.div`
  grid-area: episode-link;
`;

export default class Podcast extends Component {
  render() {
    return (
      <ComponentGrid>
        {this.state ? (
          <PodcastGrid>
            <PodcastImg
              width="300"
              height="300"
              src={this.state.image}
              alt="podcast cover"
            />
            <PodcastTitle>{this.state.name}</PodcastTitle>
            <PodcastDescription>{this.state.description}</PodcastDescription>
            <Episodes>
              {this.state.episodes.map(item => (
                <EpisodeGrid key={item.id}>
                  <EpisodeImage
                    width="200"
                    height="200"
                    src={item.image}
                    alt="episode cover"
                  />
                  <EpisodeLink>
                    <Link
                      to={{
                        pathname: "/episode-player",
                        state: {
                          name: item.name,
                          description: item.description,
                          image: item.image,
                          audio: item.audio
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </EpisodeLink>
                </EpisodeGrid>
              ))}
            </Episodes>
          </PodcastGrid>
        ) : (
          <LoadingSpinner />
        )}
      </ComponentGrid>
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
