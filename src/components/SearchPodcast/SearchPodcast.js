import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styled from "styled-components";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults/SearchResults";

const ComponentGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 50px auto;
  justify-items: center;
  grid-template-areas:
    "search"
    "results";
`;

const CenterSpinner = styled.div`
  display: grid;
  grid-area: results;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
`;

export default function SearchPodcast() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [podcasts, setPodcasts] = useState([]);

  function handleSearchPhraseChange(e) {
    setSearchPhrase(e.target.value);
  }

  function updatePodcastResults(podcasts) {
    setPodcasts(podcasts);
  }

  function clearPodcastResults() {
    setPodcasts(null);
  }

  return (
    <ComponentGrid>
      <SearchForm
        searchPhrase={searchPhrase}
        handleChange={handleSearchPhraseChange}
        updatePodcastResults={updatePodcastResults}
        clearPodcastResults={clearPodcastResults}
      />
      {podcasts ? (
        <SearchResults podcasts={podcasts} />
      ) : (
        <CenterSpinner>
          <LoadingSpinner />
        </CenterSpinner>
      )}
    </ComponentGrid>
  );
}
