import { MessageSquareQuote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Testimonials() {
  return (
    <section className="scroll-mt-24 border-t border-border bg-secondary/30 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="Recommendations &amp; Feedback"
          intro="Professional references from mentors, team members, and academic stakeholders are available upon request."
        />

        <Reveal>
          <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-8 text-center shadow-soft">
            <MessageSquareQuote className="mx-auto size-8 text-primary" aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-medium text-foreground">
              References &amp; Project Endorsements
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Real client and supervisor recommendations will be added here. Feel free to connect
              directly via LinkedIn or email to request professional references.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
