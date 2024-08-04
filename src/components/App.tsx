import { ReactElement, useState } from "react";
import { AddMovie, MovieList } from ".";
import { moviesFromData } from "../data";
import { IMovie } from "../interfaces";

import "../css/App.css";

export function App(): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>(moviesFromData);

  const addMovie = (movie: IMovie) => {
    setMovies([movie, ...movies]);
  };

  const handleOnMovieClick = (movie: IMovie): void => {
    setMovies(movies.filter((m) => m !== movie));
  };

  return (
    <>
      <AddMovie addMovie={addMovie} />
      <MovieList movies={movies} onMovieClick={handleOnMovieClick} />
    </>
  );
}
