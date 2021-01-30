import React from "react";
import styled from "styled-components";
import Img from "../../src/assets/spinner.gif";

const Container = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.img});
`;

const Loader = () => <Container img={Img}></Container>;

export default Loader;
