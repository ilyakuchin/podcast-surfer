import React from 'react';
import styled from 'styled-components';
import ConnectedSearchForm from '../SearchForm/SearchForm';
import ConnectedSearchResults from '../SearchResults/SearchResults';

const ComponentGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 50px auto;
  justify-items: center;
  grid-template-areas:
    'search'
    'results';
`;

export default function SearchPodcast() {
  return (
    <ComponentGrid>
      <ConnectedSearchForm />
      <ConnectedSearchResults />
    </ComponentGrid>
  );
}
