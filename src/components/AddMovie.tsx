import { FormEventHandler, MouseEventHandler, ReactElement, useState } from "react";
import { IMovie } from "../interfaces";
import { Button, Input, Range, Select } from ".";
import { options } from "../data";

interface IAddMovieProps {
  addMovie: (movie: IMovie) => void;
}

export function AddMovie({ addMovie }: IAddMovieProps): ReactElement {
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<string>("3");
  const [genre, setGenre] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleOnsubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newMovie: IMovie = {
      title,
      rating,
      genre,
      description,
    };

    addMovie(newMovie);

    console.log(newMovie);
  };

  const handleOnClearClick: MouseEventHandler<HTMLButtonElement> = () => {
    setTitle("");
    setRating("3");
    setGenre("horror");
    setDescription("");
  };

  return (
    <form className="add-movie" onSubmit={handleOnsubmit}>
      <Input label="title" onChange={(e) => setTitle(e.target.value)} type="text" value={title} />

      <Range
        label="rating"
        max="5"
        min="1"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />

      <Select
        label="genre"
        onChange={(e) => setGenre(e.target.value)}
        options={options}
        value={genre}
      />

      <Input
        label="description"
        onChange={(e) => setDescription(e.target.value)}
        type="textarea"
        value={description}
      />

      <div className="actions">
        <div className="empty-space"></div>
        <div className="action-buttons">
          <Button label="clear" onClick={handleOnClearClick} type="button" />
          <Button label="add" type="submit" />
        </div>
      </div>
    </form>
  );
}
