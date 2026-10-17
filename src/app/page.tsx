"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import AuditSection from "@/components/AuditSection";
import { sendGAEvent } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Workflow Audit, £495 | Andras Vargas",
  description:
    "A fixed-price review of one workflow in your trades business: enquiry to quote, job to invoice, or customer communication. Written report and 90-day plan within 5 working days.",
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block align-middle ${diagonal ? "-rotate-45" : ""}`}
    >
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Symbol({ kind }: { kind: "workflow" | "connect" | "visibility" }) {
  return (
    <svg
      aria-hidden="true"
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "workflow" && (
        <>
          <rect x="4" y="5" width="12" height="9" rx="1" />
          <rect x="24" y="26" width="12" height="9" rx="1" />
          <path d="M10 14v16h14M16 9h14v17" />
          <path d="m26 21 4 5 4-5" />
        </>
      )}
      {kind === "connect" && (
        <>
          <path d="m16 25-2 2a8 8 0 0 1-11-11l8-8a8 8 0 0 1 11 0m2 7 2-2a8 8 0 0 1 11 11l-8 8a8 8 0 0 1-11 0M12 28l16-16" />
        </>
      )}
      {kind === "visibility" && (
        <>
          <rect x="3" y="5" width="34" height="29" rx="2" />
          <path d="M3 13h34M10 27v-5m10 5V17m10 10v-8" />
        </>
      )}
    </svg>
  );
}

const links = [
  { label: "What it covers", href: "#covers" },
  { label: "What you get", href: "#what-you-get" },
  { label: "About me", href: "#about" },
];

function Workflow() {
  const rows = [
    ["1", "Questionnaire", "You describe the workflow in writing, in your own time", "✎"],
    ["2", "Working session", "One 60–90 minute call, built around your answers", "↗"],
    ["3", "Written report", "Where the time goes and what it's costing you", "≡"],
    ["4", "90-day plan", "What to fix first, second and third", "→"],
    ["5", "Walkthrough", "A 30-minute call to go through it together", "✓"],
  ];
  return (
    <div className="workflow-panel">
      <div className="flex items-center justify-between border-b border-ink/15 pb-5">
        <span className="eyebrow">How the audit runs</span>
        <span className="small-note">£495, fixed price</span>
      </div>
      <div className="workflow-rows">
        {rows.map(([n, title, subtitle, glyph]) => (
          <div className="workflow-row" key={n}>
            <div className="step-number">{n}</div>
            <div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
            <div className="workflow-glyph" aria-hidden="true">
              {glyph}
            </div>
          </div>
        ))}
      </div>
      <div className="workflow-caption">
        <span className="orange-dot" />
        <span>Report and plan within 5 working days of the session.</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a href="#" aria-label="Andras Vargas home" className="brand">
          <Image src="/av-logo.svg" width={56} height={44} alt="" priority />
          <span>
            ANDRAS VARGAS<span className="brand-caption">Operations Systems Consultant</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Start your audit <Arrow diagonal />
          </a>
        </nav>
        <details className="mobile-nav">
          <summary>
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#contact">Start your audit ↗</a>
          </nav>
        </details>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow flex items-center gap-3">
              <span className="orange-dot" />
              Fixed-price audit for trades businesses
            </div>
            <h1 id="hero-title">
              Workflow
              <br />
              Audit.
              <br />
              <span className="text-accent">£495.</span>
            </h1>
            <p className="hero-description">
              A structured review of the one workflow costing your business the most time, with a written report and a prioritised 90-day plan within
              5 working days.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button">
                Start your audit <Arrow diagonal />
              </a>
              <a href="#what-you-get" className="text-link">
                What you get <Arrow />
              </a>
            </div>
            <p className="hero-footnote">
              <strong>Guarantee:</strong> if I don’t find at least £1,000 in identifiable time savings, you don’t pay.
            </p>
          </div>
          <Workflow />
        </section>
        <div className="relative overflow-hidden py-20 md:py-28 bg-neutral-900 text-neutral-100">
          {/* subtle orange glow, bottom-right */}
          <div className="absolute -right-48 -bottom-72 w-[42rem] h-[42rem] bg-[radial-gradient(circle,rgba(255,92,26,0.16),transparent_68%)] pointer-events-none" />

          <div className="wrap relative z-10 grid gap-10 md:grid-cols-[1.05fr_1fr] md:items-end">
            <div>
              <span className="eyebrow text-neutral-400 flex items-center gap-2">
                Who I work with <Arrow />
              </span>
              <p className="mt-5 max-w-[26ch] text-2xl md:text-3xl leading-tight tracking-tight">
                Owner-run service businesses. Small enough that the owner still knows every job, big enough that the admin has started to bite.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/20 pt-6 md:gap-8">
              <div>
                <dt className="text-2xl md:text-3xl">UK</dt>
                <dd className="mt-1 text-sm text-neutral-400">Trades & service businesses</dd>
              </div>
              <div>
                <dt className="text-2xl md:text-3xl">3–30</dt>
                <dd className="mt-1 text-sm text-neutral-400">People in the team</dd>
              </div>
              <div>
                <dt className="text-2xl md:text-3xl">London</dt>
                <dd className="mt-1 text-sm text-neutral-400">&amp; South East, on site or remote</dd>
              </div>
            </dl>
          </div>
        </div>

        <section id="covers" className="section wrap" aria-labelledby="help-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow section-kicker">What the audit covers</p>
              <h2 id="help-title">
                One workflow.
                <br />
                Reviewed end to end.
              </h2>
            </div>
            <p>
              You pick the workflow you already know isn’t working. I review it from the first step to the last and tell you, in writing, what to fix
              first.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3 services">
            {[
              {
                kind: "workflow" as const,
                title: "Enquiry to quote",
                problem: "Enquiries sitting in inboxes? Quotes eating your evenings?",
                body: "Where enquiries land, who picks them up, how long a quote takes to put together, and what happens when nobody follows up.",
                tag: "Enquiries, quoting & follow-up",
              },
              {
                kind: "visibility" as const,
                title: "Job to invoice",
                problem: "Jobs finished but not invoiced? Invoices sent but not chased?",
                body: "How a booked job moves through your diary, job sheets and Xero, and where details get retyped, delayed or lost on the way to payment.",
                tag: "Job tracking, invoicing & payment",
              },
              {
                kind: "connect" as const,
                title: "Customer communication",
                problem: "Customers ringing to ask what’s happening?",
                body: "How customers hear from you between quote and completion: confirmations, updates and changes, and where calls and messages fall through.",
                tag: "Updates, confirmations & changes",
              },
            ].map((item) => (
              <article className="service-card" key={item.title}>
                <div className="text-accent mb-8">
                  <Symbol kind={item.kind} />
                </div>
                <h3>{item.title}</h3>
                <p className="service-problem">{item.problem}</p>
                <p>{item.body}</p>
                <div className="service-tag">{item.tag}</div>
              </article>
            ))}
          </div>
        </section>

        <AuditSection />

        <section id="about" className="section wrap about-section" aria-labelledby="about-title">
          <div className="about-mark" aria-hidden="true">
            <Image src="/img/andras.jpg" width={210} height={165} alt="" />
            <span>
              Understand the work.
              <br />
              Build what helps.
            </span>
          </div>
          <div>
            <p className="eyebrow section-kicker">About Andras</p>
            <h2 id="about-title">Hi, I’m Andras. I fix the admin between your tools.</h2>
            <p className="mt-4">
              Most of the cost in a growing business is in the gaps around the work: the quote retyped into Xero, the enquiry that sat in an inbox,
              the invoice nobody chased.
            </p>
            <p className="mt-4">
              I&apos;ve spent 10+ years running the systems behind real businesses: migrating company&apos;s customer database to a new system while
              it kept trading, leading online shop migrations, and building the automated emails and reports staff used every day. Since 2024,
              I&apos;ve worked directly with small business owners to connect their tools and build what&apos;s missing.
            </p>
            <p className="mt-4">
              I build for the person using it, on site and on a phone, not just at a desk. You work with me directly, at a fixed price agreed before
              anything starts.
            </p>
            <a href="#contact" className="text-link">
              Start your audit <Arrow diagonal />
            </a>
          </div>
        </section>

        <section className="faq-section wrap" aria-labelledby="faq-title">
          <p className="eyebrow section-kicker">A few useful details</p>
          <h2 id="faq-title">Before we talk.</h2>
          <div className="faq-list">
            {[
              [
                "Who is the audit for?",
                "Owner-run trades, construction and property services businesses in London and the South East, usually with 3–20 people, already using at least one digital tool such as Xero, a quoting app or a simple CRM, and with a workflow you already know isn’t working. If you’re a sole trader, have no software yet, or are well over 50 people, it’s probably not the right fit.",
              ],
              [
                "Which workflows can you audit?",
                "One per audit: enquiry to quote, job to invoice, or customer communication. If you’re not sure which, pick the one that needs the most chasing or causes the most mistakes.",
              ],
              [
                "Do I need a sales call first?",
                "No. Email me which workflow you’d like reviewed. I’ll reply with the questionnaire and how to pay, and we book the working session. The only calls are the working session and the 30-minute walkthrough.",
              ],
              [
                "Do we need to change all our software?",
                "No. We start with what you already use. The report says whether to connect, configure or replace each tool, and replacing is rarely the answer.",
              ],
              [
                "What happens after the audit?",
                "The report and 90-day plan are yours to act on yourself, with someone else, or with me. If you want me to build the fixes, I’ll send a one-page written proposal for a Workflow Fix Sprint, from £1,500, scoped by what the audit found. There’s no obligation.",
              ],
              [
                "Is it all remote?",
                "Yes. The audit runs on a written questionnaire and two scheduled calls, so it fits around a busy week. If you go on to a Fix Sprint, I’ll come to you where it helps.",
              ],
              [
                "Where does AI fit in?",
                "It’s one tool among several, alongside simpler automation and integrations. I use it where it genuinely fits the workflow, with a person reviewing its output, and I won’t add it just because it’s fashionable.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="wrap contact-inner">
            <div>
              <p className="eyebrow">Start with one workflow</p>
              <h2 id="contact-title">
                Which workflow is
                <br />
                costing you most?
              </h2>
              <p>
                Email me the workflow you’d like reviewed.
                <br />
                I’ll reply with the questionnaire and how to pay.
              </p>
            </div>
            <div className="contact-action">
              <a href={site.auditHref} className="button">
                Start your audit <Arrow diagonal />
              </a>
              <a
                className="email-link"
                href={`mailto:${site.contactEmail}`}
                onClick={() => sendGAEvent("event", "audit_email_click", { location: "homepage" })}
              >
                {site.contactEmail}
              </a>
              <span>£495 fixed price. Report within 5 working days.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap site-footer">
        <a className="brand" href="#">
          <Image src="/av-logo.svg" width={38} height={30} alt="" />
          <span>ANDRAS VARGAS</span>
        </a>
        <p>Practical systems. Better everyday work.</p>
        <span>© {new Date().getFullYear()} Andras Vargas</span>
      </footer>
    </>
  );
}
