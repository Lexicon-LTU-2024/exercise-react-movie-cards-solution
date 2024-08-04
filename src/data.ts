import { IMovie, IOption } from "./interfaces";

export const moviesFromData: IMovie[] = [
  {
    description:
      "Star Wars: The Phantom Menace follows Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi as they protect Queen Amidala, meet young Anakin Skywalker, and confront the Sith Lord Darth Maul, setting the stage for the rise of the Galactic Empire.",
    genre: "Science Fiction",
    rating: "5",
    title: "Star Wars: The Phantom Menace",
  },
  {
    description:
      "Attack of the Clones sees Jedi Knight Obi-Wan Kenobi uncovering a secret clone army, while Anakin Skywalker falls in love with Padmé Amidala and begins his journey towards the dark side, as the galaxy edges closer to war.",
    genre: "Science Fiction",
    rating: "5",
    title: "Star Wars: Episode II – Attack of the Clones",
  },
  {
    description:
      "Revenge of the Sith follows Anakin Skywalker’s tragic transformation into Darth Vader, as he betrays the Jedi, succumbs to the dark side, and helps Emperor Palpatine establish the Galactic Empire, leading to the fall of the Jedi Order.",
    genre: "Science Fiction",
    rating: "5",
    title: "Star Wars: Episode III – Revenge of the Sith",
  },
];

export const options: IOption[] = [
  {
    id: "1",
    label: "horror",
    value: "horror",
  },
  {
    id: "2",
    label: "fantasy",
    value: "fantasy",
  },
  {
    id: "3",
    label: "drama",
    value: "drama",
  },
  {
    id: "4",
    label: "comedy",
    value: "comedy",
  },
  {
    id: "5",
    label: "science fiction",
    value: "science fiction",
  },
  {
    id: "6",
    label: "history",
    value: "history",
  },
];
