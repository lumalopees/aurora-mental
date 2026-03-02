import { Card, Section } from "@/components/ui";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export async function Specialties() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
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
  );
}
