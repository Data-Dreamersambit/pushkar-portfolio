import { SEO } from "../components/layout/SEO";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TimelineItem } from "../components/ui/TimelineItem";
import { SpectrumDivider } from "../components/ui/SpectrumDivider";
import { roles, education } from "../content/experience";

export default function Experience() {
  return (
    <>
      <SEO title="Experience" description="Roles across FTTH planning, live-network development and network engineering." />

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pt-14 pb-6">
        <SectionHeader title="Experience" description="Chronological, most recent first. Expand a role for the numbers behind it." />
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-10">
        <ol>
          {roles.map((role, i) => (
            <TimelineItem key={role.title + role.start} role={role} isLast={i === roles.length - 1} />
          ))}
        </ol>
      </section>

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SpectrumDivider />
      </div>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-14">
        <SectionHeader title="Education & certifications" />
        <ul className="space-y-3">
          {education.map((e, i) => (
            <li key={i} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border pb-3">
              <span className="text-text font-medium text-sm">{e.label}</span>
              <span className="text-text-faint text-xs font-mono">{e.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
