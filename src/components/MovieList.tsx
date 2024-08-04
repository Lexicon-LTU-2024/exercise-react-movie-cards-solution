import { ReactElement } from "react";
import { MovieCard } from ".";
import { IMovie } from "../interfaces";

interface IMovieListProps {
  movies: IMovie[];
  onMovieClick: (movie: IMovie) => void;
}

export function MovieList({ movies, onMovieClick }: IMovieListProps): ReactElement {
  return (
    <section className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.title} onClick={onMovieClick} movie={m} />
      ))}
    </section>
  );
}
