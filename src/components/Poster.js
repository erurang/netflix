import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const ImgContainer = styled.div``;

const Img = styled.div`
  height: 300px;
  margin-bottom: 3px;
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/w300${props.bgUrl}`});
`;

const Rating = styled.div`
  margin-bottom: 5px;
`;

const Title = styled.div`
  font-size: 12px;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  opacity: 0.5;
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImgContainer>
        <Img bgUrl={imgUrl}></Img>
        <Rating>{rating}/10</Rating>
      </ImgContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

export default Poster;
