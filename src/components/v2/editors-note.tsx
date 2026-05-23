"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function EditorsNoteV2() {
  return (
    <section
      id="editors-note"
      className="relative py-24 md:py-36 px-6 lg:px-10 v2-rule-b"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Folio + label */}
          <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-6">
            <span className="v2-mono text-[10.5px] tracking-[0.18em] uppercase">
              Section II
            </span>
            <span className="v2-folio">/02</span>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-10"
          >
            <span className="v2-folio">Editor&apos;s note</span>
            <h2
              className="v2-display mt-4 text-[clamp(2.25rem,6vw,5rem)] font-medium max-w-4xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
            >
              A letter from the desk that{" "}
              <span className="italic v2-accent-text">edits every line</span>.
            </h2>
          </motion.div>

          {/* Body */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-7 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="v2-body v2-dropcap text-[17px] text-[color:var(--v2-ink-2)] columns-1 md:columns-2 md:gap-10"
              style={{ orphans: 2, widows: 2 }}
            >
              <p className="mb-4">
                Stratum Content was built after I sent three hundred and
                thirty-seven cold emails for a different offer and got nothing
                back. The lesson wasn&apos;t that the writing was bad. It was
                that an operator doesn&apos;t want a tool — they want the
                outcome the tool produces, delivered like a service business
                delivers anything.
              </p>
              <p className="mb-4">
                So the studio stopped selling the machine and started selling
                the page. We train the voice model on your last thirty posts.
                We draft the week. I read every draft myself, by hand, with a
                red pen on a glass screen. Nothing leaves the studio that
                hasn&apos;t passed through my desk. That is the floor and the
                ceiling.
              </p>
              <p className="mb-4">
                The model is invisible to you. You see a Notion page on Sunday
                with the week&apos;s posts. You approve, edit, or send back. I
                ship the calendar by Monday. Twelve desks, one studio, one
                editor. The math is simple. The discipline is not.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="mt-10 v2-rule-t pt-6 flex items-center gap-5"
            >
              <div
                className="h-14 w-14 rounded-full v2-paper-deep v2-rule flex items-center justify-center"
                style={{ borderWidth: 1, borderStyle: "solid" }}
              >
                <span className="v2-serif text-2xl italic">J</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="v2-serif text-lg">— Jesseman</span>
                <span className="v2-folio">Editor &amp; founder · Chennai</span>
              </div>
            </motion.div>
          </div>

          {/* Marginalia */}
          <motion.aside
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="col-span-12 lg:col-span-3 mt-10 lg:mt-32 lg:border-l v2-rule lg:pl-6 flex flex-col gap-6"
          >
            <span className="v2-folio">Marginalia</span>
            <p className="v2-pullquote text-[22px] leading-[1.25]">
              &ldquo;Sell the role the operator already understands. Then
              over-deliver the role.&rdquo;
            </p>
            <span className="v2-folio">
              From the studio reading log · Davie Fogarty &amp; Ritesh Verma
            </span>

            <div className="v2-rule-t pt-5 grid grid-cols-2 gap-3">
              {[
                ["30", "Posts read to train your voice"],
                ["100%", "Drafts founder-edited"],
                ["24h", "Approval window"],
                ["12", "Desks open per studio"],
              ].map(([n, l]) => (
                <div key={l} className="flex flex-col gap-1">
                  <span className="v2-serif text-3xl">{n}</span>
                  <span className="v2-folio">{l}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
