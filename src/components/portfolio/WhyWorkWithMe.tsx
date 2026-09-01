import {
  Accessibility,
  Ear,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Microscope,
  Puzzle,
  ScanSearch,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  {
    icon: Microscope,
    title: "Research-driven thinking",
    note: "Decisions grounded in evidence, not assumptions.",
  },
  {
    icon: Accessibility,
    title: "Accessibility-first mindset",
    note: "Inclusive by default, not as a final pass.",
  },
  {
    icon: HeartHandshake,
    title: "Empathetic collaboration",
    note: "Working with teams, not handing off to them.",
  },
  {
    icon: Puzzle,
    title: "Problem-solving approach",
    note: "Framing the right problem before solving it.",
  },
  { icon: ScanSearch, title: "Attention to detail", note: "The small things quietly shape trust." },
  {
    icon: MessageCircle,
    title: "Strong communication",
    note: "Clear stories from messy research.",
  },
  {
    icon: GraduationCap,
    title: "Continuous learner",
    note: "Always mid-way through something new.",
  },
  { icon: Ear, title: "Human-centered design", note: "People first, at every single step." },
];

export function WhyWorkWithMe() {
  return (
    <section className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Why Work With Me" title="What I bring to a team." />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, note }, i) => (
            <Reveal as="li" key={title} delay={(i % 4) * 70}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
