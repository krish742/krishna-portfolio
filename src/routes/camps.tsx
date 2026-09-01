import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { SectionHeading, Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { Compass, Calendar, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const title = "STEM Innovation Camps — Jr. Innovation Challenge";
const description =
  "Explore hands-on STEM & Design Innovation Camps hosted in partnership with BGC Southeast in Kingston, Ontario.";

export const Route = createFileRoute("/camps")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/camps" }],
  }),
  component: CampsPage,
});

const CAMPS = [
  {
    id: "camp-robotics",
    title: "Civic Robotics & Prototyping Camp",
    track: "Robotics & Hardware",
    ages: "Ages 10–14",
    dates: "Weekend Intensive Series",
    location: "BGC Southeast West End Hub, Kingston",
    desc: "Hands-on exploration of sensors, microcontrollers, and rapid physical prototyping to solve community accessibility challenges.",
    highlights: [
      "Hardware prototyping toolkits",
      "Mentorship from local engineers",
      "Team challenge pitch",
    ],
  },
  {
    id: "camp-ux-design",
    title: "Youth Digital UX & App Design Camp",
    track: "UI/UX & Web",
    ages: "Ages 12–18",
    dates: "Full-Day Weekend Workshop",
    location: "Kingston Public Library & BGC Hub",
    desc: "Learn wireframing, interactive prototyping, and user interview techniques using modern design tools like Figma.",
    highlights: [
      "Figma & FigJam introductory training",
      "Conduct real youth user tests",
      "Interactive prototype portfolio piece",
    ],
  },
  {
    id: "camp-sustainability",
    title: "Eco-Innovation & Smart City Camp",
    track: "Environment & Energy",
    ages: "Ages 11–16",
    dates: "Special Holiday Camp",
    location: "Kingston Community Center",
    desc: "Discover sustainable urban design, environmental monitoring, and community greening proposals for Kingston neighborhoods.",
    highlights: [
      "Neighborhood mapping exercises",
      "Expert guest speakers",
      "Community showcase presentation",
    ],
  },
];

function CampsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Compass className="size-3.5" aria-hidden="true" />
              Community Camps
            </span>

            <h1 className="mt-5 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              STEM Innovation Camps
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Immersive, hands-on camps designed with BGC Southeast to build STEM, design thinking,
              and collaborative skills in a supportive community space.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-h-12 rounded-full px-7">
                <Link to="/signup">
                  Register for Camp
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full px-6">
                <Link to="/workshops">View Prep Workshops</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Camps Listing */}
      <section className="border-t border-border py-16 sm:py-24 bg-secondary/30">
        <div className="container-page">
          <SectionHeading
            eyebrow="Upcoming Camp Programs"
            title="Choose a camp track tailored to your curiosity"
            intro="All camps are free to attend and include all prototyping materials, snacks, and mentor guidance."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {CAMPS.map((camp, idx) => (
              <Reveal key={camp.id} delay={idx * 80}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:shadow-lift">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {camp.track}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">{camp.ages}</span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                      {camp.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {camp.desc}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4 text-primary shrink-0" aria-hidden="true" />
                        <span>{camp.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-primary shrink-0" aria-hidden="true" />
                        <span>{camp.location}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Camp Highlights:
                      </p>
                      <ul className="space-y-1">
                        {camp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <CheckCircle2
                              className="size-3.5 text-primary shrink-0"
                              aria-hidden="true"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border">
                    <Button asChild className="w-full rounded-full">
                      <Link to="/signup">Reserve Spot</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <div className="rounded-[2rem] border border-border bg-card px-7 py-12 text-center shadow-lift sm:px-14 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl">
              Can't make the full camp dates?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Check out our weekend workshop sessions or download our self-paced challenge
              resources.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="min-h-11 rounded-full px-6">
                <Link to="/workshops">Explore Workshops</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-11 rounded-full px-6">
                <Link to="/resources">Participant Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
