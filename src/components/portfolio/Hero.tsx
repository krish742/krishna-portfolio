import { ArrowRight, Download, MapPin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LOCATION, RESUME_PATH } from "@/data/profile";
import { Reveal } from "./Reveal";

import hero01Jic from "@/assets/Hero_01_JIC_Wireframe.png";
import hero02Housing from "@/assets/Hero_02_Housing_Research.png";
import hero03Vosyn from "@/assets/Hero_03_Vosyn_Sketch.png";

const skillsStrip = [
  "UX Research",
  "UX Design",
  "Accessibility",
  "Usability Testing",
  "Wireframing",
  "Prototyping",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-24">
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 -left-32 size-80 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Hero Left Content */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
                UX RESEARCHER &bull; UX DESIGNER
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="size-3 text-primary" aria-hidden="true" />
                {LOCATION}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              I design thoughtful digital experiences by{" "}
              <span className="italic text-primary">understanding people first.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              UX Researcher and UX Designer turning human problems and research into clear,
              accessible, human-centered product experiences.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group min-h-12 rounded-full px-7">
                <a href="#work">
                  View My Work
                  <ArrowRight
                    className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 rounded-full border-border bg-card px-6 shadow-soft hover:bg-secondary"
              >
                <a href={RESUME_PATH} download>
                  <Download className="mr-2 size-4" aria-hidden="true" />
                  Download Resume &darr;
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="min-h-12 rounded-full border border-border px-6 hover:bg-secondary"
              >
                <Link to="/contact">
                  <Mail className="mr-2 size-4 text-primary" aria-hidden="true" />
                  Let's Connect &rarr;
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Core Competencies:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skillsStrip.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Hero Right Content: UX Workbench with 3 Real Handoff Artifact Crops */}
        <Reveal delay={160} className="relative justify-self-center w-full max-w-lg">
          <div className="relative py-2 sm:py-6">
            {/* Annotation pill */}
            <div className="mb-4 flex items-center justify-between sm:justify-end gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-muted-foreground backdrop-blur-sm shadow-soft">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                research &rarr; insight &rarr; design
              </span>
            </div>

            {/* Overlapping UX Workbench Visual */}
            <div className="relative aspect-[4/3.2] min-h-[300px] w-full sm:aspect-[14/10] sm:min-h-0">
              {/* Card 1: Housing Research Analysis (Top Right) */}
              <Link
                to="/projects/$slug"
                params={{ slug: "housing-research-project" }}
                reloadDocument={true}
                aria-label="View Housing Research Project case study"
                className="absolute right-0 top-0 w-[76%] -rotate-2 rounded-2xl border border-border bg-card p-2 shadow-soft transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:rotate-0 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="overflow-hidden rounded-xl bg-secondary/40">
                  <img
                    src={hero02Housing}
                    alt="Housing research survey data analysis visual"
                    className="w-full object-cover aspect-[16/10]"
                  />
                </div>
                <div className="px-2.5 py-1.5 flex items-center justify-between text-[0.65rem] font-medium text-muted-foreground">
                  <span>Housing Research &bull; Kingston</span>
                  <span className="text-primary font-semibold">Synthesis</span>
                </div>
              </Link>

              {/* Card 2: Vosyn Feature Sketch (Middle Left) */}
              <Link
                to="/projects/$slug"
                params={{ slug: "vosyn-ai-accessibility" }}
                reloadDocument={true}
                aria-label="View Vosyn AI Accessibility case study"
                className="absolute left-0 top-10 sm:top-12 w-[68%] rotate-2 rounded-2xl border border-border bg-card p-2 shadow-soft transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:rotate-0 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="overflow-hidden rounded-xl bg-secondary/40">
                  <img
                    src={hero03Vosyn}
                    alt="Vosyn accessibility feature translation sketch"
                    className="w-full object-cover aspect-[16/10]"
                  />
                </div>
                <div className="px-2.5 py-1.5 flex items-center justify-between text-[0.65rem] font-medium text-muted-foreground">
                  <span>Vosyn.ai &bull; Accessibility</span>
                  <span className="text-primary font-semibold">Sketch</span>
                </div>
              </Link>

              {/* Card 3: JIC Wireframe (Front Center Bottom) */}
              <Link
                to="/projects/$slug"
                params={{ slug: "kingston-junior-innovation-challenge" }}
                reloadDocument={true}
                aria-label="View Junior Innovation Challenge case study"
                className="absolute bottom-0 right-3 sm:right-4 w-[76%] -rotate-1 rounded-2xl border border-primary/30 bg-card p-2.5 shadow-lift transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="overflow-hidden rounded-xl bg-secondary/40">
                  <img
                    src={hero01Jic}
                    alt="Junior Innovation Challenge low-fidelity wireframe"
                    className="w-full object-cover aspect-[16/10]"
                  />
                </div>
                <div className="px-2.5 py-2 flex items-center justify-between text-[0.7rem] font-medium text-foreground">
                  <span className="font-semibold text-primary">Jr. Innovation Challenge</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
                    Wireframe
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
