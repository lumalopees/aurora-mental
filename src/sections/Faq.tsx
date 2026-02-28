import { Section } from "@/components/ui";
import { faqItems } from "@/content/siteContent";

export function Faq() {
  return (
    <Section
      title="FAQ"
      subtitle="Perguntas frequentes para facilitar sua decisao de iniciar o atendimento."
    >
      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
