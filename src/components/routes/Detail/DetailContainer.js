// 데이터를 처리하는곳

import React from "react";
import { moviesApi, tvApi } from "../../Api";
import DetailPresenter from "./DetailPresenter";

export default class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  heartHandler = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.plusStorage(id);
  };

  plusStorage = (id) => {
    // 가져와서
    const test = JSON.parse(localStorage.getItem("myList")) || [];

    let res = test.some((n) => {
      return n.id == id;
    });

    if (res == true) {
      this.removeStorage(id);
    } else {
      if (test.length == 0) {
        localStorage.setItem("myList", JSON.stringify([{ id }]));
      } else {
        const test = JSON.parse(localStorage.getItem("myList"));
        localStorage.setItem("myList", JSON.stringify([...test, { id }]));
      }
    }
  };

  removeStorage = (id) => {
    const remain = JSON.parse(localStorage.getItem("myList"));

    const newMyList = remain.filter((n) => n.id !== id);

    localStorage.setItem("myList", JSON.stringify(newMyList));
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return push("/");
    }

    this.isMovie = pathname.includes("/movie/");

    let result = null;
    try {
      if (this.isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
      }
    } catch {
      this.setState({ error: "검색결과업슴" });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        heartHandler={this.heartHandler}
      />
    );
  }
}
