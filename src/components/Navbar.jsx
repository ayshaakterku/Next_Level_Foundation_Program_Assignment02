import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? "text-marquee" : "text-paper-muted hover:text-paper"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-screen-line bg-screen/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-xl font-medium text-paper" 
        >
          <span aria-hidden="true" className="text-marquee">
            🎬
          </span>
          MovieExplorer
        </NavLink>

          <NavLink to="/movies" className={linkClasses}>
            Movies
          </NavLink>

      </nav>
    </header>
  );
}



