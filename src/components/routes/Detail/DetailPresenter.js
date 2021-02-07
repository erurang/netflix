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
  margin-bottom: 10px;
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

const Tagline = styled.dd`
  opacity: 0.7;
  font-size: 15px;
`;

const Iframe = styled.iframe`
  margin-top: 20px;
`;

const MenuContainer = styled.div``;

const VideoMenu = styled.div`
  margin-top: 50px;
  width: 600px;
  height: 400px;
  background-color: transperant;
`;

const Heart = styled.i`
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;
`;

const DetailPresenter = ({ result, error, loading, heartHandler, favor }) =>
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
            <Heart
              className={
                favor !== null && favor.length > 0
                  ? favor.map((n) => {
                      if (parseInt(n.id) === result.id) {
                        return "fas fa-bookmark";
                      } else {
                        return "far fa-bookmark";
                      }
                    })
                  : "far fa-bookmark"
              }
              onClick={heartHandler}
            ></Heart>
          </Title>
          <Tagline>
            {result.tagline} {result.vote_average} /10⭐️
          </Tagline>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>/</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time}분
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
          <MenuContainer>
            <VideoMenu>
              <Iframe
                id="ytplayer"
                title="yotube videoplayer"
                type="text/html"
                width="700px"
                height="400px"
                src={
                  result.videos &&
                  result.videos.results &&
                  result.videos.results[0]
                    ? `https://www.youtube.com/embed/${result.videos.results[0].key}`
                    : null
                }
                frameBorder="0"
                allowFullScreen
              ></Iframe>
            </VideoMenu>
          </MenuContainer>
        </Data>
      </Content>
      {console.log(result)}
    </Container>
  );

export default DetailPresenter;
