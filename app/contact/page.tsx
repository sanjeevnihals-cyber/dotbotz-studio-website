import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Dotbotz Studio to design your next AI-first vertical SaaS infrastructure."
};

export default function ContactPage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-[clamp(2.2rem,6vw,4.8rem)] tracking-[-0.03em]">Let&apos;s build your infrastructure core.</h1>
        <p className="mt-4 max-w-2xl text-foreground/70">Share your product vision and we&apos;ll map a technical strategy across architecture, AI, and deployment velocity.</p>
        <form className="mt-10 grid max-w-2xl gap-4 rounded-2xl border border-border bg-card p-6">
          <input aria-label="Name" placeholder="Name" className="min-h-11 rounded-xl border border-border bg-transparent px-4 outline-none transition focus:border-accent" />
          <input aria-label="Email" placeholder="Email" className="min-h-11 rounded-xl border border-border bg-transparent px-4 outline-none transition focus:border-accent" />
          <textarea aria-label="Project brief" placeholder="Project brief" rows={5} className="rounded-xl border border-border bg-transparent px-4 py-3 outline-none transition focus:border-accent" />
          <button type="submit" className="min-h-11 rounded-full border border-border px-6 text-sm tracking-[0.14em] uppercase transition hover:border-accent hover:shadow-glow">
            Send Inquiry
          </button>
        </form>
      </Container>
    </main>
  );
}
