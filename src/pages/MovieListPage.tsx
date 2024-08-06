import { ReactElement } from "react";
import { MovieCard } from "../components";
import { useOutletContext } from "react-router-dom";
import { IMovieContext } from "../interfaces";

export function MovieListPage(): ReactElement {
  const { movies } = useOutletContext<IMovieContext>();

  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} movie={m} />
      ))}
    </section>
  );
}
