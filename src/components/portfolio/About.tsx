import {
  Accessibility,
  BookOpen,
  ClipboardList,
  GraduationCap,
  Lightbulb,
  Search,
  Sparkles,
  Layers,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import profilePhoto from "@/assets/About_Professional_Portrait.png";

const facts = [
  { icon: Search, label: "UX Researcher & UX Designer" },
  { icon: GraduationCap, label: "Post-Graduate Cert. in UX Design" },
  { icon: ClipboardList, label: "Background in IT & Software QA" },
  { icon: Accessibility, label: "Accessibility & WCAG Audits" },
  { icon: BookOpen, label: "Certified Scrum Master (CSM)" },
];

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    desc: "Research users, their needs, behaviors, and pain points.",
  },
  {
    number: "02",
    title: "Define",
    desc: "Synthesize findings into clear problems, personas, journeys, and opportunities.",
  },
  {
    number: "03",
    title: "Design",
    desc: "Create flows, wireframes, prototypes, and accessible interfaces.",
  },
  {
    number: "04",
    title: "Evaluate",
    desc: "Test, review, iterate, and improve the experience.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Profile Photo */}
          <Reveal>
            <figure className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-lift">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={profilePhoto}
                  alt="Krishna Pandya — UX Researcher & UX Designer"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 px-2 text-xs leading-relaxed text-muted-foreground">
                Krishna Pandya — UX Researcher &amp; Designer based in Ontario, Canada.
              </figcaption>
            </figure>
          </Reveal>

          <div className="max-w-[62ch] space-y-4 text-base leading-relaxed text-muted-foreground">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                About Me
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl">
                Design starts with understanding people.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-foreground font-medium">
                I’m a UX Researcher and UX Designer with a background in Information Technology,
                Software Quality Assurance, and User Experience Design. My approach combines
                research, usability, accessibility, and thoughtful interaction design to create
                digital experiences that are intuitive and inclusive.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                I enjoy understanding how people think, identifying usability barriers, and
                translating research insights into practical design solutions.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Whether conducting qualitative interviews, building accessible Figma prototypes, or
                evaluating WCAG compliance, I prioritize human empathy and evidence-based design
                choices.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="italic text-muted-foreground">
                Outside of design, I write poetry exploring empathy and healing — shaping a
                human-first mindset in my design practice.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-7 flex flex-wrap gap-2 pt-2">
                {facts.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-soft"
                  >
                    <Icon className="size-3.5 text-primary" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* My Approach Section */}
        <div className="mt-16 sm:mt-24 border-t border-border pt-16">
          <SectionHeading
            eyebrow="My Approach"
            title="A structured, human-centered design process"
            intro="From understanding user needs through qualitative research to evaluating accessible final prototypes."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, idx) => (
              <Reveal key={step.number} delay={idx * 70}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-lift">
                  <span className="font-display text-3xl font-bold text-primary">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
