import React from "react";
import styled from "styled-components";
import Img from "../../src/assets/spinner.gif";

const Container = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 200px;
  height: 200px;
  background-color: #151515;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
`;

const Loader = () => (
  <Container>
    <Spinner img={Img}></Spinner>
  </Container>
);

export default Loader;
