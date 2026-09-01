import { Accessibility, Award, Building2, GraduationCap, Laptop } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Building2, label: "City of Kingston", note: "Academic Client Projects" },
  { icon: Laptop, label: "Vosyn.ai", note: "Accessibility Team Intern" },
  { icon: Accessibility, label: "WCAG Accessibility", note: "Audits & inclusive patterns" },
  { icon: GraduationCap, label: "St. Lawrence College", note: "Post-Graduate Cert. in UX" },
  { icon: Award, label: "Scrum Alliance", note: "Certified Scrum Master (CSM)" },
];

export function Credibility() {
  return (
    <section className="border-t border-border bg-secondary/30 py-14 sm:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-14">
        <Reveal>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Background &amp; Experience
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Academic client projects, accessibility internship, and formal qualifications.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ icon: Icon, label, note }) => (
              <li
                key={label}
                className="flex min-w-0 items-start gap-3 border-l border-border pl-4"
              >
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
