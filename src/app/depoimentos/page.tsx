import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { Button } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export const metadata: Metadata = buildPageMetadata({
  title: "Depoimentos",
  description:
    "Relatos de pacientes sobre o cuidado e a experiencia na Aurora Mental.",
  path: "/depoimentos"
});

export default async function DepoimentosPage() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <Section
        title={content.testimonialsSection.title}
        subtitle={content.testimonialsSection.subtitle}
      >
        <div className="grid-3">
          {content.testimonials.map((item) => (
            <blockquote key={item.name} className="card testimonial">
              <p>{item.text}</p>
              <footer>{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section
        title={content.testimonialsPage.ctaTitle}
        subtitle={content.testimonialsPage.ctaSubtitle}
      >
        <Button
          label={content.ctas.whatsapp.label}
          href={content.ctas.whatsapp.href}
        />
      </Section>
    </main>
  );
}
