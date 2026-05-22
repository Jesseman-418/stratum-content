"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const live = {
  name: "Kaval",
  url: "https://kaval.chat",
  scope: "AI agent content + landing copy",
  byline: "Anuranjan · CEO",
  status: "Live · in production",
  excerpt:
    "First long-form engagement of the studio. The agent's voice copy and the entire landing narrative were written from the founder's source material — a 90-minute interview, three product walkthroughs, and the existing landing draft. Every line shipped passed the editor's desk.",
};

const scripts = [
  {
    n: "I",
    duration: "38 seconds",
    title: "Why your AI posts sound like AI",
    angle: "Diagnostic hook · reframe · payoff",
    beats: [
      {
        t: "0:00",
        line:
          "Your AI-written posts are dying. Not because the writing is bad. Because the voice isn't yours.",
      },
      {
        t: "0:06",
        line:
          "Every AI tool you've tried was trained on a billion posts. None of them yours. So it averages everyone — and average is invisible.",
      },
      {
        t: "0:14",
        line:
          "The fix isn't a better prompt. It's a smaller dataset. Your last 30 posts. That's it.",
      },
      {
        t: "0:22",
        line:
          "Feed the model your voice — your line breaks, your jokes, the way you start a hook — and suddenly it sounds like the person your audience already follows.",
      },
      {
        t: "0:32",
        line: "Train it once. Ship every week. That's the whole game.",
      },
    ],
  },
  {
    n: "II",
    duration: "42 seconds",
    title: "The thirty-rewrite gate",
    angle: "Counter-intuitive open · contrast · identity close",
    beats: [
      {
        t: "0:00",
        line:
          "I sent 337 cold emails. Got zero replies. Here's what I did before sending a single DM the second time.",
      },
      {
        t: "0:07",
        line:
          "I picked 30 posts written by founders I wanted to work with. Then I rewrote every single one of them. Sharper hook. Tighter middle. Real payoff.",
      },
      {
        t: "0:17",
        line:
          "Most ghostwriters skip this. They send the pitch first and offer the rewrite later. That's why their free samples land mid — they've never actually practiced.",
      },
      {
        t: "0:26",
        line:
          "The portfolio is the trust artifact. The DM is just the door.",
      },
      {
        t: "0:34",
        line: "Want better replies? Build the portfolio first. Then send the DM.",
      },
    ],
  },
  {
    n: "III",
    duration: "45 seconds",
    title: "Stop selling tools. Start selling outcomes.",
    angle: "Industry call-out · math reveal · CTA",
    beats: [
      {
        t: "0:00",
        line:
          "Every AI agency is broke. And it's not because AI doesn't work — it's because they're selling the wrong thing.",
      },
      {
        t: "0:07",
        line:
          "Sell access to a tool — you race ChatGPT to the bottom. Sell the outcome the tool produces — you charge what a service business charges.",
      },
      {
        t: "0:17",
        line:
          "Solo human ghostwriter — five clients, ten hours each, ten grand a month ceiling. Same operator with an AI pipeline — twelve clients, three hours each, twenty-four grand. Same skill, same niche, two-point-four times the revenue.",
      },
      {
        t: "0:31",
        line:
          "The clients don't care that you used AI. They care that posts show up on their profile every week, in their voice, without their effort.",
      },
      { t: "0:40", line: "Don't sell software. Sell the role." },
    ],
  },
];

export function FeaturesV2() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-36 px-6 lg:px-10 v2-rule-b"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-6">
            <span className="v2-mono text-[10.5px] tracking-[0.18em] uppercase">
              Section VI
            </span>
            <span className="v2-folio">/06</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-10"
          >
            <span className="v2-folio">Features from the studio desk</span>
            <h2 className="v2-display mt-4 text-[clamp(2.25rem,6vw,5rem)] font-medium max-w-5xl">
              One live client.{" "}
              <span className="italic v2-accent-text">Three specimen scripts</span>.
            </h2>
          </motion.div>
        </div>

        {/* Live client feature — full bleed */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 md:mt-24 v2-thick-rule-t v2-thick-rule-b py-12 md:py-16 grid md:grid-cols-12 gap-6 md:gap-10"
        >
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="v2-folio">Feature · 01</span>
            <span
              className="v2-mono text-[11px] tracking-[0.18em] uppercase"
              style={{ color: "var(--v2-accent)" }}
            >
              {live.status}
            </span>
            <div className="mt-auto flex flex-col gap-1 v2-rule-t pt-4">
              <span className="v2-folio">Byline</span>
              <span className="v2-serif text-base italic">{live.byline}</span>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col gap-6">
            <Link
              href={live.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3
                className="v2-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight group-hover:underline decoration-2 underline-offset-8"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                {live.name}{" "}
                <span
                  className="v2-mono text-2xl group-hover:translate-x-1 inline-block transition-transform"
                  style={{ color: "var(--v2-accent)" }}
                >
                  ↗
                </span>
              </h3>
              <span className="v2-folio mt-3 inline-block">
                {live.url.replace("https://", "")}
              </span>
            </Link>
            <p className="v2-body text-lg text-[color:var(--v2-ink-2)] max-w-xl mt-2">
              {live.excerpt}
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3 v2-rule-l md:pl-6">
            <span className="v2-folio">Scope on file</span>
            <p className="v2-serif text-lg leading-snug">{live.scope}</p>
            <div className="mt-4 v2-rule-t pt-4">
              <span className="v2-folio">Studio role</span>
              <p className="v2-serif text-lg leading-snug mt-1.5">
                Voice training, agent dialogue, landing-page copy, editorial
                pass on every line.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Specimen scripts */}
        <div className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
            <span className="v2-folio md:col-span-3">
              Specimen scripts · short form
            </span>
            <p className="md:col-span-9 v2-body text-base md:text-lg text-[color:var(--v2-ink-2)] max-w-2xl">
              Three short-form scripts the studio writes on demand. Hook,
              setup, turn, payoff, CTA — each beat annotated. Same structure
              used on retainer.
            </p>
          </div>

          <div className="flex flex-col v2-rule-t v2-rule-b">
            {scripts.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease }}
                className="py-10 md:py-14 grid md:grid-cols-12 gap-6 md:gap-10 v2-rule-b last:border-b-0"
              >
                <div className="md:col-span-3 flex flex-col gap-3">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="v2-serif text-6xl md:text-7xl v2-accent-text"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <span className="v2-folio">{s.duration}</span>
                  <span className="v2-folio">{s.angle}</span>
                </div>

                <div className="md:col-span-9 flex flex-col gap-6">
                  <h3 className="v2-serif text-3xl md:text-4xl font-medium tracking-tight max-w-3xl">
                    {s.title}
                  </h3>

                  <ol className="flex flex-col gap-5">
                    {s.beats.map((b) => (
                      <li
                        key={b.t}
                        className="grid grid-cols-[auto_1fr] gap-6 v2-rule-t pt-4 first:border-t-0 first:pt-0"
                      >
                        <span
                          className="v2-mono text-xs pt-1.5"
                          style={{ color: "var(--v2-accent)" }}
                        >
                          {b.t}
                        </span>
                        <p className="v2-body text-base md:text-lg text-[color:var(--v2-ink-2)] max-w-3xl">
                          {b.line}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
