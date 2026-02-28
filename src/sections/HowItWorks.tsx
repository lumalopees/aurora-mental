import { Section } from "@/components/ui";
import { howItWorks } from "@/content/siteContent";

export function HowItWorks() {
  return (
    <Section
      title="Como funciona"
      subtitle="Triagem, encaminhamento e acompanhamento para tornar seu processo claro desde o inicio."
    >
      <ol className="steps">
        {howItWorks.map((item) => (
          <li key={item.step} className="step-card">
            <span className="step-number">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
