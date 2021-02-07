// 데이터를 처리하는곳

import React from "react";
import { moviesApi, tvApi } from "../../Api";
import DetailPresenter from "./DetailPresenter";

export default class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
    // 상태변화 페이크로 눈앞에서 누르면 바뀌게끔 처리함
    icon: false,
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
    const {
      match: { url },
    } = this.props;
    const check = url.split("/");

    // 만약에 영화라면
    if (check[1] === "movie") {
      const test = JSON.parse(localStorage.getItem("myMovie")) || [];

      const zz = JSON.parse(localStorage.getItem("myTv"));
      if (zz === null) {
        localStorage.setItem("myTv", JSON.stringify([]));
      }

      let res = test.some((n) => {
        return n.id === id;
      });

      if (res === true) {
        this.removeStorage(id, "movie");
      } else {
        if (test.length === 0) {
          localStorage.setItem("myMovie", JSON.stringify([{ id }]));
          const test = JSON.parse(localStorage.getItem("favor"));
          test
            ? localStorage.setItem("favor", JSON.stringify([...test, { id }]))
            : localStorage.setItem("favor", JSON.stringify([{ id }]));
          this.setState({ icon: true });

          // localStorage.setItem("favor", JSON.stringify([...test, { id }]));
        } else {
          const test = JSON.parse(localStorage.getItem("myMovie"));
          localStorage.setItem("myMovie", JSON.stringify([...test, { id }]));

          const test2 = JSON.parse(localStorage.getItem("favor"));
          localStorage.setItem("favor", JSON.stringify([...test2, { id }]));
          this.setState({ icon: true });
        }
      }
    } else {
      // 티비라면
      const test = JSON.parse(localStorage.getItem("myTv")) || [];

      const zz = JSON.parse(localStorage.getItem("myMovie"));
      if (zz === null) {
        localStorage.setItem("myMovie", JSON.stringify([]));
      }

      let res = test.some((n) => {
        return n.id === id;
      });

      if (res === true) {
        this.removeStorage(id, "tv");
      } else {
        if (test.length === 0) {
          localStorage.setItem("myTv", JSON.stringify([{ id }]));

          const test = JSON.parse(localStorage.getItem("favor"));
          test
            ? localStorage.setItem("favor", JSON.stringify([...test, { id }]))
            : localStorage.setItem("favor", JSON.stringify([{ id }]));
          this.setState({ icon: true });
          // localStorage.setItem("favor", JSON.stringify([...test, { id }]));
        } else {
          const test = JSON.parse(localStorage.getItem("myTv"));
          localStorage.setItem("myTv", JSON.stringify([...test, { id }]));

          const test2 = JSON.parse(localStorage.getItem("favor"));
          localStorage.setItem("favor", JSON.stringify([...test2, { id }]));
          this.setState({ icon: true });
        }
      }
    }
  };

  removeStorage = (id, kinds) => {
    if (kinds === "movie") {
      const remain = JSON.parse(localStorage.getItem("myMovie"));
      const newMyList = remain.filter((n) => n.id !== id);
      localStorage.setItem("myMovie", JSON.stringify(newMyList));

      const remain2 = JSON.parse(localStorage.getItem("favor"));
      const newMyList2 = remain2.filter((n) => n.id !== id);
      localStorage.setItem("favor", JSON.stringify(newMyList2));

      this.setState({ icon: false });
    } else {
      const remain = JSON.parse(localStorage.getItem("myTv"));
      const newMyList = remain.filter((n) => n.id !== id);
      localStorage.setItem("myTv", JSON.stringify(newMyList));

      const remain2 = JSON.parse(localStorage.getItem("favor"));
      const newMyList2 = remain2.filter((n) => n.id !== id);
      localStorage.setItem("favor", JSON.stringify(newMyList2));
      this.setState({ icon: false });
    }
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
    const { result, error, loading, icon } = this.state;
    const favor = JSON.parse(localStorage.getItem("favor"));
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        heartHandler={this.heartHandler}
        favor={favor}
      />
    );
  }
}
