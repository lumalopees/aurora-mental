import { Card, Section } from "@/components/ui";
import { teamMembers, teamSection } from "@/content/siteContent";

export default function SobrePage() {
  return (
    <main>
      <Section title="Sobre a Aurora Mental" subtitle={teamSection.description}>
        <div className="card">
          <p>
            Nossa clinica nasceu para oferecer cuidado psicologico acolhedor,
            tecnico e acessivel. Acreditamos em relacoes terapeuticas baseadas
            em confianca, clareza e acompanhamento continuo.
          </p>
        </div>
      </Section>

      <Section
        title="Equipe"
        subtitle="Profissionais com experiencia clinica e abordagem centrada na pessoa."
      >
        <div className="grid-3">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              title={member.name}
              description={`${member.role} · ${member.focus}`}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
