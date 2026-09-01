import { Reveal, SectionHeading } from "./Reveal";
import { GraduationCap, Award, Globe, Briefcase } from "lucide-react";

const experienceList = [
  {
    period: "Aug 2024 – Nov 2024",
    role: "UI/UX Researcher Intern",
    org: "Vosyn.ai — Accessibility Team",
    type: "Remote Internship",
    desc: "Focused on accessibility-centered UX research, interface exploration, and WCAG-aligned evaluation within a product team.",
    points: [
      "Evaluated digital interface flows against WCAG 2.1 AA guidelines to identify usability and contrast improvements.",
      "Performed user research through surveys and interviews to understand specific accessibility challenges.",
      "Created hand-drawn interface exploration sketches for multilingual translation controls.",
      "Contributed accessibility patterns to design discussions and facilitated an internal peer workshop.",
    ],
  },
  {
    period: "Aug 2024 – Dec 2024",
    role: "UX Designer & Researcher — Junior Innovation Challenge",
    org: "City of Kingston × BGC Southeast",
    type: "Academic Client Project • St. Lawrence College",
    desc: "Collaborated with external stakeholders to design an accessible digital experience direction and interactive Figma prototype for a youth civic innovation platform.",
    points: [
      "Conducted user research through surveys to understand student (ages 10–18), parent, and educator needs.",
      "Created user flows, low-fidelity wireframes, and interactive high-fidelity Figma prototypes.",
      "Structured information architecture for challenge tracks, resource toolkits, and step-by-step sign-up flows.",
      "Co-presented and explained the interactive prototype at the client showcase to City of Kingston & BGC Southeast stakeholders.",
    ],
  },
  {
    period: "Aug 2024 – Dec 2024",
    role: "UX Researcher — Housing Research Project",
    org: "City of Kingston",
    type: "Academic Client Research Project • St. Lawrence College",
    desc: "Qualitative UX research project exploring housing barriers, information fragmentation, and culturally responsive needs for newcomers and refugees.",
    points: [
      "Conducted qualitative research to understand housing navigation barriers faced by newcomers and refugees in Kingston.",
      "Gathered stakeholder perspectives and survey data, applying affinity mapping to synthesize core themes.",
      "Developed newcomer personas and translated research evidence into prioritized functional and non-functional requirements.",
      "Presented strategic recommendations supporting ongoing municipal community planning discussions.",
    ],
  },
  {
    period: "2025 – Present",
    role: "Independent UX Practice",
    org: "Self-Directed Skill Development",
    type: "Self-Directed Practice • Not Client Work",
    desc: "Ongoing self-directed practice applying UX research methods, usability evaluations, accessibility reviews, and information architecture.",
    points: [
      "Exploring end-to-end UX methodologies, from problem framing to interactive component prototyping in Figma.",
      "Conducting heuristic evaluations against Nielsen Norman Group principles to identify usability friction.",
      "Evaluating color contrast, keyboard focus states, and structural landmarks against WCAG 2.1 AA standards.",
      "Maintaining continuous self-study across modern design system tooling and responsive layout techniques.",
    ],
  },
];

const educationList = [
  {
    degree: "Post-Graduate Certificate in User Experience Design",
    institution: "St. Lawrence College, Kingston, ON",
    dates: "May 2024 – Dec 2024",
    gpa: "GPA: 3.6 / 4.0",
  },
  {
    degree: "Post-Graduate Certificate in Software Quality Assurance and Test Engineering",
    institution: "Conestoga College, Kitchener, ON",
    dates: "Sep 2022 – Aug 2023",
  },
  {
    degree: "Bachelor of Engineering in Information and Technology",
    institution: "Gujarat Technological University, India",
    dates: "June 2017 – May 2021",
    gpa: "CGPA: 8.5 / 10",
  },
];

const certificationsList = [
  {
    title: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
  },
  {
    title: "LinkedIn Learning",
    issuer: "UX Design, Accessibility, Usability Testing, Design Thinking",
  },
];

const activitiesList = [
  "Facilitated an Accessibility Workshop for design peers during internship at Vosyn.ai",
  "Presented UX research findings and solutions at the St. Lawrence College Showcase",
  "Write poetry exploring empathy and healing — shaping a human-first mindset in design",
];

const languagesList = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "Gujarati", level: "Fluent" },
];

export function Experience({ showEducationFirst = false }: { showEducationFirst?: boolean }) {
  const timelineContent = (
    <ol className="mt-12 space-y-6">
      {experienceList.map((item, i) => (
        <Reveal as="li" key={item.role + item.period} delay={i * 70}>
          <div className="relative rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:shadow-lift sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-medium text-foreground">{item.role}</h3>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-primary">
              {item.org}{" "}
              <span className="ml-2 font-normal text-muted-foreground">• {item.type}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            <ul className="mt-5 space-y-2">
              {item.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );

  const educationContent = (
    <div id="education" className="scroll-mt-28 mt-12 grid gap-6 lg:grid-cols-2">
      {/* Education */}
      <Reveal>
        <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
          <div className="flex items-center gap-2 text-primary">
            <GraduationCap className="size-5" aria-hidden="true" />
            <h3 className="font-display text-xl font-medium text-foreground">Education</h3>
          </div>
          <ul className="mt-6 space-y-6">
            {educationList.map((e) => (
              <li key={e.degree} className="border-b border-border pb-5 last:border-0 last:pb-0">
                <p className="text-sm font-semibold text-foreground">{e.degree}</p>
                <p className="mt-1 text-xs text-primary">{e.institution}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span>{e.dates}</span>
                  {e.gpa ? (
                    <span className="rounded-md bg-secondary px-2 py-0.5 font-medium text-foreground">
                      {e.gpa}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Certifications & Languages */}
      <div className="space-y-6">
        <Reveal delay={90}>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-2 text-primary">
              <Award className="size-5" aria-hidden="true" />
              <h3 className="font-display text-xl font-medium text-foreground">Certifications</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {certificationsList.map((c) => (
                <li key={c.title} className="rounded-2xl border border-border bg-secondary/30 p-4">
                  <p className="text-sm font-semibold text-foreground">{c.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Languages */}
        <Reveal delay={160}>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-2 text-primary">
              <Globe className="size-5" aria-hidden="true" />
              <h3 className="font-display text-xl font-medium text-foreground">Languages</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {languagesList.map((lang) => (
                <span
                  key={lang.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground"
                >
                  <span className="font-semibold text-primary">{lang.name}</span> — {lang.level}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="container-page">
        {showEducationFirst ? (
          <>
            <SectionHeading
              eyebrow="Education & Credentials"
              title="Academic Credentials & Certifications"
              intro="Post-Graduate certificates, Information Technology degree, professional certifications, and languages."
            />
            {educationContent}

            <div className="mt-20">
              <SectionHeading
                eyebrow="Applied Experience"
                title="Professional Experience & Client Projects"
                intro="UX research, accessibility evaluation, interaction design, academic client projects, and self-directed practice."
              />
              {timelineContent}
            </div>
          </>
        ) : (
          <>
            <SectionHeading
              eyebrow="Experience"
              title="Professional Experience & Client Projects"
              intro="UX research, accessibility evaluation, interaction design, academic client projects, and self-directed practice."
            />
            {timelineContent}
            {educationContent}
          </>
        )}

        {/* Awards & Activities */}
        <div className="mt-12">
          <Reveal delay={200}>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h3 className="font-display text-lg font-medium text-foreground">
                Activities &amp; Achievements
              </h3>
              <ul className="mt-4 space-y-2.5">
                {activitiesList.map((act) => (
                  <li key={act} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
