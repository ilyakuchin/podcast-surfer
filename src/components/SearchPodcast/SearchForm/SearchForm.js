import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SearchInput = styled.input`
  width: 75%;
  font-size: 18px;
`;

const SearchButton = styled.button`
  width: 25%;
  font-size: 18px;
`;

export default class SearchForm extends Component {
  render() {
    return (
      <form>
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
      </form>
    );
  }
}
