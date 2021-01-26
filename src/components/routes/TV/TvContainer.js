import React from "react";
import { tvApi } from "../../Api";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      const {
        data: { results: nowPlaying },
      } = await tvApi.nowPlaying();

      const {
        data: { results: popular },
      } = await tvApi.popular();

      this.setState({ nowPlaying, topRated, popular });
    } catch (error) {
      this.setState({
        error: "찾을수없어",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(this.state);
    const { nowPlaying, topRated, popular, error, loading } = this.state;
    return (
      <TvPresenter
        nowPlaying={nowPlaying}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
