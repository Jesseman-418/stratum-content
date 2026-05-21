"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const principles = [
  {
    code: "P1",
    title: "Never ship raw AI",
    body:
      "Every post passes a human editor before it touches your profile. Owen Rensland's rule. No exceptions. If a model wrote it, a human read it twice.",
  },
  {
    code: "P2",
    title: "Voice over volume",
    body:
      "If a post doesn't sound like you, it doesn't ship. The model is trained until your own audience can't tell which posts were drafted in software and which were drafted on a phone.",
  },
  {
    code: "P3",
    title: "Outcome, not tools",
    body:
      "You don't buy Claude access. You don't get a workspace to log into. You buy posts on your profile, on time, every week. That's the whole contract.",
  },
  {
    code: "P4",
    title: "Founder edits founder",
    body:
      "Every edit pass goes through me — Jesseman — not a junior. The same operator who built the studio writes the final draft. That's the ceiling and the floor.",
  },
];

export function Operator() {
  return (
    <section id="operator" className="hairline-top py-28 md:py-40 px-6 lg:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          eyebrow="The operator"
          title={
            <>
              Built by an operator who ships from the{" "}
              <span className="italic font-light text-accent">same desk</span>.
            </>
          }
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-px bg-border hairline-top hairline-bottom">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-background p-8 md:p-12 flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="block h-px w-8 bg-accent" />
              <span className="text-mono text-xs tracking-[0.2em] uppercase">
                Jesseman · Chennai
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
              I sent 337 cold emails. I got 0 real replies. So I rebuilt the studio.
            </h3>

            <div className="flex flex-col gap-5 text-muted leading-relaxed max-w-2xl">
              <p>
                Stratum started as an AI-workspace install service. I wrote 337
                cold emails pitching it. Sixty percent bounced. The rest went
                silent. Zero retainers. Zero replies that meant anything.
              </p>
              <p>
                Then I read Ritesh Verma&apos;s &quot;AI Delivery Business&quot;
                thesis: agencies that sell tools race to the bottom; agencies
                that sell outcomes charge service-business retainers. So I
                stopped selling the workspace. I started selling what the
                workspace produces — posts, on your profile, every week, in
                your voice.
              </p>
              <p>
                Every line in every draft passes through me before it ships.
                The voice model is trained on your last 30 posts. The edit
                pass is mine. The signature on every DM is mine. The retainer
                is recurring.
              </p>
              <p className="text-foreground">
                If this works for one client, it works for twelve. The studio
                is the ceiling.
              </p>
            </div>

            <div className="hairline-top pt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
              {[
                ["337", "Cold emails sent"],
                ["0", "Replies that mattered"],
                ["1", "Pivot to delivery"],
                ["∞", "Studio compounding"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="bg-background p-5 flex flex-col gap-1"
                >
                  <span className="text-mono text-3xl font-light tracking-tight">
                    {n}
                  </span>
                  <span className="label">{l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-background p-8 md:p-12 flex flex-col gap-8"
          >
            <span className="label">Studio principles</span>
            <ul className="flex flex-col gap-8">
              {principles.map((p) => (
                <li key={p.code} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-mono text-xs text-accent">/{p.code}</span>
                    <span className="block h-px w-8 bg-border" />
                  </div>
                  <h4 className="text-xl font-medium tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
