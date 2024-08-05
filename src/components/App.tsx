import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";
import { moviesFromData } from "../data";
import { IMovie, IMovieContext } from "../interfaces";

import "../css/App.css";
import { Header } from ".";

export function App(): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>(moviesFromData);

  const addMovie = (movie: IMovie) => {
    setMovies([movie, ...movies]);
  };

  const handleOnMovieClick = (movie: IMovie): void => {
    setMovies(movies.filter((m) => m !== movie));
  };

  const movieContext: IMovieContext = {
    addMovie,
    handleOnMovieClick,
    movies,
  };

  return (
    <>
      <Header />
      <Outlet context={movieContext} />
    </>
  );
}
