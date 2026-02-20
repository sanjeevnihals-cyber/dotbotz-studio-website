import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dotbotz.studio"),
  title: {
    default: "Dotbotz Studio | AI-first Product Studio",
    template: "%s | Dotbotz Studio"
  },
  description:
    "Dotbotz Studio builds cinematic, AI-first vertical SaaS infrastructure for modern industries.",
  openGraph: {
    title: "Dotbotz Studio",
    description: "AI-first Product Studio building vertical SaaS infrastructure.",
    type: "website",
    url: "https://dotbotz.studio"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
