import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styled from "styled-components";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults/SearchResults";

const ComponentGrid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  justify-items: center;
  place-items: center;
`;

export default class SearchPodcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: [],
      searchPhrase: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.updatePodcastResults = this.updatePodcastResults.bind(this);
    this.clearPodcastResults = this.clearPodcastResults.bind(this);
  }

  render() {
    return (
      <ComponentGrid>
        <SearchForm
          searchPhrase={this.state.searchPhrase}
          handleChange={this.handleChange}
          updatePodcastResults={this.updatePodcastResults}
          clearPodcastResults={this.clearPodcastResults}
        />
        {this.state.podcasts ? (
          <SearchResults podcasts={this.state.podcasts} />
        ) : (
          <LoadingSpinner />
        )}
      </ComponentGrid>
    );
  }

  handleChange(e) {
    this.setState({ searchPhrase: e.target.value });
  }

  updatePodcastResults(podcasts) {
    this.setState({ podcasts: podcasts });
  }

  clearPodcastResults(podcasts) {
    this.setState({ podcasts: null });
  }
}
