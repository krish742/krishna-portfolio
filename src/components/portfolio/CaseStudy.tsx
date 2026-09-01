import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Grid,
  ImageIcon,
  Maximize2,
  Quote,
  Sparkles,
  UserCheck,
  X,
} from "lucide-react";
import type { Block, Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function ArtifactModal({
  imageSrc,
  imageAlt,
  title,
  isOpen,
  onClose,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`View artifact: ${title}`}
    >
      <div className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lift sm:p-6">
        <div className="flex w-full items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close full view"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 overflow-auto rounded-2xl bg-secondary/30 p-2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[72vh] w-auto rounded-xl object-contain shadow-soft"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">{imageAlt}</p>
      </div>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  const [modalOpen, setModalOpen] = useState(false);

  switch (block.type) {
    case "text":
      return (
        <div className="space-y-4">
          {block.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
            >
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "cards":
      return (
        <ul className="grid gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="space-y-4">
          {block.items.map((item, i) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <figure className="rounded-3xl border border-border bg-secondary/40 p-7 sm:p-9">
          <Quote className="size-6 text-primary" aria-hidden="true" />
          <blockquote className="mt-4 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            &ldquo;{block.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {block.attribution}
          </figcaption>
        </figure>
      );
    case "stats":
      return (
        <dl className="grid gap-4 sm:grid-cols-3">
          {block.items.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-xl font-medium text-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      );
    case "callout":
      return (
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {block.title}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-primary">
              <UserCheck className="size-3" aria-hidden="true" />
              My Contribution
            </span>
          </div>
          <p className="mt-3 text-base leading-relaxed text-foreground">{block.body}</p>
        </div>
      );
    case "figure":
      return (
        <figure className="group relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
            <div className="relative flex aspect-[16/9] w-full items-center justify-center bg-secondary/40 p-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-card text-primary shadow-soft">
                  <ImageIcon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                    {block.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground max-w-md">
                    UX Artifact &bull; {block.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {block.caption ? (
            <figcaption className="mt-3 text-xs text-muted-foreground">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    case "image":
      return (
        <figure className="group relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-lift">
            {block.label ? (
              <div className="px-4 py-2 flex items-center justify-between border-b border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>{block.label}</span>
                <span className="text-[0.65rem] text-primary font-normal">
                  Real Project Artifact
                </span>
              </div>
            ) : null}
            <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
              <img
                src={block.src}
                alt={block.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3.5 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md shadow-lift transition-transform hover:scale-105"
              >
                <Maximize2 className="size-3.5" aria-hidden="true" />
                Expand View
              </button>
            </div>
          </div>
          {block.caption ? (
            <figcaption className="mt-3 px-2 text-xs leading-relaxed text-muted-foreground">
              {block.caption}
            </figcaption>
          ) : null}

          <ArtifactModal
            imageSrc={block.src}
            imageAlt={block.alt}
            title={block.label ?? block.alt}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        </figure>
      );
    case "comparison":
      return (
        <figure className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-soft">
              <div className="px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border mb-2">
                {block.beforeLabel}
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-secondary/30">
                <img
                  src={block.beforeSrc}
                  alt={block.beforeLabel}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-primary/40 bg-card p-2 shadow-lift">
              <div className="px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-primary border-b border-border mb-2 flex items-center justify-between">
                <span>{block.afterLabel}</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.6rem]">
                  Final Direction
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-secondary/30">
                <img
                  src={block.afterSrc}
                  alt={block.afterLabel}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          {block.caption ? (
            <figcaption className="px-2 text-xs leading-relaxed text-muted-foreground">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case "proof_strip":
      return (
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {block.title ?? "Supporting Project Artifacts"}
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {block.items.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-secondary/30 p-3 transition-all duration-300 hover:border-primary/40 hover:bg-secondary/50"
              >
                <div className="overflow-hidden rounded-xl bg-background">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xs font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-[0.7rem] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "recommendation_table":
      return (
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {block.title ?? "Research Synthesis: Finding → Need → Recommendation"}
            </h3>
            <span className="text-[0.65rem] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-full">
              Verified Project Framework
            </span>
          </div>
          <div className="space-y-4">
            {block.rows.map((row, idx) => (
              <div
                key={idx}
                className="grid gap-4 rounded-2xl border border-border bg-secondary/30 p-5 sm:grid-cols-3 sm:items-start"
              >
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                    Key Research Finding
                  </span>
                  <p className="mt-1.5 text-xs text-foreground font-medium">{row.finding}</p>
                </div>
                <div className="border-t border-border/60 pt-3 sm:border-t-0 sm:border-l sm:border-border/60 sm:pl-4 sm:pt-0">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
                    Identified User Need
                  </span>
                  <p className="mt-1.5 text-xs text-muted-foreground">{row.need}</p>
                </div>
                <div className="border-t border-border/60 pt-3 sm:border-t-0 sm:border-l sm:border-border/60 sm:pl-4 sm:pt-0">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                    Recommendation / Requirement
                  </span>
                  <p className="mt-1.5 text-xs text-foreground font-medium">{row.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function CaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  const progress = useReadingProgress();
  const ids = project.sections.map((s) => s.id);
  const active = useActiveSection(ids);
  const [heroModalOpen, setHeroModalOpen] = useState(false);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[55] h-0.5 bg-transparent"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <div
          className="h-full origin-left bg-primary transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <article>
        <header className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-20 size-[26rem] rounded-full bg-accent/60 blur-3xl"
          />
          <div className="container-page relative">
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to All Projects
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {project.org}
              </span>
              <span className="text-xs text-muted-foreground">&bull;</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {project.role}
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.1] text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.overview}
            </p>

            {/* Main Project Hero Artifact */}
            {project.image ? (
              <>
                <div className="group relative mt-10 overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-lift">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={800}
                    loading="eager"
                    decoding="async"
                    className="aspect-[16/9] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <button
                    type="button"
                    onClick={() => setHeroModalOpen(true)}
                    className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur-md transition-transform hover:scale-105 shadow-lift"
                  >
                    <Maximize2 className="size-3.5" aria-hidden="true" />
                    Expand View
                  </button>
                </div>

                <ArtifactModal
                  imageSrc={project.image}
                  imageAlt={project.imageAlt}
                  title={`${project.title} — Main UX Artifact`}
                  isOpen={heroModalOpen}
                  onClose={() => setHeroModalOpen(false)}
                />
              </>
            ) : (
              <div className="relative mt-10 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-secondary/20 to-card p-8 sm:p-12 shadow-lift">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                      Methodology &amp; Practice Discipline
                    </span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                    Self-Directed Practice &bull; Not Client Work
                  </span>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      01. Research &amp; Evaluation
                    </span>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      Heuristic Audits &amp; Usability Reviews
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Evaluating digital interfaces against Nielsen Norman Group principles.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      02. Structure &amp; Flows
                    </span>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      Information Architecture &amp; User Flows
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Mapping navigation structures and user decision paths.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      03. Accessibility &amp; Standards
                    </span>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      WCAG 2.1 AA Compliance Reviews
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Checking contrast, focus states, and screen reader readiness.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Key Metadata Table */}
            <dl className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Role &amp; Ownership
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Timeline
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{project.timeline}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Stakeholders &amp; Team
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{project.team}</dd>
              </div>
            </dl>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  UX Methods Applied
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.methods.map((m) => (
                    <li
                      key={m}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Design &amp; Research Tools
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Main Case Study Body */}
        <div className="container-page border-t border-border pt-14 pb-20 sm:pb-28">
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <nav aria-label="Case study contents" className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Contents
              </p>
              <ul className="mt-4 space-y-1">
                {project.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={active === s.id ? "true" : undefined}
                      className={cn(
                        "block rounded-lg border-l-2 border-transparent py-1.5 pl-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
                        active === s.id && "border-primary font-medium text-foreground",
                      )}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0 space-y-16">
              {project.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <Reveal>
                    <h2 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                      {section.title}
                    </h2>
                  </Reveal>
                  <div className="mt-6 space-y-8">
                    {section.blocks.map((block, i) => (
                      <Reveal key={i} delay={i * 60}>
                        <BlockView block={block} />
                      </Reveal>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Case Study Navigation Footer */}
        <div className="border-t border-border bg-secondary/20 py-14">
          <div className="container-page grid gap-6 sm:grid-cols-2">
            {/* Previous Project */}
            <Link
              to="/projects/$slug"
              params={{ slug: prev.slug }}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div>
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <ChevronLeft className="size-4" aria-hidden="true" />
                  Previous Case Study
                </span>
                <p className="mt-2 text-xs font-semibold text-primary uppercase tracking-wider">
                  {prev.org}
                </p>
                <p className="mt-1 font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {prev.title}
                </p>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 text-right shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div>
                <span className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Next Case Study
                  <ChevronRight className="size-4" aria-hidden="true" />
                </span>
                <p className="mt-2 text-xs font-semibold text-primary uppercase tracking-wider">
                  {next.org}
                </p>
                <p className="mt-1 font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {next.title}
                </p>
              </div>
            </Link>
          </div>

          <div className="container-page mt-6 text-center">
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-6 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-secondary"
            >
              <Grid className="size-3.5" aria-hidden="true" />
              View All Projects
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
