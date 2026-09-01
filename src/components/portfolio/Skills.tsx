import { Accessibility, Code2, Layout, Search, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const skillCategories = [
  {
    icon: Search,
    title: "UX Research",
    skills: [
      "User Interviews",
      "Surveys",
      "Usability Testing",
      "Affinity Mapping",
      "Personas",
      "Journey Mapping",
    ],
  },
  {
    icon: Layout,
    title: "UX Design",
    skills: [
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Design Systems",
      "Responsive Design",
      "User Flows",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    skills: ["WCAG 2.1", "Heuristic Evaluation", "Inclusive Design"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      "Figma",
      "FigJam",
      "Adobe XD",
      "Balsamiq",
      "Miro",
      "Canva",
      "Notion",
      "Google Suite",
      "Microsoft Office",
    ],
  },
  {
    icon: Code2,
    title: "Technical",
    skills: ["HTML/CSS — Basic", "WordPress — Basic"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border bg-secondary/30 py-16 sm:py-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="UX/UI Design Skills"
          title="Tools &amp; Methodologies"
          intro="Structured around user research, accessibility standards, interaction design, and modern design tools."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ icon: Icon, title, skills }, i) => (
            <Reveal key={title} delay={(i % 3) * 70} className="min-w-0">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-lift">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
