import React, { Component } from "react";
import ListPresenter from "./ListPresenter";
import { myMovie, myTv } from "../../Api";

export default class ListContainer extends Component {
  state = {
    myMovie: null,
    myTv: null,
    loading: true,
    error: null,
    myLocalMovie: JSON.parse(localStorage.getItem("myMovie")),
    myLocalTv: JSON.parse(localStorage.getItem("myTv")),
  };

  async componentDidMount() {
    const { myLocalMovie, myLocalTv } = this.state;

    const movieList = [];
    const tvList = [];
    try {
      for (const item of myLocalMovie) {
        const test = await myMovie.Detail(item.id);
        movieList.push(test.data);
        // console.log(movieList);
      }

      for (const item of myLocalTv) {
        const test = await myTv.Detail(item.id);
        tvList.push(test.data);
        // console.log(tvList);
      }
    } catch {
      this.setState({ error: "찜목록에러" });
    } finally {
      this.setState({ loading: false, myMovie: movieList, myTv: tvList });
    }

    // forEach는 await가 값을 반환하는것을 기다리지 않는다1
    // myLocalMovie.forEach(async (n) => {
    //   try {
    //     const myMovie = await myMovie.Detail(n.id);
    //   } catch {
    //     this.setState({ error: "결과없음" });
    //   } finally {
    //     this.setState({ loading: false });
    //   }
    // });

    // myLocalTv.forEach(async (n) => {
    //   const test = await myTv.Detail(n.id);

    //   // console.log("tv");
    //   // console.log(test);

    //   this.setState({ ...this.state.myTv, test });
    // });
  }

  render() {
    const { loading, myMovie, myTv } = this.state;

    return <ListPresenter laoding={loading} myMovie={myMovie} myTv={myTv} />;
  }
}
