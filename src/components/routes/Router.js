import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./Detail/DetailContainer";
import Home from "./Home/HomeContainer";
import Search from "./Search/SearchContainer";
import TV from "./TV/TvContainer";
import Header from "../header/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={["/", "/home"]} exact>
          <Home />
        </Route>
        <Route path={"/tv"} exact>
          <TV />
        </Route>
        {/* 만약 이렇게쓴다면 라우팅은 제대로 작동하지만 Props로 history match.. 를 받아올수가없음 */}
        {/* 그래서 render로 props를 넘겨줘야함 */}
        {/* <Route path={"/movie/:id"}>
          <Detail />
        </Route> */}
        <Route
          path={"/movie/:id"}
          render={(props) => <Detail {...props} />}
        ></Route>
        <Route
          path={"/show/:id"}
          render={(props) => <Detail {...props} />}
        ></Route>
        <Route path={"/search"}>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
