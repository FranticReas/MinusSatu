import type { Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-muted">
        <p className="text-sm">
          Belum ada project yang cocok. Coba kata kunci atau kategori lain.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
