import React from "react";
import styled from "styled-components";
import Loader from "../../Loader";
import Section from "../../Section";
import Error from "../../Error";
import Poster from "../../Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 15px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  updateTerm,
  error,
  loading,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="검색..." value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="영화 검색결과">
            {movieResults.map((data) => (
              <Poster
                key={data.id}
                id={data.id}
                title={data.title}
                imgUrl={data.poster_path}
                rating={data.vote_average}
                year={data.release_date.split("-")[0]}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV프로그램 검색결과">
            {tvResults.map((data) => (
              <Poster
                key={data.id}
                id={data.id}
                title={data.name}
                imgUrl={data.poster_path}
                rating={data.vote_average}
                year={data.first_air_date.split("-")[0]}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Error text={error} />}
      </>
    )}
  </Container>
);

export default SearchPresenter;
