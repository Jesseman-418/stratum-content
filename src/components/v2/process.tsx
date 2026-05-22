"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stages = [
  {
    n: "I",
    title: "The reading",
    sub: "Days 1–3",
    body:
      "We pull your last thirty published posts. We catalogue voice — sentence length, opening device, line-break habit, your favourite words and the ones you never use. The model is trained on you, not on the internet.",
  },
  {
    n: "II",
    title: "The proofs",
    sub: "Day 4–6 of week one",
    body:
      "First week of drafts run through the studio. Hooks, mids, payoffs, CTAs — labelled per beat. You read the proofs. We tune the model on every red mark you make. By week two it is indistinguishable.",
  },
  {
    n: "III",
    title: "The calendar",
    sub: "Every Sunday",
    body:
      "A Notion page lands in your inbox with the week ahead. You approve, edit, or send back. Approved posts go on the schedule. The studio ships. You hit publish.",
  },
  {
    n: "IV",
    title: "The standing edit",
    sub: "Continuous",
    body:
      "Every post passes the editor&apos;s desk before it leaves the studio. Owen Rensland&apos;s rule — never ship raw AI. The edit pass is the differentiator. Anyone can run a prompt; few can finish a draft.",
  },
];

export function ProcessV2() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-36 px-6 lg:px-10 v2-rule-b"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-6">
            <span className="v2-mono text-[10.5px] tracking-[0.18em] uppercase">
              Section IV
            </span>
            <span className="v2-folio">/04</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-10"
          >
            <span className="v2-folio">How a draft is made</span>
            <h2 className="v2-display mt-4 text-[clamp(2.25rem,6vw,5rem)] font-medium max-w-5xl">
              Four stages,{" "}
              <span className="italic v2-accent-text">one editor</span>, every
              week.
            </h2>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-px v2-rule-t v2-rule-b">
          {stages.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease }}
              className="p-8 md:p-10 flex flex-col gap-6 v2-paper-soft"
              style={{
                borderRightStyle: "solid",
                borderRightWidth: i < 3 ? 1 : 0,
                borderRightColor: "var(--v2-rule)",
              }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="v2-serif text-6xl md:text-7xl v2-accent-text"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  {s.n}
                </span>
                <span className="v2-folio">{s.sub}</span>
              </div>
              <h3 className="v2-serif text-2xl md:text-3xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p
                className="v2-body text-[15.5px] text-[color:var(--v2-ink-2)]"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </motion.article>
          ))}
        </div>

        {/* Standing rules */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 md:mt-20 grid md:grid-cols-12 gap-6 md:gap-10 items-start"
        >
          <span className="v2-folio md:col-span-3">Standing rules</span>
          <ul className="md:col-span-9 grid sm:grid-cols-2 gap-x-10 gap-y-3 v2-body text-base text-[color:var(--v2-ink-2)]">
            <li>— Sunday delivery for the week ahead.</li>
            <li>— Twenty-four hour client approval window.</li>
            <li>— Thirty-day cancellation, no annual lock.</li>
            <li>— PayPal Invoice on the call. Work starts in 24 hours.</li>
            <li>— Founder edit on every draft. No juniors.</li>
            <li>— Voice profile re-tuned every 90 days.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
