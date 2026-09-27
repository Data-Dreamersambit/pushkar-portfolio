import { useState, type FormEvent } from "react";
import { SEO } from "../components/layout/SEO";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { owner } from "../content/site";
import { submitContactForm } from "../lib/contactSubmit";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string; // honeypot — real users never see or fill this
};

type Errors = Partial<Record<keyof Omit<FormState, "company">, string>>;
type Status = "idle" | "loading" | "success" | "error";

const initialState: FormState = { name: "", email: "", subject: "", message: "", company: "" };

function validate(state: FormState): Errors {
  const errors: Errors = {};
  if (!state.name.trim()) errors.name = "Enter your name.";
  if (!state.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!state.subject.trim()) errors.subject = "Enter a subject.";
  if (!state.message.trim()) {
    errors.message = "Enter a message.";
  } else if (state.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters.";
  }
  return errors;
}

const inputClass =
  "w-full rounded-md bg-surface border border-border-strong px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-signal transition-colors";

export default function Contact() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const field = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((s) => ({ ...s, [key]: e.target.value }));

  const blur = (key: string) => () => setTouched((t) => ({ ...t, [key]: true }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (state.company) {
      // Honeypot tripped — silently pretend success, do nothing further.
      setStatus("success");
      return;
    }

    const validationErrors = validate(state);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await submitContactForm({
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,
      });
      setStatus("success");
      setState(initialState);
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <SEO title="Contact" description="Get in touch about FTTHplanning, development, or a role." />

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pt-14 pb-6">
        <SectionHeader title="Contact" description="Open to RF/RAN engineering roles and consulting engagements." />
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 grid md:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-6">
          <div>
            <p className="text-text-faint text-xs font-mono uppercase-none mb-1">Location</p>
            <p className="text-text">{owner.location}</p>
          </div>
          <div>
            <p className="text-text-faint text-xs font-mono mb-1">Availability</p>
            <p className="text-text">Open to new roles and short-term consulting.</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href={`mailto:${owner.email}`} className="text-signal hover:text-signal-strong text-sm">
              {owner.email}
            </a>
            <a href={owner.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-signal text-sm">
              LinkedIn profile
            </a>
            <a href={owner.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-signal text-sm">
              GitHub profile
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot — hidden from sighted and screen-reader users, bots fill it */}
          <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={state.company}
              onChange={field("company")}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm text-text-muted mb-1.5">
              Name
            </label>
            <input
              id="name"
              className={inputClass}
              value={state.name}
              onChange={field("name")}
              onBlur={blur("name")}
              aria-invalid={!!(touched.name && errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {touched.name && errors.name && (
              <p id="name-error" className="text-warn text-xs mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-text-muted mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={inputClass}
              value={state.email}
              onChange={field("email")}
              onBlur={blur("email")}
              aria-invalid={!!(touched.email && errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <p id="email-error" className="text-warn text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm text-text-muted mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              className={inputClass}
              value={state.subject}
              onChange={field("subject")}
              onBlur={blur("subject")}
              aria-invalid={!!(touched.subject && errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {touched.subject && errors.subject && (
              <p id="subject-error" className="text-warn text-xs mt-1">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-text-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={inputClass}
              value={state.message}
              onChange={field("message")}
              onBlur={blur("message")}
              aria-invalid={!!(touched.message && errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {touched.message && errors.message && (
              <p id="message-error" className="text-warn text-xs mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send message"}
          </Button>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="text-signal text-sm">Message sent. I'll reply within a couple of days.</p>
            )}
            {status === "error" && (
              <p className="text-warn text-sm">
                Something went wrong sending that — please email {owner.email} directly.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
