import React from "react";
import { useHistory, withRouter } from "react-router-dom";

// withRouter
// withRouter 다른 컴포넌트를 감싸는 컴포넌트임.
// Router에 정보를줌

import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

const List = styled.ul`
  display: flex;
  position: fixed;
`;

const Item = styled.li`
  margin-right: 30px;
  cursor: pointer;
  transition: 0.2s ease-in;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    color: white;
  }
  color: ${(props) => (props.current ? "white" : "gray")};
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
`;

// withRouter로 감쌈
// props로 연결해주기
export default withRouter(({ location: { pathname } }) => {
  // console.log(props);
  // console.log(pathname);
  const history = useHistory();
  return (
    <Header>
      <List>
        <Item current={pathname === "/home"}>
          <span onClick={() => history.push("home")}>홈</span>
        </Item>
        <Item current={pathname === "/tv"}>
          <span onClick={() => history.push("tv")}>TV 프로그램</span>
        </Item>
        <Item current={pathname === "/search"}>
          <span onClick={() => history.push("search")}>검색</span>
        </Item>
        <Item current={pathname === "/detail"}>
          <span onClick={() => history.push("detail")}>내가 찜한 콘텐츠</span>
        </Item>
      </List>
    </Header>
  );
});
