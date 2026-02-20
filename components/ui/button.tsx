import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full border px-6 py-3 text-sm tracking-[0.12em] uppercase transition duration-300";
  const styles =
    variant === "primary"
      ? "border-border bg-foreground text-background hover:border-accent hover:shadow-glow"
      : "border-border text-foreground hover:border-accent hover:text-accent";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
