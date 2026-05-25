"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const editions = [
  {
    n: "I",
    name: "Lite",
    tag: "Single platform · founder shows up",
    price: "$1,500",
    cadence: "per month",
    setup: "$500 onboarding",
    setupNote: "Voice profile + first week of proofs",
    spec: [
      "4 posts / week on 1 platform",
      "Voice profile from your last 30 posts",
      "Sunday delivery · 24-hour approval window",
      "Founder edit on every draft",
      "PayPal invoice · onboard in 24 hours",
    ],
    fit: "$5K–$30K/mo operators",
  },
  {
    n: "II",
    name: "Operator",
    tag: "Two platforms · founder publishes everywhere",
    price: "$3,000",
    cadence: "per month",
    setup: "$1,000 onboarding",
    setupNote: "Voice profile + brand sheet + 2 weeks of proofs",
    starred: true,
    spec: [
      "8 posts / week on 2 platforms",
      "1 long-form essay per month",
      "3 Instagram stories per week",
      "Repurposing pipeline (post → carousel → thread)",
      "Founder edit on every draft",
    ],
    fit: "$30K–$150K/mo operators",
  },
  {
    n: "III",
    name: "Studio",
    tag: "Three platforms · the brand becomes a publication",
    price: "$7,500",
    cadence: "per month · or $40K × 6 upfront",
    setup: "$2,500 onboarding",
    setupNote: "Deep voice training + content audit + 30-day pilot",
    spec: [
      "12+ posts / week on 3 platforms",
      "2 long-form essays per month",
      "Newsletter (write + ship)",
      "Full repurposing across formats",
      "Monthly analytics + voice tuning",
    ],
    fit: "$150K+/mo, agencies, SaaS founders",
  },
];

export function EditionsV2() {
  return (
    <section
      id="editions"
      className="relative py-24 md:py-36 px-6 lg:px-10 v2-paper-soft v2-rule-b"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-6">
            <span className="v2-mono text-[10.5px] tracking-[0.18em] uppercase">
              Section V
            </span>
            <span className="v2-folio">/05</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-10"
          >
            <span className="v2-folio">Editions &amp; subscriptions</span>
            <h2 className="v2-display mt-4 text-[clamp(2.25rem,6vw,5rem)] font-medium max-w-5xl">
              Three editions of the{" "}
              <span className="italic v2-accent-text">studio book</span>.
            </h2>
            <p className="mt-8 v2-body text-lg md:text-xl text-[color:var(--v2-ink-2)] max-w-2xl">
              Founding rate holds for the first three subscribers per edition.
              No annual lock. Thirty-day cancellation notice. The desk is yours
              for as long as you keep it.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 grid lg:grid-cols-3 gap-px v2-rule-t v2-rule-b">
          {editions.map((e, i) => (
            <motion.article
              key={e.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="p-8 md:p-10 flex flex-col gap-6 relative"
              style={{
                background: e.starred
                  ? "var(--v2-ink)"
                  : "var(--v2-paper)",
                color: e.starred ? "var(--v2-paper)" : "var(--v2-ink)",
                borderRightStyle: "solid",
                borderRightWidth: i < 2 ? 1 : 0,
                borderRightColor: "var(--v2-rule)",
              }}
            >
              {e.starred && (
                <span
                  className="absolute -top-3 left-8 px-3 py-1 v2-mono text-[10px] tracking-[0.18em] uppercase"
                  style={{
                    background: "var(--v2-accent-2)",
                    color: "var(--v2-ink)",
                  }}
                >
                  Editor&apos;s pick
                </span>
              )}

              <div className="flex items-baseline justify-between v2-rule-b pb-5">
                <div className="flex items-baseline gap-3">
                  <span
                    className="v2-serif text-5xl md:text-6xl"
                    style={{
                      color: e.starred
                        ? "var(--v2-accent-2)"
                        : "var(--v2-accent)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 100',
                    }}
                  >
                    {e.n}
                  </span>
                  <h3 className="v2-serif text-3xl font-medium">{e.name}</h3>
                </div>
                <span className="v2-folio">Ed. /{e.n}</span>
              </div>

              <p
                className="v2-body text-sm italic"
                style={{
                  color: e.starred
                    ? "rgba(243, 236, 225, 0.7)"
                    : "var(--v2-muted)",
                }}
              >
                {e.tag}
              </p>

              <div className="flex items-baseline gap-2">
                <span
                  className="v2-serif text-5xl md:text-6xl"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  {e.price}
                </span>
                <span className="v2-folio">{e.cadence}</span>
              </div>

              <div
                className="flex items-baseline justify-between gap-3 v2-rule-t pt-3"
                style={{
                  borderColor: e.starred
                    ? "rgba(243, 236, 225, 0.18)"
                    : "var(--v2-rule)",
                }}
              >
                <div className="flex flex-col gap-0.5">
                  <span
                    className="v2-serif text-xl md:text-2xl"
                    style={{
                      color: e.starred
                        ? "var(--v2-accent-2)"
                        : "var(--v2-accent)",
                      fontVariationSettings: '"opsz" 60',
                    }}
                  >
                    + {e.setup}
                  </span>
                  <span
                    className="v2-folio"
                    style={{
                      color: e.starred
                        ? "rgba(243, 236, 225, 0.55)"
                        : "var(--v2-muted)",
                    }}
                  >
                    {e.setupNote}
                  </span>
                </div>
                <span
                  className="v2-folio text-right"
                  style={{
                    color: e.starred
                      ? "rgba(243, 236, 225, 0.5)"
                      : "var(--v2-muted)",
                  }}
                >
                  one-time
                </span>
              </div>

              <ul className="flex flex-col gap-3 v2-rule-t pt-5">
                {e.spec.map((s) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-3 v2-body text-[15px]"
                    style={{
                      color: e.starred
                        ? "rgba(243, 236, 225, 0.85)"
                        : "var(--v2-ink-2)",
                    }}
                  >
                    <span
                      className="v2-mono text-xs"
                      style={{
                        color: e.starred
                          ? "var(--v2-accent-2)"
                          : "var(--v2-accent)",
                      }}
                    >
                      §
                    </span>
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 v2-rule-t flex items-center justify-between">
                <span
                  className="v2-folio"
                  style={{
                    color: e.starred
                      ? "rgba(243, 236, 225, 0.55)"
                      : "var(--v2-muted)",
                  }}
                >
                  Best for {e.fit}
                </span>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-mono text-[11px] tracking-[0.18em] uppercase text-center px-6 py-3.5 border border-current hover:opacity-80 transition-opacity"
                style={{
                  background: e.starred
                    ? "var(--v2-accent-2)"
                    : "var(--v2-ink)",
                  color: e.starred ? "var(--v2-ink)" : "var(--v2-paper)",
                  borderColor: e.starred
                    ? "var(--v2-accent-2)"
                    : "var(--v2-ink)",
                }}
              >
                Hold this desk →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
