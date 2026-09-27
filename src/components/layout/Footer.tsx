import { owner } from "../../content/site";
import { SpectrumDivider } from "../ui/SpectrumDivider";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-6">
        <SpectrumDivider />
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-display text-text font-medium">{owner.name}</p>
          <p className="text-text-faint text-sm font-mono">{owner.location}</p>
        </div>
        <div className="flex gap-5 text-sm">
          <a href={`mailto:${owner.email}`} className="text-text-muted hover:text-signal transition-colors">
            Email
          </a>
         
           
        </div>
        <p className="text-text-faint text-xs font-mono">© {year}</p>
      </div>
    </footer>
  );
}
