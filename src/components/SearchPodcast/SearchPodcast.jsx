import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ConnectedSearchForm from '../SearchForm/SearchForm';
import ConnectedSearchResults from '../SearchResults/SearchResults';
import PopularPodcasts from '../PopularPodcasts/PopularPodcasts';

const ComponentGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 50px auto;
  justify-items: center;
  grid-template-areas:
    'search'
    'results';
`;

export function SearchPodcast({ podcasts }) {
  function hasPodcasts() {
    return podcasts.length !== 0;
  }
  return (
    <ComponentGrid>
      <ConnectedSearchForm />
      {!hasPodcasts() ? <PopularPodcasts /> : <ConnectedSearchResults />}
    </ComponentGrid>
  );
}

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts.podcasts
  };
};

const ConnectedSearchPodcast = connect(mapStateToProps)(SearchPodcast);

export default ConnectedSearchPodcast;
