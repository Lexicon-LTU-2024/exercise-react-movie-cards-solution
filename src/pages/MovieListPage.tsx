import { ReactElement } from "react";
import { MovieCard } from "../components";
import { useMovieContext } from "../hooks";

export function MovieListPage(): ReactElement {
  const { movies } = useMovieContext();

  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} movie={m} />
      ))}
    </section>
  );
}
