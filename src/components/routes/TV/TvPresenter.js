import React from "react";
import styled from "styled-components";

import Section from "../../Section";
import Loader from "../../Loader";
import Poster from "../../Poster";

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
          title="방영중"
          children={nowPlaying.map((data) => (
            <Poster
              key={data.id}
              id={data.id}
              title={data.name}
              imgUrl={data.poster_path}
              rating={data.vote_average}
              year={data.first_air_date.split("-")[0]}
              isMovie={false}
            />
          ))}
        />
      )}
      {topRated && topRated.length > 0 && (
        <Section
          title="평점좋은"
          children={topRated.map((data) => (
            <Poster
              key={data.id}
              id={data.id}
              title={data.name}
              imgUrl={data.poster_path}
              rating={data.vote_average}
              year={data.first_air_date.split("-")[0]}
              isMovie={false}
            />
          ))}
        />
      )}
      {popular && popular.length > 0 && (
        <Section
          title="인기있는"
          children={popular.map((data) => (
            <Poster
              key={data.id}
              id={data.id}
              title={data.name}
              imgUrl={data.poster_path}
              rating={data.vote_average}
              year={data.first_air_date.split("-")[0]}
              isMovie={false}
            />
          ))}
        />
      )}
    </Container>
  );

export default TvPresenter;
