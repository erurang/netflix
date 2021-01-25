import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-bottom: 1px solid white;
`;

const List = styled.ul`
  display: flex;
  position: fixed;
`;

const Item = styled.li`
  margin-right: 30px;
  cursor: pointer;
  transition: 0.15s ease-in;
  &:hover {
    color: lightgray;
  }
`;

export default () => {
  const history = useHistory();

  return (
    <Header>
      <List>
        <Item>
          <string onClick={() => history.push("home")}>
            <i class="fab fa-yarn" style={{ color: "#E50916" }}></i>홈
          </string>
        </Item>
        <Item>
          <string onClick={() => history.push("tv")}>TV 프로그램</string>
        </Item>
        <Item>
          <string onClick={() => history.push("search")}>영화</string>
        </Item>
        <Item>
          <string onClick={() => history.push("detail")}>
            내가 찜한 콘텐츠
          </string>
        </Item>
      </List>
    </Header>
  );
};
