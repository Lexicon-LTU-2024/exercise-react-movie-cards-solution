import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";
import { moviesFromData } from "../data";
import { IMovie, IMovieContext } from "../interfaces";
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

  const movieContext: IMovieContext = {
    movies,
    addMovie,
    handleOnMovieClick,
  };

  return (
    <>
      <Header />
      <Outlet context={movieContext} />
    </>
  );
}
