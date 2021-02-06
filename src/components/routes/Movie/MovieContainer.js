import React from "react";
import { moviesApi } from "../../Api";
import MoviePresenter from "./MoviePresenter";

export default class MovieContainer extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: upComing },
      } = await moviesApi.upComing();

      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({ nowPlaying, upComing, popular });
    } catch (error) {
      this.setState({
        error: "찾을수없어",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    return (
      <MoviePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
