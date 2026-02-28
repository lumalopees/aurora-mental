import { Card, Button, Section } from "@/components/ui";
import { ctas, homePreviewCards } from "@/content/siteContent";

export default function HomePage() {
  return (
    <main>
      <Section
        title="Aurora Mental"
        subtitle="Base visual inicial da marca com foco em acolhimento, clareza e confianca."
      >
        <div className="cta-row">
          <Button label={ctas.whatsapp.label} href={ctas.whatsapp.href} />
          <Button
            label={ctas.equipe.label}
            href={ctas.equipe.href}
            variant="secondary"
          />
        </div>
      </Section>

      <Section
        title="Pilares visuais da identidade"
        subtitle="Cartoes de exemplo para validar contraste, tipografia, espacamento e estilo dos componentes."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem"
          }}
        >
          {homePreviewCards.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
