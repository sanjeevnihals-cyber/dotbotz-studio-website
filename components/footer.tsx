import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-3 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <p>Dotbotz Studio — AI-first Product Studio.</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </Container>
    </footer>
  );
}
