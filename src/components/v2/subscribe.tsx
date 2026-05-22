"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CALENDLY_URL, EMAIL } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function SubscribeV2() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="subscribe"
      className="relative py-24 md:py-36 px-6 lg:px-10 v2-ink-fill v2-rule-b"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-6">
            <span
              className="v2-mono text-[10.5px] tracking-[0.18em] uppercase"
              style={{ color: "var(--v2-accent-2)" }}
            >
              Section VII
            </span>
            <span
              className="v2-folio"
              style={{ color: "rgba(243, 236, 225, 0.5)" }}
            >
              /07
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-10"
          >
            <span
              className="v2-folio"
              style={{ color: "rgba(243, 236, 225, 0.6)" }}
            >
              A letter to the next subscriber
            </span>
            <h2 className="v2-display mt-4 text-[clamp(2.5rem,7vw,6rem)] font-medium max-w-5xl">
              Send one post.{" "}
              <span
                className="italic"
                style={{ color: "var(--v2-accent-2)" }}
              >
                We&apos;ll rewrite it
              </span>{" "}
              by Friday.
            </h2>
            <p
              className="mt-8 v2-body text-lg md:text-xl max-w-2xl"
              style={{ color: "rgba(243, 236, 225, 0.78)" }}
            >
              No call required. No invoice attached. Reply with a single post
              that isn&apos;t pulling its weight, and we&apos;ll send back a
              rewrite with hook, structure, and payoff. If it&apos;s a fit,
              we&apos;ll talk subscription.
            </p>
          </motion.div>
        </div>

        {/* Two-column: form + signed letter */}
        <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-6 md:gap-10">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 p-8 md:p-10 v2-paper-soft text-[color:var(--v2-ink)] flex flex-col gap-5"
            style={{ borderColor: "var(--v2-rule)", borderWidth: 1, borderStyle: "solid" }}
          >
            <span className="v2-folio">Free rewrite request</span>

            <label className="flex flex-col gap-2">
              <span className="v2-folio">Your name</span>
              <input
                required
                type="text"
                placeholder="Founder · Operator · Creator"
                className="bg-transparent v2-serif text-2xl py-2 outline-none v2-rule-b focus:border-[color:var(--v2-accent)]"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="v2-folio">Your email</span>
              <input
                required
                type="email"
                placeholder="you@studio.co"
                className="bg-transparent v2-serif text-2xl py-2 outline-none v2-rule-b focus:border-[color:var(--v2-accent)]"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="v2-folio">
                The post you want rewritten (link or paste)
              </span>
              <textarea
                required
                rows={4}
                placeholder="Paste a post or drop a URL. Tell us the audience and the platform if it helps."
                className="bg-transparent v2-body text-lg py-2 outline-none v2-rule-b focus:border-[color:var(--v2-accent)] resize-none"
              />
            </label>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={sent}
                className="v2-ink-fill v2-mono text-[11px] tracking-[0.18em] uppercase px-6 py-4 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {sent ? "Sent · we'll reply within 48 hours" : "Request the rewrite →"}
              </button>
              <span className="v2-folio">
                Or write to{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4"
                  style={{ color: "var(--v2-accent)" }}
                >
                  {EMAIL}
                </a>
              </span>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-5 p-8 md:p-10 flex flex-col gap-6"
            style={{
              borderColor: "rgba(243, 236, 225, 0.18)",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          >
            <span
              className="v2-folio"
              style={{ color: "rgba(243, 236, 225, 0.5)" }}
            >
              Or: hold the desk
            </span>
            <p
              className="v2-body text-lg"
              style={{ color: "rgba(243, 236, 225, 0.85)" }}
            >
              If you already know you want a subscription, skip the rewrite.
              Book a fifteen-minute call. PayPal Invoice on the call. Studio
              ships within twenty-four hours.
            </p>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-mono text-[11px] tracking-[0.18em] uppercase px-6 py-4 text-center hover:opacity-80 transition-opacity"
              style={{
                background: "var(--v2-accent-2)",
                color: "var(--v2-ink)",
              }}
            >
              Book the fifteen-minute call →
            </a>

            <p
              className="v2-pullquote text-2xl leading-[1.25] mt-4"
              style={{ color: "rgba(243, 236, 225, 0.92)" }}
            >
              &ldquo;You don&apos;t buy Claude access. You don&apos;t get a
              workspace to log into. You buy posts on your profile, on time,
              every week. That&apos;s the whole contract.&rdquo;
            </p>

            <span
              className="v2-folio mt-auto"
              style={{ color: "rgba(243, 236, 225, 0.45)" }}
            >
              — Studio principle /03
            </span>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
