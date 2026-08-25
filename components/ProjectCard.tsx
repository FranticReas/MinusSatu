import { Eye, Folder } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card overflow-hidden rounded-2xl border shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Thumbnail upload user, mirip thumbnail video YouTube */}
      <div className="project-card-thumbnail relative aspect-video w-full overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        ) : (
          // fallback kalau user belum upload thumbnail
          <div
            className="flex h-full w-full items-center justify-center text-sm font-semibold"
            style={{ backgroundColor: `${project.avatarColor}1a`, color: project.avatarColor }}
          >
            {project.category}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-sm font-medium">
          <span className="flex items-center gap-2" style={{ color: project.avatarColor }}>
            <Folder className="h-4 w-4 fill-current" aria-hidden="true" />
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            {project.views}
          </span>
        </div>

        <h2 className="project-card-title mt-4 text-xl font-bold leading-tight">
          {project.title}
        </h2>
        <p className="project-card-description mt-3 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          {/* Avatar tim, seperti channel avatar di bawah thumbnail YouTube tapi banyak */}
          <div className="flex -space-x-2" aria-label="Anggota tim">
            {project.members.map((member) => (
              <span
                key={member.name}
                title={member.name}
                className="project-card-avatar grid h-9 w-9 place-items-center rounded-full border-2 text-[10px] font-bold"
                aria-label={member.name}
              >
                {member.avatarUrl ? (
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    width={36}
                    height={36}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  initials(member.name)
                )}
              </span>
            ))}
          </div>
          <span
            className={`rounded-lg px-3 py-2 text-xs font-semibold ${
              project.status === "Done"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-violet-100 text-violet-700"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>
    </article>
  );
}