import { useEffect } from "react";

export default function MovieModal({ movie, onClose }) {
  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="modal-scroll relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-screen-line bg-screen-raised"
      >
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-screen/80 text-paper transition-colors hover:bg-marquee hover:text-screen"
        >
          ✕
        </button>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-screen">
          {movie.backdrop ? (
            <img
              src={movie.backdrop}
              alt={`Backdrop for ${movie.title}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-paper-muted">
              No image available
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-screen-raised via-transparent to-transparent" />
        </div>

        <div className="px-6 pb-8 pt-2 sm:px-8">
          <h2
            id="movie-modal-title"
            className="font-display text-3xl font-medium text-paper"
          >
            {movie.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-paper-muted">
            <span className="flex items-center gap-1 text-marquee">
              ⭐ Rating: {movie.rating ?? "Not yet rated"}
            </span>
            <span aria-hidden="true">|</span>
            <span>📅 Release: {movie.year}</span>
            {movie.runtime && (
              <>
                <span aria-hidden="true">|</span>
                <span>⏱ {movie.runtime} min</span>
              </>
            )}
          </div>

          {movie.genres.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-screen-line px-3 py-1 text-xs text-paper-muted"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <h3 className="font-display text-lg text-paper">Overview</h3>
            <p className="mt-2 leading-relaxed text-paper-muted">
              {movie.summary}
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-screen-line pt-6 text-sm">
            <div>
              <dt className="text-paper-muted">Network</dt>
              <dd className="mt-1 text-paper">{movie.network}</dd>
            </div>
            <div>
              <dt className="text-paper-muted">Status</dt>
              <dd className="mt-1 text-paper">{movie.status}</dd>
            </div>
          </dl>

          <button
            onClick={onClose}
            className="mt-8 w-full rounded-full border border-marquee/60 py-3 font-medium text-marquee transition-colors hover:bg-marquee hover:text-screen sm:w-auto sm:px-8"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}
