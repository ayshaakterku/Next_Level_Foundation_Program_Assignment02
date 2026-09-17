import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient stand-in for a backdrop image, plus a soft film-grain texture */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-velvet/25 via-screen to-screen"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="mb-5 text-sm tracking-[0.2em] text-marquee">
          NOW SHOWING EVERYWHERE
        </span>
        <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl">
          Discover your next favorite watch
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-paper-muted">
          Browse thousands of shows and movies from around the world, search
          for a title you already love, and find your next one.
        </p>
        <Link
          to="/movies"
          className="mt-10 rounded-full bg-marquee px-8 py-3 font-medium text-screen transition-transform hover:scale-[1.03] hover:bg-marquee/90"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
