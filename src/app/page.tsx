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
    ["01", "Save each new enquiry", "Website enquiries go into your CRM.", "enquiry"],
    ["02", "Follow up on the quote", "A reminder prompts you to chase a reply.", "followup"],
    ["03", "Hand the job to your team", "Share the agreed work, date and address.", "job"],
    ["04", "Check progress in one place", "See which jobs are booked or complete.", "report"],
  ];
  return <div className="workflow-panel">
    <div className="flex items-center justify-between border-b border-ink/15 pb-5"><span className="eyebrow">From enquiry to booked job</span><span className="small-note">An example</span></div>
    <div className="workflow-rows">{rows.map(([n, title, subtitle, type]) => <div className="workflow-row" key={n}>
      <div className="step-number">{n}</div><div><h3>{title}</h3><p>{subtitle}</p></div>
      <div className={`workflow-glyph ${type}`} aria-hidden="true">{type === "enquiry" ? "↗" : type === "followup" ? "→" : type === "job" ? "+" : <span className="mini-bars"><i/><i/><i/></span>}</div>
    </div>)}</div>
    <div className="workflow-caption"><span className="orange-dot"/><span>Customer details entered once, used throughout.</span></div>
    <p className="illustration-caption">An example of what I can help you set up</p>
  </div>;
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
        <div className="audience-strip">
          <div className="wrap flex flex-wrap items-center justify-between gap-4">
            <span className="eyebrow">
              Who I work with <Arrow />
            </span>
            <p>
              UK trades businesses <span aria-hidden="true">/</span> 3–30 people <span aria-hidden="true">/</span> London & South East
            </p>
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
            <p className="eyebrow section-kicker">03 / Your technical partner</p>
            <h2 id="about-title">Hi, I’m Andras.</h2>
            <p className="about-lead">
              I’m interested in what happens between the tools: the handovers, the repeated tasks and the details that get lost.
            </p>
            <p>
              I bring a hands-on approach to software, CRM and business workflows. I work directly with you to understand the problem, make an
              improvement and help your team use it.
            </p>
            <p>“Fractional” means you get that support for an agreed part of the week, without adding a full-time engineering role.</p>
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
                "Do we need to change all our software?",
                "Usually, the starting point is what you already use. We look at the process first, then decide whether to connect, configure or replace a tool.",
              ],
              [
                "What if I don’t know exactly what needs fixing?",
                "That’s fine. Start with something that takes too long, needs repeated chasing or causes mistakes. We can work through what is happening together.",
              ],
              [
                "Where does AI fit in?",
                "It is one of the tools available, alongside simpler automation and integrations. We would use it where it fits the workflow, with appropriate review of its output.",
              ],
              [
                "How are engagements priced?",
                "We agree the scope, expected work and fee before starting. A focused sprint and ongoing weekly support have different needs, so the first step is a conversation.",
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
