import { Section } from "@/components/ui";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export async function Team() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <Section
      title={content.teamSection.title}
      subtitle={content.teamSection.description}
    >
      <div className="card">
        <h3>{content.teamSection.cardTitle}</h3>
        <p>{content.teamSection.cardText}</p>
      </div>
    </Section>
  );
}
