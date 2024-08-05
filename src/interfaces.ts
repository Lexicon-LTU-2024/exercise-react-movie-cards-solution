export interface IMovie {
  title: string;
  rating: string;
  genre: string;
  description: string;
}

export interface IMovieContext {
  addMovie: (movie: IMovie) => void;
  handleOnMovieClick: (movie: IMovie) => void;
  movies: IMovie[];
}

export interface IOption {
  id: string;
  label: string;
  value: string;
}
