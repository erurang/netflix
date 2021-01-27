import React from "react";
import styled from "styled-components";

import Section from "../../Section";

import Loader from "../../Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const MoviePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          key={nowPlaying.map((data) => data.id)}
          title="상영중"
          children={nowPlaying.map((data) => data.title)}
        />
      )}
      {upComing && upComing.length > 0 && (
        <Section
          key={upComing.map((data) => data.id)}
          title="다가오는"
          children={upComing.map((data) => data.title)}
        />
      )}
      {popular && popular.length > 0 && (
        <Section
          key={popular.map((data) => data.id)}
          title="인기있는"
          children={popular.map((data) => data.title)}
        />
      )}
    </Container>
  );

export default MoviePresenter;
