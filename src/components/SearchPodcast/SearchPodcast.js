import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styled from "styled-components";

const ComponentGrid = styled.div`
  display: grid;
  height: 100%;
  justify-items: center;
  place-items: center;
  grid-template-rows: 100px auto;
`;

const Podcasts = styled.ul`
  list-style-type: none;
`;

const PodcastGrid = styled.li`
  display: grid;
  grid-template-areas: "podcast-image podcast-link";
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px auto;
`;

const PodcastImage = styled.img`
  grid-area: podcast-image;
`;

const PodcastLink = styled.div`
  grid-area: podcast-link;
`;

const SearchInput = styled.input`
  width: 350px;
  padding: 12px 20px;
  font-size: 18px;
`;

const SearchButton = styled.button`
  padding: 12px 20px;
  font-size: 18px;
`;

const ResultsGrid = styled.div``;

export default class SearchPodcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcasts: [],
      searchPhrase: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <ComponentGrid>
        <form>
          <SearchInput
            type="text"
            placeholder="Search podcast.."
            name="search"
            onChange={this.handleChange}
          />
          <SearchButton
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.setState({ podcasts: undefined });
              axios
                .get(
                  `https://podcast-player-api.herokuapp.com/podcasts?name=${this.state.searchPhrase}`
                )
                .then(res => {
                  this.setState({ podcasts: res.data });
                });
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </form>
        <ResultsGrid>
          {this.state.podcasts ? (
            <Podcasts>
              {this.state.podcasts.map(item => (
                <PodcastGrid key={item.id}>
                  <PodcastImage
                    height="200"
                    width="200"
                    src={item.image}
                    alt="podcast cover"
                  />
                  <PodcastLink>
                    <Link
                      to={{ pathname: "/podcast", state: { rss: item.rss } }}
                    >
                      {item.name}
                    </Link>
                  </PodcastLink>
                </PodcastGrid>
              ))}
            </Podcasts>
          ) : (
            <LoadingSpinner />
          )}
        </ResultsGrid>
      </ComponentGrid>
    );
  }

  handleChange(e) {
    this.setState({ searchPhrase: e.target.value });
  }
}
