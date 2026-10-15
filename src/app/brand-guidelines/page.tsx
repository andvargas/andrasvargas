import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Guidelines | Andras Vargas",
  description: "Basic brand guidelines for Andras Vargas: colour, type, shape and surfaces.",
  robots: { index: false, follow: false },
};

const colours = [
  { name: "Background", hex: "#F0EEE9", rgb: "240, 238, 233", use: "Main page backgrounds and quiet open space.", outlined: true },
  { name: "Primary", hex: "#FF7C00", rgb: "255, 124, 0", use: "Highlights, key details and the top-border accent on cards and panels." },
  { name: "Text", hex: "#020817", rgb: "2, 8, 23", use: "Headings, body copy and interface labels." },
  { name: "Accent", hex: "#56001E", rgb: "86, 0, 30", use: "Buttons, links and secondary emphasis." },
  { name: "Surface", hex: "#FFFFFF", rgb: "255, 255, 255", use: "Cards, forms and content surfaces.", outlined: true },
];

function Section({ id, label, title, intro, children }: { id: string; label: string; title: string; intro: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t-4 border-primary py-14 md:py-20" aria-labelledby={`${id}-title`}>
      <p className="eyebrow m-0 text-accent">{label}</p>
      <h2 id={`${id}-title`} className="mt-4">
        {title}
      </h2>
      <div className="max-w-[60ch]">{intro}</div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4 mt-0 text-accent">{children}</p>;
}

export default function BrandGuidelines() {
  return (
    <>
      <header className="site-header wrap">
        <Link href="/" aria-label="Andras Vargas home" className="brand">
          <Image src="/av-logo.svg" width={56} height={44} alt="" priority />
          <span>
            ANDRAS VARGAS<span className="brand-caption">Fractional Operations Engineering</span>
          </span>
        </Link>
        <p className="m-0 text-right text-sm">
          Basic brand guidelines
          <br />
          October 2026
        </p>
      </header>

      <main className="wrap pb-10">
        <div className="py-14 md:py-20">
          <h1 className="m-0 text-[clamp(38px,5vw,64px)] leading-[1.1] tracking-[-2px]">Brand guidelines.</h1>
          <p className="mb-0 mt-5 max-w-[60ch] text-[21px]">
            Colour, type and shape for everything published as Andras Vargas: the website, documents, proposals and reports.
          </p>
          <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[17px]">
            <a href="#colour" className="underline underline-offset-4">01 Colour</a>
            <a href="#type" className="underline underline-offset-4">02 Type</a>
            <a href="#shape" className="underline underline-offset-4">03 Shape</a>
          </nav>
        </div>

        <Section
          id="colour"
          label="01 Colour"
          title="A warm, clear identity."
          intro={<p className="m-0">Five colours, each with a defined role. Use a calm neutral foundation, dark readable text and focused orange highlights.</p>}
        >
          <ul className="m-0 grid list-none gap-5 p-0">
            {colours.map((c) => (
              <li key={c.name} className="grid items-center gap-x-8 gap-y-3 sm:grid-cols-[minmax(0,260px)_1fr]">
                <div className={`h-24 rounded-[2px] ${c.outlined ? "border border-black/15" : ""}`} style={{ background: c.hex }} />
                <div>
                  <h3 className="mb-1">{c.name}</h3>
                  <p className="m-0 text-[17px]">
                    <code className="font-[inherit]">{c.hex}</code> | RGB {c.rgb}
                  </p>
                  <p className="m-0">{c.use}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-[2px] border-t-4 border-primary bg-surface p-6 sm:p-8">
            <h3 className="mb-2">Colour in practice</h3>
            <p className="m-0 max-w-[75ch]">
              Use white text on burgundy buttons. Keep orange for emphasis, such as top borders and key numbers, rather than small body text on pale
              backgrounds. Dark feature panels use a near-black base with light text and a soft orange glow.
            </p>
          </div>
        </Section>

        <Section
          id="type"
          label="02 Type"
          title="Confident headlines."
          intro={<p className="m-0 text-[clamp(24px,2.6vw,34px)] leading-tight">Readable, human body copy.</p>}
        >
          <Label>Headlines</Label>
          <p className="font-heading m-0 text-[clamp(34px,4.5vw,56px)] leading-tight tracking-[-1.5px]">Montserrat Bold</p>
          <p className="font-heading mb-0 mt-3 break-all text-[clamp(16px,2vw,22px)]">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz 0123456789
          </p>
          <p className="mb-0 mt-4 max-w-[60ch]">Use weight 700 for page titles, section headings and short labels. Prefer sentence case and give headings room to breathe.</p>

          <div className="mt-10 border-t border-black/15 pt-10">
            <Label>Body</Label>
            <p className="m-0 text-[clamp(34px,4.5vw,56px)] leading-tight">Ysabeau Regular</p>
            <p className="mb-0 mt-3 break-all text-[clamp(16px,2vw,22px)]">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz 0123456789
            </p>
            <p className="mb-0 mt-4 max-w-[60ch]">
              Use weight 400 for paragraphs and supporting copy. For the website, start at 18px with 1.5 to 1.6 line spacing, and keep lines around 60
              to 75 characters.
            </p>
          </div>

          <div className="mt-10 rounded-[2px] border-t-4 border-primary bg-surface p-6 sm:p-10">
            <Label>Example application</Label>
            <p className="font-heading m-0 text-[clamp(26px,3.4vw,40px)] leading-[1.15] tracking-[-1px]">
              Less manual admin.
              <br />
              Better-connected operations.
            </p>
            <p className="mb-0 mt-4 max-w-[60ch]">Practical improvements to the systems behind your business, from everyday workflows to connected software.</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="font-heading inline-block rounded-[2px] bg-accent px-7 py-4 text-[16px] text-white">Discuss your workflow</span>
              <span className="text-accent">Clear systems. Practical progress.</span>
            </div>
          </div>
        </Section>

        <Section
          id="shape"
          label="03 Shape"
          title="Shape and surfaces."
          intro={<p className="m-0">Barely-there corners, one orange edge and dark feature panels keep the interface calm and clearly branded.</p>}
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Label>Corners</Label>
              <div className="flex gap-4">
                {[
                  { label: "Button", cls: "bg-accent" },
                  { label: "Field", cls: "border border-black/40 bg-surface" },
                  { label: "Card", cls: "border-t-4 border-primary bg-surface" },
                ].map((s) => (
                  <figure key={s.label} className="m-0 flex-1">
                    <div className={`h-16 rounded-[2px] ${s.cls}`} />
                    <figcaption className="mt-2 text-[16px]">{s.label}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="mb-0 mt-4">A 2px radius on buttons, cards, fields and panels. Just enough to soften an edge, never rounded.</p>
            </div>
            <div>
              <Label>Buttons</Label>
              <span className="font-heading inline-block rounded-[2px] bg-accent px-8 py-4 text-[17px] text-white">Book your review</span>
              <p className="mb-0 mt-4">Accent #56001E background with white Montserrat Bold text and a 2px radius. The button brightens slightly on hover.</p>
            </div>
          </div>

          <div className="mt-6">
            <Label>Orange edge</Label>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2px] border-t-4 border-primary bg-surface p-6">
                <h3 className="mb-1">Top edge</h3>
                <p className="m-0">The default for cards and panels.</p>
              </div>
              <div className="rounded-[2px] border-r-4 border-primary bg-surface p-6">
                <h3 className="mb-1">Right edge</h3>
                <p className="m-0">An alternative for side-by-side layouts.</p>
              </div>
            </div>
            <p className="mb-0 mt-4">A 4px border in Primary #FF7C00 marks the surface as part of the brand. Use one edge per card, never both.</p>
          </div>

          <div className="mt-10">
            <Label>Dark feature panel</Label>
            <div className="relative overflow-hidden rounded-[2px] border-t-4 border-primary bg-[#171717] px-6 py-14 text-[#f5f5f5] sm:px-10">
              <div className="pointer-events-none absolute -bottom-72 -right-48 h-[42rem] w-[42rem] bg-[radial-gradient(circle,rgba(255,92,26,0.16),transparent_68%)]" />
              <p className="font-heading relative m-0 text-[clamp(24px,3vw,36px)] leading-tight tracking-[-1px]">Clear systems. Practical progress.</p>
              <p className="relative mb-0 mt-3">Near-black panels carry the key statements on a page.</p>
            </div>
            <p className="mb-0 mt-4 max-w-[75ch]">
              Base #171717 with #F5F5F5 text. A soft orange glow sits in the bottom-right corner:{" "}
              <code className="text-[16px] [overflow-wrap:anywhere]">radial-gradient(circle, rgba(255,92,26,0.16), transparent 68%)</code>, in a 42rem circle offset
              12rem right and 18rem down, clipped by the panel.
            </p>
          </div>
        </Section>
      </main>

      <footer className="wrap site-footer border-t border-black/15">
        <span className="font-heading text-[13px]">BASIC BRAND GUIDELINES / OCTOBER 2026</span>
        <Link href="/" className="text-[16px] underline underline-offset-4">
          andrasvargas.com
        </Link>
      </footer>
    </>
  );
}
