import { Section } from "@/components/ui";
import { getSiteContent } from "@/content/siteContent";
import { getRequestLocale } from "@/lib/preferences";

export async function Testimonials() {
  const locale = await getRequestLocale();
  const content = getSiteContent(locale);

  return (
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
  );
}
