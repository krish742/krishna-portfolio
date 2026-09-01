import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const projectTypes: Record<string, string> = {
  "kingston-junior-innovation-challenge": "Academic Client Project • UX/UI Design & Research",
  "housing-research-project": "Academic Client Project • Qualitative UX Research",
  "vosyn-ai-accessibility": "Product Team Experience • Accessibility & WCAG",
  "independent-ux-projects": "Self-Directed Practice • Ongoing Skill Development",
};

function ArtifactImage({
  project,
  className,
  caption,
}: {
  project: Project;
  className?: string;
  caption?: string | undefined;
}) {
  const isIndependent = project.slug === "independent-ux-projects" || !project.image;

  if (isIndependent) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-secondary/80 p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-border",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary shadow-soft">
            <Compass className="size-3 text-primary" aria-hidden="true" />
            SELF-DIRECTED PRACTICE
          </span>
          <span className="text-[0.65rem] font-mono text-muted-foreground">NOT CLIENT WORK</span>
        </div>

        <div className="my-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Methods Applied:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Usability Testing",
              "Information Architecture",
              "Accessibility Audits",
              "Wireframing & Prototyping",
              "Heuristic Reviews",
              "Research Synthesis",
            ].map((method) => (
              <span
                key={method}
                className="rounded-lg border border-border/80 bg-card/80 px-2.5 py-1 text-[0.7rem] font-medium text-foreground shadow-soft"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/60 p-3 text-[0.7rem] text-muted-foreground">
          Self-directed exercises focusing on methodology, usability reviews, and accessible Figma
          component practice.
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      <img
        src={project.image}
        alt={project.imageAlt}
        width={1200}
        height={800}
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      {caption ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm">
          {caption}
        </span>
      ) : null}
    </div>
  );
}

export function HomeProjectCard({
  project,
  featured = false,
  wide = false,
  index,
  delay = 0,
}: {
  project: Project;
  featured?: boolean;
  wide?: boolean;
  index?: number;
  delay?: number;
}) {
  const type = projectTypes[project.slug] ?? project.org;
  const tags = [...project.methods, ...project.skills].slice(0, featured ? 6 : 4);
  const horizontal = featured || wide;

  return (
    <Reveal as="li" delay={delay} className={cn("min-w-0", wide && "sm:col-span-2")}>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        resetScroll={true}
        aria-label={`View case study: ${project.title}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          horizontal && "sm:flex-row",
        )}
      >
        <ArtifactImage
          project={project}
          caption={featured ? "UX Case Study" : undefined}
          className={cn(
            featured
              ? "aspect-[16/10] sm:aspect-auto sm:w-[52%] sm:shrink-0"
              : wide
                ? "aspect-[16/10] sm:aspect-auto sm:w-[42%] sm:shrink-0"
                : "aspect-[16/10]",
          )}
        />

        <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "sm:p-9")}>
          <div className="flex flex-wrap items-center gap-2">
            {typeof index === "number" ? (
              <span className="font-display text-xs tabular-nums text-primary">
                {String(index).padStart(2, "0")}
              </span>
            ) : null}
            {featured ? (
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                Featured Case Study
              </span>
            ) : null}
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {type}
            </span>
          </div>

          <h3
            className={cn(
              "mt-3 font-display text-xl leading-snug text-foreground sm:text-2xl",
              featured && "sm:text-[1.75rem]",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {project.org} &bull; <span className="text-foreground font-medium">{project.role}</span>
          </p>

          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
              View Case Study
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
