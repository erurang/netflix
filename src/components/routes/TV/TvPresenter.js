import React from "react";
import styled from "styled-components";
import Section from "../../Section";
import Loader from "../../Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const TvPresenter = ({ nowPlaying, topRated, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          key={nowPlaying.map((data) => data.id)}
          title="방영중"
          children={nowPlaying.map((data) => data.original_name)}
        />
      )}
      {topRated && topRated.length > 0 && (
        <Section
          key={topRated.map((data) => data.id)}
          title="평점좋은"
          children={topRated.map((data) => data.original_name)}
        />
      )}
      {popular && popular.length > 0 && (
        <Section
          key={popular.map((data) => data.id)}
          title="인기있는"
          children={popular.map((data) => data.original_name)}
        />
      )}
    </Container>
  );

export default TvPresenter;
