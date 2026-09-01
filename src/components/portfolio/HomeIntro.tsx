import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import profilePhoto from "@/assets/krishna-profile.jpg";

export function HomeIntro() {
  return (
    <section className="border-t border-border py-16 sm:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            A little about me
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Design starts with understanding people.
          </h2>

          <div className="relative mt-6 max-w-[16rem]">
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-soft">
              <img
                src={profilePhoto}
                alt="Krishna Pandya — UX Researcher & Designer"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
              />
            </div>
            <p aria-hidden="true" className="annotation mt-3 font-display italic text-primary">
              Hi, I&rsquo;m Krishna &rarr;
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={90}
          className="max-w-[58ch] space-y-4 text-base leading-relaxed text-muted-foreground lg:pt-2"
        >
          <p className="text-foreground font-medium">
            I’m a UX Researcher and UX Designer with a background in Information Technology,
            Software Quality Assurance, and User Experience Design. My approach combines research,
            usability, accessibility, and thoughtful interaction design to create digital
            experiences that are intuitive and inclusive.
          </p>
          <p>
            I enjoy understanding how people think, identifying usability barriers, and translating
            research insights into practical design solutions.
          </p>
          <p className="italic text-muted-foreground">
            Outside of design, I write poetry exploring empathy and healing — shaping a human-first
            mindset in design.
          </p>
          <div className="pt-2">
            <Button asChild variant="outline" className="min-h-11 rounded-full px-6">
              <Link to="/about">More About Me &rarr;</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
