import { useState } from "react";
import {
  Compass,
  Search,
  Target,
  Lightbulb,
  LayoutTemplate,
  FlaskConical,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    icon: Compass,
    label: "Discover",
    note: "Understand the context",
    detail:
      "I start by learning the landscape: who the people are, what the organisation is trying to achieve, and which constraints are real versus assumed. Mostly this is stakeholder interviews and a lot of listening.",
  },
  {
    icon: Search,
    label: "Research",
    note: "Listen to real people",
    detail:
      "User interviews, contextual inquiry, and survey design where I need breadth. I write the guide to let people tell their own story rather than confirm mine.",
  },
  {
    icon: Target,
    label: "Define",
    note: "Frame the right problem",
    detail:
      "Affinity mapping, personas, journey maps, and a clearly written problem statement. If I cannot state the problem in one sentence, I have not finished synthesising.",
  },
  {
    icon: Lightbulb,
    label: "Ideate",
    note: "Explore widely",
    detail:
      "Sketching, information architecture, and user flows. I deliberately generate options I expect to reject, because the second and third ideas usually teach me something about the first.",
  },
  {
    icon: LayoutTemplate,
    label: "Prototype",
    note: "Make it tangible",
    detail:
      "Low-fidelity wireframes first, then high-fidelity screens and interactive prototypes in Figma, built on reusable design system components wherever they exist.",
  },
  {
    icon: FlaskConical,
    label: "Test",
    note: "Validate with users",
    detail:
      "Task-based usability testing and heuristic evaluation, plus accessibility checks against WCAG. I watch where people hesitate rather than asking whether they liked it.",
  },
  {
    icon: RefreshCw,
    label: "Iterate",
    note: "Refine and repeat",
    detail:
      "Findings go back into the design, and often back into the research questions. The loop matters more than the sequence — most projects revisit earlier stages at least once.",
  },
];

export function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-border bg-secondary/40 py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Design Process"
          title="A loop, not a straight line."
          intro="Select a stage to see how I work through it. Most projects move through these more than once — and that is the point."
        />

        <div className="mt-14">
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
            />
            {steps.map(({ icon: Icon, label, note }, i) => {
              const open = openIndex === i;
              return (
                <Reveal as="li" key={label} delay={i * 70} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-expanded={open}
                    aria-controls="process-detail"
                    className="group flex w-full items-start gap-4 rounded-2xl p-1 text-left lg:flex-col lg:items-center lg:text-center"
                  >
                    <span
                      className={cn(
                        "relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-teal shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:text-primary",
                        open && "-translate-y-1 border-primary bg-primary text-primary-foreground",
                      )}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="lg:mt-4">
                      <span className="block text-sm font-semibold text-foreground">{label}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {note}
                      </span>
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </ol>

          <div
            id="process-detail"
            aria-live="polite"
            className="mt-10 rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
          >
            <h3 className="font-display text-xl text-foreground">{steps[openIndex]?.label}</h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {steps[openIndex]?.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
