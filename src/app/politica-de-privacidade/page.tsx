import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export const metadata: Metadata = buildPageMetadata({
  title: "Politica de Privacidade",
  description:
    "Informacoes sobre coleta, uso e protecao de dados no site Aurora Mental.",
  path: "/politica-de-privacidade"
});

export default async function PoliticaDePrivacidadePage() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <Section
        title={content.privacyPage.title}
        subtitle={content.privacyPage.subtitle}
      >
        <div className="card legal-text">
          {content.privacyPage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </main>
  );
}
