import React from "react";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  padding-left: 80px;
  @keyframes slidein {
    from {
      margin-left: -5%;
      width: 300%;
    }

    to {
      margin-right: 100%;
      width: 300%;
    }
  }
  animation-duration: 1s;
  animation-name: slidein;
`;
const Grid = styled.div`
  padding-left: 80px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
