import { motion } from "framer-motion";
import { SEO } from "../components/layout/SEO";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { SignalBars } from "../components/ui/SignalBars";
import { skillCategories, tools } from "../content/skills";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <>
      <SEO title="Skills" description="Radio, core, transport and tooling skills across LTE and 5G NR." />

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-6">
        <SectionHeader
          title="Skills"
          description="Grouped the way the job actually splits: radio, core and transport, the tools that make the work possible, and the standards underneath it."
        />
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 space-y-10">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: Math.min(ci * 0.05, 0.2) }}
          >
            <Card>
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                <h3 className="font-display text-xl font-semibold text-text">{cat.category}</h3>
              </div>
              <p className="text-text-faint text-sm mb-5">{cat.note}</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-4">
                    <span className="text-text-muted text-sm">{skill.name}</span>
                    <SignalBars level={skill.level} label={skill.name} />
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <SectionHeader title="Tools I use" />
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      </section>
    </>
  );
}
