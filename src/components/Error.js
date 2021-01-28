import React from "react";
import styled from "styled-components";

const Container = styled.div`
  witdh: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-weight: 600;
`;

const Error = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

export default Error;
