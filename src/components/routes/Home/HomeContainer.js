import React from "react";
import { moviesApi } from "../../Api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
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
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      // this.setState({ nowPlaying });

      const {
        data: { results: upComing },
      } = await moviesApi.upComing();
      // this.setState({ upComing });

      const {
        data: { results: popular },
      } = await moviesApi.popular();
      // this.setState({ popular });

      this.setState({ nowPlaying, upComing, popular });
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
    console.log(this.state);
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
