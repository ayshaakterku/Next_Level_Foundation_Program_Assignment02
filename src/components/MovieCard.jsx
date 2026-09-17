export default function MovieCard({ movie, onSeeDetails }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-screen-line bg-screen-raised transition-colors hover:border-marquee/50">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-screen">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={`Poster for ${movie.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-paper-muted">
            No poster available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 font-display text-lg text-paper">
          {movie.title}
        </h3>
        <p className="flex items-center gap-3 text-sm text-paper-muted">
          <span className="flex items-center gap-1 text-marquee">
            ⭐ {movie.rating ?? "—"}
          </span>
          <span aria-hidden="true">•</span>
          <span>📅 {movie.year}</span>
        </p>
        <button
          onClick={() => onSeeDetails(movie)}
          className="mt-auto w-full rounded-full border border-marquee/50 py-2 text-sm font-medium text-marquee transition-colors hover:bg-marquee hover:text-screen"
        >
          See Details
        </button>
      </div>
    </article>
  );
}
