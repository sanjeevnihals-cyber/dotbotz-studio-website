import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { HomeSections } from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <main>
      <Container>
        <Hero />
        <HomeSections />
      </Container>
    </main>
  );
}
