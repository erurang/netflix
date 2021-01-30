// 처리된 데이터를 받아서 보여주는곳
import React from "react";
import styled from "styled-components";
import Loader from "../../Loader";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  opacity: 0.7;
  z-index: 0;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.bgImg});
`;

const Content = styled.div`
  display: flex;
  position: relative;
  witdh: 100%;
  height: 100%;
  z-index: 1;
`;

const Cover = styled.div`
  margin-top: 100px;
  margin-left: 80px;
  width: 30%;
  height: 80%;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.bgImg});
`;

const Data = styled.div`
  width: 70%;
  margin-top: 100px;
  margin-left: 50px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Back
        bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImg={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        ></Cover>
        <Data>
          <Title>
            {result.title ? result.title : result.name}
            <i
              style={{ cursor: "pointer", marginLeft: "10px" }}
              className="far fa-heart"
            ></i>
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>/</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]}분
            </Item>
            <Divider>/</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
      {console.log(result)}
    </Container>
  );

export default DetailPresenter;
