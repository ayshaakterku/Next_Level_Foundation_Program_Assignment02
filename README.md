# MovieExplorer

A responsive movie/show browser built with React, React Router, Tailwind CSS,
and the free [TVMaze API](https://www.tvmaze.com/api) (no API key required).

## Features

- **Home page** — navbar, hero banner with a CTA into the listing page, footer.
- **Movie Listing page** — debounced live search (`/search/shows?q=`), falls
  back to the full catalog (`/shows`) when the search box is empty, responsive
  card grid (1 col mobile → 4 cols desktop), loading skeletons, and an empty
  state.
- **Details modal** — opens on "See Details", shows backdrop, rating, release
  year, runtime, genres, network, status, and a full summary. Closes via the
  ✕ button, the Escape key, or a click on the backdrop.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Project structure

```
src/
  api/tvmaze.js          # fetch helpers + response normalization
  components/
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    SearchBar.jsx
    MovieCard.jsx
    MovieGrid.jsx
    MovieModal.jsx
  pages/
    Home.jsx
    MovieListing.jsx
  App.jsx
  main.jsx
  index.css
```

## Notes

- TVMaze's `/shows` and `/search/shows` endpoints return TV series data (there's
  no free, key-less movie database), so "movies" in the UI are TVMaze shows —
  swap `src/api/tvmaze.js` for a TMDB/OMDB client if you'd rather use real
  movies (both require a free API key).
- Styling is fully Tailwind utility classes; the only custom CSS lives in
  `src/index.css` (fonts, focus states, and the loading shimmer).
