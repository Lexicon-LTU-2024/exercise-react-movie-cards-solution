import { useOutletContext } from "react-router-dom";
import { IMovieContext } from "../interfaces";

export function useMovieContext(): IMovieContext {
  return useOutletContext<IMovieContext>();
}
