import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FolderKanban, Download, Search } from "lucide-react";
import { useState } from "react";

const title = "Participant & Educator Resources — Jr. Innovation Challenge";
const description =
  "Download toolkits, design templates, challenge briefs, and lesson plans for the Kingston Jr. Innovation Challenge.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const RESOURCES = [
  {
    id: "r1",
    title: "Junior Innovation Challenge Brief & Guidelines",
    category: "Challenge Briefs",
    audience: "All Participants",
    format: "PDF Document (3.2 MB)",
    desc: "Complete program overview, timeline, evaluation criteria, rules, and track descriptions.",
  },
  {
    id: "r2",
    title: "Empathy & User Interview Canvas",
    category: "UX Worksheets",
    audience: "Students & Mentors",
    format: "Printable PDF & Figma Community File",
    desc: "Step-by-step interview guide worksheet for gathering community feedback in Kingston.",
  },
  {
    id: "r3",
    title: "Paper Wireframing & Prototyping Kit",
    category: "Design Templates",
    audience: "Students",
    format: "Printable PDF Kit",
    desc: "Printable device frames (mobile, desktop) and UI element stencils for rapid sketching.",
  },
  {
    id: "r4",
    title: "Educator & Classroom STEM Integration Guide",
    category: "Educator Toolkits",
    audience: "Teachers",
    format: "PDF Guide (4.5 MB)",
    desc: "Curriculum-aligned lesson plans for integrating the Innovation Challenge into middle and high school classes.",
  },
  {
    id: "r5",
    title: "Community Pitch Deck Slide Template",
    category: "Presentation Kits",
    audience: "All Participants",
    format: "Google Slides & PowerPoint Template",
    desc: "Pre-structured 8-slide template for presenting problem framing, research, design solution, and impact.",
  },
  {
    id: "r6",
    title: "Accessibility & WCAG Design Checklist for Youth",
    category: "Design Templates",
    audience: "Students & Mentors",
    format: "PDF Checklist",
    desc: "Youth-friendly guide on color contrast, readable text sizes, and inclusive feature design.",
  },
];

function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("All");

  const filtered = RESOURCES.filter((res) => {
    const matchesQuery =
      res.title.toLowerCase().includes(query.toLowerCase()) ||
      res.desc.toLowerCase().includes(query.toLowerCase());
    const matchesAudience = selectedAudience === "All" || res.audience.includes(selectedAudience);
    return matchesQuery && matchesAudience;
  });

  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <FolderKanban className="size-3.5" aria-hidden="true" />
              Resource Hub
            </span>

            <h1 className="mt-5 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Toolkits, Templates &amp; Guides
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Everything you need to frame problems, conduct research, sketch prototypes, and
              present your solution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="border-t border-border py-12 bg-secondary/30">
        <div className="container-page">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="text"
                placeholder="Search resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {["All", "Students", "Teachers", "Mentors"].map((aud) => (
                <button
                  key={aud}
                  type="button"
                  onClick={() => setSelectedAudience(aud)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedAudience === aud
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {aud === "All" ? "All Audiences" : aud}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Resources */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((res, idx) => (
              <Reveal key={res.id} delay={idx * 60}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-lift">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {res.category}
                      </span>
                      <span className="text-[0.7rem] text-muted-foreground font-medium">
                        {res.audience}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-foreground">{res.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{res.desc}</p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{res.format}</span>
                    <Button size="sm" variant="outline" className="rounded-full gap-1.5 text-xs">
                      <Download className="size-3.5 text-primary" aria-hidden="true" />
                      <span>Download</span>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-12 text-center py-12">
              <p className="text-sm text-muted-foreground">
                No resources match your search filter.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </SiteLayout>
  );
}
