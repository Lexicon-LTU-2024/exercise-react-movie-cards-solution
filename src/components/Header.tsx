import { ReactElement } from "react";

export function Header(): ReactElement {
  return (
    <header className="header">
      <h1 className="logo">The Movie List</h1>
      <div className="links">
        <a href="#" className="link">
          Add new Movie
        </a>
        <a href="#" className="link">
          Movie List
        </a>
      </div>
    </header>
  );
}
