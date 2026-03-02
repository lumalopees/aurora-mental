import { Button, Section } from "@/components/ui";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export async function Contact() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
    <Section
      title={content.contactSection.title}
      subtitle={content.contactSection.description}
    >
      <div className="contact-card card">
        <ul>
          {content.contactSection.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Button
          label={content.ctas.whatsapp.label}
          href={content.ctas.whatsapp.href}
        />
      </div>
    </Section>
  );
}
