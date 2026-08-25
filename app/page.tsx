"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import SortControls from "@/components/SortControls";
import CategoryFilter from "@/components/CategoryFilter";
import { projects } from "@/lib/data";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState("");
  const [status, setStatus] = useState("");

  const filteredProjects = useMemo(() => {
    let result = projects.filter((project) => {
      const matchesQuery =
        query.trim() === "" ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        category === "ALL" ||
        project.category.toLowerCase() === category.toLowerCase();
      return matchesQuery && matchesCategory;
    });

    if (sort === "Most Viewed") {
      result = [...result].sort((a, b) => b.views - a.views);
    } else if (sort === "A-Z") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [query, category, sort]);

  return (
    <main>
      <Navbar />
      <Hero query={query} onQueryChange={setQuery} />

      <div className="flex flex-col gap-8 pb-20">
        <CategoryFilter active={category} onChange={setCategory} />
        <SortControls 
        sort={sort} 
        status={status}
        onSortChange={setSort}
        onStatusChange={setStatus} />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </main>
  )
}