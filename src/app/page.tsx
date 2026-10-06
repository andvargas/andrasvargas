import Image from "next/image";
import { site } from "@/lib/site";
import ProcessSection from "@/components/ProcessSection";

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
  return <svg aria-hidden="true" width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {kind === "workflow" && <><rect x="4" y="5" width="12" height="9" rx="1"/><rect x="24" y="26" width="12" height="9" rx="1"/><path d="M10 14v16h14M16 9h14v17"/><path d="m26 21 4 5 4-5"/></>}
    {kind === "connect" && <><path d="m16 25-2 2a8 8 0 0 1-11-11l8-8a8 8 0 0 1 11 0m2 7 2-2a8 8 0 0 1 11 11l-8 8a8 8 0 0 1-11 0M12 28l16-16"/></>}
    {kind === "visibility" && <><rect x="3" y="5" width="34" height="29" rx="2"/><path d="M3 13h34M10 27v-5m10 5V17m10 10v-8"/></>}
  </svg>;
}

const links = [{ label: "How I help", href: "#how-i-help" }, { label: "How it works", href: "#how-it-works" }, { label: "About me", href: "#about" }];

function Workflow() {
  const rows = [
    ["1", "Enquiry logged", "Call, form or message lands in one place", "↗"],
    ["2", "Quote sent", "Built on site from your phone, followed up automatically", "→"],
    ["3", "Job booked", "An accepted quote becomes a diary entry", "+"],
    ["4", "Invoice raised", "Created in Xero when the job is marked done", "£"],
    ["5", "Payment chased", "Reminders go out until it's paid", "✓"],
  ];
  return (
    <div className="workflow-panel">
      <div className="flex items-center justify-between border-b border-ink/15 pb-5">
        <span className="eyebrow">From enquiry to payment</span>
        <span className="small-note">An example</span>
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
        <span>Details entered once, carried all the way to payment.</span>
      </div>
      <p className="illustration-caption">An example of what I can help you set up</p>
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
            ANDRAS VARGAS<span className="brand-caption">Operations Systems Consultant for Construction & Trades</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Let’s talk <Arrow diagonal />
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
            <a href="#contact">Let’s talk ↗</a>
          </nav>
        </details>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow flex items-center gap-3">
              <span className="orange-dot" />
              Practical systems for trades businesses
            </div>
            <h1 id="hero-title">
              Less manual
              <br />
              admin.
              <br />
              <span className="text-accent">Better-connected</span>
              <br />
              operations.
            </h1>
            <p className="hero-description">
              I help growing UK service businesses connect their people, workflows and software, so the everyday work runs more smoothly.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button">
                Discuss your workflow <Arrow diagonal />
              </a>
              <a href="#how-i-help" className="text-link">
                How I can help <Arrow />
              </a>
            </div>
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
                Growing trades and service businesses. Small enough that you still know every job, big enough that the admin has started to bite.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/20 pt-6 md:gap-8">
              <div>
                <dt className="text-2xl md:text-3xl">UK</dt>
                <dd className="mt-1 text-sm text-neutral-400">Trades &amp; service businesses</dd>
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

        <section id="how-i-help" className="section wrap" aria-labelledby="help-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow section-kicker">How I help</p>
              <h2 id="help-title">
                Your team is good.
                <br />
                Your systems are letting them down.
              </h2>
            </div>
            <p>
              When your business grows, the systems don’t always grow with it. I help untangle the everyday friction and put practical improvements in
              place.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3 services">
            {[
              {
                kind: "workflow" as const,
                title: "Make work flow",
                problem: "Still copying the same details into three places?",
                body: "Simplify the steps between enquiry, quote and delivery. Make responsibilities clear and reduce repetitive admin.",
                tag: "Workflows & automation",
              },
              {
                kind: "connect" as const,
                title: "Connect your tools",
                problem: "A CRM here. A spreadsheet there. Nothing quite joined up?",
                body: "Help your existing software work together, from HubSpot and customer records to the tools your team uses every day.",
                tag: "CRM & integrations",
              },
              {
                kind: "visibility" as const,
                title: "See what’s happening",
                problem: "Putting the weekly picture together by hand?",
                body: "Bring useful information into clear reports and lightweight tools, so you can spend less time finding answers.",
                tag: "Reporting & internal tools",
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

        <ProcessSection />

        <section id="about" className="section wrap about-section" aria-labelledby="about-title">
          <div className="about-mark" aria-hidden="true">
            <Image src="/av-logo.svg" width={210} height={165} alt="" />
            <span>
              Understand the work.
              <br />
              Build what helps.
            </span>
          </div>
          <div>
            <p className="eyebrow section-kicker">About Andras</p>
            <h2 id="about-title">Hi, I’m Andras. I fix the admin between your tools.</h2>
            <p className="about-lead">
              Most of the cost in a growing business isn't the work itself. It's the gaps around it: the quote retyped into Xero, the enquiry that sat
              in an inbox, the invoice nobody chased. That's the part I fix.
            </p>
            <p className="mt-4">
              I've spent 10+ years building and running the systems behind real businesses: managing CRMs, migrating between platforms, building the
              automations that keep customer details from being typed in twice, and looking after the digital side of multi-location operations. Today
              I work with React, Node and HubSpot, and I connect the software you already pay for.
            </p>
            <p className="mt-4">
              I design for the person using it. A system that works at a desk but not on a phone, on site, with wet hands, doesn't get used. So I
              build for the job site first and the office second, then stay until your team is actually using it.
            </p>
            <p className="mt-4">
              You work with me directly, from the first conversation to handover, with the scope and price agreed upfront. No account managers, no
              hourly meter, no "digital transformation."
            </p>
            <a href="#contact" className="text-link">
              Tell me what you’re working around <Arrow diagonal />
            </a>
          </div>
        </section>

        <section className="faq-section wrap" aria-labelledby="faq-title">
          <p className="eyebrow section-kicker">A few useful details</p>
          <h2 id="faq-title">Before we talk.</h2>
          <div className="faq-list">
            {[
              [
                "Who do you work with?",
                "Owner-run trades, construction and property services businesses in London and the South East, usually with 3–20 people and already using at least one digital tool, such as Xero, a CRM or a quoting app. If you’re a sole trader or don’t use any software yet, it’s probably too early. If you’re well over 50 people, you likely need a full-time operations lead rather than a project like this.",
              ],
              [
                "Do we need to change all our software?",
                "No. We start with what you already use. We look at how a job really moves from enquiry to payment, then decide whether to connect, configure or replace a tool. Replacing is rarely the answer.",
              ],
              [
                "What if I don’t know exactly what needs fixing?",
                "That’s what the diagnostic is for. Start with something that takes too long, needs repeated chasing or causes mistakes. I’ll trace the whole workflow and tell you which single problem is costing you the most.",
              ],
              [
                "How much does it cost?",
                "The Operational Diagnostic is £1,400. An Implementation Sprint is quoted as a fixed price once the diagnostic shows what needs fixing, so there are no surprises. Monthly support runs £750–£1,200 depending on how much you need. Everything is agreed in writing before any work starts.",
              ],
              [
                "Do I have to continue after the diagnostic?",
                "No. The diagnostic stands on its own: you keep the mapped workflow and the written roadmap, and you can act on it yourself, with someone else, or with me. A sprint only happens if the fixes are worth it to you.",
              ],
              [
                "Will you come to us, or is it all remote?",
                "Wherever possible, I come to you. Spending time with your team is the fastest way to see how work really happens, and it shows me what will work on site, on a phone, in the middle of a busy day. Remote works for the build and for ongoing support.",
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
              <p className="eyebrow">Let’s find a useful starting point</p>
              <h2 id="contact-title">
                What takes more
                <br />
                effort than it should?
              </h2>
              <p>
                Tell me about the process you keep working around.
                <br />
                We can take it from there.
              </p>
            </div>
            <div className="contact-action">
              <a href={site.contactHref} className="button">
                Discuss your workflow <Arrow diagonal />
              </a>
              <a className="email-link" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
              <span>A direct conversation with me.</span>
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
