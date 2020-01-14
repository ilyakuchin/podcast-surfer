import React from "react";
import Episode from "../Episode/Episode";
import styled from "styled-components";

const Episodes = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 700px;
  grid-area: episodes;
  list-style-type: none;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export default function EpisodesList(props) {
  return (
    <Episodes>
      {props.episodes.map(item => (
        <Episode
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          audio={item.audio}
        ></Episode>
      ))}
    </Episodes>
  );
}
