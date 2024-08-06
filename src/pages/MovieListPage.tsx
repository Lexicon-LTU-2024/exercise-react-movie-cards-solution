import { ReactElement } from "react";
import { MovieCard } from "../components";
import { IMovie } from "../interfaces";

interface IMovieListProps {
  movies: IMovie[];
  onMovieClick: (movie: IMovie) => void;
}

export function MovieListPage({ movies, onMovieClick }: IMovieListProps): ReactElement {
  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} onClick={onMovieClick} movie={m} />
      ))}
    </section>
  );
}
