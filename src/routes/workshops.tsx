import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { SectionHeading, Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, MapPin, ArrowRight, CheckCircle2, Video } from "lucide-react";

const title = "Prep Workshops — Jr. Innovation Challenge";
const description =
  "Skill-building workshops covering design thinking, wireframing, user research, and public pitching for youth in Kingston.";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
  }),
  component: WorkshopsPage,
});

const WORKSHOPS = [
  {
    title: "Empathy & User Interviewing Workshop",
    category: "UX Research",
    format: "In-Person & Virtual Option",
    date: "Saturday, 10:00 AM – 12:00 PM",
    location: "BGC Southeast Center & Zoom",
    desc: "Learn how to ask meaningful questions, listen actively to community residents, and turn interviews into insights.",
    takeaways: ["User interview guide template", "Affinity mapping exercise", "Empathy map canvas"],
  },
  {
    title: "Wireframing & Digital Prototyping",
    category: "UX Design",
    format: "In-Person Hands-on Session",
    date: "Saturday, 1:00 PM – 3:30 PM",
    location: "Kingston Innovation Lab",
    desc: "From paper sketches to interactive digital screens using beginner-friendly wireframing tools.",
    takeaways: [
      "Sketching worksheets",
      "Intro to digital layout & hierarchy",
      "Interactive prototype testing",
    ],
  },
  {
    title: "Pitching & Public Presentation",
    category: "Communication",
    format: "Interactive Group Session",
    date: "Sunday, 2:00 PM – 4:00 PM",
    location: "City Hall Community Room",
    desc: "Build confidence presenting your solution to judges, framing problem statements, and handling Q&A.",
    takeaways: ["Pitch deck slide structure", "Storytelling framework", "Practice pitch feedback"],
  },
];

function WorkshopsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <GraduationCap className="size-3.5" aria-hidden="true" />
              Skill-Building Workshops
            </span>

            <h1 className="mt-5 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Preparation Workshops
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Interactive sessions designed to build confidence in user research, wireframing,
              problem framing, and storytelling.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-h-12 rounded-full px-7">
                <Link to="/signup">
                  Register for Workshops
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full px-6">
                <Link to="/resources">Download Worksheets</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="border-t border-border py-16 sm:py-24 bg-secondary/30">
        <div className="container-page">
          <SectionHeading
            eyebrow="Upcoming Sessions"
            title="Hands-on learning tailored to every step of the challenge"
            intro="Free to attend for registered participants and interested students in Kingston."
          />

          <div className="mt-12 space-y-6 max-w-4xl mx-auto">
            {WORKSHOPS.map((ws, idx) => (
              <Reveal key={ws.title} delay={idx * 70}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-lift sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {ws.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Video className="size-3.5 text-primary" aria-hidden="true" />
                      {ws.format}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-medium text-foreground">
                    {ws.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ws.desc}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-4 text-primary" aria-hidden="true" />
                      <span>{ws.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-4 text-primary" aria-hidden="true" />
                      <span>{ws.location}</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Session Deliverables:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ws.takeaways.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          <CheckCircle2 className="size-3 text-primary" aria-hidden="true" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button asChild size="sm" className="rounded-full px-5">
                      <Link to="/signup">Reserve Workshop Seat</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
