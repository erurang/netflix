import React from "react";
import styled from "styled-components";

import Section from "../../Section";

import Loader from "../../Loader";
import Poster from "../../Poster";

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
    <Loader></Loader>
  ) : (
    <>
      <Container>
        {movieNowPlaying && movieNowPlaying.length > 0 && (
          <Section
            title="현재 상영중"
            children={movieNowPlaying.map((data) => (
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
        {moviePopular && moviePopular.length > 0 && (
          <Section
            title="인기 영화"
            children={moviePopular.map((data) => (
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
        {tvNowPlaying && tvNowPlaying.length > 0 && (
          <Section
            title="현재 방영중"
            children={tvNowPlaying.map((data) => (
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
        {tvPopular && tvPopular.length > 0 && (
          <Section
            title="인기 프로그램"
            children={tvPopular.map((data) => (
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
    </>
  );

export default HomePresenter;
