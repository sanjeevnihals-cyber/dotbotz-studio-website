import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Dotbotz Studio products and infrastructure modules."
};

export default function ProductsPage() {
  return (
    <main className="py-16">
      <Container>
        <Reveal>
          <h1 className="text-[clamp(2.2rem,6vw,4.8rem)] leading-[0.96] tracking-[-0.03em]">Product Ecosystem</h1>
        </Reveal>
        <div className="mt-9 grid gap-4">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05}>
              <Link href={`/products/${product.slug}`} className="block rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40 hover:shadow-glow">
                <p className="text-xs tracking-[0.18em] text-foreground/60 uppercase">{product.category}</p>
                <h2 className="mt-2 text-2xl">{product.name}</h2>
                <p className="mt-3 max-w-2xl text-sm text-foreground/70">{product.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
