import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { products } from "@/data/products";

type ProductPageProps = { params: { slug: string } };

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.summary
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  return (
    <main className="py-16">
      <Container>
        <p className="text-xs tracking-[0.22em] text-foreground/62 uppercase">{product.category}</p>
        <h1 className="mt-3 text-[clamp(2.4rem,6vw,5rem)] leading-[0.96] tracking-[-0.03em]">{product.name}</h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground/72">{product.description}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl">Capabilities</h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/72">
              {product.capabilities.map((capability) => (
                <li key={capability}>— {capability}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl">Outcome</h2>
            <p className="mt-4 text-sm text-foreground/72">{product.outcome}</p>
            <p className="mt-6 text-xs tracking-[0.16em] text-accent uppercase">{product.status}</p>
          </section>
        </div>
      </Container>
    </main>
  );
}
