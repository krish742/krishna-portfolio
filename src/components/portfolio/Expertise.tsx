import { Compass, PenTool, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    icon: Users,
    title: "Research",
    skills: [
      "UX Research",
      "User Interviews",
      "Survey Design",
      "Usability Testing",
      "Research Synthesis",
    ],
  },
  {
    icon: PenTool,
    title: "Design",
    skills: [
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Figma",
    ],
  },
  {
    icon: Compass,
    title: "Approach",
    skills: ["Accessibility", "Human-Centered Design", "Stakeholder Collaboration"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected Expertise"
          title="Research and design, practised together."
        />

        <ul className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, skills }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="min-w-0">
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
