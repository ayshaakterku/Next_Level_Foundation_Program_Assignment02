export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
        className="w-full rounded-full border border-screen-line bg-screen-raised py-3.5 pl-12 pr-5 text-paper placeholder:text-paper-muted focus:border-marquee"
      />
    </div>
  );
}
