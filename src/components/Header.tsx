import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  return (
    <header className="header">
      <h1 className="logo">The Movie List</h1>
      <div className="links">
        <Link to="/" className="link">
          Movie List
        </Link>
        <Link to="/add-movie" className="link">
          Add new Movie
        </Link>
      </div>
    </header>
  );
}
