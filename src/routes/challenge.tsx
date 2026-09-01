import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { SectionHeading, Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Compass,
  HelpCircle,
  Trophy,
  Calendar,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

const title = "Jr. Innovation Challenge — City of Kingston × BGC Southeast";
const description =
  "Discover the Junior Innovation Challenge, empowering youth in Kingston, Ontario to solve real community problems through research, design thinking, and teamwork.";

export const Route = createFileRoute("/challenge")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/challenge" }],
  }),
  component: ChallengePage,
});

const FAQS = [
  {
    question: "What is the Junior Innovation Challenge?",
    answer:
      "The Junior Innovation Challenge is a community STEM & design initiative in Kingston, Ontario organized in partnership with BGC Southeast. It invites youth to propose creative solutions to local municipal and social challenges.",
  },
  {
    question: "Who can participate?",
    answer:
      "Youth ages 10–18 residing in Kingston and surrounding areas can participate as individuals or in small teams of 2–4 members.",
  },
  {
    question: "Do participants need prior design or coding experience?",
    answer:
      "No prior experience is required! Free hands-on prep workshops, toolkits, and mentor support are provided to guide participants through ideation, wireframing, and pitching.",
  },
  {
    question: "What is the timeline of the challenge?",
    answer:
      "The program spans 10 weeks, starting with community discovery, followed by prototype workshops, mentor check-ins, and concluding with a Community Pitch Day.",
  },
  {
    question: "How are projects evaluated?",
    answer:
      "Projects are evaluated on community empathy, accessibility, problem definition, feasibility, and team presentation by a panel of community leaders and educators.",
  },
];

const PILLARS = [
  {
    title: "1. Discover Community Needs",
    desc: "Listen to real residents, explore civic challenges in Kingston, and frame meaningful problem statements.",
    icon: Compass,
  },
  {
    title: "2. Build & Prototype",
    desc: "Transform ideas into tangible wireframes, models, or digital prototypes during guided weekend sessions.",
    icon: Lightbulb,
  },
  {
    title: "3. Pitch & Present",
    desc: "Share your solution with community stakeholders, receive constructive feedback, and win challenge awards.",
    icon: Trophy,
  },
];

function ChallengePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" aria-hidden="true" />
              City of Kingston × BGC Southeast
            </span>

            <h1 className="mt-5 font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Junior Innovation Challenge
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              An accessible digital and hands-on experience helping young innovators discover,
              prepare for, and pitch real solutions to community problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-h-12 rounded-full px-7">
                <Link to="/join">
                  Join the Challenge
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full px-6">
                <Link
                  to="/projects/$slug"
                  params={{ slug: "kingston-junior-innovation-challenge" }}
                >
                  Read UX Case Study
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Program Overview */}
      <section className="border-t border-border py-16 sm:py-24 bg-secondary/30">
        <div className="container-page">
          <SectionHeading
            eyebrow="Program Overview"
            title="Empowering the next generation of civic problem solvers."
            intro="Based on extensive research with youth, parents, and community partners in Kingston, the challenge provides clarity, structured guidance, and accessible resources."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-lift">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Dates & Milestones */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Roadmap & Timeline"
            title="10-Week Journey of Discovery"
            intro="A structured timeline designed so every participant feels supported from registration through pitch day."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                week: "Weeks 1–2",
                title: "Registration & Orientation",
                desc: "Form teams, explore topic tracks, and attend intro sessions.",
              },
              {
                week: "Weeks 3–5",
                title: "Research & Ideation",
                desc: "User interviews, surveys, and framing problem statements.",
              },
              {
                week: "Weeks 6–8",
                title: "Prototyping & Feedback",
                desc: "Hands-on workshops, mentor check-ins, and iteration.",
              },
              {
                week: "Weeks 9–10",
                title: "Pitch Prep & Showcase",
                desc: "Finalize presentations and pitch to community judges.",
              },
            ].map((step, idx) => (
              <Reveal key={step.week} delay={idx * 60}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">{step.week}</span>
                    <Calendar className="size-4 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <h4 className="mt-3 text-base font-semibold text-foreground">{step.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border py-16 sm:py-24 bg-card">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            intro="Everything you need to know about participating, mentor support, and challenge rules."
          />

          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-background p-4 sm:p-6">
            {FAQS.map((faq, i) => (
              <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between text-left text-base font-medium text-foreground"
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.question}</span>
                  <HelpCircle
                    className="size-5 shrink-0 text-muted-foreground transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>
                {openFaq === i ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-200">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="container-page">
          <div className="rounded-[2rem] border border-border bg-card px-7 py-12 text-center shadow-lift sm:px-14 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl">
              Ready to create real impact in Kingston?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Sign up today, explore upcoming workshops, or download the participant toolkit to get
              started.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="min-h-11 rounded-full px-6">
                <Link to="/signup">Register Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-11 rounded-full px-6">
                <Link to="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
