import React, { useRef } from "react";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  error,
  loading,
}) => {
  const input = useRef();
  handleSubmit(input);

  return <input ref={input} type="text"></input>;
};

export default SearchPresenter;
