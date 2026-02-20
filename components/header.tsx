"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";

const links = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <nav
          className={`flex items-center justify-between rounded-full border px-4 py-3 transition-all sm:px-6 ${
            scrolled ? "border-border bg-card/70 backdrop-blur-xl" : "border-transparent"
          }`}
        >
          <Link href="/" className="text-sm tracking-[0.22em] uppercase">
            Dotbotz Studio
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-xs tracking-[0.14em] uppercase transition ${
                  pathname === link.href ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-xs tracking-[0.14em] uppercase transition hover:border-accent hover:shadow-glow"
            >
              Explore Products
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
