type Step = {
  number: string;
  step: string;
  title: string;
  price: string;
  body: string;
  gets: string;
  tag?: string;
};

const steps: Step[] = [
  {
    number: "01",
    step: "Understand",
    title: "Operational Diagnostic",
    price: "£1,400 · agreed upfront",
    body: "I spend time with you and your team, in person where possible, and trace how a job really moves from enquiry to quote to invoice to payment. You get a clear answer on where the time and money are leaking.",
    gets: "a mapped workflow, the single most expensive bottleneck identified, and a written roadmap of what to fix first.",
    tag: "Start here",
  },
  {
    number: "02",
    step: "Improve",
    title: "Implementation Sprint",
    price: "£4,000 · deliverables agreed upfront",
    body: "I take the fixes from your roadmap that fit into two weeks and build them, designed for people working on site from their phones. We agree the list before I start.",
    gets: "the agreed fixes working, your existing tools (Xero, CRM, quoting app) connected, and a handover your team can follow.",
  },
  {
    number: "03",
    step: "Keep it useful",
    title: "Monthly Support",
    price: "£750–£1,200 / month",
    body: "Once the first fix is in, I keep improving things. I maintain what I've built, fix what breaks, and work through the roadmap one improvement at a time, so your systems keep up as the business grows.",
    gets: "ongoing improvements, a named person to call, and a clear view of what's next.",
  },
];

// Set to false once you have real case studies to show instead.
const showFoundingOffer = true;

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="process-section" aria-labelledby="process-title">
      <div className="wrap section">
        <div className="section-intro">
          <div>
            <p className="eyebrow section-kicker">A practical starting point</p>
            <h2 id="process-title">
              Start with one thing.
              <br />
              Fix it for good.
            </h2>
          </div>
          <p>
            You don&apos;t need to replace your software or overhaul the business. I find the one bit of admin costing
            you the most between enquiry and payment, fix it, and show you what to tackle next.
          </p>
        </div>

        <ol className="mt-10 grid list-none grid-cols-1 gap-4 p-0 lg:grid-cols-3 lg:gap-6">
          {steps.map(({ number, step, title, price, body, gets, tag }) => (
            <li
              key={number}
              className="bg-white flex flex-col border border-black/15 p-5 sm:p-8"
            >
              <div className="flex min-h-7 items-center justify-between gap-3">
                <span className="font-heading text-sm font-semibold uppercase text-accent">
                  {number} {step}
                </span>
                {tag && (
                  <span className="rounded-full bg-primary px-3 py-0.5 text-[0.8125rem] font-semibold text-white">
                    {tag}
                  </span>
                )}
              </div>

              <h3 className="mb-1 mt-4">{title}</h3>
              <p className="mb-4 font-semibold">{price}</p>
              <p className="m-0 max-w-[60ch]">{body}</p>

              {/* mt-auto pins "You get" to the bottom so all three cards line up */}
              <div className="mt-auto pt-5">
                <p className="m-0 border-t border-black/15 pt-4 text-[0.9375rem]">
                  <strong className="font-bold">You get:</strong> {gets}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-t border-black/15 pt-6">
          <p className="m-0 max-w-[52ch]">
            Not sure where to start? Begin with the diagnostic, and we&apos;ll agree the next step once you can see
            what&apos;s costing you.
          </p>
          {showFoundingOffer && (
            <p className="m-0">
              Taking on 3 founding clients: free diagnostic in exchange for a case study.{" "}
              <a
                href="#contact"
                className="font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
              >
                Book a 20-minute call
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
