"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroV2() {
  return (
    <section
      id="cover"
      className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-6 lg:px-10 v2-rule-b"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Masthead bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="v2-thick-rule-t v2-thick-rule-b py-3 flex flex-wrap items-baseline justify-between gap-4 mb-12 md:mb-20"
        >
          <span className="v2-folio">Vol. I · No. 01</span>
          <span className="v2-folio hidden md:inline">
            Published from Chennai · Established 2026
          </span>
          <span className="v2-folio">A studio book for operators</span>
        </motion.div>

        {/* Headline grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-6 lg:border-r lg:pr-6 v2-rule"
          >
            <span className="v2-mono text-[10.5px] tracking-[0.18em] uppercase">
              The Feature
            </span>
            <span className="v2-folio">/01</span>
            <span className="v2-folio hidden lg:block mt-auto">
              Cover story · 2,200 words inside
            </span>
          </motion.div>

          <div className="col-span-12 lg:col-span-10">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease, delay: 0.15 }}
              className="v2-display text-[clamp(3rem,10vw,9rem)] font-medium"
            >
              Your voice,
              <br />
              <span className="italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}>
                written by hand—
              </span>
              <br />
              <span className="v2-accent-text">drafted by machine.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="mt-12 grid md:grid-cols-12 gap-6 md:gap-10"
            >
              <p className="md:col-span-7 v2-body text-lg md:text-xl text-[color:var(--v2-ink-2)] max-w-2xl">
                Stratum Content is a studio that ghostwrites for founders the way
                an editor ghostwrites for a novelist. A voice model is trained
                on your last thirty posts. Drafts run weekly. Every line that
                ships passes through the editor&apos;s desk by hand. You read
                the proof. You hit publish.
              </p>

              <div className="md:col-span-5">
                <div className="v2-rule-t pt-5 flex flex-col gap-3">
                  <span className="v2-folio">In this issue</span>
                  <ol className="v2-serif text-base space-y-1.5">
                    <li>I · Editor&apos;s note from Jesseman</li>
                    <li>II · The case against raw AI</li>
                    <li>III · How a draft is made</li>
                    <li>IV · Editions &amp; subscriptions</li>
                    <li>V · Features from the studio desk</li>
                    <li>VI · Subscribe / Hold a desk</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.65 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="#subscribe"
                className="group v2-ink-fill v2-mono text-[11px] tracking-[0.18em] uppercase px-6 py-4 hover:opacity-90 transition-opacity"
              >
                Request a free rewrite{" "}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#editions"
                className="v2-mono text-[11px] tracking-[0.18em] uppercase border border-current px-6 py-4 hover:bg-[color:var(--v2-ink)] hover:text-[color:var(--v2-paper)] transition-colors"
              >
                Read the editions
              </a>
              <span className="v2-folio">No annual lock · 30-day notice</span>
            </motion.div>
          </div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="mt-20 md:mt-28 v2-rule-t v2-rule-b py-5 overflow-hidden"
        >
          <div className="flex gap-12 v2-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-12 v2-serif text-2xl md:text-3xl italic"
                style={{ fontVariationSettings: '"opsz" 60, "SOFT" 80' }}
              >
                <span>Voice-trained.</span>
                <span className="v2-accent-text">·</span>
                <span>Founder-edited.</span>
                <span className="v2-accent-text">·</span>
                <span>Approved in twenty-four hours.</span>
                <span className="v2-accent-text">·</span>
                <span>Shipped on Sunday.</span>
                <span className="v2-accent-text">·</span>
                <span>One studio, twelve desks.</span>
                <span className="v2-accent-text">·</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
