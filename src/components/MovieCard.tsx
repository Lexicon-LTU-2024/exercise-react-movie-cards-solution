import { ReactElement } from "react";
import { IMovie } from "../interfaces";
import { useMovieContext } from "../hooks";

interface IMovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: IMovieCardProps): ReactElement {
  const { handleOnMovieClick } = useMovieContext();

  return (
    <article className="movie-card" onClick={() => handleOnMovieClick(movie)}>
      <div className="title-container">
        <p className="title">{movie.title}</p>
        <p className="rating">{movie.rating}/5</p>
      </div>
      <p className="genre">{movie.genre}</p>
      <p className="description">{movie.description}</p>
    </article>
  );
}
