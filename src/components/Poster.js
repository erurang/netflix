import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { trailerApi } from "./Api";

const Container = styled.div`
  font-size: 12px;
`;

const Rating = styled.div`
  position: absolute;
  font-size: 15px;
  bottom: 30px;
  right: 0px;
  margin-bottom: 5px;
  opacity: 0;
`;

const Title = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  opacity: 0.5;
`;

const Img = styled.div`
  height: 300px;
  background-size: cover;

  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.bgUrl}`});

  background-position: center center;
`;

const Video = styled.video``;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  margin-right: 30px;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.3);
    z-index: 1;
    ${Img} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
    ${Video} {
    }
  }
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => {
  // const trailer = await trailerApi.movieTrailer(id);
  // console.log(trailer);
  console.log(id);
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
        {/* <Video src={trailer} controls="true"></Video> */}
        <ImgContainer>
          <Img bgUrl={imgUrl}></Img>
          <Rating>⭐️ {rating}/10</Rating>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </ImgContainer>
      </Container>
    </Link>
  );
};

export default Poster;
