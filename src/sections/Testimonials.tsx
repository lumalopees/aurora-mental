import { Section } from "@/components/ui";
import { testimonials } from "@/content/siteContent";

export function Testimonials() {
  return (
    <Section
      title="Depoimentos"
      subtitle="Relatos de pacientes sobre acolhimento, clareza do processo e evolucao no tratamento."
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
  );
}
