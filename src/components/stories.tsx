"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const stories = [
  {
    code: "S1",
    title: "From AIOS pitch to delivery business",
    excerpt:
      "Spent six weeks building a polished workspace install service. Got zero retainers. Killed it in a day. Rebuilt the offer around the outcome the workspace produced — weekly posts — and the math became 2.4× per Ritesh Verma's delivery thesis.",
    label: "Pivot",
    date: "May 2026",
  },
  {
    code: "S2",
    title: "The 30-rewrite gate",
    excerpt:
      "Before sending any DMs at scale, I built a private portfolio of 30 sample rewrites — real prospect posts, sharpened. The portfolio is the trust artifact. The DM is just the door. Most ghostwriting services skip this step and wonder why their free rewrites land mid.",
    label: "Discipline",
    date: "May 2026",
  },
  {
    code: "S3",
    title: "Voice-first, model-second",
    excerpt:
      "The AI doesn't write in 'AI voice.' It writes in yours, because the only training data is your last 30 posts. Every quirk, every line break, every joke — captured before any draft is generated. The model is a mirror, not a stylist.",
    label: "Method",
    date: "May 2026",
  },
];

const quotes = [
  {
    code: "Q1",
    body:
      "AI agencies sell tools and race to the bottom. AI delivery businesses sell the outcome and charge service-business retainers.",
    attribution: "Ritesh Verma — case study logged 2026-05-21",
  },
  {
    code: "Q2",
    body:
      "Don't sell software. Sell a role the operator already understands — Chief X Officer.",
    attribution: "Davie Fogarty — case study logged 2026-05-20",
  },
  {
    code: "Q3",
    body:
      "Never ship raw AI. The edit pass is the differentiator. Anyone can run a prompt; few can finish a draft.",
    attribution: "Owen Rensland — scriptless sales framework",
  },
];

export function Stories() {
  return (
    <section id="stories" className="hairline-top py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          eyebrow="Studio notes"
          title={
            <>
              Stories from the{" "}
              <span className="italic font-light text-accent">studio desk</span>.
            </>
          }
          description="No client logos yet — the first three slots per tier are open at founding rate. These are the playbooks the studio runs on while it earns those logos."
        />

        <div className="mt-20 grid lg:grid-cols-3 gap-px bg-border hairline-top hairline-bottom">
          {stories.map((s, i) => (
            <motion.article
              key={s.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-mono text-xs text-accent">/{s.code}</span>
                <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  {s.label} · {s.date}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{s.excerpt}</p>
            </motion.article>
          ))}
        </div>

        {/* Quotes the studio operates by */}
        <div className="mt-24 hairline-top pt-16">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-12">
            <span className="label md:col-span-3">Frameworks the studio runs on</span>
            <p className="md:col-span-9 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
              Three principles from the operators whose case studies sit in
              the studio&apos;s reading log. Stratum cites who it learned
              from. No invented testimonials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border hairline-top hairline-bottom">
            {quotes.map((q, i) => (
              <motion.blockquote
                key={q.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-8 md:p-10 flex flex-col gap-6"
              >
                <span className="text-accent text-3xl font-serif leading-none">
                  &ldquo;
                </span>
                <p className="text-base md:text-lg leading-relaxed">
                  {q.body}
                </p>
                <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted mt-auto">
                  {q.attribution}
                </span>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
