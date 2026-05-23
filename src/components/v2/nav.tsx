"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/constants";

const sections = [
  { label: "Editor's note", href: "#editors-note" },
  { label: "The pitch", href: "#pitch" },
  { label: "Process", href: "#process" },
  { label: "Editions", href: "#editions" },
  { label: "Features", href: "#features" },
  { label: "Subscribe", href: "#subscribe" },
];

export function NavV2() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 v2-paper-soft v2-rule-b backdrop-blur-md"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#cover" className="flex items-center gap-3">
          <img
            src="/stratum-content-mark-knockout.svg"
            alt=""
            aria-hidden="true"
            className="h-7 w-7"
          />
          <span className="v2-serif text-xl font-medium tracking-tight">
            Stratum<span className="v2-accent-text">.</span>
          </span>
          <span className="v2-folio">Content · Issue 01</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="v2-mono text-[10.5px] tracking-[0.16em] uppercase text-[color:var(--v2-ink-2)] hover:text-[color:var(--v2-accent)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="v2-mono text-[10.5px] tracking-[0.16em] uppercase border border-current px-3 py-1.5 hover:bg-[color:var(--v2-ink)] hover:text-[color:var(--v2-paper)] transition-colors"
        >
          Book a desk →
        </a>
      </div>
    </motion.header>
  );
}
