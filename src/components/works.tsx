"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "./section-header";

const clients = [
  {
    name: "Kaval",
    url: "https://kaval.chat",
    role: "AI agent content + landing copy",
    contact: "Anuranjan · CEO",
    status: "Live",
  },
];

const scripts = [
  {
    code: "W1",
    format: "Short-form · 38s",
    platform: "Reels / Shorts / TikTok",
    title: "Why your AI posts sound like AI",
    angle: "Diagnostic hook → reframe → payoff",
    beats: [
      {
        t: "0:00",
        label: "Hook (visual: typing on phone, cut to dead feed)",
        line: "Your AI-written posts are dying. Not because the writing is bad. Because the voice isn't yours.",
      },
      {
        t: "0:06",
        label: "Setup (cut to creator face, direct address)",
        line: "Every AI tool you've tried was trained on a billion posts. None of them yours. So it averages everyone — and average is invisible.",
      },
      {
        t: "0:14",
        label: "Turn (B-roll: side-by-side text)",
        line: "The fix isn't a better prompt. It's a smaller dataset. Your last 30 posts. That's it.",
      },
      {
        t: "0:22",
        label: "Payoff (creator nod)",
        line: "Feed the model your voice — your line breaks, your jokes, the way you start a hook — and suddenly it sounds like the person your audience already follows.",
      },
      {
        t: "0:32",
        label: "CTA (text on screen)",
        line: "Train it once. Ship every week. That's the whole game.",
      },
    ],
  },
  {
    code: "W2",
    format: "Short-form · 42s",
    platform: "Reels / Shorts",
    title: "The 30-rewrite gate",
    angle: "Counter-intuitive open → contrast → identity close",
    beats: [
      {
        t: "0:00",
        label: "Hook (creator on camera, blunt delivery)",
        line: "I sent 337 cold emails. Got zero replies. Here's what I did before sending a single DM the second time.",
      },
      {
        t: "0:07",
        label: "Story beat (B-roll: laptop, paper notes)",
        line: "I picked 30 posts written by founders I wanted to work with. Then I rewrote every single one of them. Sharper hook. Tighter middle. Real payoff.",
      },
      {
        t: "0:17",
        label: "Tension (cut back to face)",
        line: "Most ghostwriters skip this. They send the pitch first and offer the rewrite later. That's why their free samples land mid — they've never actually practiced.",
      },
      {
        t: "0:26",
        label: "Payoff (text on screen as voiceover)",
        line: "The portfolio is the trust artifact. The DM is just the door.",
      },
      {
        t: "0:34",
        label: "CTA (creator looking at lens)",
        line: "Want better replies? Build the portfolio first. Then send the DM.",
      },
    ],
  },
  {
    code: "W3",
    format: "Short-form · 45s",
    platform: "Reels / Shorts / TikTok",
    title: "Stop selling tools. Start selling outcomes.",
    angle: "Industry-call-out → math reveal → CTA",
    beats: [
      {
        t: "0:00",
        label: "Hook (creator pointing at camera)",
        line: "Every AI agency is broke. And it's not because AI doesn't work — it's because they're selling the wrong thing.",
      },
      {
        t: "0:07",
        label: "Reveal (whiteboard cut, hand-drawn)",
        line: "Sell access to a tool — you race ChatGPT to the bottom. Sell the outcome the tool produces — you charge what a service business charges.",
      },
      {
        t: "0:17",
        label: "Math beat (numbers appear on screen)",
        line: "Solo human ghostwriter — five clients, ten hours each, ten grand a month ceiling. Same operator with an AI pipeline — twelve clients, three hours each, twenty-four grand. Same skill. Same niche. Two-point-four times the revenue.",
      },
      {
        t: "0:31",
        label: "Frame (creator on camera, slower)",
        line: "The clients don't care that you used AI. They care that posts show up on their profile every week, in their voice, without their effort.",
      },
      {
        t: "0:40",
        label: "CTA (text overlay)",
        line: "Don't sell software. Sell the role.",
      },
    ],
  },
];

export function Works() {
  return (
    <section id="works" className="hairline-top py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="07"
          eyebrow="Sample work"
          title={
            <>
              Scripts the studio{" "}
              <span className="italic font-light text-accent">writes on demand</span>.
            </>
          }
          description="One live client. Three short-form scripts in the studio voice — hook, setup, turn, payoff, CTA labeled per beat. Same structure used on retainer."
        />

        {/* Live client strip */}
        <div className="mt-16 grid md:grid-cols-12 gap-6 md:gap-10 hairline-top pt-10">
          <span className="label md:col-span-3">Live deployments</span>
          <div className="md:col-span-9 grid md:grid-cols-2 gap-px bg-border hairline-top hairline-bottom">
            {clients.map((c) => (
              <Link
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background p-6 md:p-8 flex flex-col gap-3 hover:bg-surface transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-mono text-xs text-accent">/C1</span>
                  <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                    {c.status} ↗
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-accent transition-colors">
                  {c.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{c.role}</p>
                <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                  {c.contact}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-6 md:gap-10 mb-12">
          <span className="label md:col-span-3">Spec scripts</span>
          <p className="md:col-span-9 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            Three short-form scripts the studio writes on demand. Same beat
            structure used for retainer clients.
          </p>
        </div>

        <div className="flex flex-col gap-px bg-border hairline-top hairline-bottom">
          {scripts.map((s, i) => (
            <motion.article
              key={s.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12"
            >
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-mono text-xs text-accent">/{s.code}</span>
                  <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                    {s.format}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                  {s.title}
                </h3>
                <span className="label">{s.platform}</span>
                <p className="text-sm text-muted leading-relaxed">{s.angle}</p>
              </div>

              <ol className="lg:col-span-8 flex flex-col gap-6">
                {s.beats.map((b) => (
                  <li
                    key={b.t}
                    className="grid grid-cols-[auto_1fr] gap-5 hairline-top pt-6 first:hairline-none first:pt-0"
                  >
                    <span className="text-mono text-xs text-accent pt-1">
                      {b.t}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                        {b.label}
                      </span>
                      <p className="text-base leading-relaxed">{b.line}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
