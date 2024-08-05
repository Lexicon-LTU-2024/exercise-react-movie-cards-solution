import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  return (
    <header className="header">
      <h1 className="logo">The Movie List</h1>
      <div className="links">
        <Link className="link" to="/add-movie">Add new Movie</Link>
        <Link className="link" to="/">Movie List</Link>
      </div>
    </header>
  );
}
