import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { SectionHeading, Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { Users, Heart, Award, Building2, ArrowRight } from "lucide-react";

const title = "Get Involved — Mentors, Volunteers & Community Partners";
const description =
  "Support young innovators in Kingston by becoming a mentor, event volunteer, workshop speaker, or community partner.";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const OPPORTUNITIES = [
  {
    title: "Become a Mentorship Volunteer",
    icon: Users,
    commitment: "2–4 hours / month during challenge",
    desc: "Guide youth teams through problem framing, research synthesis, prototyping, and pitch rehearsal.",
    who: "Designers, software developers, engineers, researchers, and community organizers.",
  },
  {
    title: "Judge at Pitch Showcase Day",
    icon: Award,
    commitment: "Half-day event commitment",
    desc: "Review participant presentations, ask encouraging questions, and provide constructive feedback.",
    who: "Civic leaders, STEM educators, local business owners, and youth advocates.",
  },
  {
    title: "Partner / Sponsor the Initiative",
    icon: Building2,
    commitment: "Community partnership",
    desc: "Provide venue spaces, equipment toolkits, participant awards, or educational grants for youth.",
    who: "Local businesses, tech companies, community organizations, and academic institutions.",
  },
];

function GetInvolvedPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Heart className="size-3.5" aria-hidden="true" />
              Community Support
            </span>

            <h1 className="mt-5 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get Involved in Youth STEM &amp; Design
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Help us empower the next generation of creative problem solvers in Kingston, Ontario
              through mentorship, volunteering, or community partnership.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-h-12 rounded-full px-7">
                <Link to="/contact">
                  Apply to Volunteer
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full px-6">
                <Link to="/challenge">Explore Challenge Overview</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Opportunities List */}
      <section className="border-t border-border py-16 sm:py-24 bg-secondary/30">
        <div className="container-page">
          <SectionHeading
            eyebrow="Ways to Participate"
            title="How you can make a tangible difference"
            intro="Flexible roles for industry professionals, educators, and community champions."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {OPPORTUNITIES.map((op, idx) => {
              const Icon = op.icon;
              return (
                <Reveal key={op.title} delay={idx * 80}>
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-soft">
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                        {op.title}
                      </h3>
                      <p className="mt-2 text-xs font-semibold text-primary">{op.commitment}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {op.desc}
                      </p>

                      <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Ideal for: </span>
                        {op.who}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border">
                      <Button asChild className="w-full rounded-full">
                        <Link to="/contact">Express Interest</Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <div className="rounded-[2rem] border border-border bg-card px-7 py-12 text-center shadow-lift sm:px-14 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl">
              Want to partner with Kingston youth programs?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Reach out to learn more about sponsorship packages, workshop collaboration, and
              mentorship opportunities.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="min-h-11 rounded-full px-8">
                <Link to="/contact">Contact Community Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
