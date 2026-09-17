const BASE_URL = "https://api.tvmaze.com";

/**
 * Normalizes a TVMaze show object (or the {score, show} wrapper returned by
 * /search/shows) into the flat shape the rest of the app expects.
 */
function normalizeShow(raw) {
  const show = raw.show ? raw.show : raw;
  const year = show.premiered ? show.premiered.slice(0, 4) : "—";
  const rating =
    show.rating && typeof show.rating.average === "number"
      ? show.rating.average
      : null;

  return {
    id: show.id,
    title: show.name,
    year,
    rating,
    poster:
      show.image?.original || show.image?.medium || null,
    backdrop: show.image?.original || show.image?.medium || null,
    summary: show.summary
      ? show.summary.replace(/<[^>]+>/g, "")
      : "No summary available for this title yet.",
    genres: show.genres || [],
    network: show.network?.name || show.webChannel?.name || "—",
    status: show.status || "—",
    runtime: show.runtime || show.averageRuntime || null,
    officialSite: show.officialSite || null,
  };
}

/** GET /shows — full catalog, used as the default browsing grid. */
export async function fetchAllShows() {
  const res = await fetch(`${BASE_URL}/shows`);
  if (!res.ok) throw new Error(`TVMaze error: ${res.status}`);
  const data = await res.json();
  return data.map(normalizeShow);
}

/** GET /search/shows?q= — used whenever the user types in the search bar. */
export async function searchShows(query) {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error(`TVMaze error: ${res.status}`);
  const data = await res.json();
  return data.map(normalizeShow);
}

/** GET /shows/:id — used to hydrate the details modal with full info. */
export async function fetchShowById(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}`);
  if (!res.ok) throw new Error(`TVMaze error: ${res.status}`);
  const data = await res.json();
  return normalizeShow(data);
}
