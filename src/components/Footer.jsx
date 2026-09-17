export default function Footer() {
  return (
    <footer className="border-t border-screen-line bg-screen">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg text-paper">MovieExplorer</p>
          <p className="mt-1 text-sm text-paper-muted">
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-paper-muted">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee"
          >
            LinkedIn
          </a>
          <a
            href="https://handles.x.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee"
          >
            X-handle
          </a>
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-marquee"
          >
            Data via TVMaze
          </a>
        </div>
      </div>
    </footer>
  );
}
