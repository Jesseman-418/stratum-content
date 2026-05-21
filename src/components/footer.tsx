import Link from "next/link";
import { CALENDLY_URL, EMAIL, STRATUM_STUDIO_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="hairline-top px-6 lg:px-10 py-14 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col gap-[3px]">
                <span className="block h-[2px] w-5 bg-foreground" />
                <span className="block h-[2px] w-5 bg-foreground/70" />
                <span className="block h-[2px] w-5 bg-foreground/40" />
              </div>
              <span className="text-mono text-sm tracking-[0.2em]">
                STRATUM <span className="text-muted-2">·</span>{" "}
                <span className="text-accent">CONTENT</span>
              </span>
            </div>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Done-for-you ghostwriting via AI delivery. Voice trained on your
              last 30 posts. Jesseman edits every draft.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="label">Studio</span>
            <a href="#tiers" className="text-sm hover:text-accent transition-colors">
              Tiers
            </a>
            <a href="#how" className="text-sm hover:text-accent transition-colors">
              How
            </a>
            <a href="#operator" className="text-sm hover:text-accent transition-colors">
              Operator
            </a>
            <a href="#stories" className="text-sm hover:text-accent transition-colors">
              Stories
            </a>
            <Link
              href={STRATUM_STUDIO_URL}
              className="text-sm hover:text-accent transition-colors"
            >
              Stratum AIOS →
            </Link>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="label">Signal</span>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm hover:text-accent transition-colors break-all"
            >
              {EMAIL}
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Book a 15-min call →
            </a>
            <span className="text-sm text-muted">Chennai · UTC+5:30</span>
            <span className="text-sm text-muted">Reply window &lt; 24h</span>
          </div>
        </div>

        <div className="hairline-top pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            © {new Date().getFullYear()} Stratum Content · A studio for solo operators
          </span>
          <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            v1.0 · Signed Jesseman
          </span>
        </div>
      </div>
    </footer>
  );
}
