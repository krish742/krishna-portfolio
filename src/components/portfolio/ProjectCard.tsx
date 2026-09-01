import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const isIndependent = project.slug === "independent-ux-projects" || !project.image;

  return (
    <Reveal as="li" delay={delay}>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        resetScroll={true}
        aria-label={`Read case study: ${project.title}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {isIndependent ? (
          <div className="aspect-[3/2] overflow-hidden bg-secondary/80 p-6 flex flex-col justify-between border-b border-border">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary shadow-soft">
                <Compass className="size-3 text-primary" aria-hidden="true" />
                SELF-DIRECTED PRACTICE
              </span>
              <span className="text-[0.65rem] font-mono text-muted-foreground">PRACTICE WORK</span>
            </div>

            <div className="my-2 space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Core Methods:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Usability Testing",
                  "Information Architecture",
                  "Accessibility Reviews",
                  "Figma Prototyping",
                ].map((m) => (
                  <span
                    key={m}
                    className="rounded-lg border border-border bg-card px-2.5 py-1 text-[0.7rem] font-medium text-foreground shadow-soft"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[0.7rem] text-muted-foreground italic">
              Self-directed exploration testing research techniques and accessible UI components.
            </p>
          </div>
        ) : (
          <div className="aspect-[3/2] overflow-hidden bg-secondary">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {project.org}
          </p>
          <h3 className="mt-3 text-2xl leading-snug text-foreground">{project.title}</h3>

          <dl className="mt-5 grid gap-3 border-y border-border py-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Role</dt>
              <dd className="mt-1 text-sm text-foreground">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Timeline
              </dt>
              <dd className="mt-1 text-sm text-foreground">{project.timeline}</dd>
            </div>
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Methods</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.methods.slice(0, 6).map((m) => (
                <li
                  key={m}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Skills</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.skills.slice(0, 5).map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-7">
            <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-teal transition-colors group-hover:text-primary">
              Read Case Study
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
