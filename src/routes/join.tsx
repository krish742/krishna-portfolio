import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { SectionHeading, Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, UserPlus, Compass, Users, School } from "lucide-react";

const title = "How to Join — Jr. Innovation Challenge";
const description =
  "Step-by-step participation guide for students, parents, and teachers participating in the Kingston Jr. Innovation Challenge.";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: JoinPage,
});

const STEPS = [
  {
    number: "01",
    title: "Create Your Account / Team",
    desc: "Register as an individual participant or form a team of 2–4 members. Choose your track of interest.",
    cta: "Start Sign Up",
    link: "/signup",
  },
  {
    number: "02",
    title: "Explore Challenge Briefs",
    desc: "Download challenge toolkits focusing on community issues in Kingston like youth access, sustainability, and public space.",
    cta: "View Resources",
    link: "/resources",
  },
  {
    number: "03",
    title: "Attend Prep Workshops & Camps",
    desc: "Join free weekend workshops and camps to learn user research, wireframing, and prototype creation.",
    cta: "See Workshops",
    link: "/workshops",
  },
  {
    number: "04",
    title: "Submit & Pitch Your Idea",
    desc: "Refine your final pitch with dedicated mentor support and present to community stakeholders on Pitch Day.",
    cta: "Learn About Challenge",
    link: "/challenge",
  },
];

const AUDIENCES = [
  {
    title: "For Students (Ages 10–18)",
    icon: Users,
    points: [
      "No experience needed — all tools and training provided",
      "Work individually or build a team with friends",
      "Gain real design, STEM, and presentation skills",
      "Earn community certificates and awards",
    ],
  },
  {
    title: "For Parents & Guardians",
    icon: Compass,
    points: [
      "Safe, structured extracurricular STEM activity",
      "Hosted at accessible BGC Southeast & community hubs",
      "Free participation with all materials included",
      "Encourages leadership, teamwork, and confidence",
    ],
  },
  {
    title: "For Teachers & Educators",
    icon: School,
    points: [
      "Curriculum-aligned STEM & design thinking toolkits",
      "Classroom workshop participation options",
      "Empowers students to solve real Kingston challenges",
      "Dedicated teacher support & resource packs",
    ],
  },
];

function JoinPage() {
  return (
    <SiteLayout>
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <UserPlus className="size-3.5" aria-hidden="true" />
              Participation Guide
            </span>

            <h1 className="mt-5 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              How to Join the Challenge
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Getting started is simple. Whether you're a student with a new idea, a parent
              supporting a participant, or a teacher bringing innovation to your classroom.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-h-12 rounded-full px-7">
                <Link to="/signup">
                  Register Now
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full px-6">
                <Link to="/signin">Already Registered? Sign In</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Step by Step Flow */}
      <section className="border-t border-border py-16 sm:py-24 bg-secondary/30">
        <div className="container-page">
          <SectionHeading
            eyebrow="Simple 4-Step Process"
            title="Your Path from Idea to Impact"
            intro="Follow these steps to take part in the Junior Innovation Challenge."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, idx) => (
              <Reveal key={step.number} delay={idx * 70}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <div>
                    <span className="font-display text-3xl font-bold text-primary">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between rounded-full text-xs font-semibold"
                    >
                      <Link to={step.link}>
                        <span>{step.cta}</span>
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Participation Roles"
            title="Tailored support for every participant group"
            intro="Clear expectations and guidance for youth, parents, and local educators."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {AUDIENCES.map((aud, idx) => {
              const Icon = aud.icon;
              return (
                <Reveal key={aud.title} delay={idx * 80}>
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">{aud.title}</h3>
                    <ul className="mt-5 flex flex-col gap-3">
                      {aud.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <div className="rounded-[2rem] border border-border bg-card px-7 py-12 text-center shadow-lift sm:px-14 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl">
              Have questions before signing up?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our community team is happy to assist youth, parents, and teachers with registration
              or workshop details.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="min-h-11 rounded-full px-6">
                <Link to="/signup">Register Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-11 rounded-full px-6">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
