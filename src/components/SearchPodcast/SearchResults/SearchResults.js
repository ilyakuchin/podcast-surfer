import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Podcasts = styled.ul`
  list-style-type: none;
`;

const PodcastGrid = styled.li`
  display: grid;
  grid-template-areas: "podcast-image podcast-link";
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px auto;
`;

const PodcastImage = styled.img`
  grid-area: podcast-image;
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;

const PodcastLink = styled.div`
  grid-area: podcast-link;
`;

export default class SearchResults extends Component {
  render() {
    return (
      <Podcasts>
        {this.props.podcasts.map(item => (
          <PodcastGrid key={item.id}>
            <PodcastImage src={item.image} alt="podcast cover" />
            <PodcastLink>
              <Link to={{ pathname: "/podcast", state: { rss: item.rss } }}>
                {item.name}
              </Link>
            </PodcastLink>
          </PodcastGrid>
        ))}
      </Podcasts>
    );
  }
}
