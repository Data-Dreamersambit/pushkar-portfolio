import { motion, type Variants } from "framer-motion";
import { SEO } from "../components/layout/SEO";
import { HeroScene } from "../components/three/HeroScene";
import { Button } from "../components/ui/Button";
import { SpectrumDivider } from "../components/ui/SpectrumDivider";
import { owner, heroCopy } from "../content/site";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Home() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.09, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <>
      <SEO title="Home" description={heroCopy.valueStatement} />

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-sm text-signal mb-4">
            {owner.specialisation}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text leading-[1.05]"
          >
            {owner.name === "[Pushkar Kumar]" ? "Pushkar Kumar" : owner.name}
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-lg text-text-muted font-body">
            {owner.title} · {owner.location}
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-lg text-text-muted leading-relaxed">
            {heroCopy.valueStatement}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button to={heroCopy.primaryCta.to} variant="primary">
              {heroCopy.primaryCta.label}
            </Button>
            <Button to={heroCopy.secondaryCta.to} variant="secondary">
              {heroCopy.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative h-[320px] sm:h-[420px] lg:h-[500px] rounded-xl overflow-hidden border border-border bg-surface"
        >
          <HeroScene />
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SpectrumDivider />
      </div>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {heroCopy.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl font-semibold text-text">{stat.value}</p>
            <p className="mt-1 text-text-muted text-sm">{stat.label}</p>
          </div>
        ))}
      </section>
    </>
  );
}
