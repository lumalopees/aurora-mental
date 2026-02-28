import { Card, Section } from "@/components/ui";
import { specialties } from "@/content/siteContent";

export function Specialties() {
  return (
    <Section
      title="Especialidades"
      subtitle="Atendimento construido para diferentes necessidades com plano terapeutico individual."
    >
      <div className="grid-3">
        {specialties.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}
