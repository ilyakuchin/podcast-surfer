import React, { Component } from "react";
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

export default class SearchForm extends Component {
  render() {
    return (
      <Search>
        <SearchInput
          type="text"
          placeholder="Search podcast.."
          name="search"
          onChange={this.props.handleChange}
        />
        <SearchButton
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.props.clearPodcastResults();
            axios
              .get(
                `https://podcast-player-api.herokuapp.com/podcasts?name=${this.props.searchPhrase}`
              )
              .then(res => {
                this.props.updatePodcastResults(res.data);
              });
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </Search>
    );
  }
}
