import type { Metadata } from "next";
import {
  Contact,
  Faq,
  Hero,
  HowItWorks,
  Specialties,
  Team,
  Testimonials
} from "@/sections";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Home",
  description:
    "Aurora Mental: psicoterapia, avaliacao e acompanhamento com foco em acolhimento e clareza.",
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Specialties />
      <HowItWorks />
      <Team />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
