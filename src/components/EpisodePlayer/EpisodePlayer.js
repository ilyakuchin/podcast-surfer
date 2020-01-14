import React from "react";
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

export default function EpisodePlayer(props) {
  return (
    <Grid>
      <Pic src={props.location.state.image} alt="" />
      <Header>{props.location.state.name}</Header>
      <Audio controls>
        <source src={props.location.state.audio.url} type="audio/mp4"></source>
      </Audio>

      <Description>{props.location.state.description}</Description>
    </Grid>
  );
}
