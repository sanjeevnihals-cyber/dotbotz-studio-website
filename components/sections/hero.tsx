"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const LazyLogo = dynamic(() => import("@/components/three/logo-shell"), {
  ssr: false,
  loading: () => <div className="h-[360px] w-full animate-pulse rounded-3xl border border-border bg-card/40" />
});

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <section className="grid min-h-[calc(100svh-90px)] items-center gap-12 pb-12 pt-14 lg:grid-cols-2">
      <Reveal>
        <p className="mb-8 text-xs tracking-[0.25em] text-foreground/70 uppercase">AI-first product studio</p>
        <h1 className="text-balance text-[clamp(2.4rem,8vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.03em]">
          Intelligent.
          <br />
          Digital Infrastructure.
          <br />
          For Modern Industries.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/72 sm:text-lg">
          Dotbotz Studio builds vertical SaaS systems that orchestrate complex operations with calm precision, from workflow intelligence to enterprise-grade automation.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/products">Explore Products</Button>
          <Button href="/contact" variant="ghost">
            Start a Conversation
          </Button>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div
          className="relative h-[360px] overflow-hidden rounded-3xl border border-border bg-card/40 shadow-soft sm:h-[500px]"
          onMouseMove={(event) => {
            const target = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - target.left) / target.width - 0.5) * 2;
            const y = ((event.clientY - target.top) / target.height - 0.5) * 2;
            setPointer({ x, y });
          }}
          onMouseLeave={() => setPointer({ x: 0, y: 0 })}
        >
          <div className="pointer-events-none absolute inset-0 bg-radial opacity-60" />
          <LazyLogo pointer={pointer} />
        </div>
      </Reveal>
    </section>
  );
}
