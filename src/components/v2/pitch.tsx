"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const cases = [
  {
    roman: "I",
    arabic: "01",
    verdict: "Against",
    title: "Raw AI",
    tagline: "Algorithm in the room.",
    body:
      "Generic cadence. Hooks that average a billion posts. Punctuation that screams algorithm. Audiences feel it in under three seconds. Reach collapses. Trust follows.",
    rule: "Indistinguishable from default.",
  },
  {
    roman: "II",
    arabic: "02",
    verdict: "Against",
    title: "Junior ghosts",
    tagline: "Cheap on paper. Expensive on the calendar.",
    body:
      "Mid-quality drafts that need three rounds of edits. You become the editor of your own ghostwriter. The hours come back. The invoice still arrives.",
    rule: "Hidden labour, visible cost.",
  },
  {
    roman: "III",
    arabic: "03",
    verdict: "For",
    title: "AI delivery",
    tagline: "Voice model proposes. Editor disposes.",
    body:
      "A studio trains a small model on your voice. Twelve clients per editor instead of five — same skill, two-point-four times the throughput. Service-business retainers, software margins.",
    rule: "The verdict the studio sells.",
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
            <span className="v2-folio">The pitch · entered into the record</span>
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

        {/* Counts — court docket treatment */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-px v2-rule-t v2-rule-b">
          {cases.map((c, i) => {
            const isFor = c.verdict === "For";
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="relative flex flex-col"
                style={{
                  background: isFor ? "var(--v2-ink)" : "var(--v2-paper)",
                  color: isFor ? "var(--v2-paper)" : "var(--v2-ink)",
                  borderRightStyle: "solid",
                  borderRightWidth: i < 2 ? 1 : 0,
                  borderRightColor: isFor
                    ? "rgba(243, 236, 225, 0.15)"
                    : "var(--v2-rule)",
                }}
              >
                {/* Docket strip — top */}
                <div
                  className="px-8 md:px-10 py-3.5 flex items-center justify-between border-b"
                  style={{
                    borderColor: isFor
                      ? "rgba(243, 236, 225, 0.15)"
                      : "var(--v2-rule)",
                  }}
                >
                  <span
                    className="v2-mono text-[10px] tracking-[0.22em] uppercase"
                    style={{
                      color: isFor ? "var(--v2-accent-2)" : "var(--v2-accent)",
                    }}
                  >
                    Count {c.arabic}
                  </span>
                  <span
                    className="v2-mono text-[10px] tracking-[0.22em] uppercase"
                    style={{
                      color: isFor
                        ? "rgba(243, 236, 225, 0.5)"
                        : "var(--v2-muted)",
                    }}
                  >
                    The verdict · {c.verdict}
                  </span>
                </div>

                {/* Roman numeral display */}
                <div className="px-8 md:px-10 pt-10 md:pt-14 pb-6 flex items-start justify-between gap-6">
                  <span
                    className="v2-serif leading-[0.78] tracking-[-0.04em] block"
                    style={{
                      fontSize: "clamp(7rem, 14vw, 12rem)",
                      fontVariationSettings:
                        '"opsz" 144, "SOFT" 100, "WONK" 1',
                      color: isFor ? "var(--v2-accent-2)" : "var(--v2-accent)",
                      fontStyle: "italic",
                    }}
                  >
                    {c.roman}
                  </span>
                  <span
                    className="v2-mono text-[10px] tracking-[0.22em] uppercase mt-2 text-right"
                    style={{
                      color: isFor
                        ? "rgba(243, 236, 225, 0.4)"
                        : "var(--v2-muted)",
                    }}
                  >
                    Exhibit
                    <br />
                    /{c.arabic}
                  </span>
                </div>

                {/* Title — uppercase tracked-out, distinct from other display heads */}
                <div className="px-8 md:px-10 pb-3">
                  <h3
                    className="font-medium tracking-[0.04em] uppercase"
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                      letterSpacing: "0.18em",
                      color: isFor ? "var(--v2-accent-2)" : "var(--v2-accent)",
                    }}
                  >
                    — {c.title}
                  </h3>
                  <p
                    className="v2-pullquote mt-3 text-2xl md:text-[28px] leading-[1.18]"
                    style={{
                      color: isFor
                        ? "rgba(243, 236, 225, 0.95)"
                        : "var(--v2-ink)",
                    }}
                  >
                    {c.tagline}
                  </p>
                </div>

                {/* Body */}
                <div className="px-8 md:px-10 pb-8 mt-2">
                  <p
                    className="v2-body text-[15.5px] leading-[1.6]"
                    style={{
                      color: isFor
                        ? "rgba(243, 236, 225, 0.75)"
                        : "var(--v2-ink-2)",
                    }}
                  >
                    {c.body}
                  </p>
                </div>

                {/* Rule (footer of card — verdict line) */}
                <div
                  className="mt-auto px-8 md:px-10 py-4 flex items-center justify-between gap-4 border-t"
                  style={{
                    borderColor: isFor
                      ? "rgba(243, 236, 225, 0.15)"
                      : "var(--v2-rule)",
                  }}
                >
                  <span
                    className="v2-mono text-[10px] tracking-[0.18em] uppercase"
                    style={{
                      color: isFor
                        ? "rgba(243, 236, 225, 0.5)"
                        : "var(--v2-muted)",
                    }}
                  >
                    Ruling
                  </span>
                  <span
                    className="v2-serif italic text-sm md:text-base"
                    style={{
                      color: isFor ? "var(--v2-accent-2)" : "var(--v2-ink-2)",
                    }}
                  >
                    {c.rule}
                  </span>
                </div>
              </motion.article>
            );
          })}
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
