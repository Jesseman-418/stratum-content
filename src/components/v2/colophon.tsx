"use client";

import Link from "next/link";
import { EMAIL, STRATUM_STUDIO_URL } from "@/lib/constants";

export function ColophonV2() {
  return (
    <footer className="relative px-6 lg:px-10 pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 v2-rule-b pb-12">
          <div className="col-span-12 md:col-span-4">
            <span className="v2-folio">Colophon</span>
            <h3 className="v2-serif text-4xl mt-3">
              Stratum<span className="v2-accent-text">.</span> Content
            </h3>
            <p className="v2-body text-base mt-4 text-[color:var(--v2-ink-2)] max-w-sm">
              A studio book published from Chennai. Voice-trained ghostwriting
              for founders who want to keep their voice and lose the hours.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 flex flex-col gap-3">
            <span className="v2-folio">In this issue</span>
            <ul className="flex flex-col gap-1.5 v2-serif">
              <li>
                <a href="#editors-note" className="hover:v2-accent-text">
                  Editor&apos;s note
                </a>
              </li>
              <li>
                <a href="#pitch" className="hover:v2-accent-text">
                  The pitch
                </a>
              </li>
              <li>
                <a href="#process" className="hover:v2-accent-text">
                  How a draft is made
                </a>
              </li>
              <li>
                <a href="#editions" className="hover:v2-accent-text">
                  Editions
                </a>
              </li>
              <li>
                <a href="#features" className="hover:v2-accent-text">
                  Features
                </a>
              </li>
              <li>
                <a href="#subscribe" className="hover:v2-accent-text">
                  Subscribe
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
            <span className="v2-folio">Studio</span>
            <ul className="flex flex-col gap-1.5 v2-serif">
              <li>
                <Link
                  href={STRATUM_STUDIO_URL}
                  className="hover:v2-accent-text"
                >
                  Stratum (AIOS) ↗
                </Link>
              </li>
              <li>
                <Link
                  href="https://kaval.chat"
                  target="_blank"
                  className="hover:v2-accent-text"
                >
                  Kaval (client) ↗
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
            <span className="v2-folio">Type &amp; production</span>
            <p className="v2-body text-sm text-[color:var(--v2-ink-2)]">
              Set in Fraunces, Inter and JetBrains Mono. Built in Next.js 16.
              Deployed on Vercel.
            </p>
            <p className="v2-body text-sm">
              Editor:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-4 v2-accent-text"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-baseline justify-between gap-3">
          <span className="v2-folio">
            © 2026 Stratum Content · A studio book
          </span>
          <span className="v2-folio">
            Vol. I · No. 01 · Press run: as many as keep their desk
          </span>
        </div>
      </div>
    </footer>
  );
}
