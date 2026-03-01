import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { testimonials, ctas } from "@/content/siteContent";
import { Button } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Depoimentos",
  description:
    "Relatos de pacientes sobre o cuidado e a experiencia na Aurora Mental.",
  path: "/depoimentos"
});

export default function DepoimentosPage() {
  return (
    <main>
      <Section
        title="Depoimentos"
        subtitle="Experiencias reais de quem passou pelo cuidado da Aurora Mental."
      >
        <div className="grid-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="card testimonial">
              <p>{item.text}</p>
              <footer>{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section
        title="Quer iniciar sua jornada?"
        subtitle="Converse com nossa equipe e agende sua primeira conversa."
      >
        <Button label={ctas.whatsapp.label} href={ctas.whatsapp.href} />
      </Section>
    </main>
  );
}
