import { Section, Card } from "@/components/ui";
import { specialties, ctas } from "@/content/siteContent";
import { Button } from "@/components/ui";

export default function EspecialidadesPage() {
  return (
    <main>
      <Section
        title="Especialidades"
        subtitle="Conheca os principais servicos da Aurora Mental e escolha o caminho mais adequado para voce."
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

      <Section
        title="Precisa de ajuda para decidir?"
        subtitle="Nossa equipe pode orientar qual especialidade faz mais sentido para o seu momento."
      >
        <div className="cta-row">
          <Button label={ctas.whatsapp.label} href={ctas.whatsapp.href} />
        </div>
      </Section>
    </main>
  );
}
