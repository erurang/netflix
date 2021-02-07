import React from "react";
import { moviesApi, tvApi } from "../../Api";
import SearchPresenter from "./SearchPresenter";

export default class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;

    // console.log(searchTerm);
    if (searchTerm !== "") {
      this.saerchByTerm(searchTerm);
    }
    // console.log(encodeURIComponent(searchTerm));
  };

  updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({ searchTerm: value });
  };

  saerchByTerm = async () => {
    const { searchTerm } = this.state;

    try {
      this.setState({ loading: true });

      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({ movieResults, tvResults });

      if (movieResults.length === 0 && tvResults.length === 0) {
        this.setState({ error: "에 대한 검색결과가 없습니다." });
      }
    } catch {
      this.setState({ error: "에 대한 검색결과가 없습니다." });
      throw Error();
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
