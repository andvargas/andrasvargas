const deliverables = [
  {
    number: "01",
    step: "Before",
    title: "Pre-session questionnaire",
    body: "A short written questionnaire about how the workflow runs today, which tools you use and where it goes wrong. Fill it in when it suits you.",
  },
  {
    number: "02",
    step: "Session",
    title: "One working session",
    body: "60–90 minutes on a call, structured around your answers. We walk through the workflow step by step, from the first touch to the last.",
  },
  {
    number: "03",
    step: "Report",
    title: "Written report",
    body: "Where the time goes, where details get retyped or lost, and what each gap is costing you. In plain English, within 5 working days of the session.",
  },
  {
    number: "04",
    step: "Plan",
    title: "90-day plan and walkthrough",
    body: "What to fix first, second and third, and whether to connect, configure or replace a tool. Then a 30-minute call to go through it together.",
  },
];

export default function AuditSection() {
  return (
    <section id="what-you-get" className="process-section" aria-labelledby="audit-title">
      <div className="wrap section">
        <div className="section-intro">
          <div>
            <p className="eyebrow section-kicker">What you get</p>
            <h2 id="audit-title">
              Exactly what you receive.
              <br />
              In writing.
            </h2>
          </div>
          <p>
            Everything is written, apart from two scheduled calls. No sales pitch, no discovery call, no open-ended project. You know the price and
            the deliverables before you start.
          </p>
        </div>

        <ol className="mt-10 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {deliverables.map(({ number, step, title, body }) => (
            <li key={number} className="flex flex-col rounded-[2px] border-t-4 border-primary bg-white p-5 sm:p-8">
              <span className="font-heading text-sm font-semibold uppercase text-accent">
                {number} {step}
              </span>
              <h3 className="mb-3 mt-4">{title}</h3>
              <p className="m-0">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          <div className="relative overflow-hidden rounded-[2px] border-t-4 border-primary bg-[#171717] p-6 text-[#f5f5f5] sm:p-8">
            <div className="pointer-events-none absolute -bottom-72 -right-48 h-[42rem] w-[42rem] bg-[radial-gradient(circle,rgba(255,92,26,0.16),transparent_68%)]" />
            <p className="eyebrow relative m-0 text-primary">The guarantee</p>
            <p className="font-heading relative mb-0 mt-4 text-2xl leading-snug tracking-tight sm:text-3xl">
              If I don&apos;t find at least £1,000 in identifiable time savings, you don&apos;t pay.
            </p>
          </div>
          <dl className="m-0 grid grid-cols-2 content-center gap-6 rounded-[2px] border-t-4 border-primary bg-white p-6 sm:p-8">
            <div>
              <dt className="font-heading text-3xl tracking-tight">£495</dt>
              <dd className="m-0 mt-1 text-[0.9375rem]">Fixed price, one workflow</dd>
            </div>
            <div>
              <dt className="font-heading text-3xl tracking-tight">5 days</dt>
              <dd className="m-0 mt-1 text-[0.9375rem]">Working days from session to report</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-t border-black/15 pt-6">
          <p className="m-0 max-w-[62ch]">
            <strong className="font-bold">After the audit:</strong> the report is yours to act on yourself, with someone else, or with me. If you want me
            to build the fixes, I&apos;ll send a one-page written proposal for a Workflow Fix Sprint, from £1,500, scoped by what the audit found.
          </p>
          <a
            href="#contact"
            className="font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
          >
            Start your audit
          </a>
        </div>
      </div>
    </section>
  );
}
