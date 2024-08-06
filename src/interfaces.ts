export interface IMovie {
  title: string;
  rating: string;
  genre: string;
  description: string;
}

export interface IMovieContext {
  movies: IMovie[];
  addMovie: (movie: IMovie) => void;
  handleOnMovieClick: (movie: IMovie) => void;
}

export interface IOption {
  id: string;
  label: string;
  value: string;
}
