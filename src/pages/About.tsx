import { SEO } from "../components/layout/SEO";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SpectrumDivider } from "../components/ui/SpectrumDivider";
import { story, whatIDo, howIWork, highlights } from "../content/about";
import { owner } from "../content/site";

export default function About() {
  return (
    <>
      <SEO title="About" />

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-8 grid md:grid-cols-[220px_1fr] gap-10">
        <div className="flex flex-col items-start gap-4">
          <div
            className="w-40 h-40 rounded-full border-2 flex items-center justify-center overflow-hidden"
            style={{ borderColor: "var(--signal)" }}
          >
            <div className="w-full h-full bg-surface-2 flex items-center justify-center font-display text-text-faint text-sm text-center px-2">
              <img  src="../public/pic.jpeg"/>
            </div>
          </div>
          <Button href={owner.cvFile} variant="secondary" className="w-full text-center">
            Download CV
          </Button>
        </div>

        <div>
          <SectionHeader title="About" />
          <div className="space-y-4 max-w-2xl text-text-muted leading-relaxed">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SpectrumDivider />
      </div>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-14">
        <SectionHeader title="What I do" />
        <div className="grid sm:grid-cols-3 gap-5">
          {whatIDo.map((block) => (
            <Card key={block.title}>
              <h3 className="font-display font-semibold text-text mb-2">{block.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{block.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-14">
        <SectionHeader title="How I work" />
        <div className="grid sm:grid-cols-3 gap-5">
          {howIWork.map((block) => (
            <Card key={block.title}>
              <h3 className="font-display font-semibold text-text mb-2">{block.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{block.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <SectionHeader title="Certifications & education" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-baseline gap-3 border border-border rounded-md px-4 py-3 bg-surface"
            >
              <span className="font-mono text-xs text-signal shrink-0">{h.label}</span>
              <span className="text-text-muted text-sm">{h.value}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
