import { ReactElement, useState } from "react";
import { moviesFromData } from "../data";
import { IMovie } from "../interfaces";
import { AddMoviePage, MovieListPage } from "../pages";
import { Header } from ".";

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
      <Header />
      <AddMoviePage addMovie={addMovie} />
      <MovieListPage movies={movies} onMovieClick={handleOnMovieClick} />
    </>
  );
}
