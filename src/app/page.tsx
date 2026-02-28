import {
  Contact,
  Faq,
  Hero,
  HowItWorks,
  Specialties,
  Team,
  Testimonials
} from "@/sections";

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
