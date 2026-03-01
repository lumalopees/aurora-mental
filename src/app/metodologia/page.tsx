import { Section } from "@/components/ui";
import { howItWorks, methodologyPrinciples } from "@/content/siteContent";

export default function MetodologiaPage() {
  return (
    <main>
      <Section
        title="Metodologia"
        subtitle="Nosso processo combina escuta qualificada, tecnica e revisao constante da evolucao."
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

      <Section
        title="Principios de atuacao"
        subtitle="Como colocamos qualidade clinica e cuidado humano no centro do atendimento."
      >
        <div className="grid-3">
          {methodologyPrinciples.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
