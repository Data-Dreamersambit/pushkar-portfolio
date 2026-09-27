import { SEO } from "../components/layout/SEO";
import { Button } from "../components/ui/Button";
import { SpectrumDivider } from "../components/ui/SpectrumDivider";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-24 text-center">
        <p className="font-mono text-signal text-sm mb-3">No signal on this frequency</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-text mb-4">
          404 — Page not found
        </h1>
        <p className="text-text-muted max-w-md mx-auto mb-8">
          The page you're looking for has moved, been renamed, or never existed on this network.
        </p>
        <div className="max-w-xs mx-auto mb-8">
          <SpectrumDivider />
        </div>
        <Button to="/">Back to home</Button>
      </section>
    </>
  );
}
