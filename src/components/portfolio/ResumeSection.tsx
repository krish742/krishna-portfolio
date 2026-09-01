import { Download, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { RESUME_PATH } from "@/data/profile";
import { Reveal } from "./Reveal";

const highlights = [
  "UX Researcher | UX Designer — Ontario, Canada",
  "Post-Graduate Certificate in User Experience Design (St. Lawrence College)",
  "Post-Graduate Cert. in Software Quality Assurance (Conestoga College)",
  "Bachelor of Engineering in Information & Technology (GTU)",
  "Certified Scrum Master (CSM) — Scrum Alliance",
];

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card px-7 py-12 shadow-lift sm:px-14 sm:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Official Resume
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl">
                  Download or View Professional Resume
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                  Complete overview of professional experience, academic client projects, education,
                  certifications, and technical competencies.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="min-h-12 rounded-full px-7">
                    <a href={RESUME_PATH} download>
                      <Download className="mr-2 size-4" aria-hidden="true" />
                      Download Resume &darr;
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-h-12 rounded-full border-border px-6 hover:bg-secondary"
                  >
                    <Link to="/contact">Get in Touch &rarr;</Link>
                  </Button>
                </div>
              </div>

              <ul className="space-y-3 rounded-3xl border border-border bg-secondary/30 p-6 sm:p-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
