import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/* ---------------------------------- utils --------------------------------- */

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.5] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

/* ------------------------------ shared pieces ----------------------------- */

function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </li>
  );
}

function SectionShell({
  id,
  number,
  title,
  intro,
  children,
  className,
  tone = "plain",
}: {
  id: string;
  number: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
  tone?: "plain" | "tinted";
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-24 py-12 sm:py-20 lg:py-24",
        tone === "tinted" &&
          "my-4 rounded-[1.75rem] bg-secondary/40 px-5 py-12 sm:my-6 sm:rounded-[2rem] sm:px-8 sm:py-16",
        className,
      )}
    >
      <div className="w-full min-w-0">
        <Reveal className="max-w-[62ch]">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
            {number} — {title}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-[1.75rem] leading-[1.15] text-foreground sm:mt-4 sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              {intro}
            </p>
          ) : null}
        </Reveal>
        {children ? <div className="mt-8 sm:mt-12">{children}</div> : null}
      </div>
    </section>
  );
}

/** Clearly temporary, edit-friendly artifact slot. Swap the dashed box for a real <img>. */
function Placeholder({
  label,
  caption,
  ratio = "aspect-[4/3]",
  frame = "plain",
  className,
}: {
  label: string;
  caption?: string;
  ratio?: string;
  /** "browser" adds a subtle browser-style chrome around the slot. */
  frame?: "plain" | "browser";
  className?: string;
}) {
  const slot = (
    <div
      className={cn(
        "flex items-center justify-center border-2 border-dashed border-primary/40 bg-secondary/50 p-4 text-center sm:p-6",
        frame === "browser" ? "rounded-xl" : "rounded-2xl sm:rounded-3xl",
        ratio,
      )}
    >
      <div className="flex min-w-0 flex-col items-center gap-2">
        <ImageIcon className="size-5 text-primary sm:size-6" aria-hidden="true" />
        <span className="break-words text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.16em]">
          [INSERT: {label}]
        </span>
      </div>
    </div>
  );

  return (
    <figure className={cn("min-w-0", className)}>
      {frame === "browser" ? (
        <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-soft sm:rounded-3xl sm:p-3">
          <div aria-hidden="true" className="flex items-center gap-1.5 px-2 pb-2">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="ml-2 h-2 w-full max-w-[10rem] rounded-full bg-border/70" />
          </div>
          {slot}
        </div>
      ) : (
        slot
      )}
      {caption ? (
        <figcaption className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Responsive artifact gallery — stacks on mobile, grids up without overflow. */
function Gallery({
  items,
  ratio = "aspect-[4/3]",
  columns = 2,
  frame = "plain",
}: {
  items: { label: string; caption?: string }[];
  ratio?: string;
  columns?: 2 | 3;
  frame?: "plain" | "browser";
}) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2 sm:gap-5", columns === 3 && "lg:grid-cols-3")}>
      {items.map((item, i) => (
        <Reveal as="li" key={`${item.label}-${i}`} delay={i * 50} className="min-w-0">
          <Placeholder
            label={item.label}
            {...(item.caption ? { caption: item.caption } : {})}
            ratio={ratio}
            frame={frame}
          />
        </Reveal>
      ))}
    </ul>
  );
}

/* ---------------------------------- data ---------------------------------- */

const SECTIONS = [
  { id: "snapshot", title: "Snapshot" },
  { id: "challenge", title: "The Challenge" },
  { id: "discovery", title: "Discovery" },
  { id: "research", title: "Research" },
  { id: "synthesis", title: "Synthesis" },
  { id: "research-to-design", title: "Research → Design" },
  { id: "architecture", title: "Information Architecture" },
  { id: "exploration", title: "Design Exploration" },
  { id: "evaluation", title: "Evaluation" },
  { id: "iteration", title: "Iteration" },
  { id: "final-direction", title: "Final Direction" },
  { id: "communicating", title: "Communicating the Design" },
  { id: "outcome", title: "Outcome" },
  { id: "reflection", title: "Reflection" },
];

const ECOSYSTEM = [
  { title: "Parents & Teachers", body: "Guidance & support" },
  { title: "STEM Educators", body: "Learning expertise" },
  { title: "BGC Southeast", body: "Community & operations" },
  { title: "City of Kingston", body: "Outreach & event direction" },
  { title: "Mentors / Volunteers", body: "Participation support" },
];

const METHODS = [
  {
    title: "Stakeholder Interviews",
    body: "Explored motivations, barriers, logistical needs, accessibility, mentorship, and expectations around participation.",
  },
  {
    title: "Student + Parent/Teacher Surveys",
    body: "Examined interests, preferred activities, support needs, concerns, and factors that could encourage participation.",
  },
  {
    title: "Domain Research",
    body: "Explored youth STEM engagement, hands-on learning, mentorship, accessibility, and community-based innovation.",
  },
  {
    title: "Competitive Analysis",
    body: "Studied comparable innovation and robotics programs to understand participation models, incentives, mentorship, and engagement strategies.",
  },
];

const INSIGHTS = [
  {
    n: "01",
    title: "Clarity builds confidence",
    body: "Participants needed clear instructions and guidance—not simply information about the event.",
  },
  {
    n: "02",
    title: "Learning should feel hands-on",
    body: "Workshops, team challenges, and interactive activities made STEM participation more approachable and engaging.",
  },
  {
    n: "03",
    title: "Support matters",
    body: "Mentorship and guidance could help participants navigate unfamiliar concepts and different levels of technical confidence.",
  },
  {
    n: "04",
    title: "Recognition motivates participation",
    body: "Competition, prizes, certificates, and opportunities to showcase work could help sustain interest.",
  },
  {
    n: "05",
    title: "Not everyone starts from the same place",
    body: "Beginner-friendly resources and flexible ways of participating were important for making the challenge more inclusive.",
  },
];

const BRIDGE = [
  {
    n: "01",
    learned: "Participants needed clearer guidance and preparation.",
    designed:
      "Make workshops, training, and beginner-friendly resources visible parts of the experience.",
  },
  {
    n: "02",
    learned: "Students weren’t the only people who needed information.",
    designed:
      "Create distinct resources and pathways for students, parents/teachers, volunteers, and community participants.",
  },
  {
    n: "03",
    learned: "Participation depended on understanding what the challenge involved.",
    designed:
      "Prioritize event information, registration guidance, deadlines, and clear calls to action.",
  },
  {
    n: "04",
    learned: "Mentorship repeatedly emerged as an engagement driver.",
    designed:
      "Surface mentorship, workshops, and learning support within the experience rather than treating them as secondary information.",
  },
  {
    n: "05",
    learned: "The experience needed to support different levels of familiarity and confidence.",
    designed:
      "Use straightforward navigation, understandable labels, and structured content rather than overwhelming users with information.",
  },
];

const PATHWAYS = [
  { title: "Discover the Challenge", body: "Event information & updates" },
  { title: "Join", body: "Registration & participation" },
  { title: "Prepare", body: "Workshops & training" },
  { title: "Learn", body: "Student resources" },
  { title: "Support", body: "Parent & teacher guidance" },
  { title: "Get Involved", body: "Volunteer & community opportunities" },
  { title: "Find Help", body: "FAQs & contact" },
];

const ITERATIONS = [
  {
    n: "01",
    title: "Simplifying the experience",
    feedback:
      "Navigation needed to remain straightforward, and individual pages shouldn’t overwhelm younger participants or parents with information.",
    change:
      "I refined the hierarchy and navigation, using clearer pathways, stronger calls to action, and more deliberate content grouping.",
  },
  {
    n: "02",
    title: "Supporting different audiences",
    feedback: "Students, parents, teachers, and volunteers needed different types of information.",
    change:
      "Resources and participation content were more clearly separated by audience and purpose.",
  },
  {
    n: "03",
    title: "Making participation easier to understand",
    feedback: "Registration and involvement needed clearer value and direction.",
    change:
      "The experience gave greater prominence to registration guidance, workshops, event information, and ways to get involved.",
  },
];

const EXPERIENCE_LABELS = [
  { title: "Discover", body: "Understand the challenge and what’s happening." },
  { title: "Join", body: "Access registration and participation information." },
  { title: "Prepare", body: "Find workshops, training, and learning opportunities." },
  { title: "Learn", body: "Access resources designed around participant needs." },
  { title: "Get Support", body: "Find guidance for students, parents, and teachers." },
  { title: "Get Involved", body: "Explore volunteering and community participation." },
];

const OUTCOMES = [
  {
    title: "Interactive Prototype",
    body: "A cohesive prototype showing how the Jr. Innovation Challenge digital experience could support discovery, registration, preparation, resources, and community participation.",
  },
  {
    title: "Research-Backed Design Direction",
    body: "Design decisions grounded in stakeholder research, student and adult feedback, domain research, and competitive analysis.",
  },
  {
    title: "Recommendations for Next Steps",
    body: "A foundation stakeholders could use when determining the final challenge format and moving toward implementation.",
  },
];

/* --------------------------------- page ----------------------------------- */

export function InnovationCaseStudy({ project, next }: { project: Project; next: Project }) {
  const progress = useReadingProgress();
  const active = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[55] h-0.5 bg-transparent"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <div
          className="h-full origin-left bg-primary transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <article>
        {/* 01 — HERO */}
        <header className="relative overflow-hidden pt-28 pb-8 sm:pt-36 sm:pb-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-24 size-[28rem] rounded-full bg-accent/60 blur-3xl"
          />
          <div className="container-page relative">
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All projects
            </Link>

            <Reveal className="mt-6 max-w-3xl">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
                City of Kingston × BGC Southeast
              </p>
              <h1 className="mt-3 text-[2rem] leading-[1.08] text-foreground sm:mt-4 sm:text-6xl">
                Jr. Innovation Challenge
              </h1>
              <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                Designing an accessible digital experience that helps young innovators discover,
                prepare for, and participate in a community STEM challenge.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                <Chip>UX Research</Chip>
                <Chip>UX Design</Chip>
                <Chip>Interaction Design</Chip>
              </ul>
            </Reveal>

            <Reveal className="mt-8 sm:mt-12" delay={80}>
              <Placeholder
                label="FINAL PROTOTYPE"
                frame="browser"
                ratio="aspect-[4/3] sm:aspect-[16/9]"
                caption="Hero visual — replace with the final interactive prototype screen."
              />
            </Reveal>
          </div>
        </header>

        {/* TOC + content */}
        <div className="container-page pt-6 sm:pt-8">
          <div className="grid gap-8 lg:grid-cols-[15rem_1fr] lg:gap-14">
            <nav aria-label="Case study contents" className="lg:sticky lg:top-28 lg:self-start">
              {/* Mobile: collapsible jump list */}
              <details className="rounded-2xl border border-border bg-card p-4 shadow-soft lg:hidden">
                <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground marker:hidden">
                  Contents — jump to a section
                </summary>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id} className="min-w-0">
                      <a
                        href={`#${s.id}`}
                        aria-current={active === s.id ? "true" : undefined}
                        className={cn(
                          "block truncate py-2 text-sm text-muted-foreground",
                          active === s.id && "font-medium text-foreground",
                        )}
                      >
                        <span className="tabular-nums text-primary/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>{" "}
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>

              {/* Desktop: sticky rail */}
              <div className="hidden lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Contents
                </p>
                <ul className="mt-4 space-y-1">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        aria-current={active === s.id ? "true" : undefined}
                        className={cn(
                          "block rounded-lg border-l-2 border-transparent py-1.5 pl-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
                          active === s.id && "border-primary font-medium text-foreground",
                        )}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="min-w-0">
              {/* 02 — SNAPSHOT */}
              <SectionShell id="snapshot" number="02" title="Project Snapshot" className="pt-4">
                <dl className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    ["Client", "City of Kingston × BGC Southeast"],
                    ["Role", "UX Researcher & UX Designer — Team Project"],
                    ["Timeline", "Aug – Dec 2024"],
                    ["Primary Audience", "Students ages 9–16"],
                  ].map(([label, value]) => (
                    <Reveal
                      key={label}
                      className="min-w-0 rounded-2xl border border-border bg-card p-4 shadow-soft sm:rounded-3xl sm:p-6"
                    >
                      <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-foreground sm:mt-2">
                        {value}
                      </dd>
                    </Reveal>
                  ))}
                </dl>

                <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 sm:grid-cols-2">
                  <Reveal className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Supporting Audiences
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {["Parents", "Teachers", "Mentors", "Volunteers", "Community Partners"].map(
                        (t) => (
                          <Chip key={t}>{t}</Chip>
                        ),
                      )}
                    </ul>
                  </Reveal>
                  <Reveal
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-6"
                    delay={60}
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Methods
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {[
                        "Stakeholder Interviews",
                        "Surveys",
                        "Domain Research",
                        "Competitive Analysis",
                        "Wireframing",
                        "Prototyping",
                        "Stakeholder Evaluation",
                      ].map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                <Reveal className="mt-5 rounded-2xl border border-primary/30 bg-accent/50 p-5 sm:mt-6 sm:rounded-3xl sm:p-9">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    My Contribution — individual work within a team project
                  </h3>
                  <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-relaxed text-foreground sm:text-base">
                    I collaborated with my team throughout the research process, contributing to
                    primary research while taking a leading role in research documentation and the
                    design of research and survey questions.
                  </p>
                  <p className="mt-3 max-w-[60ch] text-[0.95rem] leading-relaxed text-foreground sm:text-base">
                    My primary design contribution was translating those findings into the digital
                    experience. I independently designed the low- and mid-fidelity wireframes and
                    overall wireframe direction, and later presented and walked stakeholders through
                    the interactive prototype at the final showcase.
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Research Documentation",
                      "Research & Survey Question Design",
                      "Collaborative Primary Research",
                      "Low-Fidelity Wireframing",
                      "Mid-Fidelity Wireframing",
                      "Design Exploration",
                      "Prototype Presentation",
                    ].map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </SectionShell>

              {/* 03 — CHALLENGE */}
              <SectionShell id="challenge" number="03" title="Making innovation approachable">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <Reveal className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Background
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      The City of Kingston and BGC Southeast were exploring a youth-focused
                      innovation challenge inspired by the Mayor’s Innovation Challenge—an
                      experience intended to encourage STEM learning, teamwork, creativity, and
                      community problem-solving among young participants.
                    </p>
                  </Reveal>
                  <Reveal
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7"
                    delay={70}
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Challenge
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      The digital experience needed to do more than promote the event. It needed to
                      help participants understand the challenge, register, prepare, find support,
                      and stay informed while remaining simple enough for younger users and useful
                      to the adults supporting them.
                    </p>
                  </Reveal>
                </div>

                <Reveal className="mt-8 rounded-[1.5rem] border border-primary/30 bg-secondary/60 p-6 sm:mt-10 sm:rounded-[2rem] sm:p-14">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    How might we…
                  </p>
                  <p className="mt-4 max-w-3xl font-display text-xl leading-relaxed text-foreground sm:mt-5 sm:text-3xl">
                    Create an engaging and accessible challenge experience that helps young
                    participants understand what to do, feel supported while learning, and
                    confidently take part?
                  </p>
                </Reveal>
              </SectionShell>

              {/* 04 — DISCOVERY */}
              <SectionShell
                id="discovery"
                number="04"
                title="Designing for an ecosystem, not just one user"
                intro="Students were the primary participants—but their ability to participate depended on a wider network of people supporting the challenge. Our research therefore considered the wider ecosystem around them."
              >
                <div className="grid gap-4 md:grid-cols-3">
                  <Reveal className="flex flex-col justify-center rounded-3xl border border-primary/40 bg-accent/60 p-8 text-center md:row-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      At the centre
                    </p>
                    <p className="mt-3 font-display text-2xl text-foreground">Young Participants</p>
                    <p className="mt-2 text-sm text-muted-foreground">Ages 9–16</p>
                  </Reveal>
                  {ECOSYSTEM.map((e, i) => (
                    <Reveal
                      key={e.title}
                      delay={i * 60}
                      className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                    >
                      <h3 className="text-sm font-semibold text-foreground">{e.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{e.body}</p>
                    </Reveal>
                  ))}
                </div>
              </SectionShell>

              {/* 05 — RESEARCH */}
              <SectionShell
                id="research"
                number="05"
                title="Understanding what would make participation possible"
                intro="We combined qualitative and quantitative research to understand what could motivate young participants, what barriers adults anticipated, and what existing innovation programs could teach us about engagement and support."
              >
                <ul className="grid gap-4 sm:grid-cols-2">
                  {METHODS.map((m, i) => (
                    <Reveal
                      as="li"
                      key={m.title}
                      delay={i * 60}
                      className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:rounded-3xl sm:p-7"
                    >
                      <h3 className="text-[0.95rem] font-semibold text-foreground sm:text-base">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                    </Reveal>
                  ))}
                </ul>

                <div className="mt-10 sm:mt-12">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Research artifacts
                  </h3>
                  <div className="mt-4">
                    <Gallery
                      columns={3}
                      ratio="aspect-[4/3]"
                      items={[
                        { label: "RESEARCH ARTIFACT", caption: "Interview guide / notes" },
                        { label: "RESEARCH ARTIFACT", caption: "Survey questions & responses" },
                        { label: "RESEARCH ARTIFACT", caption: "Domain research notes" },
                        { label: "RESEARCH ARTIFACT", caption: "Competitive analysis review" },
                      ]}
                    />
                  </div>
                </div>
              </SectionShell>

              {/* 06 — SYNTHESIS */}
              <SectionShell id="synthesis" number="06" title="Five insights shaped the direction">
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {INSIGHTS.map((s, i) => (
                    <Reveal
                      as="li"
                      key={s.n}
                      delay={i * 50}
                      className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                    >
                      <span className="font-display text-3xl text-primary/70">{s.n}</span>
                      <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </Reveal>
                  ))}
                </ul>
              </SectionShell>

              {/* 07 — RESEARCH → DESIGN */}
              <SectionShell
                id="research-to-design"
                number="07"
                title="From research findings to design decisions"
              >
                <ul className="space-y-4">
                  {BRIDGE.map((b, i) => (
                    <Reveal as="li" key={b.n} delay={i * 50}>
                      <div className="grid items-stretch gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-5 sm:p-7">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {b.n} · We learned
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-foreground">
                            {b.learned}
                          </p>
                        </div>
                        <div
                          aria-hidden="true"
                          className="flex items-center justify-center text-primary sm:px-2"
                        >
                          <ArrowRight className="size-5 rotate-90 sm:rotate-0" />
                        </div>
                        <div className="rounded-2xl bg-accent/50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Design response
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-foreground">
                            {b.designed}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </SectionShell>

              {/* 08 — IA */}
              <SectionShell
                id="architecture"
                number="08"
                title="Turning many needs into one experience"
                intro="The research uncovered a broad range of needs—from discovering the event and registering to finding workshops, resources, mentorship, volunteering opportunities, and support."
              >
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {PATHWAYS.map((p, i) => (
                    <Reveal
                      as="li"
                      key={p.title}
                      delay={i * 40}
                      className="rounded-2xl border border-border bg-card px-5 py-4 shadow-soft"
                    >
                      <p className="text-sm font-semibold text-foreground">{p.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{p.body}</p>
                    </Reveal>
                  ))}
                </ul>
                <Reveal className="mt-8">
                  <Placeholder
                    label="INFORMATION ARCHITECTURE"
                    ratio="aspect-[4/3] sm:aspect-[16/9]"
                    caption="Sitemap / IA diagram."
                  />
                </Reveal>
              </SectionShell>

              {/* 09 — DESIGN EXPLORATION */}
              <SectionShell
                id="exploration"
                number="09"
                title="Translating research into an experience"
                intro="With the research direction established, I took ownership of the wireframing process, exploring how registration, resources, workshops, support, and community participation could work together within one coherent experience."
                tone="tinted"
              >
                <Reveal className="max-w-[60ch] text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                  Rather than committing immediately to one layout, I explored different approaches
                  to navigation, information hierarchy, page structure, calls to action, and content
                  organization.
                </Reveal>

                <Reveal className="mt-6 rounded-2xl border border-primary/30 bg-accent/50 p-5 sm:mt-8 sm:rounded-3xl sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    My Design Ownership — individual contribution
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Low-Fidelity Wireframes",
                      "Mid-Fidelity Wireframes",
                      "Page Structure",
                      "Content Hierarchy",
                      "Navigation Exploration",
                      "Interaction Flows",
                    ].map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <div className="mt-10 sm:mt-14">
                  <h3 className="text-lg text-foreground sm:text-2xl">Early Explorations</h3>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Low-fidelity wireframes
                  </p>
                  <div className="mt-4 sm:mt-5">
                    <Gallery
                      ratio="aspect-[4/3]"
                      items={[
                        { label: "LOW-FI WIREFRAME", caption: "Homepage" },
                        { label: "LOW-FI WIREFRAME", caption: "Registration" },
                        { label: "LOW-FI WIREFRAME", caption: "Workshops" },
                        { label: "LOW-FI WIREFRAME", caption: "Resources" },
                      ]}
                    />
                  </div>
                </div>

                <div className="mt-10 sm:mt-14">
                  <h3 className="text-lg text-foreground sm:text-2xl">Developing the Direction</h3>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Mid-fidelity wireframes
                  </p>
                  <div className="mt-4 sm:mt-5">
                    <Gallery
                      ratio="aspect-[4/3]"
                      frame="browser"
                      items={[
                        { label: "MID-FI WIREFRAME", caption: "Event discovery" },
                        { label: "MID-FI WIREFRAME", caption: "Registration" },
                        { label: "MID-FI WIREFRAME", caption: "Workshops & training" },
                        { label: "MID-FI WIREFRAME", caption: "Get involved" },
                      ]}
                    />
                  </div>
                </div>

                <p className="mt-8 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                  The goal wasn’t to make every page look the same—it was to find a structure that
                  could make a complex, multi-audience experience feel understandable.
                </p>
              </SectionShell>

              {/* 10 — EVALUATION */}
              <SectionShell
                id="evaluation"
                number="10"
                title="Taking the direction back to stakeholders"
                intro="Before moving toward the final prototype, the wireframes were brought back to stakeholders for feedback on usability, functionality, engagement, and accessibility."
              >
                <Reveal className="max-w-[60ch] text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                  Different stakeholders reviewed areas most relevant to their roles—for example,
                  parents and teachers focused on registration and resources, while community
                  partners considered volunteering, outreach, and involvement.
                </Reveal>
                <Reveal className="mt-6 sm:mt-8">
                  <Placeholder
                    label="CRITIQUE BOARD"
                    ratio="aspect-[4/3] sm:aspect-[16/9]"
                    caption="Stakeholder critique of the wireframes and prototype."
                  />
                </Reveal>
              </SectionShell>

              {/* 11 — ITERATION */}
              <SectionShell id="iteration" number="11" title="Feedback became design changes">
                <ul className="space-y-5 sm:space-y-6">
                  {ITERATIONS.map((it, i) => (
                    <Reveal as="li" key={it.n} delay={i * 60}>
                      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-8">
                        <h3 className="text-base text-foreground sm:text-lg">
                          <span className="text-primary">{it.n}</span> — {it.title}
                        </h3>
                        <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-[1fr_1fr_1.2fr] lg:items-start">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              Feedback
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-foreground">
                              {it.feedback}
                            </p>
                          </div>
                          <div className="rounded-2xl bg-accent/50 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                              Change
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-foreground">
                              {it.change}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <Placeholder
                              label="BEFORE ITERATION"
                              ratio="aspect-[3/4] sm:aspect-[4/3]"
                              caption="Before"
                            />
                            <Placeholder
                              label="AFTER ITERATION"
                              ratio="aspect-[3/4] sm:aspect-[4/3]"
                              caption="After"
                            />
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </SectionShell>

              {/* 12 — FINAL DIRECTION */}
              <SectionShell
                id="final-direction"
                number="12"
                title="A central place to discover, prepare, and participate"
                tone="tinted"
              >
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {EXPERIENCE_LABELS.map((e, i) => (
                    <Reveal
                      as="li"
                      key={e.title}
                      delay={i * 40}
                      className="rounded-2xl border border-border bg-card px-5 py-4 shadow-soft"
                    >
                      <p className="text-sm font-semibold text-foreground">{e.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{e.body}</p>
                    </Reveal>
                  ))}
                </ul>

                <Reveal className="mt-8 sm:mt-10">
                  <Placeholder
                    label="FINAL PROTOTYPE"
                    frame="browser"
                    ratio="aspect-[4/3] sm:aspect-[16/10]"
                    caption="Primary prototype screen."
                  />
                </Reveal>

                <div className="mt-6">
                  <Gallery
                    columns={3}
                    ratio="aspect-[4/3]"
                    items={[
                      { label: "FINAL PROTOTYPE", caption: "Registration" },
                      { label: "FINAL PROTOTYPE", caption: "Workshops" },
                      { label: "FINAL PROTOTYPE", caption: "Get involved" },
                    ]}
                  />
                </div>
              </SectionShell>

              {/* 13 — COMMUNICATING */}
              <SectionShell
                id="communicating"
                number="13"
                title="From screens to a shared direction"
              >
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
                  <Reveal className="max-w-[60ch]">
                    <p className="text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                      At the final showcase, I led the walkthrough of the wireframes and interactive
                      prototype, explaining how the experience worked and communicating the
                      reasoning behind key design decisions to stakeholders and attendees.
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground sm:text-base">
                      Designing the experience was only one part of the work—being able to
                      communicate why it worked mattered too.
                    </p>
                  </Reveal>
                  <Reveal delay={70}>
                    <Placeholder
                      label="SHOWCASE ARTIFACT"
                      ratio="aspect-[4/3]"
                      caption="Showcase photograph or presentation visual."
                    />
                  </Reveal>
                </div>
              </SectionShell>

              {/* 14 — OUTCOME */}
              <SectionShell id="outcome" number="14" title="What we delivered">
                <ul className="grid gap-4 sm:grid-cols-3">
                  {OUTCOMES.map((o, i) => (
                    <Reveal
                      as="li"
                      key={o.title}
                      delay={i * 60}
                      className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:rounded-3xl sm:p-7"
                    >
                      <h3 className="text-[0.95rem] font-semibold text-foreground sm:text-base">
                        {o.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                    </Reveal>
                  ))}
                </ul>
                <Reveal className="mt-5 rounded-2xl border border-border bg-secondary/60 p-5 sm:mt-6 sm:rounded-3xl sm:p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Our responsibility ended at the prototype and design-direction stage. Finalizing
                    the challenge theme and timeframe, developing the production website, and
                    recruiting volunteers remained future steps for the project stakeholders.
                  </p>
                </Reveal>
              </SectionShell>

              {/* 15 — REFLECTION */}
              <SectionShell
                id="reflection"
                number="15"
                title="What this project changed in my process"
              >
                <div className="max-w-[60ch] space-y-4">
                  <Reveal>
                    <p className="text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                      This project taught me that designing for young users means understanding the
                      ecosystem around them. Students may be the primary participants, but parents,
                      teachers, mentors, and community organizations can influence whether
                      participation feels possible in the first place.
                    </p>
                  </Reveal>
                  <Reveal delay={60}>
                    <p className="text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                      It also changed how I think about the relationship between research and
                      design. Rather than treating interviews, surveys, wireframes, and feedback as
                      separate deliverables, I learned to use each stage to question and strengthen
                      the next.
                    </p>
                  </Reveal>
                </div>

                <Reveal className="mt-12 rounded-[2rem] border border-primary/30 bg-accent/50 p-8 sm:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    My biggest takeaway
                  </p>
                  <p className="mt-4 max-w-3xl font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                    Good UX isn’t just about making participation easy. It’s about understanding
                    what people need in order to feel ready to participate at all.
                  </p>
                </Reveal>
              </SectionShell>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-14">
          <div className="container-page flex flex-wrap items-center justify-between gap-6">
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All Projects
            </Link>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-border bg-card px-6 py-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="text-sm text-foreground">
                Next Case Study — <span className="font-medium">{next.title}</span>
              </span>
              <ArrowRight
                className="size-4 text-teal transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
          <span className="sr-only">Case study: {project.title}</span>
        </div>
      </article>
    </>
  );
}
