import React from "react";
import styled from "styled-components";

import Section from "../../Section";

import Loader from "../../Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({
  movieNowPlaying,
  moviePopular,
  tvNowPlaying,
  tvPopular,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {movieNowPlaying && movieNowPlaying.length > 0 && (
        <Section
          key={movieNowPlaying.map((data) => data.id)}
          title="현재 상영중"
          children={movieNowPlaying.map((data) => data.title)}
        />
      )}
      {moviePopular && moviePopular.length > 0 && (
        <Section
          key={moviePopular.map((data) => data.id)}
          title="인기 영화"
          children={moviePopular.map((data) => data.title)}
        />
      )}
      {tvNowPlaying && tvNowPlaying.length > 0 && (
        <Section
          key={tvNowPlaying.map((data) => data.id)}
          title="현재 방영중"
          children={tvNowPlaying.map((data) => data.original_name)}
        />
      )}
      {tvPopular && tvPopular.length > 0 && (
        <Section
          key={tvPopular.map((data) => data.id)}
          title="인기 프로그램"
          children={tvPopular.map((data) => data.original_name)}
        />
      )}
    </Container>
  );

export default HomePresenter;
