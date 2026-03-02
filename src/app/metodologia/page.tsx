import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export const metadata: Metadata = buildPageMetadata({
  title: "Metodologia",
  description:
    "Veja como funciona nosso processo de triagem, encaminhamento e acompanhamento.",
  path: "/metodologia"
});

export default async function MetodologiaPage() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <Section
        title={content.methodologyPage.title}
        subtitle={content.methodologyPage.subtitle}
      >
        <ol className="steps">
          {content.howItWorks.map((item) => (
            <li key={item.step} className="step-card">
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title={content.methodologyPage.principlesTitle}
        subtitle={content.methodologyPage.principlesSubtitle}
      >
        <div className="grid-3">
          {content.methodologyPrinciples.map((item) => (
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
