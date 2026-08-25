"use client";

import { categories } from "@/lib/data";

export default function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-6"
    >
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={
              isActive
                ? "rounded-pill bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
                : "rounded-pill bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10"
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
