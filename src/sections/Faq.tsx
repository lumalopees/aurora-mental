import { Section } from "@/components/ui";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export async function Faq() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <Section
      title={content.faqSection.title}
      subtitle={content.faqSection.subtitle}
    >
      <div className="faq-list">
        {content.faqItems.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
