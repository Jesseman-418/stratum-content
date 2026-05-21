"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

export function Video() {
  return (
    <section
      id="video"
      className="hairline-top py-28 md:py-40 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          eyebrow="From the desk"
          title={
            <>
              Watch why I built this in{" "}
              <span className="italic font-light text-accent">90 seconds</span>.
            </>
          }
          description="One-take video, no production. The same tone you'll get back in every rewrite, every DM, every edit pass."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative bg-surface aspect-video hairline-top hairline-bottom border-x border-border overflow-hidden"
        >
          {/* Video placeholder — swap for real embed when ready */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="h-20 w-20 rounded-full border border-accent/30 flex items-center justify-center bg-background/40 backdrop-blur">
                <span className="text-accent text-2xl ml-1">▶</span>
              </div>
              <div className="text-center">
                <p className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                  Video drops here
                </p>
                <p className="text-sm text-muted-2 mt-2 max-w-xs">
                  Jesseman&apos;s 90-second walkthrough — coming this week.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative crosshairs */}
          <span className="absolute top-4 left-4 text-mono text-[10px] text-muted-2 tracking-[0.18em] uppercase">
            REC · 00:00:00
          </span>
          <span className="absolute top-4 right-4 text-mono text-[10px] text-accent tracking-[0.18em] uppercase">
            ● LIVE SOON
          </span>
          <span className="absolute bottom-4 left-4 text-mono text-[10px] text-muted-2 tracking-[0.18em] uppercase">
            STRATUM · CONTENT
          </span>
          <span className="absolute bottom-4 right-4 text-mono text-[10px] text-muted-2 tracking-[0.18em] uppercase">
            16:9 · 1080p
          </span>
        </motion.div>
      </div>
    </section>
  );
}
