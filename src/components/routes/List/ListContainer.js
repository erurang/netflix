import React, { Component } from "react";
import ListPresenter from "./ListPresenter";
import { moviesApi, tvApi } from "../../Api";

export default class ListContainer extends Component {
  state = {
    myList: null,
    loading: true,
    error: null,
    list: JSON.parse(localStorage.getItem("myList")) || [],
  };

  componentDidMount() {
    const { list } = this.state;

    list.forEach(async (n) => {
      const id = parseInt(n.id);
      try {
        const res = id
          ? await tvApi.tvDetail(id)
          : await moviesApi.movieDetail(id);
        console.log(res);
      } catch (error) {
        this.setState({ error: "검색결과업슴" });
      } finally {
        this.setState({ loading: false });
      }
    });
  }

  render() {
    return <ListPresenter />;
  }
}
