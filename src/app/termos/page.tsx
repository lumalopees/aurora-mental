import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export const metadata: Metadata = buildPageMetadata({
  title: "Termos de Uso",
  description: "Termos gerais de uso do site da Aurora Mental.",
  path: "/termos"
});

export default async function TermosPage() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <Section title={content.termsPage.title} subtitle={content.termsPage.subtitle}>
        <div className="card legal-text">
          {content.termsPage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </main>
  );
}
