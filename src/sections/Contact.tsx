import { Button, Section } from "@/components/ui";
import { contactSection, ctas } from "@/content/siteContent";

export function Contact() {
  return (
    <Section title={contactSection.title} subtitle={contactSection.description}>
      <div className="contact-card card">
        <ul>
          {contactSection.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Button label={ctas.whatsapp.label} href={ctas.whatsapp.href} />
      </div>
    </Section>
  );
}
