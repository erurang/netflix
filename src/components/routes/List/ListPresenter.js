import React from "react";
import styled from "styled-components";

import Loader from "../../Loader";
import Section from "../../Section";
import Poster from "../../Poster";

import Error from "../../Error";

const Container = styled.div`
  padding: 0px 40px;
  padding-top: 70px;
`;

const ListPresenter = ({ loading, myMovie, myTv, error }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {/* 해주지않으면 처음에 렌더링될때 this.state에 movie와 tv 값들이 없어서 오류가뜸 */}
      {myMovie && myMovie.length > 0 && (
        <Section
          title="즐겨찾기한 영화"
          children={myMovie.map((data) => (
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
      {myTv && myTv.length > 0 && (
        <Section
          title="즐겨찾기한 TV프로그램"
          children={myTv.map((data) => (
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
      {error && <Error text={error} />}
    </Container>
  );

export default ListPresenter;
