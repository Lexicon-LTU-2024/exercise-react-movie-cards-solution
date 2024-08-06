import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { AddMoviePage, MovieListPage } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MovieListPage />} />
      <Route path="add-movie" element={<AddMoviePage />} />
    </Route>
  )
);
