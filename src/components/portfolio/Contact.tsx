import { useState, type FormEvent } from "react";
import { FileText, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, SectionHeading } from "./Reveal";
import { EMAIL, LINKEDIN_LABEL, LINKEDIN_URL, LOCATION, PHONE, RESUME_PATH } from "@/data/profile";

const details = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Linkedin, label: "LinkedIn", value: LINKEDIN_LABEL, href: LINKEDIN_URL },
  { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE}` },
  { icon: FileText, label: "Resume", value: "Download PDF", href: RESUME_PATH },
  { icon: MapPin, label: "Location", value: LOCATION },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setSending(true);
    const subject = encodeURIComponent(`UX Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client", {
      description: `Message pre-filled to send directly to ${EMAIL}.`,
    });
    form.reset();
    setSending(false);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-secondary/30 py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build meaningful experiences together."
          intro="Whether you're looking for UX research, UX design, accessibility work, or simply want to start a conversation, I'd love to hear from you."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <ul className="space-y-3">
              {details.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-medium text-foreground">
                        {value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lift"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about your project, role, or message."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="mt-7 min-h-12 w-full rounded-full sm:w-auto sm:px-8"
              >
                <Send className="mr-2 size-4" aria-hidden="true" />
                Send Message &rarr;
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                This form prepares a direct message to{" "}
                <strong className="text-foreground">{EMAIL}</strong>.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
