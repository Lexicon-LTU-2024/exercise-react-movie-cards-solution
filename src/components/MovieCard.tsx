import { ReactElement } from "react";
import { IMovie } from "../interfaces";

interface IMovieCardProps {
  movie: IMovie;
  onClick: (movie: IMovie) => void;
}

export function MovieCard({ movie, onClick }: IMovieCardProps): ReactElement {
  return (
    <article className="movie-card" onClick={() => onClick(movie)}>
      <div className="title-container">
        <p className="title">{movie.title}</p>
        <p className="rating">{movie.rating}/5</p>
      </div>
      <p className="genre">{movie.genre}</p>
      <p className="description">{movie.description}</p>
    </article>
  );
}
