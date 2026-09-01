import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { Hero } from "@/components/portfolio/Hero";
import { Expertise } from "@/components/portfolio/Expertise";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Credibility } from "@/components/portfolio/Credibility";
import { HomeIntro } from "@/components/portfolio/HomeIntro";
import { HomeProjectCard } from "@/components/portfolio/HomeProjectCard";
import { SectionHeading } from "@/components/portfolio/Reveal";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const title = "Krishna Pandya — UX Researcher & UX Designer in Ontario";
const description =
  "Portfolio of Krishna Pandya, a UX Researcher and UX Designer in Ontario, Canada, creating accessible, research-driven, human-centered digital experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [flagship, ...rest] = projects;

  return (
    <SiteLayout>
      <Hero />

      <section id="work" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Selected Work"
            title="Case studies, told honestly."
            intro="Research-led projects — what the problem was, what people told me, and what I designed because of it."
          />

          <ul className="mt-10 grid gap-5">
            {flagship ? <HomeProjectCard project={flagship} featured index={1} /> : null}
          </ul>

          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {rest.map((p, i) => (
              <HomeProjectCard
                key={p.slug}
                project={p}
                index={i + 2}
                wide={i === rest.length - 1 && rest.length % 2 === 1}
                delay={(i % 2) * 80}
              />
            ))}
          </ul>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group min-h-11 rounded-full px-6"
            >
              <Link to="/projects">
                View all projects
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Expertise />
      <Skills />
      <Experience />
      <Credibility />
      <HomeIntro />

      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <div className="rounded-[2rem] border border-border bg-card px-7 py-12 text-center shadow-lift sm:px-14 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl">
              Have a problem worth understanding properly?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              I&rsquo;m open to UX research and design roles, and always happy to talk about
              accessible, human-centered work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="min-h-11 rounded-full px-6">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-11 rounded-full px-6">
                <Link to="/resume">View resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
