import type { Metadata } from "next";
import { Section, Card } from "@/components/ui";
import { Button } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export const metadata: Metadata = buildPageMetadata({
  title: "Especialidades",
  description:
    "Conheca os servicos da Aurora Mental e encontre o atendimento ideal para seu momento.",
  path: "/especialidades"
});

export default async function EspecialidadesPage() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <Section
        title={content.specialtiesSection.title}
        subtitle={content.specialtiesSection.subtitle}
      >
        <div className="grid-3">
          {content.specialties.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section
        title={content.specialtiesPage.ctaTitle}
        subtitle={content.specialtiesPage.ctaSubtitle}
      >
        <div className="cta-row">
          <Button
            label={content.ctas.whatsapp.label}
            href={content.ctas.whatsapp.href}
          />
        </div>
      </Section>
    </main>
  );
}
