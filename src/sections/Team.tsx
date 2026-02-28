import { Section } from "@/components/ui";
import { teamSection } from "@/content/siteContent";

export function Team() {
  return (
    <Section title={teamSection.title} subtitle={teamSection.description}>
      <div className="card">
        <h3>Abordagem humanizada e tecnica</h3>
        <p>
          Trabalhamos com escuta ativa, objetivos terapeuticos definidos em
          conjunto e revisao frequente de progresso para garantir continuidade
          no cuidado.
        </p>
      </div>
    </Section>
  );
}
