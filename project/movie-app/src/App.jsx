import { useEffect } from "react";
import { getMovieList, searchMovie } from "./api";
import { useState } from "react";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  const search = async (q) => {
    const query = await searchMovie(q);
    setPopularMovies(query.results);
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, index) => {
      return (
        <div className="movie-wrapper" key={index}>
          <div className="movie-title">{movie.title}</div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="movie-image"
          />
          <div className="movie-date">release: {movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>MOVIE MANIA</h1>
        <input
          type="text"
          placeholder="Search movie..."
          className="movie-search"
          onChange={(e) => search(e.target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
