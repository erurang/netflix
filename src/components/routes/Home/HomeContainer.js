import React from "react";
import { moviesApi, tvApi } from "../../Api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    movieNowPlaying: null,
    moviePopular: null,
    tvNowPlaying: null,
    tvPopular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: movieNowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: moviePopular },
      } = await moviesApi.popular();
      // this.setState({ popular });

      const {
        data: { results: tvNowPlaying },
      } = await tvApi.nowPlaying();

      const {
        data: { results: tvPopular },
      } = await tvApi.popular();

      this.setState({ moviePopular, movieNowPlaying, tvNowPlaying, tvPopular });
    } catch (error) {
      this.setState({
        error: "찾을수없어",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      moviePopular,
      movieNowPlaying,
      tvPopular,
      tvNowPlaying,
      error,
      loading,
    } = this.state;

    return (
      <HomePresenter
        movieNowPlaying={movieNowPlaying}
        moviePopular={moviePopular}
        tvNowPlaying={tvNowPlaying}
        tvPopular={tvPopular}
        error={error}
        loading={loading}
      />
    );
  }
}
