import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CheckCircle2, UserPlus, AlertCircle, ArrowRight } from "lucide-react";

interface FormErrors {
  fullName?: string;
  email?: string;
  agree?: string;
}

const title = "Sign Up — Jr. Innovation Challenge";
const description =
  "Register as a participant, student team, mentor, or educator in the Kingston Jr. Innovation Challenge.";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/signup" }],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    role: "student",
    organization: "",
    track: "community",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formState.fullName.trim()) errs.fullName = "Please enter your full name";
    if (!formState.email.trim() || !formState.email.includes("@")) {
      errs.email = "Please enter a valid email address";
    }
    if (!formState.agree) errs.agree = "You must agree to the program terms to proceed";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="py-12 sm:py-20">
        <div className="container-page max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <UserPlus className="size-3.5" aria-hidden="true" />
              Registration Form
            </span>

            <h1 className="mt-4 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Join the Jr. Innovation Challenge
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Complete the form below to sign up as a participant, mentor, or educator in Kingston,
              Ontario.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center animate-in fade-in duration-300">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="size-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  Registration Demo Submitted!
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you, <strong className="text-foreground">{formState.fullName}</strong>. This
                  is a frontend demo state confirming validation.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button asChild size="sm" className="rounded-full">
                    <Link to="/resources">Explore Resources</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link to="/workshops">View Workshops</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
              >
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="rounded-xl"
                  />
                  {errors.fullName ? (
                    <p className="flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle className="size-3" aria-hidden="true" />
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g. alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="rounded-xl"
                  />
                  {errors.email ? (
                    <p className="flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle className="size-3" aria-hidden="true" />
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                {/* Role selection */}
                <div className="space-y-2">
                  <Label htmlFor="role">I am participating as a:</Label>
                  <select
                    id="role"
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="student">Student Participant (Ages 10–18)</option>
                    <option value="parent">Parent / Guardian</option>
                    <option value="teacher">Teacher / Educator</option>
                    <option value="mentor">Community Mentor / Volunteer</option>
                  </select>
                </div>

                {/* School / Organization */}
                <div className="space-y-2">
                  <Label htmlFor="organization">School or Organization (Optional)</Label>
                  <Input
                    id="organization"
                    type="text"
                    placeholder="e.g. Kingston High School or BGC Southeast"
                    value={formState.organization}
                    onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                    className="rounded-xl"
                  />
                </div>

                {/* Preferred Track */}
                <div className="space-y-2">
                  <Label htmlFor="track">Topic Track of Interest</Label>
                  <select
                    id="track"
                    value={formState.track}
                    onChange={(e) => setFormState({ ...formState, track: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="community">Civic &amp; Community Improvement</option>
                    <option value="environment">Environmental Sustainability</option>
                    <option value="youth-access">Youth Access &amp; Recreation</option>
                    <option value="tech-innovation">Technology &amp; Digital Accessibility</option>
                  </select>
                </div>

                {/* Agreement */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formState.agree}
                      onChange={(e) => setFormState({ ...formState, agree: e.target.checked })}
                      className="mt-1 size-4 rounded border-input text-primary focus:ring-primary"
                    />
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      I agree to receive challenge updates and event guidelines for the Kingston Jr.
                      Innovation Challenge.
                    </span>
                  </label>
                  {errors.agree ? (
                    <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle className="size-3" aria-hidden="true" />
                      {errors.agree}
                    </p>
                  ) : null}
                </div>

                <Button type="submit" size="lg" className="w-full min-h-12 rounded-full">
                  Complete Registration
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Already registered?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-foreground underline hover:text-primary"
                  >
                    Sign in here
                  </Link>
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
