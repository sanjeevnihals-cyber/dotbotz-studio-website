import Link from "next/link";
import { products, industries } from "@/data/products";
import { Reveal } from "@/components/ui/reveal";

export function HomeSections() {
  return (
    <>
      <section className="grid gap-10 border-t border-border py-20 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-foreground/65 uppercase">Who we are</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.8rem)] leading-tight tracking-[-0.02em]">An AI infrastructure lab for category-defining teams.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/72">
            We partner with operators to design software backbones that move beyond dashboards—systems that decide, adapt, and compound operational leverage.
          </p>
        </Reveal>
      </section>

      <section className="py-16">
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-foreground/65 uppercase">What we build</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Decision Engines", "Operational Control Towers", "Automation Pipelines"].map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <article className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                <p className="text-sm tracking-[0.17em] text-foreground/60 uppercase">0{index + 1}</p>
                <h3 className="mt-3 text-xl">{item}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  Production-grade architecture designed to operate reliably in high-stakes vertical environments.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-foreground/65 uppercase">Product ecosystem</p>
        </Reveal>
        <div className="mt-7 space-y-4">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.06}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card px-5 py-5 transition hover:border-accent/40 hover:shadow-glow sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs tracking-[0.17em] text-foreground/55 uppercase">{product.category}</p>
                  <h3 className="mt-1 text-2xl">{product.name}</h3>
                </div>
                <p className="max-w-md text-sm text-foreground/68">{product.summary}</p>
                <span className="text-sm tracking-[0.16em] text-foreground/75 uppercase group-hover:text-accent">View</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-foreground/65 uppercase">Industries we impact</p>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={index * 0.04}>
              <div className="rounded-xl border border-border bg-card px-4 py-5 text-sm tracking-[0.1em] uppercase">{industry}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-foreground/65 uppercase">Process</p>
        </Reveal>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {["Discovery", "System Mapping", "Prototype & Validate", "Scale & Evolve"].map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-[2.8rem] leading-none tracking-tight text-foreground/35">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl">{step}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border py-24 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-foreground/65 uppercase">Build with confidence</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2rem,6vw,4.8rem)] leading-[1] tracking-[-0.03em]">
            Architect your next vertical platform with Dotbotz Studio.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-11 items-center rounded-full border border-border px-6 py-3 text-sm tracking-[0.16em] uppercase transition hover:border-accent hover:shadow-glow"
          >
            Start the build
          </Link>
        </Reveal>
      </section>
    </>
  );
}
