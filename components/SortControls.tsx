"use client";

import { ChevronsUpDown } from "lucide-react";

const sortOptions = ["Newest", "Most Viewed", "A-Z"];
const statusOptions = ["Ongoing", "Completed", "Open Collaboration"];

export default function SortControls({
  sort,
  status,
  onSortChange,
  onStatusChange,
}: {
  sort: string;
  status: string;
  onSortChange: (v: string) => void;
  onStatusChange: (v: string) => void;
}) {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap gap-4 px-6">
      <div className="relative">
        <select
          aria-label="Sort by"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-44 cursor-pointer appearance-none rounded-lg border border-border bg-panel px-4 py-2.5 text-sm text-muted focus:border-accent focus:outline-none"
        >
          <option value="">Sort By</option>
          {sortOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-panel text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronsUpDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
      </div>

      <div className="relative">
        <select
          aria-label="Status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-44 cursor-pointer appearance-none rounded-lg border border-border bg-panel px-4 py-2.5 text-sm text-muted focus:border-accent focus:outline-none"
        >
          <option value="">Status</option>
          {statusOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-panel text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronsUpDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
