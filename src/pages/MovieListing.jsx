import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import MovieModal from "../components/MovieModal.jsx";
import { fetchAllShows, searchShows } from "../api/api.js";

export default function MovieListing() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Load the full catalog once on mount.
  useEffect(() => {
    let cancelled = false;

    async function loadAll() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchAllShows();
        if (!cancelled) setMovies(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadAll();
    return () => {
      cancelled = true;
    };
  }, []);

  // Re-run search 
  useEffect(() => {
    let cancelled = false;

    if (query.trim() === "") {
      // Restore the full catalog when the search box is cleared.
      fetchAllShows()
        .then((data) => !cancelled && setMovies(data))
        .catch((err) => !cancelled && setError(err.message));
      return () => {
        cancelled = true;
      };
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await searchShows(query);
        if (!cancelled) setMovies(results);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }, 350);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl text-paper">Browse movies</h1>
        <p className="mt-2 text-paper-muted">
          Search by title, or scroll through everything we have.
        </p>
      </div>

      <div className="mb-10 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <MovieGrid
        movies={movies}
        isLoading={isLoading}
        error={error}
        onSeeDetails={setSelectedMovie}
      />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
}
