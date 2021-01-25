import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

export default () => {
  const history = useHistory();

  return (
    <Header>
      <List>
        <Item>
          <string onClick={() => history.push("home")}>홈</string>
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
