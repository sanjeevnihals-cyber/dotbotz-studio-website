import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Dotbotz Studio architect AI-first infrastructure for vertical SaaS businesses."
};

export default function AboutPage() {
  return (
    <main className="py-16">
      <Container>
        <Reveal>
          <p className="text-xs tracking-[0.24em] text-foreground/65 uppercase">About Dotbotz Studio</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.2rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.03em]">
            We design intelligent software cores that help industries operate at machine precision.
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["AI System Design", "Vertical SaaS Productization", "Mission-Critical Engineering"].map((item) => (
              <article key={item} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg">{item}</h2>
                <p className="mt-3 text-sm text-foreground/70">We combine research-grade thinking with production execution for high-consequence workflows.</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
