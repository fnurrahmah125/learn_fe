import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=a7976c482dd4152f11b2c9cd482451bb"
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=a7976c482dd4152f11b2c9cd482451bb`
  );
  return search.data;
};
