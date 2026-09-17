import MovieCard from "./MovieCard.jsx";

function CardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-screen-line bg-screen-raised">
      <div className="poster-shimmer aspect-[2/3] w-full" />
      <div className="flex flex-col gap-3 p-4">
        <div className="poster-shimmer h-4 w-3/4 rounded" />
        <div className="poster-shimmer h-3 w-1/2 rounded" />
        <div className="poster-shimmer h-8 w-full rounded-full" />
      </div>
    </div>
  );
}

export default function MovieGrid({ movies, isLoading, error, onSeeDetails }) {
  if (error) {
    return (
      <div className="rounded-xl border border-velvet/40 bg-velvet/10 px-6 py-10 text-center">
        <p className="font-display text-lg text-paper">
          Something went wrong loading movies
        </p>
        <p className="mt-2 text-sm text-paper-muted">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="rounded-xl border border-screen-line bg-screen-raised px-6 py-16 text-center">
        <p className="font-display text-lg text-paper">No titles found</p>
        <p className="mt-2 text-sm text-paper-muted">
          Try a different title, or check the spelling and search again.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSeeDetails={onSeeDetails} />
      ))}
    </div>
  );
}
