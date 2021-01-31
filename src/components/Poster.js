import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noThumbnail from "../assets/no.png";

const Container = styled.div`
  font-size: 12px;
`;

const Rating = styled.div`
  position: absolute;
  font-size: 15px;
  bottom: 35px;
  right: 5px;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  height: 300px;
  background-size: cover;
  margin-bottom: 10px;
  background-image: url(${(props) =>
    props.bgUrl
      ? `https://image.tmdb.org/t/p/w300${props.bgUrl}`
      : `${noThumbnail}`});
  background-position: center center;
  &:hover {
    box-shadow: 0px 0px 16px 5px rgba(255, 255, 255, 1);
  }
`;

const Video = styled.video``;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  margin-right: 30px;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.2);
    z-index: 1;
    ${Img} {
      opacity: 0.4;
    }
    ${Rating} {
      opacity: 1;
    }
    ${Video} {
    }
  }
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
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
