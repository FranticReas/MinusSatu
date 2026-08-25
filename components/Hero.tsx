"use client";

import { Search } from "lucide-react";

export default function Hero({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <section className="hero-glow px-6 pb-10 pt-16 text-center lg:pt-24">
      <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
        Temukan Orang
        <br />
        Untuk Proyekmu.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Punya ide, tapi masih kurang teman untuk mewujudkannya?
        Temukan teman, partner, dan talenta yang tepat untuk melengkapi
        proyekmu dan mulai berkolaborasi.
      </p>

      <div className="mx-auto mt-8 max-w-2xl">
        <label htmlFor="project-search" className="sr-only">
          Cari proyek atau tag
        </label>

        <div className="flex items-center gap-3 rounded-pill border border-border bg-panel px-5 py-3.5 text-left transition-colors focus-within:border-accent">
          <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />

          <input
            id="project-search"
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Cari proyek atau #tag..."
            className="w-full bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
}