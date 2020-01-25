import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../../context/AuthContext";

const Podcasts = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 50px;
  grid-area: results;
  list-style-type: none;
`;

const PodcastGrid = styled.li`
  margin-top: 50px;
  justify-items: center;
  align-items: center;
  max-width: 700px;
  display: grid;
  grid-template-areas: "podcast-image podcast-link";
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px auto;

  @media (max-width: 600px) {
    grid-template-areas:
      "podcast-image"
      "podcast-link";
  }
`;

const PodcastImage = styled.img`
  grid-area: podcast-image;
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;

const PodcastLink = styled.div`
  grid-area: podcast-link;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export default function SearchResults(props) {
  const value = useContext(AuthContext);
  return (
    <Podcasts>
      {props.podcasts.map(item => (
        <PodcastGrid key={item.id}>
          <PodcastImage src={item.image} alt="podcast cover" />
          <PodcastLink>
            <Link onClick={() => value.setRSS(item.rss)} to={"/podcast"}>
              {item.name}
            </Link>
          </PodcastLink>
        </PodcastGrid>
      ))}
    </Podcasts>
  );
}