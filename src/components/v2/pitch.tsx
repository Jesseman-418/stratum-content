"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const cases = [
  {
    label: "Against",
    title: "Raw AI",
    body:
      "Generic cadence. Hooks that average a billion posts. Punctuation that screams algorithm. Audiences feel it in under three seconds. Reach collapses. Trust follows.",
  },
  {
    label: "Against",
    title: "Junior ghosts",
    body:
      "Cheap on the invoice, expensive on the calendar. Mid-quality drafts that need three rounds of edits. You become the editor of your own ghostwriter. The hours come back.",
  },
  {
    label: "For",
    title: "AI delivery",
    body:
      "A studio trains a small model on your voice. The model proposes. The editor disposes. Twelve clients per editor instead of five — same skill, two-point-four times the throughput. Service-business retainers, software margins.",
  },
];

export function PitchV2() {
  return (
    <section
      id="pitch"
      className="relative py-24 md:py-36 px-6 lg:px-10 v2-paper-soft v2-rule-b"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-6">
            <span className="v2-mono text-[10.5px] tracking-[0.18em] uppercase">
              Section III
            </span>
            <span className="v2-folio">/03</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-10"
          >
            <span className="v2-folio">The pitch</span>
            <h2 className="v2-display mt-4 text-[clamp(2.25rem,6vw,5.25rem)] font-medium max-w-5xl">
              The case against raw AI,{" "}
              <span className="italic v2-accent-text">in three counts</span>.
            </h2>
            <p className="mt-8 v2-body text-lg md:text-xl text-[color:var(--v2-ink-2)] max-w-2xl">
              Most studios pick a side: ship raw drafts, or never use the
              machine. The studio book runs a third lane.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-px v2-rule-t v2-rule-b">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={`p-8 md:p-10 flex flex-col gap-5 v2-rule ${
                i < 2 ? "md:border-r" : ""
              }`}
              style={{
                background:
                  c.label === "For" ? "var(--v2-ink)" : "var(--v2-paper-soft)",
                color: c.label === "For" ? "var(--v2-paper)" : "var(--v2-ink)",
                borderRightStyle: "solid",
                borderRightWidth: i < 2 ? "1px" : 0,
                borderRightColor: "var(--v2-rule)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="v2-mono text-[10.5px] tracking-[0.18em] uppercase"
                  style={{
                    color:
                      c.label === "For"
                        ? "var(--v2-accent-2)"
                        : "var(--v2-accent)",
                  }}
                >
                  Count {i + 1} · {c.label}
                </span>
                <span className="v2-folio">0{i + 1}</span>
              </div>
              <h3 className="v2-serif text-3xl md:text-4xl font-medium tracking-tight">
                {c.title}
              </h3>
              <p
                className="v2-body text-[15.5px]"
                style={{
                  color:
                    c.label === "For"
                      ? "rgba(243, 236, 225, 0.78)"
                      : "var(--v2-ink-2)",
                }}
              >
                {c.body}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Math callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-16 md:mt-24 grid md:grid-cols-12 gap-6 md:gap-10 items-end"
        >
          <div className="md:col-span-5">
            <span className="v2-folio">A footnote on margins</span>
            <p className="v2-pullquote mt-4 text-3xl md:text-4xl leading-[1.18]">
              &ldquo;Solo human ghostwriter — five clients, ten grand a month
              ceiling. Studio with a voice model — twelve clients,{" "}
              <span className="v2-marker">twenty-four grand</span>. Same skill.
              Same niche. Two-point-four times the throughput.&rdquo;
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-px v2-rule-t v2-rule-b">
            {[
              ["5", "Clients · solo human"],
              ["12", "Clients · studio"],
              ["2.4×", "Throughput delta"],
              ["$10K", "Solo ceiling/mo"],
              ["$24K", "Studio ceiling/mo"],
              ["1", "Editor"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="bg-[color:var(--v2-paper)] p-5 flex flex-col gap-1 v2-rule"
                style={{ borderRightStyle: "solid", borderRightWidth: 1 }}
              >
                <span
                  className="v2-serif text-3xl md:text-4xl"
                  style={{ fontVariationSettings: '"opsz" 60' }}
                >
                  {n}
                </span>
                <span className="v2-folio">{l}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
