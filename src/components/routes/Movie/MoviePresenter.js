import React from "react";
import styled from "styled-components";

import Section from "../../Section";
import Poster from "../../Poster";
import Loader from "../../Loader";

const Container = styled.div`
  padding: 0px 40px;
  padding-top: 70px;
`;

const MoviePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="상영중"
          children={nowPlaying.map((data) => (
            <Poster
              key={data.id}
              id={data.id}
              title={data.title}
              imgUrl={data.poster_path}
              rating={data.vote_average}
              year={data.release_date.split("-")[0]}
              isMovie={true}
            />
          ))}
        />
      )}
      {upComing && upComing.length > 0 && (
        <Section
          title="다가오는"
          children={upComing.map((data) => (
            <Poster
              key={data.id}
              id={data.id}
              title={data.title}
              imgUrl={data.poster_path}
              rating={data.vote_average}
              year={data.release_date.split("-")[0]}
              isMovie={true}
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
              title={data.title}
              imgUrl={data.poster_path}
              rating={data.vote_average}
              year={data.release_date.split("-")[0]}
              isMovie={true}
            />
          ))}
        />
      )}
    </Container>
  );

export default MoviePresenter;
