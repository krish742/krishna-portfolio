import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { EMAIL, LINKEDIN_LABEL, LINKEDIN_URL, LOCATION, PHONE, RESUME_PATH } from "@/data/profile";

export function AboutConnect() {
  return (
    <section className="border-t border-border py-16 sm:py-24">
      <div className="container-page grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Resume</p>
            <h2 className="mt-4 font-display text-2xl leading-tight text-foreground sm:text-3xl">
              Professional Resume
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
              Detailed experience in UX research, usability testing, wireframing, prototyping, and
              accessibility compliance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-h-12 rounded-full px-6">
                <a href={RESUME_PATH} download>
                  <Download className="mr-2 size-4" aria-hidden="true" />
                  Download Resume &darr;
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full px-6">
                <Link to="/resume">View Online Resume &rarr;</Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="h-full rounded-3xl border border-border bg-secondary/30 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Connect
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="size-4 text-primary" aria-hidden="true" />
                  {LINKEDIN_LABEL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {PHONE}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {LOCATION}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
