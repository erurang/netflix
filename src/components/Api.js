// axios 설치
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4eb43610d8241bb64cd3edeb5b18fbd3",
    language: "ko",
  },
});

export const tvApi = {
  nowPlaying: () => api.get("tv/on_the_air"),
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: term,
      },
    }),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        query: "videos",
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};

export const trailerApi = {
  movieTrailer: (id) => api.get(`movie/${id}/videos`),
};
