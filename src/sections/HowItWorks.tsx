import { Section } from "@/components/ui";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export async function HowItWorks() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <Section
      title={content.howItWorksSection.title}
      subtitle={content.howItWorksSection.subtitle}
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
  );
}
