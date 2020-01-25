import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Search = styled.form`
  margin-top: 30px;
  grid-area: search;
  display: grid;
  max-width: 700px;
  align-self: center;
  justify-self: center;
  grid-template-columns: 10fr 1fr;
  grid-template-areas: "input button";
`;

const SearchInput = styled.input`
  grid-area: input;
  font-size: 18px;
`;

const SearchButton = styled.button`
  grid-area: button;
  font-size: 18px;
`;

export default function SearchForm(props) {
  const token = window.localStorage.getItem("podcast_jwt");

  function getPodcastList(e) {
    e.preventDefault();
    props.clearPodcastResults();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/podcasts?name=${props.searchPhrase}`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then(res => {
        props.updatePodcastResults(res.data);
      });
  }

  return (
    <Search>
      <SearchInput
        type="text"
        placeholder="Search podcast.."
        name="search"
        onChange={props.handleChange}
      />
      <SearchButton type="submit" onClick={getPodcastList}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </Search>
  );
}
